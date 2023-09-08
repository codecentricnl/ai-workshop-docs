// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Build your own application with BDD and ChatGPT',
  tagline: 'AI Workshop - 26.09.2023',
  url: 'https://www.the-experts.nl',
  baseUrl: '/ai-workshop-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'the/experts', // Usually your GitHub org/user name.
  projectName: 'ai-workshop-docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/codecentricnl/ai-workshop-docs',
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
      disableSwitch: true
    },
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    navbar: {
      title: 'Workshop: BDD met ChatGPT',
      logo: {
        alt: 'the/experts.',
        src: 'img/theexperts_WitOranje.png',
        //srcDark: 'img/theexperts_WitOranje.png',
      },

      items: [
        // {
        //   href: 'https://docs.google.com/presentation/d/1pceXN7X3JUDXnApshcAbI82krvPwANxu7ugqG88Z9oA',
        //   target: '_blank',
        //   label: 'Slides',
        //   position: 'right',
        // },
        {
          type: 'dropdown',
          label: 'About',
          position: 'right',
          items: [
            {
              label: 'Company',
              href: 'https://www.the-experts.nl',
              target: '_blank',
            }
          ],
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} the/experts.`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/github'),
      additionalLanguages: ['java', 'graphql'],
      defaultLanguage: 'java',
    },
  },
};

module.exports = config;
