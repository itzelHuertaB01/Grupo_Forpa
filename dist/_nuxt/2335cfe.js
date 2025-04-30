(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    547: function (t, e, d) {
      var content = d(577);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, d(18).default)("4b376850", content, !0, { sourceMap: !1 });
    },
    576: function (t, e, d) {
      "use strict";
      d(547);
    },
    577: function (t, e, d) {
      var r = d(17)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        ".order-list[data-v-1a0d5bf8]{display:flex;flex-direction:column;max-width:100%;min-height:100%;overflow-x:hidden}.fill-height[data-v-1a0d5bf8]{height:100%}.orders-container[data-v-1a0d5bf8]{overflow-x:visible;padding:0 16px 16px;width:100%}.date-group[data-v-1a0d5bf8]{background-color:#fff;border-radius:4px;box-shadow:0 1px 3px rgba(0,0,0,.1);overflow:hidden;width:100%}.filter-select[data-v-1a0d5bf8]{max-width:180px}.date-header[data-v-1a0d5bf8]{background-color:#fff;font-size:16px;font-weight:500}.date-tag[data-v-1a0d5bf8]{color:#757575;font-size:12px}.order-item[data-v-1a0d5bf8]{width:100%}.order-content[data-v-1a0d5bf8]{display:flex;flex-wrap:wrap;padding:16px;width:100%}.order-left[data-v-1a0d5bf8]{flex:1;margin-bottom:16px;min-width:200px;padding-right:16px}.order-center[data-v-1a0d5bf8]{flex:1;flex-direction:column;margin-bottom:16px;text-align:center}.order-center[data-v-1a0d5bf8],.order-right[data-v-1a0d5bf8]{align-items:center;display:flex;min-width:200px}.order-right[data-v-1a0d5bf8]{flex:1;flex-wrap:wrap;justify-content:flex-end}.order-number[data-v-1a0d5bf8]{color:#2e7d32}.order-location[data-v-1a0d5bf8],.order-number[data-v-1a0d5bf8]{margin-bottom:8px}.product-description[data-v-1a0d5bf8]{margin-bottom:4px}.customer-name[data-v-1a0d5bf8]{font-weight:500;margin-bottom:10px}.message-btn-container[data-v-1a0d5bf8]{display:flex;justify-content:center;width:100%}.send-message-btn[data-v-1a0d5bf8],.view-order-btn[data-v-1a0d5bf8]{letter-spacing:0;text-transform:none}.view-order-btn[data-v-1a0d5bf8]{margin-bottom:8px}.status-btn[data-v-1a0d5bf8]{background-color:#f1f8e9;color:#558b2f;letter-spacing:0;text-transform:none}@media (min-width:960px){.orders-container[data-v-1a0d5bf8]{padding:0 24px 24px}.order-content[data-v-1a0d5bf8]{flex-wrap:nowrap}.order-center[data-v-1a0d5bf8],.order-left[data-v-1a0d5bf8],.order-right[data-v-1a0d5bf8]{margin-bottom:0}.order-center[data-v-1a0d5bf8]{text-align:center}.view-order-btn[data-v-1a0d5bf8]{margin-bottom:0}}@media (min-width:600px) and (max-width:959px){.orders-container[data-v-1a0d5bf8]{padding:0 20px 20px}.order-content[data-v-1a0d5bf8]{flex-wrap:wrap}.order-left[data-v-1a0d5bf8]{flex:0 0 45%}.order-center[data-v-1a0d5bf8]{align-items:flex-end;flex:0 0 45%;text-align:right}.order-right[data-v-1a0d5bf8]{flex:0 0 100%;justify-content:flex-end;margin-top:16px}.status-btn[data-v-1a0d5bf8],.view-order-btn[data-v-1a0d5bf8]{margin-bottom:0}}@media (max-width:599px){.orders-container[data-v-1a0d5bf8]{padding:0 12px 12px}.order-content[data-v-1a0d5bf8]{flex-direction:column;flex-wrap:wrap}.order-center[data-v-1a0d5bf8],.order-left[data-v-1a0d5bf8],.order-right[data-v-1a0d5bf8]{align-items:center;flex:0 0 100%;justify-content:center;min-width:100%;text-align:center}.order-center[data-v-1a0d5bf8],.order-left[data-v-1a0d5bf8]{margin-bottom:16px}.order-right[data-v-1a0d5bf8]{flex-direction:column;width:100%}.status-btn[data-v-1a0d5bf8],.view-order-btn[data-v-1a0d5bf8]{margin-right:0!important;width:100%}.view-order-btn[data-v-1a0d5bf8]{margin-bottom:8px}}",
        "",
      ]),
        (r.locals = {}),
        (t.exports = r);
    },
    642: function (t, e, d) {
      "use strict";
      d.r(e);
      var r = d(511),
        n = d(512),
        o = d(149),
        l = d(227),
        c = d(148),
        f = d(48),
        v = d(513),
        m = d(635),
        x =
          (d(105),
          d(5),
          d(244),
          d(9),
          {
            name: "OrderList",
            layout: "admin",
            head: function () {
              return {
                title: "Inicio - Administrador",
                meta: [{ name: "inicio", content: "Administrador" }],
              };
            },
            data: function () {
              return {
                selectedFilter: "Todos",
                filterOptions: [
                  "Todos",
                  "Pendientes",
                  "Completados",
                  "Cancelados",
                ],
                totalOrders: 500,
                statusOptions: [
                  "Pendiente",
                  "En proceso",
                  "Completado",
                  "Cancelado",
                ],
                orders: [
                  {
                    id: "01565",
                    date: "25 de febrero",
                    location: "TUZUAPAN",
                    product: "Estuche con 50 cuchillas SKA",
                    quantity: "1 Unidad",
                    customer: "Lizeth Huerta Beristain",
                    status: "Pendiente",
                  },
                  {
                    id: "01566",
                    date: "10 de enero",
                    location: "PALMARITO",
                    product: "Estuche con 50 cuchillas SKA",
                    quantity: "20 Unidades",
                    customer: "Valeria Vázquez Castillo",
                    status: "Pendiente",
                  },
                  {
                    id: "01567",
                    date: "10 de enero",
                    location: "TECAMACHALCO",
                    product: "Estuche con 50 cuchillas SKA",
                    quantity: "10 Unidades",
                    customer: "Cristina Escalante Torres",
                    status: "Pendiente",
                  },
                  {
                    id: "01568",
                    date: "20 de diciembre de 2024",
                    location: "TEPEACA",
                    product: "Estuche con 50 cuchillas SKA",
                    quantity: "10 Unidades",
                    customer: "Willy Martinez Valerio",
                    status: "Pendiente",
                  },
                ],
              };
            },
            computed: {
              groupedOrders: function () {
                var t = {};
                return (
                  this.orders.forEach(function (e) {
                    t[e.date] ||
                      (t[e.date] = {
                        date: e.date,
                        orders: [],
                        tag: e.tag || null,
                      }),
                      t[e.date].orders.push(e);
                  }),
                  Object.values(t)
                );
              },
            },
            methods: {
              updateStatus: function (t, e) {
                var d = this.orders.find(function (e) {
                  return e.id === t;
                });
                d && (d.status = e);
              },
            },
          }),
        h = (d(576), d(72)),
        component = Object(h.a)(
          x,
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "order-list fill-height" }, [
              e(
                "div",
                { staticClass: "d-flex align-center mb-6 px-4" },
                [
                  e(m.a, {
                    staticClass: "filter-select mr-4",
                    attrs: {
                      items: t.filterOptions,
                      dense: "",
                      outlined: "",
                      "hide-details": "",
                      "prepend-inner-icon": "mdi-filter-variant",
                    },
                    model: {
                      value: t.selectedFilter,
                      callback: function (e) {
                        t.selectedFilter = e;
                      },
                      expression: "selectedFilter",
                    },
                  }),
                  t._v(" "),
                  e(
                    "div",
                    { staticClass: "order-count grey--text text--darken-1" },
                    [t._v(t._s(t.totalOrders) + " pedidos")]
                  ),
                ],
                1
              ),
              t._v(" "),
              e(
                "div",
                { staticClass: "orders-container" },
                t._l(t.groupedOrders, function (d, m) {
                  return e(
                    "div",
                    { key: m, staticClass: "date-group mb-6" },
                    [
                      e("div", { staticClass: "date-header pa-4" }, [
                        t._v("\n        " + t._s(d.date) + "\n        "),
                        d.tag
                          ? e("span", { staticClass: "date-tag ml-2" }, [
                              t._v(t._s(d.tag)),
                            ])
                          : t._e(),
                      ]),
                      t._v(" "),
                      e(n.a),
                      t._v(" "),
                      t._l(d.orders, function (d) {
                        return e(
                          "div",
                          { key: d.id, staticClass: "order-item" },
                          [
                            e("div", { staticClass: "order-content" }, [
                              e("div", { staticClass: "order-left" }, [
                                e(
                                  "div",
                                  { staticClass: "order-number success--text" },
                                  [t._v(t._s(d.id))]
                                ),
                                t._v(" "),
                                e(
                                  "div",
                                  {
                                    staticClass:
                                      "order-location font-weight-bold",
                                  },
                                  [t._v(t._s(d.location))]
                                ),
                                t._v(" "),
                                e(
                                  "div",
                                  { staticClass: "product-description" },
                                  [t._v(t._s(d.product))]
                                ),
                                t._v(" "),
                                e(
                                  "div",
                                  { staticClass: "order-quantity grey--text" },
                                  [t._v(t._s(d.quantity))]
                                ),
                              ]),
                              t._v(" "),
                              e("div", { staticClass: "order-center" }, [
                                e("div", { staticClass: "customer-name" }, [
                                  t._v(t._s(d.customer)),
                                ]),
                                t._v(" "),
                                e(
                                  "div",
                                  { staticClass: "message-btn-container" },
                                  [
                                    e(
                                      r.a,
                                      {
                                        staticClass: "send-message-btn px-0",
                                        attrs: {
                                          text: "",
                                          small: "",
                                          color: "success",
                                        },
                                      },
                                      [
                                        e(
                                          o.a,
                                          { attrs: { small: "", left: "" } },
                                          [t._v("mdi-email-outline")]
                                        ),
                                        t._v(
                                          "\n                Enviar Mensaje\n              "
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ]),
                              t._v(" "),
                              e(
                                "div",
                                { staticClass: "order-right" },
                                [
                                  e(
                                    r.a,
                                    {
                                      staticClass: "mr-3 view-order-btn",
                                      attrs: { color: "success", outlined: "" },
                                    },
                                    [
                                      t._v(
                                        "\n              Ver Pedido\n            "
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  e(
                                    v.a,
                                    {
                                      attrs: { "offset-y": "", left: "" },
                                      scopedSlots: t._u(
                                        [
                                          {
                                            key: "activator",
                                            fn: function (d) {
                                              var n = d.on,
                                                l = d.attrs;
                                              return [
                                                e(
                                                  r.a,
                                                  t._g(
                                                    t._b(
                                                      {
                                                        staticClass:
                                                          "status-btn",
                                                        attrs: {
                                                          outlined: "",
                                                          color:
                                                            "light-green lighten-3",
                                                        },
                                                      },
                                                      "v-btn",
                                                      l,
                                                      !1
                                                    ),
                                                    n
                                                  ),
                                                  [
                                                    t._v(
                                                      "\n                  Estado\n                  "
                                                    ),
                                                    e(
                                                      o.a,
                                                      { attrs: { right: "" } },
                                                      [t._v("mdi-chevron-down")]
                                                    ),
                                                  ],
                                                  1
                                                ),
                                              ];
                                            },
                                          },
                                        ],
                                        null,
                                        !0
                                      ),
                                    },
                                    [
                                      t._v(" "),
                                      e(
                                        l.a,
                                        t._l(t.statusOptions, function (r, i) {
                                          return e(
                                            c.a,
                                            {
                                              key: i,
                                              on: {
                                                click: function (e) {
                                                  return t.updateStatus(
                                                    d.id,
                                                    r
                                                  );
                                                },
                                              },
                                            },
                                            [e(f.c, [t._v(t._s(r))])],
                                            1
                                          );
                                        }),
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ]),
                            t._v(" "),
                            e(n.a),
                          ],
                          1
                        );
                      }),
                    ],
                    2
                  );
                }),
                0
              ),
            ]);
          },
          [],
          !1,
          null,
          "1a0d5bf8",
          null
        );
      e.default = component.exports;
    },
  },
]);
