// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://moayadiorg.github.io',
	base: '/catalog',
	integrations: [
		starlight({
			title: 'Technical Patterns Catalog',
			description: 'A community-driven catalog of technical architecture patterns',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/moayadiorg/patterns',
				},
			],
			editLink: {
				baseUrl: 'https://github.com/moayadiorg/patterns/edit/main/',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'How to Use', slug: 'getting-started/how-to-use' },
						{ label: 'Contributing', slug: 'getting-started/contributing' },
					],
				},
				{
					label: 'Patterns',
					autogenerate: { directory: 'patterns' },
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			customCss: [
				'./src/styles/custom.css',
			],
		}),
	],
});
