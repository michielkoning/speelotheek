import pkg from './package'
const baseUrl = 'https://www.speelotheekwageningen.nl/'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s | Speel-o-theek Wageningen',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, viewport-fit=cover'
      },
      {
        meta: 'google-site-verification',
        content: 'xxksTKQXa1vH4yXZxc3khpldGfnbQ8CL8yRNhYLWW50'
      },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

      {
        href:
          'https://fonts.googleapis.com/css?family=Amatic+SC&display=swap',
        rel: 'stylesheet'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/styles/base.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/axios',
    '~/plugins/vuelidate',
    '~/plugins/google-maps'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    'nuxt-svg-loader',
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
    'nuxt-i18n'
    // '@nuxtjs/google-analytics'
  ],
  /*
   ** Axios module configuration
   */
  i18n: {
    baseUrl,
    strategy: 'prefix',
    defaultLocale: 'nl',
    locales: [
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en.js'
      },
      {
        name: 'Nederlands',
        code: 'nl',
        iso: 'nl-NL',
        file: 'nl.js'
      }
    ],
    lazy: true,
    langDir: 'locales/',
    rootRedirect: 'nl'

  },
  // googleAnalytics: {
  //   id: process.env.NUXT_ENV_GOOGLE_ANALYTICS_KEY,
  //   set: [{ field: 'anonymizeIp', value: true }],
  //   disabled: () => {
  //     const doNotTrack =
  //       navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack
  //     if (doNotTrack !== '1' && doNotTrack !== 'yes') {
  //       return false
  //     }
  //     return true
  //   }
  // },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    transpile: [/^vue2-google-maps($|\/)/],

    postcss: {
      plugins: {
        'postcss-mixins': {
          mixinsDir: './styles/mixins/'
        },
        'postcss-preset-env': {
          importFrom: ['./styles/media-queries/media-queries.css'],

          features: {
            'nesting-rules': true,
            'custom-media-queries': true,
            'media-query-ranges': true
          }
        }
      }
    }
  },
  sitemap: {
    hostname: pkg.homepage
  },
  markdownit: {
    injected: true
  }
}
