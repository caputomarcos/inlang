<script lang="ts">
	import {
		Button,
		DataTable,
		Tag,
		Toolbar,
		ToolbarContent,
		ToolbarBatchActions,
		Loading
	} from 'carbon-components-svelte';
	import ProjectModal from '$lib/components/modals/ProjectModal.svelte';
	//import AddMemberModal from '$lib/components/modals/AddMemberModal.svelte';
	import Delete16 from 'carbon-icons-svelte/lib/Delete16';
	import OverflowMenuHorizontal32 from 'carbon-icons-svelte/lib/OverflowMenuHorizontal32';
	import { onMount } from 'svelte';
	import type { definitions } from '@inlang/database';
	import { DatabaseResponse } from '$lib/types/databaseResponse';
	import { database } from '$lib/services/database';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { userStore } from '$lib/stores/userStore';

	//export let name = '';

	let showAddProjectModal = false;

	let showProjectModalIfOrganizationExists = async () => {
		console.log(organizations.data);
		if (organizations.data?.length === 0 ?? true) {
			const response = await database.from<definitions['organization']>('organization').insert([
				{
					name: $userStore.data?.email?.split('@')[0] + "'s organization",
					created_by_user_id: $userStore.data?.id
				}
			]);
			if (response.error) {
				alert(response.error);
			}
		}
		organizations = await database.from<definitions['organization']>('organization').select();
		showAddProjectModal = true;
	};

	let isLoading = true;
	let selectedOrgId: string | null = $page.query.get('organization');

	let projects: DatabaseResponse<definitions['project'][]>;
	let organizations: DatabaseResponse<definitions['organization'][]>;

	// load the projects of the selected organization
	onMount(async () => {
		organizations = await database.from<definitions['organization']>('organization').select();
		projects = await database.from<definitions['project']>('project').select();

		if (projects.error) {
			alert(projects.error);
		}
		if (organizations.error) {
			alert(organizations.error);
		}
		isLoading = false;
	});

	async function handleProjectUpdate() {
		projects = await database.from<definitions['project']>('project').select();

		if (projects.error) {
			alert(projects.error);
		}
		isLoading = false;
	}

	const headers = [
		{ key: 'name', value: 'Name' },
		{ key: 'organization', value: 'Organization' },
		{ key: 'more', empty: true }
	];

	$: rows_projects = () => {
		if (isLoading || projects.error || projects.data === null) {
			return [];
		}
		// TODO: sort the projects alphabetically
		return projects.data
			.filter((project) => {
				if (selectedOrgId) {
					return project.organization_id === selectedOrgId;
				}
				return true;
			})
			.map((project) => ({
				id: project.id,
				name: project.name,
				organization: organizations.data?.filter((org) => org.id === project.organization_id)[0]
					.name
			}));
	};
</script>

{#if isLoading}
	<Loading />
{/if}

<h1>Projects</h1>
<br />
<DataTable {headers} rows={rows_projects()}>
	<Toolbar>
		<ToolbarBatchActions class="bg-danger">
			<Button icon={Delete16} kind="danger">Delete</Button>
		</ToolbarBatchActions>
		<ToolbarContent>
			<!-- <ToolbarSearch placeholder="Search project" /> -->
			<Button on:click={() => showProjectModalIfOrganizationExists()}>Add project</Button>
		</ToolbarContent>
	</Toolbar>
	<span
		slot="cell"
		let:row
		let:cell
		on:click={() => goto(`/project/${row.id}/keys`)}
		class="cursor-pointer"
	>
		{#if cell.key === 'name'}
			<div class="flex items-center space-x-2">
				<!-- <Tag type="blue">{cell.value.substring(0, 2)}</Tag> -->
				<p class="text-sm">{cell.value}</p>
			</div>
		{:else if cell.key === 'more'}
			<Button
				kind="ghost"
				icon={OverflowMenuHorizontal32}
				iconDescription="More"
				on:click={() => {
					// addMemberModal = row.id;
					// showMoreModal = true;
				}}
			/>
		{:else if cell.key === 'organization'}
			{cell.value}
		{:else}
			{cell.value}
		{/if}
	</span>
</DataTable>

{#if showAddProjectModal}
	<ProjectModal
		bind:open={showAddProjectModal}
		heading="Add project"
		on:updateProjects={handleProjectUpdate}
	/>
{/if}

<!-- Do we need a more button? -->
<!-- {#if showMoreModal && name == 'organization'}{:else if showMoreModal && name == 'project'}{/if} -->
