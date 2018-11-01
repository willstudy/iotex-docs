/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'IoTeX Documentations', // Title for your website.
  tagline: 'IoTeX is a Decentralized Network for Internet of Things Powered by a Privacy-Centric Blockchain.',
  url: 'http://docs.iotex.me/', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'iotex-docs',
  organizationName: 'iotexproject',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'guides', label: 'Guides'},
    {doc: 'sdk-overview', label: 'SDK'},
    { href: "https://github.com/iotexproject/", label: "GitHub", external: true },
  ],

  cname: 'docs.iotex.me',

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: '/iotex.io/logo.svg',
  footerIcon: '/iotex.io/logo.svg',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#051626',
    secondaryColor: '#11161B',
  },

  /* Custom fonts for website */
  fonts: {
    myFont: [
      "Noto Sans",
      "Arial"
    ],
    shareText: [
      "Share Tech",
      "Noto Sans"
    ],
    /*myOtherFont: [
      "-apple-system",
      "system-ui"
    ]*/
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} iotex.io`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/iotexproject/iotex-docs',
  algolia: {
    apiKey: '6aa2095b9d76e63ea2af3f3bc6fb2c1a',
    indexName: 'iotex-docs',
    appId: '8VEJ3VOJR5',
    algoliaOptions: {
    } // Optional, if provided by Algolia
  },

  editUrl: 'https://github.com/iotexproject/iotex-docs/edit/master/docs/',
  gaTrackingId: 'UA-111756489-6',
  enableUpdateTime: true,
  scrollToTop: true,
  wrapPagesHTML: true
};

module.exports = siteConfig;
