// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({

			title: 'Litemoa Server Wiki',

			customCss: [
				// ##のデザインを変更するためのCSS(##と###の違いをわかりやすくするため)
				'./src/styles/custom_markdown-h2.css',
			],

			components: {
				// footerを追加する
				Footer: './src/components/Footer.astro',
			},

			social: [
				{ icon: 'discord', label: 'Discord', href: 'http://discord.gg/UyKV4BDxBR' },
				{ icon: 'x.com', label: 'X', href: 'https://x.com/litemoa' },
				{ icon: 'youtube', label: 'youtube', href: 'https://www.youtube.com/channel/UC_p9eD-ZmbDRSJ5HsvDqcoQ?sub_confirmation=1' },
			],

			sidebar: [
				{
					label: 'はじめに',
					items: [
						{ label: '利用規約', slug: 'rules' },
						{ label: 'プライバシーポリシー', slug: 'policy' },
						{ label: '参加方法', slug: 'join' },
					],
				},
			],

		}),
	],
});
