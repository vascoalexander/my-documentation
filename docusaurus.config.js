// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'myDevNotes',
  tagline: '"The best way to predict the future is to invent it." - Alan Kay',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/my-documentation/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vascoalexander', // Usually your GitHub org/user name.
  projectName: 'my-documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch: "gh-pages",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },
    // ...
  plugins:[
    require.resolve('docusaurus-lunr-search'),
    require.resolve('docusaurus-plugin-image-zoom')
  ],
  
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/vascoalexander/my-documentation/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.png',
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
        },
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        }
      },
      navbar: {
        title: 'DevNotes',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'grundlagenSidebar',
            position: 'left',
            label: 'Grundlagen',
          },
          {
            type: 'docSidebar',
            sidebarId: 'dsaSidebar',
            position: 'left',
            label: 'DSA',
          },
          {
            type: 'docSidebar',
            sidebarId: 'pythonSidebar',
            position: 'left',
            label: 'Python',
          },
          {
            type: 'docSidebar',
            sidebarId: 'csharpSidebar',
            position: 'left',
            label: 'C#',
          },
          {
            type: 'docSidebar',
            sidebarId: 'webSidebar',
            position: 'left',
            label: 'Web',
          },
          {
            type: 'docSidebar',
            sidebarId: 'dbSidebar',
            position: 'left',
            label: 'DB',
          },
          {
            type: 'docSidebar',
            sidebarId: 'linuxSidebar',
            position: 'left',
            label: 'Linux',
          },
          {
            type: 'docSidebar',
            sidebarId: 'toolsSidebar',
            position: 'left',
            label: 'Tools',
          },
          {
            type: 'docSidebar',
            sidebarId: 'miscSidebar',
            position: 'left',
            label: 'Misc',
          },
          {
            href: 'https://github.com/vascoalexander',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Grundlagen',
                to: '/docs/category/it-mathe',
              },
              {
                label: 'DSA',
                to: '/docs/category/sortieren',
              },
              {
                label: 'Python',
                href: '/docs/python/python-quickref',
              },
              {
                label: 'C#',
                href: '/docs/csharp/csharp-quickref',
              },
              {
                label: 'WebDev',
                href: '/docs/web/rest-architektur',
              },
            ],
          },
          {
            title: 'more...',
            items: [
              {
                label: 'Datenbanken',
                href: '/docs/category/grundlagen',
              },
              {
                label: 'Linux',
                href: '/docs/linux/package-management',
              },
              {
                label: 'Tools',
                href: '/docs/tools/git',
              },
              {
                label: 'Misc',
                href: '/docs/category/link-collections',
              },
            ],
          },
          {
            title: 'My Sites',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/vascoalexander',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/vasco-alexander-basque-a9179383/',
              },
              {
                label: 'Portfolio',
                href: 'https://www.vascobasque.com/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Vasco Alexander Basque - Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;