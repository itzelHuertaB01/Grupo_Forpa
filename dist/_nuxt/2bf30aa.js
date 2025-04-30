(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    546: function (t, e, r) {
      var content = r(568);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(18).default)("6598143e", content, !0, { sourceMap: !1 });
    },
    567: function (t, e, r) {
      "use strict";
      r(546);
    },
    568: function (t, e, r) {
      var n = r(17)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        '.error-page[data-v-3d6f96d8]{background-color:#f3f3f3;font-family:"Segoe UI",sans-serif;overflow-x:hidden}.error-page[data-v-3d6f96d8],.error-wrapper[data-v-3d6f96d8]{align-items:center;display:flex;min-height:100vh}.error-wrapper[data-v-3d6f96d8]{flex-wrap:wrap;padding:20px;width:100%}.text-container[data-v-3d6f96d8]{animation:fadeInUp-3d6f96d8 1s ease;margin:0 auto;max-width:520px;text-align:center;transition:all .3s ease}@media (min-width:960px){.text-container[data-v-3d6f96d8]{margin-left:auto;padding-left:16px;text-align:left}}.error-title[data-v-3d6f96d8]{color:#29235c;font-size:2rem;font-weight:800;margin-bottom:1rem;text-shadow:1px 1px 2px rgba(0,0,0,.05)}.error-subtitle[data-v-3d6f96d8]{color:#555;font-size:1.3rem;line-height:1.6;margin-bottom:1.2rem;text-shadow:1px 1px 1px rgba(0,0,0,.03)}.btn-go-home[data-v-3d6f96d8]{background-color:#29235c!important;border-radius:12px;color:#fff;font-size:1.1rem;font-weight:700;margin-top:1rem;padding:12px 28px;transition:all .3s ease}.btn-go-home[data-v-3d6f96d8]:hover{background-color:#118737!important;transform:scale(1.05)}.offline-img[data-v-3d6f96d8]{animation:float-3d6f96d8 5s ease-in-out infinite;max-height:450px;max-width:100%}@media (min-width:960px){.offline-img[data-v-3d6f96d8]{max-height:580px}.error-title[data-v-3d6f96d8]{font-size:3.6rem}.error-subtitle[data-v-3d6f96d8]{font-size:1.5rem}.btn-go-home[data-v-3d6f96d8]{font-size:1.2rem;margin-top:1.5rem}}@keyframes float-3d6f96d8{0%,to{transform:translateY(0)}50%{transform:translateY(-10px)}}@keyframes fadeInUp-3d6f96d8{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}',
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    640: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = r(511),
        o = r(526),
        d = r(530),
        f = r(149),
        l = r(189),
        c = r(525),
        m = {
          name: "ErrorConexion",
          methods: {
            retry: function () {
              window.location.reload();
            },
          },
        },
        x = (r(567), r(72)),
        component = Object(x.a)(
          m,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              d.a,
              { staticClass: "error-page", attrs: { fluid: "" } },
              [
                e(
                  c.a,
                  {
                    staticClass: "error-wrapper",
                    attrs: {
                      align: "center",
                      justify: "center",
                      "no-gutters": "",
                    },
                  },
                  [
                    e(
                      o.a,
                      {
                        staticClass: "text-center order-1 order-md-2 pa-4",
                        attrs: { cols: "12", md: "6" },
                      },
                      [
                        e(l.a, {
                          staticClass: "mx-auto offline-img",
                          attrs: {
                            src: "/img/offline.png",
                            alt: "Sin conexión",
                            contain: "",
                          },
                        }),
                      ],
                      1
                    ),
                    t._v(" "),
                    e(
                      o.a,
                      {
                        staticClass: "order-2 order-md-1 pa-4",
                        attrs: { cols: "12", md: "6" },
                      },
                      [
                        e(
                          "div",
                          { staticClass: "text-container animated fadeInUp" },
                          [
                            e("h1", { staticClass: "error-title" }, [
                              t._v("¡Sin conexión a Internet!"),
                            ]),
                            t._v(" "),
                            e("p", { staticClass: "error-subtitle" }, [
                              t._v(
                                "\n          Parece que perdiste la conexión."
                              ),
                              e("br"),
                              t._v(
                                "\n          Verifica tu red y vuelve a intentarlo.\n        "
                              ),
                            ]),
                            t._v(" "),
                            e(
                              n.a,
                              {
                                staticClass: "btn-go-home",
                                attrs: { "x-large": "" },
                                on: { click: t.retry },
                              },
                              [
                                e(f.a, { attrs: { left: "" } }, [
                                  t._v("mdi-refresh"),
                                ]),
                                t._v("\n          Reintentar\n        "),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ]
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "3d6f96d8",
          null
        );
      e.default = component.exports;
    },
  },
]);
