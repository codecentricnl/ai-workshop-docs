// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DDD and \"clean hexagonal onion\" architecture with Spring',
  tagline: 'How to apply all this in a Spring Boot application',
  url: 'https://codecentric.nl',
  baseUrl: '/clean-hexagonal-onion-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'codecentricnl', // Usually your GitHub org/user name.
  projectName: 'clean-hexagonal-onion-service', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/MaikKingma/clean-hexagonal-onion-docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
    },
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    navbar: {
      title: 'Codecentric Expert Workshop',
      logo: {
        alt: 'Workshop',
        src: 'img/ccnl-colored.svg',
      },
      items: [
        {
          href: 'https://github.com/MaikKingma/clean-hexagonal-onion-service',
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
      additionalLanguages: ['java', 'graphql'],
      defaultLanguage: 'java',
    },
  },
};

module.exports = config;
