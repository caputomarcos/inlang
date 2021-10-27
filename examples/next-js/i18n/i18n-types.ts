// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType } from 'typesafe-i18n'
import type { LocalizedString } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'da'
	| 'de'
	| 'en'
	| 'fr'
	| 'nl'

export type Translation = {
	/**
	 * ⭐ inlang on GitHub
	 */
	'random_prefix_star_inlang': string
	/**
	 * Welcome to the inlang example
	 */
	'random_prefix_welcome': string
	/**
	 * What is your name?
	 */
	'random_prefix_as_name': string
	/**
	 * What is your favorite color?
	 */
	'random_prefix_ask_favorite_color': string
	/**
	 * 1. Go to inlang.dev and create a project.
	 */
	'random_prefix_create_project': string
	/**
	 * enter your name
	 */
	'random_prefix_enter_name': string
	/**
	 * You can find the projectId in the settings of your project.
	 */
	'random_prefix_find_project_id': string
	/**
	 * My name is {name} and my favorite color is {color}.
	 * @param {unknown} color
	 * @param {unknown} name
	 */
	'random_prefix_interpolated_string': RequiredParams2<'color', 'name'>
	/**
	 * 3. Invite and collaborate on your translations in the dashboard
	 */
	'random_prefix_invite_collaborators': string
	/**
	 * You will get linting errors now that the keys dont exist. You have to add them manually for now.
	 */
	'random_prefix_linting_errors': string
	/**
	 * 3. Re-run the project with npm run dev
	 */
	'random_prefix_npm_run_dev': string
	/**
	 * 2. Replace the projectId in the inlang.config.json file with yours.
	 */
	'random_prefix_replace_project_id': string
	/**
	 * Select a language
	 */
	'random_prefix_select_language': string
	/**
	 * Do you have feedback on this example?
	 */
	'random_prefix_ask_feedback_on_this_example': string
	/**
	 * Inlang is in early alpha
	 */
	'random_prefix_early_alpha': string
	/**
	 * Every feedback we get helps us tremendously.
	 */
	'random_prefix_feedback_helps_us': string
	/**
	 * 1. This card is already machine-translated by us
	 */
	'random_prefix_localized_by_us': string
	/**
	 * Want to be informed when inlang can import existing keys and projects?
	 */
	'random_prefix_newsletter': string
}

export type TranslationFunctions = {
	/**
	 * ⭐ inlang on GitHub
	 */
	'random_prefix_star_inlang': () => LocalizedString
	/**
	 * Welcome to the inlang example
	 */
	'random_prefix_welcome': () => LocalizedString
	/**
	 * What is your name?
	 */
	'random_prefix_as_name': () => LocalizedString
	/**
	 * What is your favorite color?
	 */
	'random_prefix_ask_favorite_color': () => LocalizedString
	/**
	 * 1. Go to inlang.dev and create a project.
	 */
	'random_prefix_create_project': () => LocalizedString
	/**
	 * enter your name
	 */
	'random_prefix_enter_name': () => LocalizedString
	/**
	 * You can find the projectId in the settings of your project.
	 */
	'random_prefix_find_project_id': () => LocalizedString
	/**
	 * My name is {name} and my favorite color is {color}.
	 */
	'random_prefix_interpolated_string': (arg: { color: unknown, name: unknown }) => LocalizedString
	/**
	 * 3. Invite and collaborate on your translations in the dashboard
	 */
	'random_prefix_invite_collaborators': () => LocalizedString
	/**
	 * You will get linting errors now that the keys dont exist. You have to add them manually for now.
	 */
	'random_prefix_linting_errors': () => LocalizedString
	/**
	 * 3. Re-run the project with npm run dev
	 */
	'random_prefix_npm_run_dev': () => LocalizedString
	/**
	 * 2. Replace the projectId in the inlang.config.json file with yours.
	 */
	'random_prefix_replace_project_id': () => LocalizedString
	/**
	 * Select a language
	 */
	'random_prefix_select_language': () => LocalizedString
	/**
	 * Do you have feedback on this example?
	 */
	'random_prefix_ask_feedback_on_this_example': () => LocalizedString
	/**
	 * Inlang is in early alpha
	 */
	'random_prefix_early_alpha': () => LocalizedString
	/**
	 * Every feedback we get helps us tremendously.
	 */
	'random_prefix_feedback_helps_us': () => LocalizedString
	/**
	 * 1. This card is already machine-translated by us
	 */
	'random_prefix_localized_by_us': () => LocalizedString
	/**
	 * Want to be informed when inlang can import existing keys and projects?
	 */
	'random_prefix_newsletter': () => LocalizedString
}

export type Formatters = {}

type Param<P extends string> = `{${P}}`

type Params2<P1 extends string, P2 extends string> =
	`${string}${Param<P1>}${string}${Param<P2>}${string}`

type RequiredParams2<P1 extends string, P2 extends string> =
	| Params2<P1, P2>
	| Params2<P2, P1>
