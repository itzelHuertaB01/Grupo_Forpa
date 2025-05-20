import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7acf60c4 = () => interopDefault(import('..\\pages\\403.vue' /* webpackChunkName: "pages/403" */))
const _7ab331c2 = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages/404" */))
const _d6bca468 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _30d7f264 = () => interopDefault(import('..\\pages\\client\\index.vue' /* webpackChunkName: "pages/client/index" */))
const _775b9d84 = () => interopDefault(import('..\\pages\\ErrorOffline.vue' /* webpackChunkName: "pages/ErrorOffline" */))
const _1b1a83f9 = () => interopDefault(import('..\\pages\\preventive\\index.vue' /* webpackChunkName: "pages/preventive/index" */))
const _372de648 = () => interopDefault(import('..\\pages\\admin\\Index_Admin.vue' /* webpackChunkName: "pages/admin/Index_Admin" */))
const _5010dfeb = () => interopDefault(import('..\\pages\\admin\\Orders_Admin.vue' /* webpackChunkName: "pages/admin/Orders_Admin" */))
const _a6d4fb00 = () => interopDefault(import('..\\pages\\admin\\UploadFiles_Admin.vue' /* webpackChunkName: "pages/admin/UploadFiles_Admin" */))
const _23d032dc = () => interopDefault(import('..\\pages\\admin\\Users_Admin.vue' /* webpackChunkName: "pages/admin/Users_Admin" */))
const _00124a94 = () => interopDefault(import('..\\pages\\client\\Catalog_Cli.vue' /* webpackChunkName: "pages/client/Catalog_Cli" */))
const _7c34b431 = () => interopDefault(import('..\\pages\\client\\History_Cli.vue' /* webpackChunkName: "pages/client/History_Cli" */))
const _50abed74 = () => interopDefault(import('..\\pages\\client\\Home_Cli.vue' /* webpackChunkName: "pages/client/Home_Cli" */))
const _0fa2cd85 = () => interopDefault(import('..\\pages\\client\\Notifications_Cli.vue' /* webpackChunkName: "pages/client/Notifications_Cli" */))
const _6709f9ff = () => interopDefault(import('..\\pages\\client\\Ofertas_Cli.vue' /* webpackChunkName: "pages/client/Ofertas_Cli" */))
const _813ad30c = () => interopDefault(import('..\\pages\\client\\Orders_Cli.vue' /* webpackChunkName: "pages/client/Orders_Cli" */))
const _036578b8 = () => interopDefault(import('..\\pages\\preventive\\Catalog_Pre.vue' /* webpackChunkName: "pages/preventive/Catalog_Pre" */))
const _7a8b1d1f = () => interopDefault(import('..\\pages\\preventive\\History_Pre.vue' /* webpackChunkName: "pages/preventive/History_Pre" */))
const _23e4cb9a = () => interopDefault(import('..\\pages\\preventive\\Notifications_Pre.vue' /* webpackChunkName: "pages/preventive/Notifications_Pre" */))
const _01b750e4 = () => interopDefault(import('..\\pages\\preventive\\Offers_Pre.vue' /* webpackChunkName: "pages/preventive/Offers_Pre" */))
const _20785432 = () => interopDefault(import('..\\pages\\preventive\\Orders_Pre.vue' /* webpackChunkName: "pages/preventive/Orders_Pre" */))
const _04147775 = () => interopDefault(import('..\\pages\\preventive\\Shopping_Pre.vue' /* webpackChunkName: "pages/preventive/Shopping_Pre" */))
const _53425c0e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/403",
    component: _7acf60c4,
    name: "403"
  }, {
    path: "/404",
    component: _7ab331c2,
    name: "404"
  }, {
    path: "/admin",
    component: _d6bca468,
    name: "admin"
  }, {
    path: "/client",
    component: _30d7f264,
    name: "client"
  }, {
    path: "/ErrorOffline",
    component: _775b9d84,
    name: "ErrorOffline"
  }, {
    path: "/preventive",
    component: _1b1a83f9,
    name: "preventive"
  }, {
    path: "/admin/Index_Admin",
    component: _372de648,
    name: "admin-Index_Admin"
  }, {
    path: "/admin/Orders_Admin",
    component: _5010dfeb,
    name: "admin-Orders_Admin"
  }, {
    path: "/admin/UploadFiles_Admin",
    component: _a6d4fb00,
    name: "admin-UploadFiles_Admin"
  }, {
    path: "/admin/Users_Admin",
    component: _23d032dc,
    name: "admin-Users_Admin"
  }, {
    path: "/client/Catalog_Cli",
    component: _00124a94,
    name: "client-Catalog_Cli"
  }, {
    path: "/client/History_Cli",
    component: _7c34b431,
    name: "client-History_Cli"
  }, {
    path: "/client/Home_Cli",
    component: _50abed74,
    name: "client-Home_Cli"
  }, {
    path: "/client/Notifications_Cli",
    component: _0fa2cd85,
    name: "client-Notifications_Cli"
  }, {
    path: "/client/Ofertas_Cli",
    component: _6709f9ff,
    name: "client-Ofertas_Cli"
  }, {
    path: "/client/Orders_Cli",
    component: _813ad30c,
    name: "client-Orders_Cli"
  }, {
    path: "/preventive/Catalog_Pre",
    component: _036578b8,
    name: "preventive-Catalog_Pre"
  }, {
    path: "/preventive/History_Pre",
    component: _7a8b1d1f,
    name: "preventive-History_Pre"
  }, {
    path: "/preventive/Notifications_Pre",
    component: _23e4cb9a,
    name: "preventive-Notifications_Pre"
  }, {
    path: "/preventive/Offers_Pre",
    component: _01b750e4,
    name: "preventive-Offers_Pre"
  }, {
    path: "/preventive/Orders_Pre",
    component: _20785432,
    name: "preventive-Orders_Pre"
  }, {
    path: "/preventive/Shopping_Pre",
    component: _04147775,
    name: "preventive-Shopping_Pre"
  }, {
    path: "/",
    component: _53425c0e,
    name: "index"
  }, {
    path: "/client/Home_Cli",
    component: _50abed74,
    name: "home_cli"
  }, {
    path: "/client/Pedidos_Cli",
    component: _813ad30c,
    name: "pedidos_cli"
  }, {
    path: "/client/Historial_Cli",
    component: _7c34b431,
    name: "historial_cli"
  }, {
    path: "/client/Catalogo_Cli",
    component: _00124a94,
    name: "catalogo_cli"
  }, {
    path: "/client/Notificaciones_Cli",
    component: _0fa2cd85,
    name: "notificaciones_cli"
  }, {
    path: "/compras_pre",
    component: _04147775,
    name: "compras_pre"
  }, {
    path: "/pedidos_pre",
    component: _20785432,
    name: "pedidos_pre"
  }, {
    path: "/historial_pre",
    component: _7a8b1d1f,
    name: "historial_pre"
  }, {
    path: "/catalogo_pre",
    component: _036578b8,
    name: "catalogo_pre"
  }, {
    path: "/notificaciones_pre",
    component: _23e4cb9a,
    name: "notificaciones_pre"
  }, {
    path: "/ofertas_pre",
    component: _01b750e4,
    name: "ofertas_pre"
  }, {
    path: "/inicio_admin",
    component: _372de648,
    name: "inicio_admin"
  }, {
    path: "/productos_admin",
    component: _5010dfeb,
    name: "productos_admin"
  }, {
    path: "/usuarios_admin",
    component: _23d032dc,
    name: "usuarios_admin"
  }, {
    path: "/uploadfiles_admin",
    component: _a6d4fb00,
    name: "uploadfiles_admin"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
