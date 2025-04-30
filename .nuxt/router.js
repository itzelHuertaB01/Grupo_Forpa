import Vue from "vue";
import Router from "vue-router";
import { normalizeURL, decode } from "ufo";
import { interopDefault } from "./utils";
import scrollBehavior from "./router.scrollBehavior.js";

const _7ef504b1 = () =>
  interopDefault(
    import("..\\pages\\403.vue" /* webpackChunkName: "pages/403" */)
  );
const _7f031c32 = () =>
  interopDefault(
    import("..\\pages\\404.vue" /* webpackChunkName: "pages/404" */)
  );
const _0e33fe19 = () =>
  interopDefault(
    import(
      "..\\pages\\admin\\index.vue" /* webpackChunkName: "pages/admin/index" */
    )
  );
const _bf687fbe = () =>
  interopDefault(
    import(
      "..\\pages\\client\\index.vue" /* webpackChunkName: "pages/client/index" */
    )
  );
const _1e24245e = () =>
  interopDefault(
    import(
      "..\\pages\\ErrorOffline.vue" /* webpackChunkName: "pages/ErrorOffline" */
    )
  );
const _58414868 = () =>
  interopDefault(
    import(
      "..\\pages\\preventive\\index.vue" /* webpackChunkName: "pages/preventive/index" */
    )
  );
const _443f2f69 = () =>
  interopDefault(
    import(
      "..\\pages\\admin\\Index_Admin.vue" /* webpackChunkName: "pages/admin/Index_Admin" */
    )
  );
const _2a01e204 = () =>
  interopDefault(
    import(
      "..\\pages\\admin\\Orders_Admin.vue" /* webpackChunkName: "pages/admin/Orders_Admin" */
    )
  );
const _0a98c74d = () =>
  interopDefault(
    import(
      "..\\pages\\admin\\UploadFiles_Admin.vue" /* webpackChunkName: "pages/admin/UploadFiles_Admin" */
    )
  );
const _4dee091f = () =>
  interopDefault(
    import(
      "..\\pages\\admin\\Users_Admin.vue" /* webpackChunkName: "pages/admin/Users_Admin" */
    )
  );
const _ca35ec6e = () =>
  interopDefault(
    import(
      "..\\pages\\client\\Catalog_Cli.vue" /* webpackChunkName: "pages/client/Catalog_Cli" */
    )
  );
const _1722e344 = () =>
  interopDefault(
    import(
      "..\\pages\\client\\History_Cli.vue" /* webpackChunkName: "pages/client/History_Cli" */
    )
  );
const _1cd34f41 = () =>
  interopDefault(
    import(
      "..\\pages\\client\\Home_Cli.vue" /* webpackChunkName: "pages/client/Home_Cli" */
    )
  );
const _72082258 = () =>
  interopDefault(
    import(
      "..\\pages\\client\\Notifications_Cli.vue" /* webpackChunkName: "pages/client/Notifications_Cli" */
    )
  );
const _01f82912 = () =>
  interopDefault(
    import(
      "..\\pages\\client\\Ofertas_Cli.vue" /* webpackChunkName: "pages/client/Ofertas_Cli" */
    )
  );
const _1f38b907 = () =>
  interopDefault(
    import(
      "..\\pages\\client\\Orders_Cli.vue" /* webpackChunkName: "pages/client/Orders_Cli" */
    )
  );
const _0997b137 = () =>
  interopDefault(
    import(
      "..\\pages\\preventive\\Catalog_Pre.vue" /* webpackChunkName: "pages/preventive/Catalog_Pre" */
    )
  );
const _f454ea9c = () =>
  interopDefault(
    import(
      "..\\pages\\preventive\\History_Pre.vue" /* webpackChunkName: "pages/preventive/History_Pre" */
    )
  );
const _41464d86 = () =>
  interopDefault(
    import(
      "..\\pages\\preventive\\Notifications_Pre.vue" /* webpackChunkName: "pages/preventive/Notifications_Pre" */
    )
  );
const _6d6f64f1 = () =>
  interopDefault(
    import(
      "..\\pages\\preventive\\Offers_Pre.vue" /* webpackChunkName: "pages/preventive/Offers_Pre" */
    )
  );
const _e79f2f82 = () =>
  interopDefault(
    import(
      "..\\pages\\preventive\\Orders_Pre.vue" /* webpackChunkName: "pages/preventive/Orders_Pre" */
    )
  );
const _6217bc42 = () =>
  interopDefault(
    import(
      "..\\pages\\preventive\\Shopping_Pre.vue" /* webpackChunkName: "pages/preventive/Shopping_Pre" */
    )
  );
const _233ae368 = () =>
  interopDefault(
    import("..\\pages\\index.vue" /* webpackChunkName: "pages/index" */)
  );

const emptyFn = () => {};

Vue.use(Router);

