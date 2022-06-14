// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GraphQL and Spring Boot',
  tagline: 'Build a GraphQL service with Spring Boot',
  url: 'https://codecentric.nl',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'codecentricnl', // Usually your GitHub org/user name.
  projectName: 'todo', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/codecentricnl/flutter_basic_workshop/tree/master/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    navbar: {
      title: 'Workshop',
      logo: {
        alt: 'Workshop',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/codecentricnl/flutter_basic_workshop',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Codecentric NL. Built with Docusaurus.`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: ['dart'],
      defaultLanguage: 'dart',
    },
  },
};

module.exports = config;