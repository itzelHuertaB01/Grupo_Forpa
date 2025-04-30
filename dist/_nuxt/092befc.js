(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    504: function (t, e, o) {
      "use strict";
      o.d(e, "a", function () {
        return c;
      }),
        o.d(e, "b", function () {
          return d;
        }),
        o.d(e, "c", function () {
          return l;
        }),
        o.d(e, "d", function () {
          return f;
        });
      var n = o(505),
        r = o(0),
        c = Object(r.h)("v-card__actions"),
        d = Object(r.h)("v-card__subtitle"),
        l = Object(r.h)("v-card__text"),
        f = Object(r.h)("v-card__title");
      n.a;
    },
    531: function (t, e, o) {
      var content = o(532);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(18).default)("52d9b218", content, !0, { sourceMap: !1 });
    },
    532: function (t, e, o) {
      var n = o(17)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".v-dialog{border-radius:4px;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);margin:24px;outline:none;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{animation-duration:.15s;animation-name:animate-dialog;animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;height:100%;left:0;margin:0;overflow-y:auto;position:fixed;top:0}.v-dialog--fullscreen>.v-card{margin:0!important;min-height:100%;min-width:100%;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    538: function (t, e, o) {
      "use strict";
      var n = o(55),
        r = o(2),
        c =
          (o(13),
          o(12),
          o(105),
          o(39),
          o(21),
          o(15),
          o(16),
          o(10),
          o(5),
          o(64),
          o(73),
          o(9),
          o(58),
          o(531),
          o(527)),
        d = o(129),
        l = o(155),
        f = o(241),
        v = o(242),
        h = o(239),
        m = o(240),
        x = o(156),
        _ = o(6),
        w = o(7),
        y = o(0);
      function C(t, e) {
        var o = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            o.push.apply(o, n);
        }
        return o;
      }
      function O(t) {
        for (var e = 1; e < arguments.length; e++) {
          var o = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? C(Object(o), !0).forEach(function (e) {
                Object(r.a)(t, e, o[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
            : C(Object(o)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(o, e)
                );
              });
        }
        return t;
      }
      var k = Object(_.a)(l.a, f.a, v.a, h.a, m.a, d.a);
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
            return Object(r.a)(
              Object(r.a)(
                Object(r.a)(
                  Object(r.a)(
                    Object(r.a)(
                      Object(r.a)(
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
            Object(w.e)("full-width", this);
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
              : v.a.options.methods.hideScroll.call(this);
          },
          show: function () {
            var t = this;
            !this.fullscreen && !this.hideOverlay && this.genOverlay(),
              this.$nextTick(function () {
                t.$nextTick(function () {
                  var e, o;
                  (null === (e = t.$refs.dialog) || void 0 === e
                    ? void 0
                    : e.contains(document.activeElement)) ||
                    ((t.previousActiveElement = document.activeElement),
                    null === (o = t.$refs.dialog) || void 0 === o || o.focus()),
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
            if (t.keyCode === y.r.esc && !this.getOpenDependents().length)
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
                var o = this.$refs.dialog.querySelectorAll(
                    'button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'
                  ),
                  r = Object(n.a)(o).find(function (t) {
                    return (
                      !t.hasAttribute("disabled") &&
                      !t.matches('[tabindex="-1"]')
                    );
                  });
                r && r.focus();
              }
            }
          },
          genContent: function () {
            var t = this;
            return this.showLazyContent(function () {
              return [
                t.$createElement(
                  c.a,
                  { props: { root: !0, light: t.light, dark: t.dark } },
                  [
                    t.$createElement(
                      "div",
                      {
                        class: t.contentClasses,
                        attrs: O(
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
                (data.style = O(
                  O({}, data.style),
                  {},
                  {
                    maxWidth: Object(y.g)(this.maxWidth),
                    width: Object(y.g)(this.width),
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
    548: function (t, e, o) {
      var content = o(584);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(18).default)("2b04845d", content, !0, { sourceMap: !1 });
    },
    583: function (t, e, o) {
      "use strict";
      o(548);
    },
    584: function (t, e, o) {
      var n = o(17)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".fondo{background-color:#f3f3f3;height:100%}.chip-filtro{align-items:center;border-radius:20px;display:flex;flex:1 1 auto;justify-content:center;margin:12px 12px 30px;max-width:calc(10% - 12px);min-width:100px;text-align:center;white-space:nowrap}.productos-container,.productos-wrapper{display:flex;flex-direction:column}.productos-container{background-color:#fff;border-radius:12px;overflow:hidden}.producto-card{background-color:#e6e6e6;border-radius:12px;cursor:pointer;margin-bottom:10px;padding-left:20px;padding-right:10px}.pedidos-card{background-color:#fff;border-radius:12px;padding:16px}.pedido-item{padding-bottom:15px}.pedido-item,.v-divider{margin-bottom:15px}.cantidad-container{align-items:center;display:flex;justify-content:space-between;padding-right:15px}.cantidad-wrapper{align-items:center;background-color:#fff;border:2px solid #c9c9c9;border-radius:8px;display:flex;margin-left:15px;min-width:60px;padding:4px 8px}.cantidad-box,.cantidad-wrapper{transition:width .2s ease-in-out}.cantidad-box{border:none;font-size:16px;font-weight:700;max-width:70px;min-width:30px;padding:0;text-align:center;width:auto}.cantidad-btn-outline{align-items:center;background:#fff!important;border:none;color:#08093f!important;display:flex;height:28px;justify-content:center;width:28px}.precio-dinamico{font-size:16px;font-weight:700;min-width:80px;text-align:right;transition:width .2s ease-in-out;white-space:nowrap}.disponibles{color:#c9c9c9;font-size:12px;margin-top:20px}.eliminar-btn{width:100px}.total-container{align-items:center;display:flex;font-size:20px;font-weight:700;justify-content:space-between;margin-top:15px}.encargar-btn{border-radius:12px;font-size:18px}.decoracion-verde{background-color:#247323;border-bottom-left-radius:12px;border-top-left-radius:12px;height:100%;left:0;position:absolute;top:0;width:14px}.boton-azul{background-color:#08093f!important;border-radius:50%}.boton-azul:hover{background-color:#181bb9!important}.verde{background-color:#247323!important}.verde--text{color:#247323!important}.producto-detalle{background-color:transparent;padding-left:20px;padding-right:20px}.detalle-col p{margin-bottom:5px}.detalle-col{display:flex;flex-direction:column;justify-content:flex-start}.boton-inferior-movil{display:none}.v-dialog{overflow:hidden}.v-card,.v-dialog{border-radius:12px}.v-card-text{padding:16px}.v-card-actions{display:flex;flex-direction:column;gap:8px;padding:16px}.encargar-btn{background-color:#08093f!important;font-size:16px;padding:12px}.eliminar-btn,.encargar-btn{border-radius:8px;color:#fff!important;font-weight:700;text-transform:uppercase;width:100%}.eliminar-btn{background-color:#247323!important;font-size:14px;padding:6px 10px}@media screen and (max-width:600px){.boton-inferior-movil{background-color:#08093f!important;border-radius:12px;bottom:20px;box-shadow:0 4px 6px rgba(0,0,0,.1);color:#fff!important;display:block;font-size:16px;font-weight:700;left:10%;padding:12px 24px;position:fixed;width:80%;z-index:1000}.fondo{padding:8px}.chip-filtro{font-size:10px;margin:6px 6px 15px;max-width:calc(25% - 6px);min-width:70px}.productos-wrapper{flex-direction:column}.productos-container{max-height:50vh;padding:8px}.producto-info{font-size:12px}.producto-card{font-size:14px;margin-bottom:8px;padding-left:8px;padding-right:8px}.pedidos-card{max-height:50vh;padding:12px}.pedido-item{font-size:14px;margin-bottom:10px;padding-bottom:10px}.cantidad-container{padding-right:8px}.cantidad-wrapper{min-width:50px;padding:2px 6px}.cantidad-box{font-size:14px;max-width:50px;min-width:20px}.cantidad-btn-outline{font-size:12px;height:24px;width:24px}.precio-dinamico{font-size:14px;min-width:60px}.disponibles{font-size:10px}.eliminar-btn{font-size:12px;padding:4px 8px;width:80px}.total-container{font-size:16px;margin-top:10px}.encargar-btn{font-size:16px;padding:10px}.producto-detalle{font-size:14px;padding-left:10px;padding-right:10px}.detalle-col p{margin-bottom:3px}.boton-azul{height:32px!important;width:32px!important}.boton-azul v-icon{font-size:18px!important}}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    643: function (t, e, o) {
      "use strict";
      o.r(e);
      var n = o(511),
        r = o(505),
        c = o(504),
        d = o(536),
        l = o(657),
        f = o(526),
        v = o(530),
        h = o(538),
        m = o(512),
        x = o(128),
        _ = o(149),
        w = o(525),
        y = o(515),
        C = (o(337), o(2));
      o(12), o(13), o(105), o(194), o(15), o(16), o(10), o(5), o(9);
      function O(t, e) {
        var o = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            o.push.apply(o, n);
        }
        return o;
      }
      function k(t) {
        for (var e = 1; e < arguments.length; e++) {
          var o = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? O(Object(o), !0).forEach(function (e) {
                Object(C.a)(t, e, o[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
            : O(Object(o)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(o, e)
                );
              });
        }
        return t;
      }
      var j = {
          name: "OrderList",
          layout: "admin",
          head: function () {
            return {
              title: "Productos - Administrador",
              meta: [{ name: "productos", content: "Administrador" }],
            };
          },
          data: function () {
            return {
              dialog: !1,
              marcas: [
                "Todo",
                "Truper",
                "Expert",
                "Hermex",
                "Fiero",
                "Foset",
                "Klintek",
                "Pretul",
                "Ultracraft",
                "Volteck",
              ],
              productos: [
                {
                  nombre: "Estuche con 50 cuchillas SKA",
                  marca: "Truper",
                  clave: "REP-CUT-650",
                  codigo: "100101",
                  precio: 125,
                  precioMayoreo: 90.52,
                  peso: "0.368",
                  unidad: "Set",
                  descripcion:
                    "Estuche con 50 cuchillas SK4 de 18 mm para cutter, Truper.",
                  mostrarDetalles: !1,
                },
                {
                  nombre: "Martillo de uña",
                  marca: "Truper",
                  clave: "H-UÑA-16",
                  codigo: "100102",
                  precio: 250,
                  precioMayoreo: 200,
                  peso: "0.500",
                  unidad: "Pieza",
                  descripcion:
                    "Martillo de uña de acero forjado con mango de fibra de vidrio.",
                  mostrarDetalles: !1,
                },
                {
                  nombre: "Destornillador de punta plana",
                  marca: "Expert",
                  clave: "DST-PLANA-6",
                  codigo: "100103",
                  precio: 80,
                  precioMayoreo: 65,
                  peso: "0.250",
                  unidad: "Pieza",
                  descripcion:
                    "Destornillador de punta plana de 6 pulgadas con mango ergonómico.",
                  mostrarDetalles: !1,
                },
                {
                  nombre: "Llave ajustable 10”",
                  marca: "Truper",
                  clave: "LLAVE-AJ-10",
                  codigo: "100104",
                  precio: 150,
                  precioMayoreo: 120,
                  peso: "0.750",
                  unidad: "Pieza",
                  descripcion:
                    "Llave ajustable de 10 pulgadas en acero forjado.",
                  mostrarDetalles: !1,
                },
                {
                  nombre: "Cinta métrica de 5m",
                  marca: "Pretul",
                  clave: "CINTA-MET-5M",
                  codigo: "100105",
                  precio: 95,
                  precioMayoreo: 75,
                  peso: "0.350",
                  unidad: "Pieza",
                  descripcion:
                    "Cinta métrica de 5 metros con carcasa de plástico resistente.",
                  mostrarDetalles: !1,
                },
                {
                  nombre: "Flexómetro de 8m",
                  marca: "Fiero",
                  clave: "FLEX-8M",
                  codigo: "100106",
                  precio: 180,
                  precioMayoreo: 140,
                  peso: "0.450",
                  unidad: "Pieza",
                  descripcion:
                    "Flexómetro de 8 metros con gancho magnético y cinta reforzada.",
                  mostrarDetalles: !1,
                },
                {
                  nombre: "Pinza de corte diagonal 6”",
                  marca: "Volteck",
                  clave: "PINZA-CORTE-6",
                  codigo: "100107",
                  precio: 130,
                  precioMayoreo: 100,
                  peso: "0.400",
                  unidad: "Pieza",
                  descripcion:
                    "Pinza de corte diagonal de 6 pulgadas en acero al cromo-vanadio.",
                  mostrarDetalles: !1,
                },
              ],
              marcaSeleccionada: "Todo",
              carrito: [],
            };
          },
          computed: {
            productosFiltrados: function () {
              var t = this;
              return "Todo" === this.marcaSeleccionada
                ? this.productos
                : this.productos.filter(function (p) {
                    return p.marca === t.marcaSeleccionada;
                  });
            },
            totalCarrito: function () {
              return this.carrito.reduce(function (t, e) {
                return t + e.precio * e.cantidad;
              }, 0);
            },
          },
          methods: {
            filtrarMarca: function (t) {
              this.marcaSeleccionada = t;
            },
            toggleDetalles: function (t) {
              this.productos[t].mostrarDetalles =
                !this.productos[t].mostrarDetalles;
            },
            agregarACarrito: function (t) {
              var e = this.carrito.find(function (p) {
                return p.clave === t.clave;
              });
              e
                ? e.cantidad++
                : this.carrito.push(k(k({}, t), {}, { cantidad: 1 }));
            },
            modificarCantidad: function (t, e) {
              (this.carrito[t].cantidad += e),
                this.carrito[t].cantidad <= 0 && this.carrito.splice(t, 1);
            },
          },
        },
        z = (o(583), o(72)),
        component = Object(z.a)(
          j,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              v.a,
              { staticClass: "fondo", attrs: { fluid: "" } },
              [
                e(
                  w.a,
                  { attrs: { "no-gutters": "" } },
                  [
                    e(
                      f.a,
                      {
                        staticClass: "productos-wrapper d-flex flex-wrap",
                        attrs: { cols: "12" },
                      },
                      [
                        e(
                          l.a,
                          {
                            staticClass: "d-flex flex-wrap justify-center",
                            attrs: { "active-class": "verde white--text" },
                          },
                          t._l(t.marcas, function (o, i) {
                            return e(
                              d.a,
                              {
                                key: i,
                                staticClass: "chip-filtro",
                                on: {
                                  click: function (e) {
                                    return t.filtrarMarca(o);
                                  },
                                },
                              },
                              [
                                t._v(
                                  "\n                    " +
                                    t._s(o) +
                                    "\n                "
                                ),
                              ]
                            );
                          }),
                          1
                        ),
                      ],
                      1
                    ),
                    t._v(" "),
                    e(
                      f.a,
                      {
                        staticClass: "pedidos-sidebar pr-3 pl-3",
                        attrs: { cols: "12" },
                      },
                      [
                        e(
                          r.a,
                          {
                            staticClass: "productos-container pa-3",
                            staticStyle: {
                              "max-height": "75vh",
                              "overflow-y": "auto",
                            },
                          },
                          [
                            e(
                              "div",
                              { staticClass: "productos-scroll" },
                              t._l(t.productosFiltrados, function (o, c) {
                                return e(
                                  r.a,
                                  {
                                    key: c,
                                    staticClass:
                                      "producto-card d-flex flex-column pa-3",
                                  },
                                  [
                                    e("div", {
                                      staticClass: "decoracion-verde",
                                    }),
                                    t._v(" "),
                                    e(
                                      w.a,
                                      {
                                        staticClass:
                                          "producto-info ml-5 align-center",
                                        on: {
                                          click: function (e) {
                                            return t.toggleDetalles(c);
                                          },
                                        },
                                      },
                                      [
                                        e(f.a, { attrs: { cols: "10" } }, [
                                          e("strong", [t._v(t._s(o.nombre))]),
                                          t._v(" "),
                                          e("p", [
                                            e(
                                              "span",
                                              {
                                                staticClass:
                                                  "verde--text font-weight-bold",
                                              },
                                              [t._v("Marca:")]
                                            ),
                                            t._v(
                                              " " +
                                                t._s(o.marca) +
                                                "\n                                     \n                                    "
                                            ),
                                            e(
                                              "span",
                                              {
                                                staticClass:
                                                  "verde--text font-weight-bold",
                                              },
                                              [t._v("Clave:")]
                                            ),
                                            t._v(
                                              " " +
                                                t._s(o.clave) +
                                                "\n                                     \n                                    "
                                            ),
                                            e(
                                              "span",
                                              {
                                                staticClass:
                                                  "verde--text font-weight-bold",
                                              },
                                              [t._v("Código:")]
                                            ),
                                            t._v(
                                              " " +
                                                t._s(o.codigo) +
                                                "\n                                "
                                            ),
                                          ]),
                                        ]),
                                        t._v(" "),
                                        e(
                                          f.a,
                                          {
                                            staticClass:
                                              "d-flex align-center justify-end",
                                            attrs: { cols: "2" },
                                          },
                                          [
                                            e(
                                              n.a,
                                              {
                                                staticClass: "boton-azul ml-2",
                                                attrs: { icon: "" },
                                                on: {
                                                  click: function (e) {
                                                    return (
                                                      e.stopPropagation(),
                                                      t.toggleDetalles(c)
                                                    );
                                                  },
                                                },
                                              },
                                              [
                                                e(
                                                  _.a,
                                                  {
                                                    staticClass: "white--text",
                                                  },
                                                  [
                                                    t._v(
                                                      t._s(
                                                        o.mostrarDetalles
                                                          ? "mdi-chevron-up"
                                                          : "mdi-chevron-down"
                                                      )
                                                    ),
                                                  ]
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
                                    e(x.a, [
                                      o.mostrarDetalles
                                        ? e(
                                            "div",
                                            {
                                              staticClass:
                                                "producto-detalle pa-0",
                                            },
                                            [
                                              e(
                                                w.a,
                                                {
                                                  staticClass:
                                                    "ma-0 pa-0 pl-10 align-start",
                                                },
                                                [
                                                  e(
                                                    f.a,
                                                    {
                                                      staticClass:
                                                        "detalle-col",
                                                      attrs: { cols: "6" },
                                                    },
                                                    [
                                                      e("p", [
                                                        e(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "verde--text font-weight-bold",
                                                          },
                                                          [t._v("Descripción:")]
                                                        ),
                                                        t._v(
                                                          " " +
                                                            t._s(o.descripcion)
                                                        ),
                                                      ]),
                                                      t._v(" "),
                                                      e("p", [
                                                        e(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "verde--text font-weight-bold",
                                                          },
                                                          [
                                                            t._v(
                                                              "Precio público:"
                                                            ),
                                                          ]
                                                        ),
                                                        t._v(
                                                          " " + t._s(o.precio)
                                                        ),
                                                      ]),
                                                      t._v(" "),
                                                      e("p", [
                                                        e(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "verde--text font-weight-bold",
                                                          },
                                                          [
                                                            t._v(
                                                              "Precio Mayoreo:"
                                                            ),
                                                          ]
                                                        ),
                                                        t._v(
                                                          " " +
                                                            t._s(
                                                              o.precioMayoreo
                                                            ) +
                                                            "\n                                        "
                                                        ),
                                                      ]),
                                                      t._v(" "),
                                                      e("p", [
                                                        e(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "verde--text font-weight-bold",
                                                          },
                                                          [t._v("Clave:")]
                                                        ),
                                                        t._v(
                                                          " " + t._s(o.clave)
                                                        ),
                                                      ]),
                                                    ]
                                                  ),
                                                  t._v(" "),
                                                  e(
                                                    f.a,
                                                    {
                                                      staticClass:
                                                        "detalle-col",
                                                      attrs: { cols: "6" },
                                                    },
                                                    [
                                                      e("p", [
                                                        e(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "verde--text font-weight-bold",
                                                          },
                                                          [t._v("Marca:")]
                                                        ),
                                                        t._v(
                                                          " " + t._s(o.marca)
                                                        ),
                                                      ]),
                                                      t._v(" "),
                                                      e("p", [
                                                        e(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "verde--text font-weight-bold",
                                                          },
                                                          [t._v("Código:")]
                                                        ),
                                                        t._v(
                                                          " " + t._s(o.codigo)
                                                        ),
                                                      ]),
                                                      t._v(" "),
                                                      e("p", [
                                                        e(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "verde--text font-weight-bold",
                                                          },
                                                          [t._v("Peso:")]
                                                        ),
                                                        t._v(" "),
                                                        e("strong", [
                                                          t._v(t._s(o.peso)),
                                                        ]),
                                                      ]),
                                                      t._v(" "),
                                                      e("p", [
                                                        e(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "verde--text font-weight-bold",
                                                          },
                                                          [t._v("Unidad:")]
                                                        ),
                                                        t._v(" "),
                                                        e("strong", [
                                                          t._v(t._s(o.unidad)),
                                                        ]),
                                                      ]),
                                                    ]
                                                  ),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          )
                                        : t._e(),
                                    ]),
                                  ],
                                  1
                                );
                              }),
                              1
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
                  n.a,
                  {
                    staticClass: "boton-inferior-movil",
                    on: {
                      click: function (e) {
                        t.dialog = !0;
                      },
                    },
                  },
                  [t._v("\n        Ver Pedidos\n    ")]
                ),
                t._v(" "),
                e(
                  h.a,
                  {
                    attrs: { "max-width": "600" },
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
                        e(c.d, { staticClass: "font-weight-bold" }, [
                          t._v("Mis Pedidos"),
                        ]),
                        t._v(" "),
                        e(
                          c.c,
                          {
                            staticStyle: {
                              "max-height": "60vh",
                              "overflow-y": "auto",
                            },
                          },
                          [
                            t._l(t.carrito, function (o, r) {
                              return e(
                                "div",
                                { key: r, staticClass: "pedido-item" },
                                [
                                  e(m.a),
                                  t._v(" "),
                                  e("strong", { staticClass: "mb-2 d-block" }, [
                                    t._v(t._s(o.nombre)),
                                  ]),
                                  t._v(" "),
                                  e(
                                    w.a,
                                    {
                                      staticClass: "cantidad-container mt-2",
                                      attrs: { align: "center" },
                                    },
                                    [
                                      e(
                                        "div",
                                        { staticClass: "cantidad-wrapper" },
                                        [
                                          e(
                                            n.a,
                                            {
                                              staticClass:
                                                "cantidad-btn-outline",
                                              attrs: { icon: "" },
                                              on: {
                                                click: function (e) {
                                                  return t.modificarCantidad(
                                                    r,
                                                    -1
                                                  );
                                                },
                                              },
                                            },
                                            [e(_.a, [t._v("mdi-minus")])],
                                            1
                                          ),
                                          t._v(" "),
                                          e(y.a, {
                                            staticClass: "cantidad-box",
                                            attrs: {
                                              dense: "",
                                              solo: "",
                                              "hide-details": "",
                                              "background-color": "transparent",
                                              flat: "",
                                            },
                                            model: {
                                              value: o.cantidad,
                                              callback: function (e) {
                                                t.$set(o, "cantidad", e);
                                              },
                                              expression: "item.cantidad",
                                            },
                                          }),
                                          t._v(" "),
                                          e(
                                            n.a,
                                            {
                                              staticClass:
                                                "cantidad-btn-outline",
                                              attrs: { icon: "" },
                                              on: {
                                                click: function (e) {
                                                  return t.modificarCantidad(
                                                    r,
                                                    1
                                                  );
                                                },
                                              },
                                            },
                                            [e(_.a, [t._v("mdi-plus")])],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                      t._v(" "),
                                      e(
                                        "span",
                                        {
                                          staticClass:
                                            "precio-dinamico font-weight-bold",
                                        },
                                        [
                                          t._v(
                                            "$" +
                                              t._s(
                                                (o.precio * o.cantidad).toFixed(
                                                  2
                                                )
                                              )
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  e("p", { staticClass: "disponibles" }, [
                                    t._v("+50 disponibles"),
                                  ]),
                                  t._v(" "),
                                  e(
                                    n.a,
                                    {
                                      staticClass: "eliminar-btn",
                                      attrs: { small: "" },
                                      on: {
                                        click: function (e) {
                                          return t.modificarCantidad(
                                            r,
                                            -o.cantidad
                                          );
                                        },
                                      },
                                    },
                                    [t._v("Eliminar")]
                                  ),
                                ],
                                1
                              );
                            }),
                            t._v(" "),
                            e(m.a, { staticClass: "mt-3" }),
                            t._v(" "),
                            e("div", { staticClass: "total-container mt-5" }, [
                              e("h3", { staticClass: "font-weight-bold" }, [
                                t._v("Total"),
                              ]),
                              t._v(" "),
                              e(
                                "span",
                                { staticClass: "font-weight-bold precio" },
                                [t._v("$" + t._s(t.totalCarrito.toFixed(2)))]
                              ),
                            ]),
                          ],
                          2
                        ),
                        t._v(" "),
                        e(
                          c.a,
                          { staticClass: "px-4 pb-4" },
                          [
                            e(
                              w.a,
                              [
                                e(
                                  f.a,
                                  { attrs: { cols: "6" } },
                                  [
                                    e(
                                      n.a,
                                      {
                                        staticClass: "encargar-btn",
                                        attrs: { block: "" },
                                        on: {
                                          click: function (e) {
                                            t.dialog = !1;
                                          },
                                        },
                                      },
                                      [t._v("Cerrar")]
                                    ),
                                  ],
                                  1
                                ),
                                t._v(" "),
                                e(
                                  f.a,
                                  { attrs: { cols: "6" } },
                                  [
                                    e(
                                      n.a,
                                      {
                                        staticClass: "encargar-btn",
                                        attrs: { block: "" },
                                      },
                                      [t._v("Encargar")]
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
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
  },
]);
