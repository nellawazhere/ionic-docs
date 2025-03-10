const path = require('path');

// GitHub Pages deployment config
const organizationName = 'nellawazhere'; // Usually your GitHub username
const projectName = 'ionic-docs'; // Usually your repository name
const deploymentBranch = 'gh-pages';

module.exports = {
  title: 'Broadstripes Help Center',
  tagline: 'Winning labor campaigns start here.',
  url: `https://${organizationName}.github.io`,
  baseUrl: `/${projectName}/`,
  organizationName: organizationName,
  projectName: projectName,
  deploymentBranch: deploymentBranch,
  trailingSlash: false,
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/meta/pagelogo.jpeg',
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
    algolia: {
      appId: 'YOUR_APP_ID',
      apiKey: 'YOUR_SEARCH_API_KEY',
      indexName: 'broadstripes',
      contextualSearch: true,
      externalUrlRegex: 'external\\.com|domain\\.com',
      searchParameters: {},
    },
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
          type: 'search',
          position: 'right',
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
