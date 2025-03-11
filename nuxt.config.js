import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - GrupoForpa',
    title: 'GrupoForpa',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push(
        {
          name: 'home',
          path: '/home',
          component: resolve(__dirname, 'pages/user-no/Home.vue')
        },
        {
          name: 'pedidos',
          path: '/pedidos',
          component: resolve(__dirname, 'pages/user-no/Orders.vue')
        },
        {
          name: 'historial',
          path: '/historial',
          component: resolve(__dirname, 'pages/user-no/History.vue')
        },
      );
    }
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
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#29235C',  
          secondary: '#118737', 
          accent: '#F3F3F3',
        },
      },
    },
  },
  

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
