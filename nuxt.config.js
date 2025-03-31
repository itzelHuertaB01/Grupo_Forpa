import colors from 'vuetify/es5/util/colors'

export default {
  target: 'static',

  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: process.env.API_URL
  },
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL
    }
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - GrupoForpa',
    title: 'GrupoForpa',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/Logo_min.png' }
    ]
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push(
        {
          name: 'home_cli',
          path: '/home_cli',
          component: resolve(__dirname, 'pages/client/Home_Cli.vue')
        },
        {
          name: 'pedidos_cli',
          path: '/pedidos_cli',
          component: resolve(__dirname, 'pages/client/Orders_Cli.vue')
        },
        {
          name: 'historial_cli',
          path: '/historial_cli',
          component: resolve(__dirname, 'pages/client/History_Cli.vue')
        },
        {
          name: 'catalogo_cli',
          path: '/catalogo_cli',
          component: resolve(__dirname, 'pages/client/Catalog_Cli.vue')
        },
        {
          name: 'notificaciones_cli',
          path: '/notificaciones_cli',
          component: resolve(__dirname, 'pages/client/Notifications_Cli.vue')
        },
        // Rutas de preventista
        {
          name: 'compras_pre',
          path: '/compras_pre',
          component: resolve(__dirname, 'pages/preventive/Shopping_Pre.vue')
        },
        {
          name: 'pedidos_pre',
          path: '/pedidos_pre',
          component: resolve(__dirname, 'pages/preventive/Orders_Pre.vue')
        },
        {
          name: 'historial_pre',
          path: '/historial_pre',
          component: resolve(__dirname, 'pages/preventive/History_Pre.vue')
        },
        {
          name: 'catalogo_pre',
          path: '/catalogo_pre',
          component: resolve(__dirname, 'pages/preventive/Catalog_Pre.vue')
        },
        {
          name: 'notificaciones_pre',
          path: '/notificaciones_pre',
          component: resolve(__dirname, 'pages/preventive/Notifications_Pre.vue')
        },
        {
          name: 'ofertas_pre',
          path: '/ofertas_pre',
          component: resolve(__dirname, 'pages/preventive/Offers_Pre.vue')
        },
        // Rutas de administrador
        {
          name: 'inicio_admin',
          path: '/inicio_admin',
          component: resolve(__dirname, 'pages/admin/Index_Admin.vue')
        },
                {
          name: 'productos_admin',
          path: '/productos_admin',
          component: resolve(__dirname, 'pages/admin/Orders_Admin.vue')
        },
                {
          name: 'usuarios_admin',
          path: '/usuarios_admin',
          component: resolve(__dirname, 'pages/admin/Users_Admin.vue')
        },
        {
          name: 'uploadfiles_admin',
          path: '/uploadfiles_admin',
          component: resolve(__dirname, 'pages/admin/UploadFiles_Admin.vue')
        }
      );
    }
  },  

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/api.js'
  ],  

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],
  axios: {
    baseURL: process.env.API_URL // desde tu .env
},


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
