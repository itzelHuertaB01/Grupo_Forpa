(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    231: function (t, e, o) {
      "use strict";
      o.r(e);
      var r = o(511),
        n = o(149),
        c = o(189),
        l = o(227),
        d = o(148),
        m = o(228),
        f = o(124),
        v = o(48),
        h = o(523),
        x = o(524),
        _ =
          (o(60),
          {
            name: "Sidebar",
            props: { role: { type: String, required: !0 } },
            data: function () {
              return { selectedItem: null, isCollapsed: !1 };
            },
            computed: {
              isLargeScreen: function () {
                return this.$vuetify.breakpoint.lgAndUp;
              },
              menuItems: function () {
                switch (this.role) {
                  case "admin":
                    return [
                      {
                        text: "Inicio",
                        icon: "mdi-home",
                        route: "/admin/Index_Admin",
                      },
                      {
                        text: "Productos",
                        icon: "mdi-shopping",
                        route: "/admin/Orders_Admin",
                      },
                      {
                        text: "Usuarios",
                        icon: "mdi-account",
                        route: "/admin/Users_Admin",
                      },
                      {
                        text: "Catálogos",
                        icon: "mdi-book-open",
                        route: "/admin/UploadFiles_Admin",
                      },
                    ];
                  case "cliente":
                    return [
                      {
                        text: "Inicio",
                        icon: "mdi-home",
                        route: "/client/Home_Cli",
                      },
                      {
                        text: "Ver Pedidos",
                        icon: "mdi-shopping",
                        route: "/client/Orders_Cli",
                      },
                      {
                        text: "Historial",
                        icon: "mdi-clipboard-text-clock",
                        route: "/client/History_Cli",
                      },
                      {
                        text: "Catálogo",
                        icon: "mdi-book-open",
                        route: "/client/Catalog_Cli",
                      },
                      {
                        text: "Ofertas",
                        icon: "mdi-tag-outline",
                        route: "/client/Ofertas_Cli",
                      },
                    ];
                  case "preventista":
                    return [
                      {
                        text: "Inicio",
                        icon: "mdi-home",
                        route: "/preventive/Shopping_Pre",
                      },
                      {
                        text: "Ver Pedidos",
                        icon: "mdi-shopping",
                        route: "/preventive/Orders_Pre",
                      },
                      {
                        text: "Historial",
                        icon: "mdi-clipboard-text-clock",
                        route: "/preventive/History_Pre",
                      },
                      {
                        text: "Catálogo",
                        icon: "mdi-book-open",
                        route: "/preventive/Catalog_Pre",
                      },
                      {
                        text: "Ofertas",
                        icon: "mdi-tag",
                        route: "/preventive/Offers_Pre",
                      },
                    ];
                  default:
                    return [];
                }
              },
            },
            methods: {
              isSelected: function (t) {
                return this.$route.path.startsWith(t);
              },
              toggleMenu: function () {
                this.isCollapsed = !this.isCollapsed;
              },
            },
          }),
        C = (o(447), o(72)),
        component = Object(C.a)(
          _,
          function () {
            var t = this,
              e = t._self._c;
            return t.isLargeScreen
              ? e(
                  h.a,
                  {
                    staticClass: "custom-sidebar",
                    attrs: {
                      app: "",
                      permanent: !t.isCollapsed,
                      "mini-variant": !1,
                      color: "#08093F",
                      dark: "",
                      width: t.isCollapsed ? 100 : 250,
                    },
                  },
                  [
                    e(
                      "div",
                      { staticClass: "logo-container" },
                      [
                        e(c.a, {
                          staticClass: "logo-img",
                          attrs: {
                            src: t.isCollapsed
                              ? "/img/Logo_min.png"
                              : "/img/Logo.png",
                            contain: "",
                            height: "80",
                          },
                        }),
                      ],
                      1
                    ),
                    t._v(" "),
                    e(
                      l.a,
                      { attrs: { dense: "" } },
                      [
                        e(
                          m.a,
                          {
                            model: {
                              value: t.selectedItem,
                              callback: function (e) {
                                t.selectedItem = e;
                              },
                              expression: "selectedItem",
                            },
                          },
                          t._l(t.menuItems, function (o, r) {
                            return e(
                              d.a,
                              {
                                key: r,
                                staticClass: "menu-item",
                                class: {
                                  "selected-item": t.isSelected(o.route),
                                },
                                attrs: { to: o.route },
                              },
                              [
                                e(
                                  f.a,
                                  [
                                    e(
                                      n.a,
                                      {
                                        class: {
                                          "selected-icon": t.isSelected(
                                            o.route
                                          ),
                                        },
                                      },
                                      [t._v(t._s(o.icon))]
                                    ),
                                  ],
                                  1
                                ),
                                t._v(" "),
                                t.isCollapsed
                                  ? t._e()
                                  : e(
                                      v.c,
                                      {
                                        class: {
                                          "selected-text": t.isSelected(
                                            o.route
                                          ),
                                        },
                                      },
                                      [
                                        t._v(
                                          "\n          " +
                                            t._s(o.text) +
                                            "\n        "
                                        ),
                                      ]
                                    ),
                              ],
                              1
                            );
                          }),
                          1
                        ),
                      ],
                      1
                    ),
                    t._v(" "),
                    e(x.a),
                    t._v(" "),
                    e(
                      l.a,
                      { attrs: { dense: "" } },
                      [
                        e(
                          d.a,
                          {
                            staticClass: "logout-item",
                            attrs: { to: "/logout" },
                          },
                          [
                            e(f.a, [e(n.a, [t._v("mdi-logout")])], 1),
                            t._v(" "),
                            t.isCollapsed ? t._e() : e(v.c, [t._v("Salir")]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    t._v(" "),
                    e(
                      r.a,
                      {
                        staticClass: "toggle-btn",
                        attrs: { icon: "", dark: "" },
                        on: { click: t.toggleMenu },
                      },
                      [
                        e(n.a, [
                          t._v(
                            t._s(
                              t.isCollapsed
                                ? "mdi-chevron-right"
                                : "mdi-chevron-left"
                            )
                          ),
                        ]),
                      ],
                      1
                    ),
                  ],
                  1
                )
              : t._e();
          },
          [],
          !1,
          null,
          "1ad847ec",
          null
        );
      e.default = component.exports;
    },
    232: function (t, e, o) {
      "use strict";
      o.r(e);
      var r = o(529),
        n = o(230),
        c = o(528),
        l = o(511),
        d = o(505),
        m = o(526),
        f = o(530),
        v = o(512),
        h = o(149),
        x = o(227),
        _ = o(148),
        C = o(48),
        w = o(124),
        k = o(513),
        y = o(523),
        S = o(525),
        P = o(515),
        I =
          (o(105),
          o(89),
          o(63),
          o(43),
          o(5),
          o(28),
          o(59),
          o(60),
          o(73),
          {
            name: "Navbar",
            props: { role: { type: String, required: !0 } },
            data: function () {
              return {
                drawer: !1,
                searchTerm: "",
                notificaciones: [
                  {
                    titulo:
                      "📢 Oferta especial en Estuche con 50 cuchillas SKA",
                    mensaje:
                      "Precio público: $125 | Precio Mayoreo: $90.52. ¡Aprovecha la promoción esta semana!",
                    fecha: "01/03",
                  },
                  {
                    titulo: "🔄 Reposición de stock: Martillo de uña",
                    mensaje:
                      "Clave: H-UÑA-16 | Código: 100102. ¡Ya está disponible nuevamente en tienda!",
                    fecha: "02/03",
                  },
                  {
                    titulo: "⚡ Descuento en Destornilladores de punta plana",
                    mensaje:
                      "Clave: DST-PLANA-6 | Código: 100103. Obtén un 15% de descuento en tu compra.",
                    fecha: "03/03",
                  },
                  {
                    titulo:
                      "🚀 Últimas piezas disponibles: Llave ajustable 10”",
                    mensaje:
                      "Clave: LLAVE-AJ-10 | Código: 100104. ¡Solo quedan 5 unidades en stock!",
                    fecha: "04/03",
                  },
                  {
                    titulo:
                      "🛠️ Nueva herramienta en catálogo: Serrucho profesional",
                    mensaje:
                      "Clave: SERR-PRO-12 | Código: 100105. ¡Ya disponible en nuestra tienda!",
                    fecha: "05/03",
                  },
                  {
                    titulo: "🎯 Promoción en taladros industriales",
                    mensaje:
                      "Clave: TAL-IND-20 | Código: 100106. ¡Descuento del 20% esta semana!",
                    fecha: "06/03",
                  },
                ],
              };
            },
            computed: {
              menuItems: function () {
                switch (this.role) {
                  case "admin":
                    return [
                      {
                        text: "Inicio",
                        icon: "mdi-home-outline",
                        route: "/admin/Index_Admin",
                      },
                      {
                        text: "Usuarios",
                        icon: "mdi-account-outline",
                        route: "/admin/Users_Admin",
                      },
                      {
                        text: "Productos",
                        icon: "mdi-shopping-outline",
                        route: "/admin/Orders_Admin",
                      },
                      {
                        text: "Catálogos",
                        icon: "mdi-book-open-outline",
                        route: "/admin/UploadFiles_Admin",
                      },
                      { text: "Salir", icon: "mdi-logout", route: "/logout" },
                    ];
                  case "preventista":
                    return [
                      {
                        text: "Inicio",
                        icon: "mdi-home-outline",
                        route: "/preventive/Shopping_Pre",
                      },
                      {
                        text: "Notificaciones",
                        icon: "mdi-bell-outline",
                        route: "/preventive/Notifications_Pre",
                      },
                      {
                        text: "Ver Pedidos",
                        icon: "mdi-shopping-outline",
                        route: "/preventive/Orders_Pre",
                      },
                      {
                        text: "Historial",
                        icon: "mdi-clipboard-text-clock-outline",
                        route: "/preventive/History_Pre",
                      },
                      {
                        text: "Catálogo",
                        icon: "mdi-book-open-outline",
                        route: "/preventive/Catalog_Pre",
                      },
                      {
                        text: "Ofertas",
                        icon: "mdi-tag-outline",
                        route: "/preventive/Offers_Pre",
                      },
                      { text: "Salir", icon: "mdi-logout", route: "/logout" },
                    ];
                  default:
                    return [
                      {
                        text: "Inicio",
                        icon: "mdi-home-outline",
                        route: "/client/Home_Cli",
                      },
                      {
                        text: "Notificaciones",
                        icon: "mdi-bell-outline",
                        route: "/client/Notifications_Cli",
                      },
                      {
                        text: "Ver Pedidos",
                        icon: "mdi-shopping-outline",
                        route: "/client/Orders_Cli",
                      },
                      {
                        text: "Historial",
                        icon: "mdi-clipboard-text-clock-outline",
                        route: "/client/History_Cli",
                      },
                      {
                        text: "Catálogo",
                        icon: "mdi-book-open-outline",
                        route: "/client/Catalog_Cli",
                      },
                      {
                        text: "Ofertas",
                        icon: "mdi-tag-outline",
                        route: "/client/Ofertas_Cli",
                      },
                      { text: "Salir", icon: "mdi-logout", route: "/logout" },
                    ];
                }
              },
              currentTitle: function () {
                var path = this.$route.path,
                  t = this.menuItems.find(function (t) {
                    return path.startsWith(t.route);
                  });
                return t ? t.text : "Inicio";
              },
              avatarSize: function () {
                return this.$vuetify.breakpoint.smAndDown ? 35 : 45;
              },
              isMobile: function () {
                return this.$vuetify.breakpoint.mdAndDown;
              },
              clientName: function () {
                return localStorage.getItem("clientName") || "Sin nombre";
              },
              clientRole: function () {
                return localStorage.getItem("clientRole") || "Cliente";
              },
              clientFullName: function () {
                return this.clientName
                  .split(" ")
                  .map(function (t) {
                    return t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
                  })
                  .join(" ");
              },
              clientFormattedRole: function () {
                return this.clientRole
                  .split(" ")
                  .map(function (t) {
                    return t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
                  })
                  .join(" ");
              },
            },
            methods: {
              searchProducts: function () {
                var path = "/client/Home_Cli";
                "" !== this.searchTerm.trim()
                  ? this.$router.replace({
                      path: path,
                      query: { term: this.searchTerm.trim() },
                    })
                  : this.$router.replace({ path: path });
              },
            },
          }),
        O = (o(478), o(72)),
        component = Object(O.a)(
          I,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              [
                e(
                  r.a,
                  {
                    staticClass: "custom-app-bar",
                    attrs: { app: "", color: "#F3F3F3", elevation: "0" },
                  },
                  [
                    e(
                      f.a,
                      { staticClass: "pa-0", attrs: { fluid: "" } },
                      [
                        e(
                          S.a,
                          {
                            staticClass: "w-100 mt-2",
                            attrs: {
                              align: "center",
                              justify: "space-between",
                              "no-gutters": "",
                            },
                          },
                          [
                            t.isMobile
                              ? e(
                                  m.a,
                                  {
                                    staticClass: "pl-2",
                                    attrs: { cols: "auto" },
                                  },
                                  [
                                    e(
                                      l.a,
                                      {
                                        attrs: { icon: "" },
                                        on: {
                                          click: function (e) {
                                            t.drawer = !t.drawer;
                                          },
                                        },
                                      },
                                      [
                                        e(
                                          h.a,
                                          { attrs: { color: "#08093F" } },
                                          [t._v("mdi-menu")]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                )
                              : t._e(),
                            t._v(" "),
                            e(
                              m.a,
                              {
                                staticClass: "pl-2 text-title",
                                attrs: { cols: "auto" },
                              },
                              [
                                e("h1", { staticClass: "font-weight-bold" }, [
                                  t._v(t._s(t.currentTitle)),
                                ]),
                              ]
                            ),
                            t._v(" "),
                            e(
                              m.a,
                              {
                                staticClass:
                                  "d-flex justify-center flex-grow-1 px-2",
                              },
                              [
                                e(P.a, {
                                  staticClass: "custom-search",
                                  attrs: {
                                    placeholder: "Buscar...",
                                    "prepend-inner-icon": "mdi-magnify",
                                    "append-icon": "mdi-microphone",
                                    solo: "",
                                    dense: "",
                                    "hide-details": "",
                                  },
                                  on: { input: t.searchProducts },
                                  model: {
                                    value: t.searchTerm,
                                    callback: function (e) {
                                      t.searchTerm = e;
                                    },
                                    expression: "searchTerm",
                                  },
                                }),
                              ],
                              1
                            ),
                            t._v(" "),
                            t.isMobile
                              ? t._e()
                              : e(
                                  m.a,
                                  {
                                    staticClass: "d-flex align-center pr-2",
                                    attrs: { cols: "auto" },
                                  },
                                  [
                                    e(
                                      k.a,
                                      {
                                        attrs: { "offset-y": "", left: "" },
                                        scopedSlots: t._u(
                                          [
                                            {
                                              key: "activator",
                                              fn: function (o) {
                                                var r = o.on,
                                                  n = o.attrs;
                                                return [
                                                  e(
                                                    l.a,
                                                    t._g(
                                                      t._b(
                                                        {
                                                          staticClass:
                                                            "custom-notification",
                                                          attrs: { icon: "" },
                                                        },
                                                        "v-btn",
                                                        n,
                                                        !1
                                                      ),
                                                      r
                                                    ),
                                                    [
                                                      t.notificaciones.length
                                                        ? e(
                                                            c.a,
                                                            {
                                                              attrs: {
                                                                color: "red",
                                                                content:
                                                                  t
                                                                    .notificaciones
                                                                    .length,
                                                              },
                                                            },
                                                            [
                                                              e(
                                                                h.a,
                                                                {
                                                                  attrs: {
                                                                    color:
                                                                      "#08093F",
                                                                  },
                                                                },
                                                                [
                                                                  t._v(
                                                                    "mdi-bell"
                                                                  ),
                                                                ]
                                                              ),
                                                            ],
                                                            1
                                                          )
                                                        : e(
                                                            h.a,
                                                            {
                                                              attrs: {
                                                                color:
                                                                  "#08093F",
                                                              },
                                                            },
                                                            [t._v("mdi-bell")]
                                                          ),
                                                    ],
                                                    1
                                                  ),
                                                ];
                                              },
                                            },
                                          ],
                                          null,
                                          !1,
                                          4216076217
                                        ),
                                      },
                                      [
                                        t._v(" "),
                                        e(
                                          d.a,
                                          { attrs: { width: "350px" } },
                                          [
                                            e(
                                              x.a,
                                              {
                                                staticStyle: {
                                                  "max-height": "400px",
                                                  "overflow-y": "auto",
                                                },
                                              },
                                              t._l(
                                                t.notificaciones,
                                                function (o, r) {
                                                  return e(
                                                    "div",
                                                    {
                                                      key: r,
                                                      staticClass:
                                                        "notification-item",
                                                    },
                                                    [
                                                      e(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "d-flex justify-space-between align-center",
                                                        },
                                                        [
                                                          e(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "notification-title",
                                                            },
                                                            [
                                                              t._v(
                                                                t._s(o.titulo)
                                                              ),
                                                            ]
                                                          ),
                                                          t._v(" "),
                                                          e(
                                                            "small",
                                                            {
                                                              staticClass:
                                                                "text-muted",
                                                            },
                                                            [
                                                              t._v(
                                                                t._s(o.fecha)
                                                              ),
                                                            ]
                                                          ),
                                                        ]
                                                      ),
                                                      t._v(" "),
                                                      e(
                                                        "p",
                                                        {
                                                          staticClass:
                                                            "notification-text",
                                                        },
                                                        [t._v(t._s(o.mensaje))]
                                                      ),
                                                      t._v(" "),
                                                      r !==
                                                      t.notificaciones.length -
                                                        1
                                                        ? e(v.a)
                                                        : t._e(),
                                                    ],
                                                    1
                                                  );
                                                }
                                              ),
                                              0
                                            ),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                    t._v(" "),
                                    e(
                                      "div",
                                      {
                                        staticClass: "d-flex align-center ml-4",
                                      },
                                      [
                                        e(
                                          "div",
                                          {
                                            staticClass:
                                              "d-flex flex-column text-right mr-3",
                                          },
                                          [
                                            e(
                                              "span",
                                              {
                                                staticClass:
                                                  "text-primary font-weight-medium",
                                              },
                                              [t._v(t._s(t.clientFullName))]
                                            ),
                                            t._v(" "),
                                            e(
                                              "small",
                                              { staticClass: "text-muted" },
                                              [
                                                t._v(
                                                  t._s(t.clientFormattedRole)
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e(n.a, {
                                          staticClass: "grey lighten-2",
                                          attrs: { size: t.avatarSize },
                                        }),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                t._v(" "),
                t.isMobile
                  ? e(
                      y.a,
                      {
                        staticClass: "custom-drawer",
                        attrs: { app: "", temporary: "" },
                        model: {
                          value: t.drawer,
                          callback: function (e) {
                            t.drawer = e;
                          },
                          expression: "drawer",
                        },
                      },
                      [
                        e(
                          "div",
                          { staticClass: "user-info" },
                          [
                            e(
                              "div",
                              { staticClass: "close-button" },
                              [
                                e(
                                  l.a,
                                  {
                                    attrs: { icon: "" },
                                    on: {
                                      click: function (e) {
                                        t.drawer = !1;
                                      },
                                    },
                                  },
                                  [
                                    e(h.a, { attrs: { color: "white" } }, [
                                      t._v("mdi-close"),
                                    ]),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            t._v(" "),
                            e(n.a, {
                              staticClass: "avatar-overlay mb-2",
                              attrs: { size: "60" },
                            }),
                            t._v(" "),
                            e("div", { staticClass: "user-text" }, [
                              e(
                                "span",
                                {
                                  staticClass:
                                    "text-primary font-weight-medium",
                                },
                                [t._v(t._s(t.clientFullName))]
                              ),
                              t._v(" "),
                              e("p", { staticClass: "mb-0" }, [
                                t._v(t._s(t.clientFormattedRole)),
                              ]),
                            ]),
                          ],
                          1
                        ),
                        t._v(" "),
                        e(
                          x.a,
                          t._l(t.menuItems, function (o) {
                            return e(
                              "router-link",
                              {
                                key: o.route,
                                staticClass: "menu-link",
                                attrs: { to: o.route },
                              },
                              [
                                e(
                                  _.a,
                                  {
                                    class: {
                                      "active-menu-item":
                                        t.$route.path === o.route,
                                    },
                                    attrs: { clickable: "" },
                                  },
                                  [
                                    e(
                                      w.a,
                                      [
                                        "/notificaciones" === o.route &&
                                        t.notificaciones.length
                                          ? e(
                                              c.a,
                                              {
                                                attrs: {
                                                  color: "red",
                                                  content:
                                                    t.notificaciones.length,
                                                },
                                              },
                                              [
                                                e(
                                                  h.a,
                                                  {
                                                    attrs: { color: "#29235C" },
                                                  },
                                                  [t._v(t._s(o.icon))]
                                                ),
                                              ],
                                              1
                                            )
                                          : e(
                                              h.a,
                                              { attrs: { color: "#29235C" } },
                                              [t._v(t._s(o.icon))]
                                            ),
                                      ],
                                      1
                                    ),
                                    t._v(" "),
                                    e(
                                      C.a,
                                      [
                                        e(C.c, { staticClass: "menu-text" }, [
                                          t._v(t._s(o.text)),
                                        ]),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            );
                          }),
                          1
                        ),
                      ],
                      1
                    )
                  : t._e(),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "0b8e27a9",
          null
        );
      e.default = component.exports;
    },
    237: function (t, e, o) {
      "use strict";
      var r = o(34);
      o(106), o(5);
      e.a = function (t, e) {
        var o = t.$axios;
        o.onRequest(function (t) {
          var e =
            localStorage.getItem("accessToken") ||
            sessionStorage.getItem("accessToken");
          return e && (t.headers.Authorization = "Bearer ".concat(e)), t;
        }),
          o.onError(
            (function () {
              var t = Object(r.a)(
                regeneratorRuntime.mark(function t(e) {
                  var r, n, c, l;
                  return regeneratorRuntime.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              ((r = e.response),
                              401 !== (void 0 === r ? {} : r).status)
                            ) {
                              t.next = 16;
                              break;
                            }
                            return (
                              (t.prev = 2),
                              (n =
                                localStorage.getItem("refreshToken") ||
                                sessionStorage.getItem("refreshToken")),
                              (t.next = 6),
                              o.$post("/clientes/refresh-token", null, {
                                headers: { "x-refresh-token": n },
                              })
                            );
                          case 6:
                            return (
                              (c = t.sent),
                              (l = c.accessToken),
                              localStorage.getItem("accessToken")
                                ? localStorage.setItem("accessToken", l)
                                : sessionStorage.setItem("accessToken", l),
                              (e.config.headers.Authorization =
                                "Bearer ".concat(l)),
                              t.abrupt("return", o.request(e.config))
                            );
                          case 13:
                            (t.prev = 13),
                              (t.t0 = t.catch(2)),
                              console.error(
                                "Refresh token inválido o expirado:",
                                t.t0
                              );
                          case 16:
                            return t.abrupt("return", Promise.reject(e));
                          case 17:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[2, 13]]
                  );
                })
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })()
          );
        var n = {
          login: function (t) {
            return o.$post("/clientes/login", t);
          },
          getClientes: function () {
            return o.$get("/clientes/getAll");
          },
          getProductos: function (t) {
            return o.$get("/productos/productos", { params: t });
          },
          searchProductos: function (t, e) {
            return o.$post(
              "productos/buscarByname",
              { term: t },
              { params: e }
            );
          },
          createOrder: function (data) {
            return o.$post("/pedidos", data);
          },
          addProductToOrder: function (data) {
            return o.$post("/pedidos/add-product", data);
          },
          getOrderProducts: function (t) {
            return o.$get("/pedidos/productos/".concat(t));
          },
          getUserOrders: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "Todas";
            return o.$get("/pedidos/user/".concat(t), {
              params: { estado: e },
            });
          },
          refreshToken: function () {
            return o.$post("/clientes/refresh-token");
          },
        };
        e("api", n);
      };
    },
    313: function (t, e, o) {
      var content = o(404);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(18).default)("36b005b6", content, !0, { sourceMap: !1 });
    },
    317: function (t, e, o) {
      var content = o(448);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(18).default)("2b9e1aaf", content, !0, { sourceMap: !1 });
    },
    319: function (t, e, o) {
      var content = o(479);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(18).default)("6874b8f6", content, !0, { sourceMap: !1 });
    },
    320: function (t, e, o) {
      var content = o(481);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(18).default)("50b05d02", content, !0, { sourceMap: !1 });
    },
    334: function (t, e, o) {
      "use strict";
      var r = o(521),
        n = o(522),
        c = (o(60), o(231)),
        l = o(232),
        d = {
          components: { Sidebar: c.default, Navbar: l.default },
          computed: {
            showLayout: function () {
              return "/" !== this.$route.path;
            },
            userRole: function () {
              var path = this.$route.path.toLowerCase();
              return path.startsWith("/admin")
                ? "admin"
                : path.startsWith("/client")
                ? "cliente"
                : path.startsWith("/preventive")
                ? "preventista"
                : "cliente";
            },
          },
        },
        m = (o(480), o(72)),
        component = Object(m.a)(
          d,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              r.a,
              [
                t.showLayout
                  ? e("Sidebar", { attrs: { role: t.userRole } })
                  : t._e(),
                t._v(" "),
                t.showLayout
                  ? e("Navbar", { attrs: { role: t.userRole } })
                  : t._e(),
                t._v(" "),
                e(n.a, { staticClass: "page-wrapper" }, [e("Nuxt")], 1),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "c3c57abc",
          null
        );
      e.a = component.exports;
      installComponents(component, {
        Sidebar: o(231).default,
        Navbar: o(232).default,
      });
    },
    342: function (t, e, o) {
      o(343), (t.exports = o(344));
    },
    403: function (t, e, o) {
      "use strict";
      o(313);
    },
    404: function (t, e, o) {
      var r = o(17)(function (i) {
        return i[1];
      });
      r.push([t.i, "h1[data-v-35e10596]{font-size:20px}", ""]),
        (r.locals = {}),
        (t.exports = r);
    },
    447: function (t, e, o) {
      "use strict";
      o(317);
    },
    448: function (t, e, o) {
      var r = o(17)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        ".custom-sidebar[data-v-1ad847ec]{border-bottom-right-radius:30px;border-top-right-radius:30px}.logo-container[data-v-1ad847ec]{align-items:center;display:flex;height:100px;justify-content:center;padding:20px}.logo-img[data-v-1ad847ec]{height:80px;opacity:1;transition:opacity .3s ease-in-out}.menu-item[data-v-1ad847ec]{margin-left:15px;padding:10px 16px}.selected-item[data-v-1ad847ec]{background-color:#f3f3f3!important;border-bottom-left-radius:30px;border-top-left-radius:30px;color:transparent!important}.selected-icon[data-v-1ad847ec],.selected-text[data-v-1ad847ec]{color:#08093f!important}.selected-text[data-v-1ad847ec]{font-weight:700}.v-spacer[data-v-1ad847ec]{flex-grow:1}.logout-item[data-v-1ad847ec]{margin-left:15px;padding:10px 16px}.toggle-btn[data-v-1ad847ec]{background-color:transparent;border-radius:50%;bottom:20px;color:#fff;position:absolute;right:30px;z-index:10}",
        "",
      ]),
        (r.locals = {}),
        (t.exports = r);
    },
    478: function (t, e, o) {
      "use strict";
      o(319);
    },
    479: function (t, e, o) {
      var r = o(17)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        '.custom-search[data-v-0b8e27a9]{border-radius:24px;margin:0 50px;max-width:none;width:100%}.custom-notification[data-v-0b8e27a9]{align-items:center;background:#e0e0e0;border-radius:50%;display:flex;justify-content:center}.v-avatar[data-v-0b8e27a9]{margin-left:10px}.text-title h1[data-v-0b8e27a9]{font-size:38px}@media (max-width:960px){.text-title h1[data-v-0b8e27a9]{font-size:28px}.custom-search[data-v-0b8e27a9]{margin:0 30px}}@media (max-width:600px){.text-title h1[data-v-0b8e27a9]{font-size:18px}.custom-search[data-v-0b8e27a9]{margin:0 10px}}.custom-app-bar[data-v-0b8e27a9]{background-color:#f3f3f3}.custom-drawer[data-v-0b8e27a9]{border-bottom-right-radius:30px;border-top-right-radius:30px;padding-top:0!important}.custom-drawer .v-list[data-v-0b8e27a9],.custom-drawer .v-list-item[data-v-0b8e27a9],.custom-drawer .v-navigation-drawer__content[data-v-0b8e27a9]{margin-top:0!important;padding-top:0!important}.close-button[data-v-0b8e27a9]{position:absolute;right:10px;top:10px;z-index:3}.user-info[data-v-0b8e27a9]{align-items:center;background:url(/img/fondo_noti.png) no-repeat top;background-size:cover;color:#fff;display:flex;flex-direction:column;height:180px;justify-content:center;margin-bottom:5px;overflow:hidden;padding-top:20px;position:relative;text-align:center}.avatar-overlay[data-v-0b8e27a9]{background:hsla(0,0%,100%,.5);margin-bottom:10px;margin-top:10px}.user-text span[data-v-0b8e27a9]{font-size:16px;margin-bottom:2px}.user-text p[data-v-0b8e27a9]{font-size:14px;margin-top:0}.menu-text[data-v-0b8e27a9]{color:#29235c;font-weight:700;margin-left:8px}.active-menu-item[data-v-0b8e27a9]{border-left:3px solid #29235c!important;border-radius:3px;margin-left:5px}.active-menu-item[data-v-0b8e27a9]:before{bottom:15%;content:"";display:block;left:0;position:absolute;top:15%;width:3px}.text-muted[data-v-0b8e27a9]{color:#757575}.notification-item[data-v-0b8e27a9]{background-color:#fff;cursor:default;min-height:80px;padding:12px 16px;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.notification-item[data-v-0b8e27a9],.notification-title[data-v-0b8e27a9]{white-space:normal;word-wrap:break-word}.notification-title[data-v-0b8e27a9]{font-size:16px;font-weight:700}.notification-text[data-v-0b8e27a9]{font-size:14px;white-space:normal;word-wrap:break-word}.v-list-item[data-v-0b8e27a9]{pointer-events:auto}.v-list-item[data-v-0b8e27a9]:hover{background-color:transparent!important}.v-list[data-v-0b8e27a9]{padding:0}.v-divider[data-v-0b8e27a9]{margin:0}',
        "",
      ]),
        (r.locals = {}),
        (t.exports = r);
    },
    480: function (t, e, o) {
      "use strict";
      o(320);
    },
    481: function (t, e, o) {
      var r = o(17)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        "body[data-v-c3c57abc],html[data-v-c3c57abc]{background-color:#f3f3f3!important;margin:0;padding:0}.page-wrapper[data-v-c3c57abc],body[data-v-c3c57abc],html[data-v-c3c57abc]{min-height:100vh;width:100%}.page-wrapper[data-v-c3c57abc]{background-color:#f3f3f3}.v-main[data-v-c3c57abc]{height:100vh;margin:0;padding:0}",
        "",
      ]),
        (r.locals = {}),
        (t.exports = r);
    },
    96: function (t, e, o) {
      "use strict";
      var r = o(521),
        n = {
          name: "EmptyLayout",
          layout: "empty",
          props: { error: { type: Object, default: null } },
          data: function () {
            return {
              pageNotFound: "404 Not Found",
              otherError: "An error occurred",
            };
          },
          head: function () {
            return {
              title:
                404 === this.error.statusCode
                  ? this.pageNotFound
                  : this.otherError,
            };
          },
        },
        c = (o(403), o(72)),
        component = Object(c.a)(
          n,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              r.a,
              { attrs: { dark: "" } },
              [
                404 === t.error.statusCode
                  ? e("h1", [t._v("\n    " + t._s(t.pageNotFound) + "\n  ")])
                  : e("h1", [t._v("\n    " + t._s(t.otherError) + "\n  ")]),
                t._v(" "),
                e("NuxtLink", { attrs: { to: "/" } }, [
                  t._v("\n    Home page\n  "),
                ]),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "35e10596",
          null
        );
      e.a = component.exports;
    },
  },
  [[342, 25, 2, 26]],
]);
