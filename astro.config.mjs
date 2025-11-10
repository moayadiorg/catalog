// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://moayadiorg.github.io',
	base: '/catatlog',
	integrations: [
		starlight({
			title: 'Technical Patterns Catalog',
			description: 'A community-driven catalog of technical architecture patterns',
			logo: {
				src: './src/assets/logo.svg',
				replacesTitle: false,
			},
			social: {
				github: 'https://github.com/moayadiorg/patterns',
			},
			editLink: {
				baseUrl: 'https://github.com/moayadiorg/patterns/edit/main/',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'index' },
						{ label: 'How to Use', slug: 'getting-started/how-to-use' },
						{ label: 'Contributing', slug: 'getting-started/contributing' },
					],
				},
				{
					label: 'Patterns',
					autogenerate: { directory: 'patterns' },
				},
				{
					label: 'Categories',
					items: [
						{ label: 'Automation', slug: 'categories/automation' },
						{ label: 'Observability', slug: 'categories/observability' },
						{ label: 'Security', slug: 'categories/security' },
						{ label: 'Monitoring', slug: 'categories/monitoring' },
						{ label: 'Integration', slug: 'categories/integration' },
						{ label: 'Data Protection', slug: 'categories/data-protection' },
					],
				},
			],
			customCss: [
				'./src/styles/custom.css',
			],
		}),
	],
});
