const config = {
  gatsby: {
    pathPrefix: '/arch-101',
    siteUrl: 'https://joaolucasl.github.io/arch-101',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '',
    logoLink: 'https://joaolucasl.github.io/arch-101',
    title: "<h1><a href='https://joaolucasl.github.io/arch-101'>Arch 101</a></h1>",
    githubUrl: 'https://github.com/joaolucasl/arch-101',
    helpUrl: '',
    tweetText: '',
    links: [{ text: '', link: '' }],
    search: {
      enabled: true,
      indexName: 'arch101blog',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [],
    frontline: false,
    ignoreIndex: true,
    title: "Conteúdos",
  },
  siteMetadata: {
    title: 'Arch 101',
    description: '',
    ogImage: null,
    docsLocation: 'https://github.com/joaolucasl/arch-101/tree/master/content',
    favicon: '',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
