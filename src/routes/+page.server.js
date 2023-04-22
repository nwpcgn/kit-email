import WelcomeEmail from '$lib/emails/welcome.svelte';
import { render } from 'svelte-email';

export async function load() {
	const html = await render({
		template: WelcomeEmail,
		props: {
			firstName: 'John'
		}
	});

	return {
		html
	};
}
