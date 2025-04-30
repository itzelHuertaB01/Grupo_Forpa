(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    504: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      }),
        n.d(e, "b", function () {
          return l;
        }),
        n.d(e, "c", function () {
          return d;
        }),
        n.d(e, "d", function () {
          return v;
        });
      var o = n(505),
        c = n(0),
        r = Object(c.h)("v-card__actions"),
        l = Object(c.h)("v-card__subtitle"),
        d = Object(c.h)("v-card__text"),
        v = Object(c.h)("v-card__title");
      o.a;
    },
    531: function (t, e, n) {
      var content = n(532);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(18).default)("52d9b218", content, !0, { sourceMap: !1 });
    },
    532: function (t, e, n) {
      var o = n(17)(function (i) {
        return i[1];
      });
      o.push([
        t.i,
        ".v-dialog{border-radius:4px;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);margin:24px;outline:none;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{animation-duration:.15s;animation-name:animate-dialog;animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;height:100%;left:0;margin:0;overflow-y:auto;position:fixed;top:0}.v-dialog--fullscreen>.v-card{margin:0!important;min-height:100%;min-width:100%;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",
        "",
      ]),
        (o.locals = {}),
        (t.exports = o);
    },
    538: function (t, e, n) {
      "use strict";
      var o = n(55),
        c = n(2),
        r =
          (n(13),
          n(12),
          n(105),
          n(39),
          n(21),
          n(15),
          n(16),
          n(10),
          n(5),
          n(64),
          n(73),
          n(9),
          n(58),
          n(531),
          n(527)),
        l = n(129),
        d = n(155),
        v = n(241),
        f = n(242),
        h = n(239),
        m = n(240),
        x = n(156),
        _ = n(6),
        y = n(7),
        w = n(0);
      function O(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function C(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? O(Object(n), !0).forEach(function (e) {
                Object(c.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : O(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var k = Object(_.a)(d.a, v.a, f.a, h.a, m.a, l.a);
      e.a = k.extend({
        name: "v-dialog",
        directives: { ClickOutside: x.a },
        props: {
          dark: Boolean,
          disabled: Boolean,
          fullscreen: Boolean,
          light: Boolean,
          maxWidth: [String, Number],
          noClickAnimation: Boolean,
          origin: { type: String, default: "center center" },
          persistent: Boolean,
          retainFocus: { type: Boolean, default: !0 },
          scrollable: Boolean,
          transition: { type: [String, Boolean], default: "dialog-transition" },
          width: [String, Number],
        },
        data: function () {
          return {
            activatedBy: null,
            animate: !1,
            animateTimeout: -1,
            stackMinZIndex: 200,
            previousActiveElement: null,
          };
        },
        computed: {
          classes: function () {
            return Object(c.a)(
              Object(c.a)(
                Object(c.a)(
                  Object(c.a)(
                    Object(c.a)(
                      Object(c.a)(
                        {},
                        "v-dialog ".concat(this.contentClass).trim(),
                        !0
                      ),
                      "v-dialog--active",
                      this.isActive
                    ),
                    "v-dialog--persistent",
                    this.persistent
                  ),
                  "v-dialog--fullscreen",
                  this.fullscreen
                ),
                "v-dialog--scrollable",
                this.scrollable
              ),
              "v-dialog--animated",
              this.animate
            );
          },
          contentClasses: function () {
            return {
              "v-dialog__content": !0,
              "v-dialog__content--active": this.isActive,
            };
          },
          hasActivator: function () {
            return Boolean(
              !!this.$slots.activator || !!this.$scopedSlots.activator
            );
          },
        },
        watch: {
          isActive: function (t) {
            var e;
            t
              ? (this.show(), this.hideScroll())
              : (this.removeOverlay(),
                this.unbind(),
                null === (e = this.previousActiveElement) ||
                  void 0 === e ||
                  e.focus());
          },
          fullscreen: function (t) {
            this.isActive &&
              (t
                ? (this.hideScroll(), this.removeOverlay(!1))
                : (this.showScroll(), this.genOverlay()));
          },
        },
        created: function () {
          this.$attrs.hasOwnProperty("full-width") &&
            Object(y.e)("full-width", this);
        },
        beforeMount: function () {
          var t = this;
          this.$nextTick(function () {
            (t.isBooted = t.isActive), t.isActive && t.show();
          });
        },
        beforeDestroy: function () {
          "undefined" != typeof window && this.unbind();
        },
        methods: {
          animateClick: function () {
            var t = this;
            (this.animate = !1),
              this.$nextTick(function () {
                (t.animate = !0),
                  window.clearTimeout(t.animateTimeout),
                  (t.animateTimeout = window.setTimeout(function () {
                    return (t.animate = !1);
                  }, 150));
              });
          },
          closeConditional: function (t) {
            var e = t.target;
            return (
              !(
                this._isDestroyed ||
                !this.isActive ||
                this.$refs.content.contains(e) ||
                (this.overlay && e && !this.overlay.$el.contains(e))
              ) && this.activeZIndex >= this.getMaxZIndex()
            );
          },
          hideScroll: function () {
            this.fullscreen
              ? document.documentElement.classList.add("overflow-y-hidden")
              : f.a.options.methods.hideScroll.call(this);
          },
          show: function () {
            var t = this;
            !this.fullscreen && !this.hideOverlay && this.genOverlay(),
              this.$nextTick(function () {
                t.$nextTick(function () {
                  var e, n;
                  (null === (e = t.$refs.dialog) || void 0 === e
                    ? void 0
                    : e.contains(document.activeElement)) ||
                    ((t.previousActiveElement = document.activeElement),
                    null === (n = t.$refs.dialog) || void 0 === n || n.focus()),
                    t.bind();
                });
              });
          },
          bind: function () {
            window.addEventListener("focusin", this.onFocusin);
          },
          unbind: function () {
            window.removeEventListener("focusin", this.onFocusin);
          },
          onClickOutside: function (t) {
            this.$emit("click:outside", t),
              this.persistent
                ? this.noClickAnimation || this.animateClick()
                : (this.isActive = !1);
          },
          onKeydown: function (t) {
            if (t.keyCode === w.r.esc && !this.getOpenDependents().length)
              if (this.persistent) this.noClickAnimation || this.animateClick();
              else {
                this.isActive = !1;
                var e = this.getActivator();
                this.$nextTick(function () {
                  return e && e.focus();
                });
              }
            this.$emit("keydown", t);
          },
          onFocusin: function (t) {
            if (t && this.retainFocus) {
              var e = t.target;
              if (
                e &&
                this.$refs.dialog &&
                ![document, this.$refs.dialog].includes(e) &&
                !this.$refs.dialog.contains(e) &&
                this.activeZIndex >= this.getMaxZIndex() &&
                !this.getOpenDependentElements().some(function (t) {
                  return t.contains(e);
                })
              ) {
                var n = this.$refs.dialog.querySelectorAll(
                    'button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'
                  ),
                  c = Object(o.a)(n).find(function (t) {
                    return (
                      !t.hasAttribute("disabled") &&
                      !t.matches('[tabindex="-1"]')
                    );
                  });
                c && c.focus();
              }
            }
          },
          genContent: function () {
            var t = this;
            return this.showLazyContent(function () {
              return [
                t.$createElement(
                  r.a,
                  { props: { root: !0, light: t.light, dark: t.dark } },
                  [
                    t.$createElement(
                      "div",
                      {
                        class: t.contentClasses,
                        attrs: C(
                          {
                            role: "dialog",
                            "aria-modal": t.hideOverlay ? void 0 : "true",
                          },
                          t.getScopeIdAttrs()
                        ),
                        on: { keydown: t.onKeydown },
                        style: { zIndex: t.activeZIndex },
                        ref: "content",
                      },
                      [t.genTransition()]
                    ),
                  ]
                ),
              ];
            });
          },
          genTransition: function () {
            var content = this.genInnerContent();
            return this.transition
              ? this.$createElement(
                  "transition",
                  {
                    props: {
                      name: this.transition,
                      origin: this.origin,
                      appear: !0,
                    },
                  },
                  [content]
                )
              : content;
          },
          genInnerContent: function () {
            var data = {
              class: this.classes,
              attrs: { tabindex: this.isActive ? 0 : void 0 },
              ref: "dialog",
              directives: [
                {
                  name: "click-outside",
                  value: {
                    handler: this.onClickOutside,
                    closeConditional: this.closeConditional,
                    include: this.getOpenDependentElements,
                  },
                },
                { name: "show", value: this.isActive },
              ],
              style: { transformOrigin: this.origin },
            };
            return (
              this.fullscreen ||
                (data.style = C(
                  C({}, data.style),
                  {},
                  {
                    maxWidth: Object(w.g)(this.maxWidth),
                    width: Object(w.g)(this.width),
                  }
                )),
              this.$createElement("div", data, this.getContentSlot())
            );
          },
        },
        render: function (t) {
          return t(
            "div",
            {
              staticClass: "v-dialog__container",
              class: {
                "v-dialog__container--attached":
                  "" === this.attach ||
                  !0 === this.attach ||
                  "attach" === this.attach,
              },
            },
            [this.genActivator(), this.genContent()]
          );
        },
      });
    },
    552: function (t, e, n) {
      var content = n(592);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(18).default)("b54a2ec2", content, !0, { sourceMap: !1 });
    },
    591: function (t, e, n) {
      "use strict";
      n(552);
    },
    592: function (t, e, n) {
      var o = n(17)(function (i) {
        return i[1];
      });
      o.push([
        t.i,
        ".v-col[data-v-29ca07c9]{padding-left:0!important;padding-right:0!important}.v-card-title[data-v-29ca07c9]{font-weight:700}.v-card-subtitle[data-v-29ca07c9]{color:gray;font-size:16px}.v-card-text[data-v-29ca07c9]{font-size:12px;padding:0}.select-container[data-v-29ca07c9]{align-items:center;display:flex;position:relative;width:30%}.custom-select[data-v-29ca07c9]{background-color:#f3f3f3;border-radius:20px;font-size:14px;outline:none;padding-left:30px;padding-right:30px;width:100%}.custom-select option[data-v-29ca07c9]{color:#29235c;font-size:14px}.custom-icon[data-v-29ca07c9]{left:10px}.custom-icon[data-v-29ca07c9],.custom-icon-right[data-v-29ca07c9]{color:#29235c;font-size:18px;pointer-events:none;position:absolute;top:50%;transform:translateY(-50%)}.custom-icon-right[data-v-29ca07c9]{right:10px}.modal-header[data-v-29ca07c9]{background:#fff;position:sticky;top:0;z-index:1}.striped[data-v-29ca07c9]:nth-child(odd){background-color:#fff}.striped[data-v-29ca07c9]:nth-child(2n){background-color:#f5f5f5}.bold-text[data-v-29ca07c9],.label[data-v-29ca07c9]{font-weight:700}.label[data-v-29ca07c9]{color:#2e7d32}.value[data-v-29ca07c9]{color:#f44336;font-weight:700}.modal-header[data-v-29ca07c9]{font-size:18px;font-weight:700;position:relative;text-align:center}.close-button[data-v-29ca07c9]{position:absolute;right:10px;top:50%;transform:translateY(-50%)}.close-icon[data-v-29ca07c9]{font-weight:700}@media (max-width:600px){.v-col[data-v-29ca07c9]{margin-left:0!important}.v-card[data-v-29ca07c9]{max-width:350px;width:100%}.custom-select[data-v-29ca07c9]{font-size:12px}.custom-icon[data-v-29ca07c9],.custom-icon-right[data-v-29ca07c9]{font-size:14px}.select-container[data-v-29ca07c9]{width:35%}}@media (min-width:601px){.v-card[data-v-29ca07c9]{margin-left:auto;margin-right:auto;max-width:700px}}",
        "",
      ]),
        (o.locals = {}),
        (t.exports = o);
    },
    646: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n(521),
        c = n(511),
        r = n(505),
        l = n(504),
        d = n(526),
        v = n(530),
        f = n(538),
        h = n(512),
        m = n(149),
        x = n(227),
        _ = n(148),
        y = n(48),
        w = n(525),
        O =
          (n(12),
          n(63),
          n(5),
          n(43),
          n(338),
          {
            data: function () {
              return {
                selectedFilter: "Todas",
                filters: [
                  { text: "Todas", value: "Todas", icon: "mdi-all-inclusive" },
                  {
                    text: "Entregado",
                    value: "entregado",
                    icon: "mdi-checkbox-marked-circle",
                  },
                  {
                    text: "Pendiente",
                    value: "pendiente",
                    icon: "mdi-clock-outline",
                  },
                  { text: "Enviado", value: "enviado", icon: "mdi-truck" },
                  {
                    text: "Cancelado",
                    value: "cancelado",
                    icon: "mdi-close-circle",
                  },
                ],
                purchases: [],
                dialog: !1,
                selectedProducts: [],
              };
            },
            computed: {
              filteredPurchases: function () {
                var t = this;
                return "Todas" === this.selectedFilter
                  ? this.purchases
                  : this.purchases.filter(function (e) {
                      return e.estado === t.selectedFilter;
                    });
              },
              sortedPurchases: function () {
                return this.filteredPurchases.slice().sort(function (a, b) {
                  return (
                    new Date(b.fecha_levantamiento_pedido) -
                    new Date(a.fecha_levantamiento_pedido)
                  );
                });
              },
              orderedProducts: function () {
                return this.selectedProducts.slice().sort(function (a, b) {
                  return a.id_producto - b.id_producto;
                });
              },
            },
            mounted: function () {
              var t = localStorage.getItem("userId");
              t && this.fetchPurchases(t);
            },
            methods: {
              formatDate: function (t) {
                if (!t) return "";
                return new Date(t).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                });
              },
              fetchPurchases: function (t) {
                var e = this;
                this.$api
                  .getUserOrders(t, this.selectedFilter)
                  .then(function (t) {
                    e.purchases = t;
                  })
                  .catch(function (t) {
                    console.error("Error al obtener los pedidos:", t);
                  });
              },
              viewOrder: function (t) {
                var e = this;
                this.$api
                  .getOrderProducts(t.id_pedido)
                  .then(function (t) {
                    (e.selectedProducts = t), (e.dialog = !0);
                  })
                  .catch(function (t) {
                    console.error(
                      "Error al obtener los productos del pedido:",
                      t
                    );
                  });
              },
            },
          }),
        C = (n(591), n(72)),
        component = Object(C.a)(
          O,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              o.a,
              [
                e(
                  v.a,
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
                      w.a,
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
                            e(h.a, {
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
                                    t._s(t.sortedPurchases.length) +
                                    " compras\n        "
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
                      w.a,
                      t._l(t.sortedPurchases, function (n, o) {
                        return e(
                          d.a,
                          { key: n.id_pedido, attrs: { cols: "12" } },
                          [
                            e(
                              r.a,
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
                                  cursor: "pointer",
                                },
                                attrs: { outlined: "" },
                                on: {
                                  click: function (e) {
                                    return t.viewOrder(n);
                                  },
                                },
                              },
                              [
                                e(
                                  l.d,
                                  {
                                    staticClass:
                                      "d-flex justify-content-between align-center",
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
                                      [
                                        t._v(
                                          "\n              " +
                                            t._s(
                                              t.formatDate(
                                                n.fecha_levantamiento_pedido
                                              )
                                            ) +
                                            "\n            "
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                e(h.a),
                                t._v(" "),
                                e(
                                  l.b,
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
                                        "Entregado" === n.estado
                                          ? "#247323"
                                          : "orange",
                                    },
                                  },
                                  [
                                    t._v(
                                      "\n            " +
                                        t._s(n.estado) +
                                        "\n          "
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                "Entregado" === n.estado
                                  ? e(
                                      l.b,
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
                                            t._s(
                                              t.formatDate(
                                                n.fecha_levantamiento_pedido
                                              )
                                            ) +
                                            "\n          "
                                        ),
                                      ]
                                    )
                                  : t._e(),
                                t._v(" "),
                                e(
                                  l.c,
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
                                      [t._v("Dirección: " + t._s(n.direccion))]
                                    ),
                                    t._v(" "),
                                    e(
                                      "p",
                                      {
                                        staticStyle: {
                                          margin: "0",
                                          color: "grey",
                                        },
                                      },
                                      [t._v("Total: $" + t._s(n.total))]
                                    ),
                                    t._v(" "),
                                    n.metodo_de_pago
                                      ? e(
                                          "p",
                                          {
                                            staticStyle: {
                                              "font-size": "12px",
                                              color: "#757575",
                                              margin: "1",
                                            },
                                          },
                                          [
                                            t._v(
                                              "\n              Método de pago: " +
                                                t._s(n.metodo_de_pago) +
                                                "\n            "
                                            ),
                                          ]
                                        )
                                      : t._e(),
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
                    t._v(" "),
                    e(
                      f.a,
                      {
                        attrs: { "max-width": "600px" },
                        model: {
                          value: t.dialog,
                          callback: function (e) {
                            t.dialog = e;
                          },
                          expression: "dialog",
                        },
                      },
                      [
                        e(
                          r.a,
                          [
                            e(
                              l.d,
                              { staticClass: "modal-header" },
                              [
                                t._v(
                                  "\n          Productos del pedido\n          "
                                ),
                                e(
                                  c.a,
                                  {
                                    staticClass: "close-button",
                                    attrs: { icon: "" },
                                    on: {
                                      click: function (e) {
                                        t.dialog = !1;
                                      },
                                    },
                                  },
                                  [
                                    e(m.a, { staticClass: "close-icon" }, [
                                      t._v("mdi-close"),
                                    ]),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            t._v(" "),
                            e(h.a),
                            t._v(" "),
                            e(
                              l.c,
                              {
                                staticStyle: {
                                  "max-height": "400px",
                                  "overflow-y": "auto",
                                },
                              },
                              [
                                e(
                                  x.a,
                                  { attrs: { "two-line": "" } },
                                  [
                                    t._l(t.orderedProducts, function (n, o) {
                                      return e(
                                        _.a,
                                        { key: o, staticClass: "striped" },
                                        [
                                          e(
                                            y.a,
                                            [
                                              e(
                                                y.c,
                                                { staticClass: "bold-text" },
                                                [t._v(t._s(n.descripcion))]
                                              ),
                                              t._v(" "),
                                              e(y.b, [
                                                e(
                                                  "span",
                                                  { staticClass: "label" },
                                                  [t._v("Cantidad:")]
                                                ),
                                                t._v(" "),
                                                e(
                                                  "span",
                                                  { staticClass: "value" },
                                                  [t._v(t._s(n.cantidad))]
                                                ),
                                                t._v(" -\n                  "),
                                                e(
                                                  "span",
                                                  { staticClass: "label" },
                                                  [t._v("Precio unitario:")]
                                                ),
                                                t._v(" "),
                                                e(
                                                  "span",
                                                  { staticClass: "value" },
                                                  [
                                                    t._v(
                                                      "$" +
                                                        t._s(n.precio_unitario)
                                                    ),
                                                  ]
                                                ),
                                              ]),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      );
                                    }),
                                    t._v(" "),
                                    0 === t.orderedProducts.length
                                      ? e(
                                          _.a,
                                          [
                                            e(
                                              y.a,
                                              [
                                                e(y.c, [
                                                  t._v(
                                                    "No se encontraron productos para este pedido."
                                                  ),
                                                ]),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        )
                                      : t._e(),
                                  ],
                                  2
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
              ],
              1
            );
          },
          [],
          !1,
          null,
          "29ca07c9",
          null
        );
      e.default = component.exports;
    },
  },
]);
