// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MyDevNotes',
  tagline: 'Coding is Cool',
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
            sidebarId: 'sprachenSidebar',
            position: 'left',
            label: 'Sprachen',
          },
          {
            type: 'docSidebar',
            sidebarId: 'infrastrukturSidebar',
            position: 'left',
            label: 'Infrastruktur',
          },
          {
            type: 'docSidebar',
            sidebarId: 'devopsSidebar',
            position: 'left',
            label: 'DevOps',
          },
          {
            type: 'docSidebar',
            sidebarId: 'frameworksSidebar',
            position: 'left',
            label: 'Frameworks & Libraries',
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
                label: 'Grundlagen',
                to: '/docs/category/konzepte--paradigmen',
              },
              {
                label: 'Sprachen',
                href: '/docs/category/python',
              },
              {
                label: 'Infrastruktur',
                href: '/docs/category/datenbanken',
              },
            ],
          },
          {
            title: 'more...',
            items: [
              {
                label: 'DevOps',
                href: '/docs/category/git',
              },
              {
                label: 'Frameworks & Libraries',
                href: '/docs/category/net',
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