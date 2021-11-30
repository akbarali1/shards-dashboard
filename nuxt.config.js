export default {
  ssr: false,
  loader: true,
  // target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Xarajat',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', type: 'text/css', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'},
      {rel: 'stylesheet', type: 'text/css', href: 'https://use.fontawesome.com/releases/v5.0.6/css/all.css'},
      {rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
    ],
    script: [

      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
        async: true,
        crossorigin: "anonymous"
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js",
        async: true,
        crossorigin: "anonymous"
      },
      {
        src: "https://buttons.github.io/buttons.js",
        async: true,
        crossorigin: "anonymous"
      },
    ],
  },
  bodyAttrs: {
    class: 'h-100',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/shards-dashboards.1.1.0.min.css',
    '~/assets/styles/extras.1.1.0.min.css',
  ],

  js: [
    '~/assets/scripts/extras.1.1.0.min.js',
    '~/assets/scripts/app/app-blog-overview.1.1.0.js',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/toast.js',
    '~/plugins/vue-dialog-loading.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/dotenv',
    '@nuxtjs/pwa',
    'nuxt-user-agent',

    ['@nuxtjs/i18n', {
      strategy: 'prefix_except_default',
      defaultLocale: process.env.DEFAULT_LOCALE,
      locales: [
        {
          code: 'uz',
          name: "O'zbekcha",
          file: 'uz.js'
        }
      ],
      lazy: true,
      langDir: 'lang/'
    }],
  ],
  axios: {
    baseURL: process.env.API_URL
  },
  pwa: {
    icon: true,
    manifest: {
      name: 'Xarajatlar Nazorati',
      short_name: 'Xarajat',
      lang: process.env.DEFAULT_LOCALE,
      theme_color: '#e1e7e6',
      useWebmanifestExtension: false
    },
    meta: {
      name: 'Xarajatlar Nazorati',
      short_name: 'Xarajat',
      lang: process.env.DEFAULT_LOCALE,
      theme_color: '#e1e7e6',
      author: 'UzHackerSW',
      description: 'Akbarali yozgan NUXTJSda qilingan Xarajatlar Nazorati uchun Front End',
    },
    workbox: {
      publicPath: '/_nuxt'
    }
  },

  // router: {
  //   middleware: ['auth']
  // },
  auth: {
    strategies: {
      'laravelJWT': {
        provider: 'laravel/jwt',
        url: process.env.API_URL,
        endpoints: {
          login: {url: process.env.API_URL + 'auth/login', method: 'post', propertyName: 'token'},
          refresh: {url: process.env.API_URL + 'auth/refresh', method: 'post'},
          logout: {url: process.env.API_URL + 'auth/logout', method: 'destroy'},
          user: {url: 'auth/user', method: 'get'}
        },
        token: {
          property: 'access_token',
          maxAge: 180 * 60
        },
        tokenRequired: true,
        tokenType: 'Bearer',
        globalToken: true,
        refreshToken: {
          maxAge: 20160 * 60
        },
      },
    }
  },

  /*
  ** Build configuration
  */
  buildDir: 'nuxt-dist',
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    /*
    ** You can extend webpack config here
    */
    // extend(config, {isDev, isClient}) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  },
}
