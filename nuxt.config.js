export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',

  router: {
    base: ''
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'FutScience - A ciência por trás do futebol.',
    htmlAttrs: {
      lang: 'pt-br',
    },
    meta: [
      {charset: 'utf-8' },
      {name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {hid: 'description', name: 'description', content: 'Inteligência Artificial aplicada a previsão de resultados e placares de partidas de futebol' },
      //open graph
      {hid: 'og-title', property: 'og:title', content: 'FutScience - A ciência por trás do futebol'},
      {hid: 'og-description', property: 'og:description', content: 'Inteligência Artificial aplicada a previsão de resultados e placares de partidas de futebol' },
      {hid: 'og-site-name', property: 'og:site_name', content: "futscience.com"},
      {hid: 'og-type', property: 'og:type', content: "website"},
      {hid: 'og-url', property: 'og:url', content: "https://futscience.com"},
      {hid: 'og-image', property: 'og:image', content: 'https://res.cloudinary.com/dks8yvelk/image/upload/v1599237318/futscience_uloc5z.png'},
      {hid: 'og-image-url', property: 'og:image:url', content: 'https://res.cloudinary.com/dks8yvelk/image/upload/v1599237318/futscience_uloc5z.png'},
      {hid: 'og-image-width', property: 'og:image:width', content: 1280},
      {hid: 'og-image-height', property: 'og:image:height', content: 720},
      {hid: 'og-image-type', property: 'og:image:type', content: "image/png"},
      //twitter card
      {hid: 'twitter-card', property: 'twitter:card'},
      {hid: 'twitter-site', property: 'twitter:site', content: 'futscience.com'},
      {hid: 'twitter-creator', property: 'twitter:creator', content: 'futscience.com'},
      // Overwrite the following in different pages
      {hid: 'twitter-img-src', property: 'twitter:image', content: 'https://res.cloudinary.com/dks8yvelk/image/upload/v1599237318/futscience_uloc5z.png'},
      {hid: 'twitter-title', property: 'twitter:title', content: 'futscience.com'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-analytics', {
      id: 'UA-139305425-1'
    }],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/markdownit'
  ],
  sitemap: {
    // options
    hostname: 'https://futscience.com',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
