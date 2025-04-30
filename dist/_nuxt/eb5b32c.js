(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    504: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return l;
      }),
        n.d(e, "b", function () {
          return c;
        }),
        n.d(e, "c", function () {
          return d;
        }),
        n.d(e, "d", function () {
          return h;
        });
      var o = n(505),
        r = n(0),
        l = Object(r.h)("v-card__actions"),
        c = Object(r.h)("v-card__subtitle"),
        d = Object(r.h)("v-card__text"),
        h = Object(r.h)("v-card__title");
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
        r = n(2),
        l =
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
        c = n(129),
        d = n(155),
        h = n(241),
        v = n(242),
        f = n(239),
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
      function k(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? O(Object(n), !0).forEach(function (e) {
                Object(r.a)(t, e, n[e]);
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
      var C = Object(_.a)(d.a, h.a, v.a, f.a, m.a, c.a);
      e.a = C.extend({
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
              : v.a.options.methods.hideScroll.call(this);
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
                  r = Object(o.a)(n).find(function (t) {
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
                  l.a,
                  { props: { root: !0, light: t.light, dark: t.dark } },
                  [
                    t.$createElement(
                      "div",
                      {
                        class: t.contentClasses,
                        attrs: k(
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
                (data.style = k(
                  k({}, data.style),
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
    550: function (t, e, n) {
      var content = n(588);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(18).default)("1e0acf31", content, !0, { sourceMap: !1 });
    },
    587: function (t, e, n) {
      "use strict";
      n(550);
    },
    588: function (t, e, n) {
      var o = n(17)(function (i) {
        return i[1];
      });
      o.push([
        t.i,
        ".user-card[data-v-694bfe7c]{background-color:#fff;transition:all .2s}.v-btn[data-v-694bfe7c]:hover{opacity:.9}",
        "",
      ]),
        (o.locals = {}),
        (t.exports = o);
    },
    645: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n(230),
        r = n(511),
        l = n(505),
        c = n(504),
        d = n(526),
        h = n(530),
        v = n(538),
        f = n(149),
        m = n(525),
        x = n(524),
        _ = n(515),
        y =
          (n(89),
          n(63),
          n(194),
          n(5),
          {
            name: "GestionUsuarios",
            layout: "admin",
            head: function () {
              return {
                title: "Usuarios - Administrador",
                meta: [{ name: "usuarios", content: "Administrador" }],
              };
            },
            data: function () {
              return {
                usuarios: [
                  { nombre: "Edgar Emmanuel", telefono: "2491863710" },
                  { nombre: "Edgar Emmanuel", telefono: "2491863710" },
                  { nombre: "Edgar Emmanuel", telefono: "2491863710" },
                  { nombre: "Edgar Emmanuel", telefono: "2491863710" },
                  { nombre: "Edgar Emmanuel", telefono: "2491863710" },
                  { nombre: "Edgar Emmanuel", telefono: "2491863710" },
                ],
                dialog: !1,
                dialogDelete: !1,
                editedIndex: -1,
                deleteIndex: -1,
                editedItem: { nombre: "", telefono: "" },
                defaultItem: { nombre: "", telefono: "" },
              };
            },
            computed: {
              formTitle: function () {
                return -1 === this.editedIndex
                  ? "Nuevo Usuario"
                  : "Editar Usuario";
              },
            },
            methods: {
              getInitials: function (t) {
                return t
                  .split(" ")
                  .map(function (t) {
                    return t.charAt(0).toUpperCase();
                  })
                  .join("")
                  .substring(0, 2);
              },
              openAddUserDialog: function () {
                (this.editedIndex = -1),
                  (this.editedItem = Object.assign({}, this.defaultItem)),
                  (this.dialog = !0);
              },
              editarUsuario: function (t) {
                (this.editedIndex = t),
                  (this.editedItem = Object.assign({}, this.usuarios[t])),
                  (this.dialog = !0);
              },
              cerrarDialog: function () {
                var t = this;
                (this.dialog = !1),
                  this.$nextTick(function () {
                    (t.editedItem = Object.assign({}, t.defaultItem)),
                      (t.editedIndex = -1);
                  });
              },
              guardarUsuario: function () {
                this.editedIndex > -1
                  ? Object.assign(
                      this.usuarios[this.editedIndex],
                      this.editedItem
                    )
                  : this.usuarios.push(Object.assign({}, this.editedItem)),
                  this.cerrarDialog();
              },
              eliminarUsuario: function (t) {
                (this.deleteIndex = t), (this.dialogDelete = !0);
              },
              closeDelete: function () {
                var t = this;
                (this.dialogDelete = !1),
                  this.$nextTick(function () {
                    t.deleteIndex = -1;
                  });
              },
              eliminarUsuarioConfirmado: function () {
                this.usuarios.splice(this.deleteIndex, 1), this.closeDelete();
              },
            },
          }),
        w = (n(587), n(72)),
        component = Object(w.a)(
          y,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              h.a,
              { staticClass: "pa-4", attrs: { fluid: "" } },
              [
                e(
                  m.a,
                  { staticClass: "mb-6" },
                  [
                    e(
                      d.a,
                      {
                        staticClass:
                          "d-flex justify-space-between align-center",
                        attrs: { cols: "12" },
                      },
                      [
                        e("h1", { staticClass: "text-h5 font-weight-medium" }, [
                          t._v("Agrega nuevos usuarios"),
                        ]),
                        t._v(" "),
                        e(
                          r.a,
                          {
                            staticClass: "white--text px-4",
                            attrs: { color: "success" },
                            on: { click: t.openAddUserDialog },
                          },
                          [
                            e(f.a, { attrs: { left: "" } }, [
                              t._v("mdi-account-plus"),
                            ]),
                            t._v(
                              "\n                Añadir usuario\n            "
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
                e(
                  m.a,
                  t._l(t.usuarios, function (n, h) {
                    return e(
                      d.a,
                      {
                        key: h,
                        staticClass: "py-1",
                        attrs: { cols: "12", sm: "6", md: "4", lg: "4" },
                      },
                      [
                        e(
                          l.a,
                          {
                            staticClass: "user-card",
                            staticStyle: {
                              "border-radius": "5px",
                              "border-left": "10px solid #4CAF50",
                            },
                            attrs: { outlined: "" },
                          },
                          [
                            e(c.c, { staticClass: "py-4 px-4" }, [
                              e(
                                "div",
                                { staticClass: "d-flex align-center" },
                                [
                                  e(
                                    o.a,
                                    {
                                      staticClass:
                                        "white--text font-weight-bold",
                                      attrs: { color: "#4CAF50", size: "40" },
                                    },
                                    [
                                      t._v(
                                        "\n                            " +
                                          t._s(t.getInitials(n.nombre)) +
                                          "\n                        "
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  e("div", { staticClass: "ml-4" }, [
                                    e(
                                      "div",
                                      { staticClass: "font-weight-medium" },
                                      [t._v(t._s(n.nombre))]
                                    ),
                                    t._v(" "),
                                    e(
                                      "div",
                                      {
                                        staticClass: "d-flex align-center mt-1",
                                      },
                                      [
                                        e(
                                          f.a,
                                          {
                                            staticClass: "mr-1",
                                            attrs: { small: "" },
                                          },
                                          [t._v("mdi-phone")]
                                        ),
                                        t._v(" "),
                                        e("span", [t._v(t._s(n.telefono))]),
                                      ],
                                      1
                                    ),
                                  ]),
                                  t._v(" "),
                                  e(x.a),
                                  t._v(" "),
                                  e(
                                    r.a,
                                    {
                                      staticClass: "mx-1",
                                      attrs: { icon: "", color: "error" },
                                      on: {
                                        click: function (e) {
                                          return t.eliminarUsuario(h);
                                        },
                                      },
                                    },
                                    [e(f.a, [t._v("mdi-delete")])],
                                    1
                                  ),
                                  t._v(" "),
                                  e(
                                    r.a,
                                    {
                                      staticClass: "mx-1",
                                      attrs: { icon: "", color: "success" },
                                      on: {
                                        click: function (e) {
                                          return t.editarUsuario(h);
                                        },
                                      },
                                    },
                                    [e(f.a, [t._v("mdi-pencil")])],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ]),
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
                  v.a,
                  {
                    attrs: { "max-width": "500px" },
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
                      l.a,
                      [
                        e(c.d, [
                          e("span", { staticClass: "text-h5" }, [
                            t._v(t._s(t.formTitle)),
                          ]),
                        ]),
                        t._v(" "),
                        e(
                          c.c,
                          [
                            e(
                              h.a,
                              [
                                e(
                                  m.a,
                                  [
                                    e(
                                      d.a,
                                      { attrs: { cols: "12" } },
                                      [
                                        e(_.a, {
                                          attrs: {
                                            label: "Nombre completo",
                                            required: "",
                                          },
                                          model: {
                                            value: t.editedItem.nombre,
                                            callback: function (e) {
                                              t.$set(t.editedItem, "nombre", e);
                                            },
                                            expression: "editedItem.nombre",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    t._v(" "),
                                    e(
                                      d.a,
                                      { attrs: { cols: "12" } },
                                      [
                                        e(_.a, {
                                          attrs: {
                                            label: "Número de teléfono",
                                            required: "",
                                          },
                                          model: {
                                            value: t.editedItem.telefono,
                                            callback: function (e) {
                                              t.$set(
                                                t.editedItem,
                                                "telefono",
                                                e
                                              );
                                            },
                                            expression: "editedItem.telefono",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    t._v(" "),
                                    e(
                                      d.a,
                                      { attrs: { cols: "12" } },
                                      [
                                        e(_.a, {
                                          attrs: {
                                            label: "Contraseña del usuario",
                                            required: "",
                                          },
                                          model: {
                                            value: t.editedItem.contraseña,
                                            callback: function (e) {
                                              t.$set(
                                                t.editedItem,
                                                "contraseña",
                                                e
                                              );
                                            },
                                            expression: "editedItem.contraseña",
                                          },
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
                        t._v(" "),
                        e(
                          c.a,
                          [
                            e(x.a),
                            t._v(" "),
                            e(
                              r.a,
                              {
                                attrs: { color: "blue darken-1", text: "" },
                                on: { click: t.cerrarDialog },
                              },
                              [
                                t._v(
                                  "\n                    Cancelar\n                "
                                ),
                              ]
                            ),
                            t._v(" "),
                            e(
                              r.a,
                              {
                                attrs: { color: "blue darken-1", text: "" },
                                on: { click: t.guardarUsuario },
                              },
                              [
                                t._v(
                                  "\n                    Guardar\n                "
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
                e(
                  v.a,
                  {
                    attrs: { "max-width": "500px" },
                    model: {
                      value: t.dialogDelete,
                      callback: function (e) {
                        t.dialogDelete = e;
                      },
                      expression: "dialogDelete",
                    },
                  },
                  [
                    e(
                      l.a,
                      [
                        e(c.d, { staticClass: "text-h5" }, [
                          t._v(
                            "\n                ¿Estás seguro de que quieres eliminar este usuario?\n            "
                          ),
                        ]),
                        t._v(" "),
                        e(
                          c.a,
                          [
                            e(x.a),
                            t._v(" "),
                            e(
                              r.a,
                              {
                                attrs: { color: "blue darken-1", text: "" },
                                on: { click: t.closeDelete },
                              },
                              [t._v("No")]
                            ),
                            t._v(" "),
                            e(
                              r.a,
                              {
                                attrs: { color: "blue darken-1", text: "" },
                                on: { click: t.eliminarUsuarioConfirmado },
                              },
                              [
                                t._v(
                                  "\n                    Sí\n                "
                                ),
                              ]
                            ),
                            t._v(" "),
                            e(x.a),
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
          "694bfe7c",
          null
        );
      e.default = component.exports;
    },
  },
]);
