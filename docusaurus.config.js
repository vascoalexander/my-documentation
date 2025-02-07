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
  plugins: [require.resolve('docusaurus-lunr-search')],
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
          sidebarCollapsed: true,
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
            sidebarId: 'entwicklungSidebar',
            position: 'left',
            label: 'Entwicklung',
          },
          {
            type: 'docSidebar',
            sidebarId: 'sprachenSidebar',
            position: 'left',
            label: 'Sprachen',
          },
          {
            type: 'docSidebar',
            sidebarId: 'frameworksSidebar',
            position: 'left',
            label: 'Frameworks',
          },
          {
            type: 'docSidebar',
            sidebarId: 'webSidebar',
            position: 'left',
            label: 'WebDev',
          },
          {
            type: 'docSidebar',
            sidebarId: 'infrastrukturSidebar',
            position: 'left',
            label: 'Infrastruktur',
          },
          {
            type: 'docSidebar',
            sidebarId: 'resourcenSidebar',
            position: 'left',
            label: 'Resourcen & Tools',
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
                label: 'IT-Grundlagen',
                to: '/docs/category/mathematik--logik',
              },
              {
                label: 'Software-Entwicklung',
                href: '/docs/category/grundlagen',
              },
              {
                label: 'Programmiersprachen',
                href: '/docs/category/html',
              },
              {
                label: 'Frameworks & Libraries',
                href: '/docs/category/frontend',
              },
            ],
          },
          {
            title: 'more...',
            items: [
              {
                label: 'Web-Development',
                href: '/docs/category/grundlagen-des-web',
              },
              {
                label: 'Infrastruktur',
                href: '/docs/category/datenbanken',
              },
              {
                label: 'Resourcen & Tools',
                href: '/docs/category/cheatsheets',
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