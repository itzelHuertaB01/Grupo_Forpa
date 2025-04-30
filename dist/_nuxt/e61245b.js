(window.webpackJsonp = window.webpackJsonp || []).push([
  [19],
  {
    504: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      }),
        n.d(e, "b", function () {
          return d;
        }),
        n.d(e, "c", function () {
          return l;
        }),
        n.d(e, "d", function () {
          return f;
        });
      var o = n(505),
        c = n(0),
        r = Object(c.h)("v-card__actions"),
        d = Object(c.h)("v-card__subtitle"),
        l = Object(c.h)("v-card__text"),
        f = Object(c.h)("v-card__title");
      o.a;
    },
    557: function (t, e, n) {
      var content = n(604);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(18).default)("4f340b55", content, !0, { sourceMap: !1 });
    },
    603: function (t, e, n) {
      "use strict";
      n(557);
    },
    604: function (t, e, n) {
      var o = n(17)(function (i) {
        return i[1];
      });
      o.push([
        t.i,
        ".card-no-shadow[data-v-4b8dae09]{box-shadow:none!important}.white-text[data-v-4b8dae09]{color:#fff!important}.v-col[data-v-4b8dae09]{padding-left:0!important;padding-right:0!important}.v-card-title[data-v-4b8dae09],.v-chip[data-v-4b8dae09]{font-weight:700}h1[data-v-4b8dae09]{color:#29235c;font-size:24px;margin-bottom:20px}.v-card-subtitle[data-v-4b8dae09]{color:gray;font-size:16px}.v-card-text[data-v-4b8dae09]{font-size:12px;padding:0}.select-container[data-v-4b8dae09]{align-items:center;display:flex;position:relative;width:30%}.custom-select[data-v-4b8dae09]{background-color:#f3f3f3;border-radius:20px;font-size:14px;outline:none;padding-left:30px;padding-right:30px;width:100%}.custom-select option[data-v-4b8dae09]{color:#29235c;font-size:14px}.custom-icon[data-v-4b8dae09]{left:10px}.custom-icon[data-v-4b8dae09],.custom-icon-right[data-v-4b8dae09]{color:#29235c;font-size:18px;pointer-events:none;position:absolute;top:50%;transform:translateY(-50%)}.custom-icon-right[data-v-4b8dae09]{right:10px}@media (max-width:600px){.v-col[data-v-4b8dae09]{margin-left:0!important}.v-card[data-v-4b8dae09]{max-width:350px;width:100%}.custom-select[data-v-4b8dae09]{font-size:12px}.custom-icon[data-v-4b8dae09],.custom-icon-right[data-v-4b8dae09]{font-size:14px}.select-container[data-v-4b8dae09]{width:35%}}@media (min-width:601px){.v-card[data-v-4b8dae09]{margin-left:auto;margin-right:auto;max-width:700px}}",
        "",
      ]),
        (o.locals = {}),
        (t.exports = o);
    },
    649: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n(521),
        c = n(505),
        r = n(504),
        d = n(526),
        l = n(530),
        f = n(512),
        v = n(525),
        m =
          (n(13),
          n(74),
          n(12),
          n(63),
          n(5),
          {
            layout: "preventista",
            head: function () {
              return {
                title: "Historial - Preventista",
                meta: [{ name: "historial", content: "Preventista" }],
              };
            },
            data: function () {
              return {
                selectedFilter: "Todas",
                filters: [
                  { text: "Todas", value: "Todas", icon: "mdi-all-inclusive" },
                  {
                    text: "Entregado",
                    value: "Entregado",
                    icon: "mdi-checkbox-marked-circle",
                  },
                  {
                    text: "Pendiente",
                    value: "Pendiente",
                    icon: "mdi-clock-outline",
                  },
                ],
                purchases: [
                  {
                    date: "2023-01-23",
                    status: "Entregado",
                    description: "Estuche con 50 cuchillas SKA",
                    details: "2023-01-28",
                    units: 1,
                  },
                  {
                    date: "2023-01-10",
                    status: "Entregado",
                    description: "Estuche con 50 cuchillas SKA",
                    details: "2023-01-15",
                    units: 20,
                  },
                  {
                    date: "2025-02-05",
                    status: "Entregado",
                    description: "Estuche con 50 cuchillas SKA",
                    details: "2025-02-10",
                    units: 1,
                  },
                  {
                    date: "2025-02-18",
                    status: "Entregado",
                    description: "Estuche con 50 cuchillas SKA",
                    details: "2025-02-26",
                    units: 20,
                  },
                  {
                    date: "2025-03-01",
                    status: "Pendiente",
                    description: "Estuche con 50 cuchillas SKA",
                    details: "Esperando fecha de entrega",
                    units: 10,
                  },
                  {
                    date: "2025-03-05",
                    status: "Pendiente",
                    description: "Estuche con 50 cuchillas SKA",
                    details: "Esperando fecha de entrega",
                    units: 5,
                  },
                ],
              };
            },
            computed: {
              filteredPurchases: function () {
                var t = this;
                return "Todas" === this.selectedFilter
                  ? this.purchases
                  : this.purchases.filter(function (e) {
                      return e.status === t.selectedFilter;
                    });
              },
            },
            methods: {
              formatDate: function (t) {
                return new Date(t).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                });
              },
            },
          }),
        h = (n(603), n(72)),
        component = Object(h.a)(
          m,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              o.a,
              [
                e(
                  l.a,
                  {
                    staticClass: "d-flex flex-column",
                    staticStyle: {
                      padding: "10px",
                      "background-color": "#F3F3F3",
                    },
                    attrs: { fluid: "" },
                  },
                  [
                    e(
                      v.a,
                      {
                        staticClass: "d-flex align-center",
                        staticStyle: { "margin-bottom": "0" },
                      },
                      [
                        e(
                          d.a,
                          {
                            staticClass: "d-flex align-center",
                            attrs: { cols: "12", sm: "6" },
                          },
                          [
                            e("div", { staticClass: "select-container" }, [
                              e("i", {
                                staticClass: "mdi mdi-tune-variant custom-icon",
                              }),
                              t._v(" "),
                              e(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: t.selectedFilter,
                                      expression: "selectedFilter",
                                    },
                                  ],
                                  staticClass: "custom-select",
                                  on: {
                                    change: function (e) {
                                      var n = Array.prototype.filter
                                        .call(e.target.options, function (t) {
                                          return t.selected;
                                        })
                                        .map(function (t) {
                                          return "_value" in t
                                            ? t._value
                                            : t.value;
                                        });
                                      t.selectedFilter = e.target.multiple
                                        ? n
                                        : n[0];
                                    },
                                  },
                                },
                                t._l(t.filters, function (filter, n) {
                                  return e(
                                    "option",
                                    {
                                      key: n,
                                      domProps: { value: filter.value },
                                    },
                                    [
                                      t._v(
                                        "\n              " +
                                          t._s(filter.text) +
                                          "\n            "
                                      ),
                                    ]
                                  );
                                }),
                                0
                              ),
                              t._v(" "),
                              e("i", {
                                staticClass:
                                  "mdi mdi-menu-down custom-icon-right",
                              }),
                            ]),
                            t._v(" "),
                            e(f.a, {
                              staticStyle: {
                                height: "40px",
                                "border-left": "2px solid #7A7A7A",
                                "margin-left": "20px",
                                "margin-right": "10px",
                              },
                              attrs: { vertical: "" },
                            }),
                            t._v(" "),
                            e(
                              "span",
                              {
                                staticStyle: {
                                  "font-size": "14px",
                                  color: "#7A7A7A",
                                  "font-weight": "500",
                                },
                              },
                              [
                                t._v(
                                  "\n          " +
                                    t._s(t.filteredPurchases.length) +
                                    " Compras\n        "
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    t._v(" "),
                    e(
                      v.a,
                      t._l(t.filteredPurchases, function (n, o) {
                        return e(
                          d.a,
                          { key: o, attrs: { cols: "12" } },
                          [
                            e(
                              c.a,
                              {
                                staticClass: "mb-4",
                                staticStyle: {
                                  "max-width": "1200px",
                                  "margin-left": "auto",
                                  "margin-right": "auto",
                                  "background-color": "#ffffff",
                                  "border-radius": "16px",
                                  height: "200px",
                                  padding: "8px",
                                  display: "flex",
                                  "flex-direction": "column",
                                  "justify-content": "space-between",
                                  overflow: "hidden",
                                },
                                attrs: { outlined: "" },
                              },
                              [
                                e(
                                  r.d,
                                  {
                                    staticClass:
                                      "d-flex justify-between align-center",
                                    staticStyle: { "padding-bottom": "2px" },
                                  },
                                  [
                                    e(
                                      "span",
                                      {
                                        staticStyle: {
                                          "font-size": "20px",
                                          color: "#29235C",
                                          margin: "0",
                                        },
                                      },
                                      [t._v(t._s(t.formatDate(n.date)))]
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                e(f.a),
                                t._v(" "),
                                e(
                                  r.b,
                                  {
                                    staticClass: "text-h6",
                                    staticStyle: {
                                      "margin-top": "2px",
                                      color: "#29235C",
                                      "font-size": "12px",
                                      padding: "5px",
                                      "margin-left": "11px",
                                    },
                                    style: {
                                      color:
                                        "Entregado" === n.status
                                          ? "#247323"
                                          : "orange",
                                    },
                                  },
                                  [
                                    t._v(
                                      "\n            " +
                                        t._s(n.status) +
                                        "\n          "
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                "Entregado" === n.status
                                  ? e(
                                      r.b,
                                      {
                                        staticClass: "text-body-2",
                                        staticStyle: {
                                          "font-weight": "bold",
                                          color: "black",
                                          "font-size": "12px",
                                          padding: "1px",
                                          "margin-left": "15px",
                                        },
                                      },
                                      [
                                        t._v(
                                          "\n            Llegó el " +
                                            t._s(t.formatDate(n.details)) +
                                            "\n          "
                                        ),
                                      ]
                                    )
                                  : t._e(),
                                t._v(" "),
                                e(
                                  r.c,
                                  {
                                    staticStyle: {
                                      "font-size": "14px",
                                      "overflow-y": "auto",
                                      padding: "1px",
                                      "margin-left": "15px",
                                    },
                                  },
                                  [
                                    e(
                                      "p",
                                      {
                                        staticStyle: {
                                          margin: "0",
                                          color: "grey",
                                        },
                                      },
                                      [t._v(t._s(n.description))]
                                    ),
                                    t._v(" "),
                                    e(
                                      "p",
                                      {
                                        staticStyle: {
                                          "font-size": "12px",
                                          color: "#757575",
                                          margin: "1",
                                        },
                                      },
                                      [t._v(t._s(n.units) + " Unidad(es)")]
                                    ),
                                  ]
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
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "4b8dae09",
          null
        );
      e.default = component.exports;
    },
  },
]);
