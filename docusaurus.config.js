const path = require('path');

const BASE_URL = '/docs';

module.exports = {
  title: 'Broadstripes Help Center',
  tagline: 'Winning labor campaigns start here.',
  url: 'https://www.broadstripes.com',
  baseUrl: `${BASE_URL}/`,
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/meta/pagelogo.jpeg',
  organizationName: 'broadstripes',
  projectName: 'docs',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          sidebarCollapsible: true,
          sidebarCollapsed: false,
        },
        theme: {
          customCss: [
            require.resolve('./src/styles/custom.scss'),
          ],
        },
      },
    ],
  ],
  markdown: {
    mermaid: true,
    mdx1Compat: {
      headingIds: true,
    },
  },
  themeConfig: {
    docs: {
      sidebar: {
        hideable: false,
        autoCollapseCategories: false,
      },
    },
    announcementBar: {
      id: 'announcement-bar',
      content: '<a href="https://www.broadstripes.com" target="_blank" rel="noopener"><span> <span style="color: #b21700; font-weight: bold;">Need a demo?</span> Click here →</span></a>',
      isCloseable: false,
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'Site Logo',
        src: `/logos/logoBroadstripes.png`,
        srcDark: `/logos/logoBroadstripes.png`,
        href: '/',
        target: '_self',
        width: 201,
        height: 54,
      },
      items: [
        {
          type: 'doc',
          docId: 'index',
          label: 'Guide',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'release-notes',
          label: 'Release Notes',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Resources',
          items: [
            {
              label: 'Getting Started',
              to: '/get-started/get-started',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Website',
              href: 'https://www.broadstripes.com',
            },
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} Broadstripes`,
    },
  },
  plugins: [
    'docusaurus-plugin-sass',
    [
      'docusaurus-plugin-module-alias',
      {
        alias: {
          '@components': path.resolve(__dirname, './src/components'),
        },
      },
    ],
  ],
  customFields: {},
  themes: [],
};
