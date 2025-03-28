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
        {
          name: 'catalogo',
          path: '/catalogo',
          component: resolve(__dirname, 'pages/user-no/Catalog.vue')
        },
        {
          name: 'notificaciones',
          path: '/notificaciones',
          component: resolve(__dirname, 'pages/user-no/Notifications.vue')
        },
        // Rutas de preventista
        {
          name: 'compras-prev',
          path: '/compras-pre',
          component: resolve(__dirname, 'pages/user-pre/Shopping.vue')
        },
        {
          name: 'pedidos-prev',
          path: '/pedidos-pre',
          component: resolve(__dirname, 'pages/user-pre/Orders.vue')
        },
        {
          name: 'historial-prev',
          path: '/historial-pre',
          component: resolve(__dirname, 'pages/user-pre/History.vue')
        },
        {
          name: 'catalogo-prev',
          path: '/catalogo-pre',
          component: resolve(__dirname, 'pages/user-pre/Catalog.vue')
        },
        {
          name: 'notificaciones-prev',
          path: '/notificaciones-pre',
          component: resolve(__dirname, 'pages/user-pre/Notifications.vue')
        },
        {
          name: 'ofertas-prev',
          path: '/ofertas-pre',
          component: resolve(__dirname, 'pages/user-pre/Offers.vue')
        },
        // Rutas de administrador
        {
          name: 'inicio-admin',
          path: '/inicio-admin',
          component: resolve(__dirname, 'pages/user-admin/index.vue')
        },
                {
          name: 'productos-admin',
          path: '/productos-admin',
          component: resolve(__dirname, 'pages/user-admin/Orders.vue')
        },
                {
          name: 'usuarios-admin',
          path: '/usuarios-admin',
          component: resolve(__dirname, 'pages/user-admin/Users.vue')
        },
        {
          name: 'uploadfiles-admin',
          path: '/uploadfiles-admin',
          component: resolve(__dirname, 'pages/user-admin/UploadFiles.vue')
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
