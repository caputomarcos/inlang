<script lang="ts" context="module">
	import { auth } from '$lib/services/auth';
	import type { LoadOutput } from '@sveltejs/kit';
	import Login16 from 'carbon-icons-svelte/lib/Login16';
	import {
		PasswordInput,
		FluidForm,
		Form,
		TextInput,
		Checkbox,
		Grid,
		Row,
		Column
	} from 'carbon-components-svelte';

	export async function load(): Promise<LoadOutput> {
		// user is already logged in
		if (auth.session()) {
			return {
				status: 302,
				redirect: '/'
			};
		}
		return {};
	}
</script>

<script lang="ts">
	import Center from '$lib/components/Center.svelte';
	import { Button, InlineLoading, Link, Tile } from 'carbon-components-svelte';
	import { PostgrestError } from '@supabase/postgrest-js';

	let loading = false;
	let email = '';

	$: isValidEmail = () => {
		if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
			return true;
		}
		return true;
	};

	const handleLogin = async () => {
		try {
			loading = true;
			const { error } = await auth.signIn(
				{ email },
				{
					redirectTo: import.meta.env.VITE_PUBLIC_AUTH_REDIRECT_URL as string
				}
			);
			if (error) {
				throw error;
			}
			alert('Check your email for the login link!');
		} catch (error) {
			const err = error as PostgrestError;
			alert(err.message);
		} finally {
			loading = false;
		}
	};
</script>

<Link href="/auth/dev-login">go to developer login</Link>

<!-- <div class="w-full h-screen">
	<Center>
		<Tile>
			<div class="col-6 form-widget">
				<h1 class="header mb-4">Login</h1>
				<p class="description mb-2">Sign in via magic link with your email below:</p>
				<TextInput type="email" bind:value={email} placeholder="your e-mail" />
				<Button disabled={!isValidEmail()} class="mt-4" on:click={handleLogin}>
					{#if loading}
						<InlineLoading />
					{:else}
						Send Magic Link
					{/if}
				</Button>
			</div>
		</Tile>
	</Center>
</div>
 -->

<div class="w-full h-screen">
	<Center>
		<Tile style="width: 530px;  height: 372px" class="pl-1 mr-1">
			<Grid>
				<div class="divide-black">
					<Row class="mb-4 mt-1"><h1>Log in</h1></Row>
					<Row>Don't have an account? <Link href="/">Create one</Link></Row>

					<Form class="mt-3">
						<Row>
							<TextInput labelText="User name" placeholder="Enter user name..." required /></Row
						>

						<Row class="mt-4">
							<PasswordInput
								required
								type="password"
								labelText="Password"
								placeholder="Enter password..."
							/>
							<Link href="#">Forgot password?</Link>
						</Row>
						<Row><Checkbox labelText="Remember me" /></Row>
						<Row
							><Button
								icon={Login16}
								iconDescription="Login"
								class="mt-2.5 mb-1"
								style="width: 400px;">Log in</Button
							></Row
						>
					</Form>
				</div>
				<div>
					<Row class="mt-2 divide-black">Alternative login</Row>
				</div>
			</Grid>
		</Tile>
	</Center>
</div>