export const routerOptions = {
  mode: "history",
  base: "/",
  linkActiveClass: "nuxt-link-active",
  linkExactActiveClass: "nuxt-link-exact-active",
  scrollBehavior,

  routes: [
    {
      path: "/403",
      component: _7ef504b1,
      name: "403",
    },
    {
      path: "/404",
      component: _7f031c32,
      name: "404",
    },
    {
      path: "/admin",
      component: _0e33fe19,
      name: "admin",
    },
    {
      path: "/client",
      component: _bf687fbe,
      name: "client",
    },
    {
      path: "/ErrorOffline",
      component: _1e24245e,
      name: "ErrorOffline",
    },
    {
      path: "/preventive",
      component: _58414868,
      name: "preventive",
    },
    {
      path: "/admin/Index_Admin",
      component: _443f2f69,
      name: "admin-Index_Admin",
    },
    {
      path: "/admin/Orders_Admin",
      component: _2a01e204,
      name: "admin-Orders_Admin",
    },
    {
      path: "/admin/UploadFiles_Admin",
      component: _0a98c74d,
      name: "admin-UploadFiles_Admin",
    },
    {
      path: "/admin/Users_Admin",
      component: _4dee091f,
      name: "admin-Users_Admin",
    },
    {
      path: "/client/Catalog_Cli",
      component: _ca35ec6e,
      name: "client-Catalog_Cli",
    },
    {
      path: "/client/History_Cli",
      component: _1722e344,
      name: "client-History_Cli",
    },
    {
      path: "/client/Home_Cli",
      component: _1cd34f41,
      name: "client-Home_Cli",
    },
    {
      path: "/client/Notifications_Cli",
      component: _72082258,
      name: "client-Notifications_Cli",
    },
    {
      path: "/client/Ofertas_Cli",
      component: _01f82912,
      name: "client-Ofertas_Cli",
    },
    {
      path: "/client/Orders_Cli",
      component: _1f38b907,
      name: "client-Orders_Cli",
    },
    {
      path: "/preventive/Catalog_Pre",
      component: _0997b137,
      name: "preventive-Catalog_Pre",
    },
    {
      path: "/preventive/History_Pre",
      component: _f454ea9c,
      name: "preventive-History_Pre",
    },
    {
      path: "/preventive/Notifications_Pre",
      component: _41464d86,
      name: "preventive-Notifications_Pre",
    },
    {
      path: "/preventive/Offers_Pre",
      component: _6d6f64f1,
      name: "preventive-Offers_Pre",
    },
    {
      path: "/preventive/Orders_Pre",
      component: _e79f2f82,
      name: "preventive-Orders_Pre",
    },
    {
      path: "/preventive/Shopping_Pre",
      component: _6217bc42,
      name: "preventive-Shopping_Pre",
    },
    {
      path: "/",
      component: _233ae368,
      name: "index",
    },
    {
      path: "/client/Home_Cli",
      component: _1cd34f41,
      name: "home_cli",
    },
    {
      path: "/client/Pedidos_Cli",
      component: _1f38b907,
      name: "pedidos_cli",
    },
    {
      path: "/client/Historial_Cli",
      component: _1722e344,
      name: "historial_cli",
    },
    {
      path: "/client/Catalogo_Cli",
      component: _ca35ec6e,
      name: "catalogo_cli",
    },
    {
      path: "/client/Notificaciones_Cli",
      component: _72082258,
      name: "notificaciones_cli",
    },
    {
      path: "/compras_pre",
      component: _6217bc42,
      name: "compras_pre",
    },
    {
      path: "/pedidos_pre",
      component: _e79f2f82,
      name: "pedidos_pre",
    },
    {
      path: "/historial_pre",
      component: _f454ea9c,
      name: "historial_pre",
    },
    {
      path: "/catalogo_pre",
      component: _0997b137,
      name: "catalogo_pre",
    },
    {
      path: "/notificaciones_pre",
      component: _41464d86,
      name: "notificaciones_pre",
    },
    {
      path: "/ofertas_pre",
      component: _6d6f64f1,
      name: "ofertas_pre",
    },
    {
      path: "/inicio_admin",
      component: _443f2f69,
      name: "inicio_admin",
    },
    {
      path: "/productos_admin",
      component: _2a01e204,
      name: "productos_admin",
    },
    {
      path: "/usuarios_admin",
      component: _4dee091f,
      name: "usuarios_admin",
    },
    {
      path: "/uploadfiles_admin",
      component: _0a98c74d,
      name: "uploadfiles_admin",
    },
  ],

  fallback: false,
};

export function createRouter(ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base;
  const router = new Router({ ...routerOptions, base });

  // TODO: remove in Nuxt 3
  const originalPush = router.push;
  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);
  router.resolve = (to, current, append) => {
    if (typeof to === "string") {
      to = normalizeURL(to);
    }
    return resolve(to, current, append);
  };

  return router;
}
