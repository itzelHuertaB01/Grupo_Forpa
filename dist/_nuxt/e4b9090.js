(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    561: function (e, t, r) {
      var content = r(622);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, r(18).default)("66c5a582", content, !0, { sourceMap: !1 });
    },
    621: function (e, t, r) {
      "use strict";
      r(561);
    },
    622: function (e, t, r) {
      var n = r(17)(function (i) {
        return i[1];
      });
      n.push([
        e.i,
        ".card-no-shadow[data-v-5abe5e0c]{box-shadow:none!important}.white-text[data-v-5abe5e0c]{color:#fff!important}.v-col[data-v-5abe5e0c]{padding-left:0!important;padding-right:0!important}.v-img[data-v-5abe5e0c]{height:100%;margin:0;-o-object-fit:contain;object-fit:contain;width:100%}@media (max-width:600px){.v-col[data-v-5abe5e0c]{margin-left:0!important}.v-card[data-v-5abe5e0c]{max-width:350px;width:100%}}",
        "",
      ]),
        (n.locals = {}),
        (e.exports = n);
    },
    654: function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r(521),
        o = r(511),
        l = r(505),
        c = r(504),
        d = r(656),
        m = r(658),
        f = r(655),
        h = r(526),
        v = r(530),
        x = r(632),
        w = r(189),
        k = r(633),
        _ = r(515),
        y = r(34),
        C =
          (r(106),
          r(29),
          r(28),
          {
            data: function () {
              return {
                phoneNumber: "",
                password: "",
                rememberMe: !1,
                valid: !1,
                passwordVisible: !1,
                snackbar: !1,
                snackbarMessage: "",
                phoneRules: [
                  function (e) {
                    return !!e || "Número de teléfono es requerido";
                  },
                  function (e) {
                    return (
                      /^\d{10}$/.test(e) ||
                      "Formato de número de teléfono inválido"
                    );
                  },
                ],
                passwordRules: [
                  function (e) {
                    return !!e || "Contraseña es requerida";
                  },
                  function (e) {
                    return e.length >= 6 || "Debe tener al menos 6 caracteres";
                  },
                ],
                model: 0,
                images: [
                  "/img/login_imagen1.jpg",
                  "/img/login_imagen2.jpg",
                  "/img/login_imagen3.jpg",
                  "/img/login_imagen4.jpg",
                ],
              };
            },
            methods: {
              login: function () {
                var e = this;
                return Object(y.a)(
                  regeneratorRuntime.mark(function t() {
                    var r, n, o, l, c;
                    return regeneratorRuntime.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (e.$refs.loginForm.validate()) {
                                t.next = 4;
                                break;
                              }
                              return (
                                (e.snackbarMessage =
                                  "Por favor, corrige los errores del formulario."),
                                (e.snackbar = !0),
                                t.abrupt("return")
                              );
                            case 4:
                              return (
                                (t.prev = 4),
                                (t.next = 7),
                                e.$api.login({
                                  numero_cel: e.phoneNumber,
                                  password_user: e.password,
                                })
                              );
                            case 7:
                              return (
                                (r = t.sent),
                                (n = r.accessToken),
                                (o = r.refreshToken),
                                e.rememberMe
                                  ? (localStorage.setItem("accessToken", n),
                                    localStorage.setItem("refreshToken", o))
                                  : (sessionStorage.setItem("accessToken", n),
                                    sessionStorage.setItem("refreshToken", o)),
                                (t.next = 12),
                                e.$axios.$get("/clientes/user")
                              );
                            case 12:
                              (l = t.sent),
                                localStorage.setItem("userId", l.id_usuario),
                                localStorage.setItem(
                                  "clientName",
                                  "".concat(l.nombre, " ").concat(l.apellido_p)
                                ),
                                localStorage.setItem(
                                  "clientRole",
                                  l.tipo_usuario
                                ),
                                (t.t0 = l.tipo_usuario),
                                (t.next =
                                  "admin" === t.t0
                                    ? 19
                                    : "cliente" === t.t0
                                    ? 21
                                    : "preventista" === t.t0
                                    ? 23
                                    : 25);
                              break;
                            case 19:
                              return (
                                e.$router.push("/admin"), t.abrupt("break", 26)
                              );
                            case 21:
                              return (
                                e.$router.push("/client"), t.abrupt("break", 26)
                              );
                            case 23:
                              return (
                                e.$router.push("/preventive"),
                                t.abrupt("break", 26)
                              );
                            case 25:
                              e.$router.push("/");
                            case 26:
                              t.next = 32;
                              break;
                            case 28:
                              (t.prev = 28),
                                (t.t1 = t.catch(4)),
                                (e.snackbarMessage =
                                  (null === (c = t.t1.response) ||
                                  void 0 === c ||
                                  null === (c = c.data) ||
                                  void 0 === c
                                    ? void 0
                                    : c.message) || "Error al iniciar sesión"),
                                (e.snackbar = !0);
                            case 32:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[4, 28]]
                    );
                  })
                )();
              },
              togglePasswordVisibility: function () {
                this.passwordVisible = !this.passwordVisible;
              },
            },
          }),
        S = (r(621), r(72)),
        component = Object(S.a)(
          C,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              n.a,
              [
                t(
                  v.a,
                  {
                    staticClass: "d-flex align-center justify-center",
                    staticStyle: { height: "100vh", padding: "0", margin: "0" },
                    attrs: { fluid: "" },
                  },
                  [
                    t(h.a, {
                      staticClass:
                        "d-none d-md-flex justify-center align-center",
                      staticStyle: {
                        "background-color": "#29235C",
                        position: "fixed",
                        left: "0",
                        top: "0",
                        height: "100vh",
                        width: "5px",
                      },
                      attrs: { cols: "1", md: "1" },
                    }),
                    e._v(" "),
                    t(
                      h.a,
                      {
                        staticClass: "d-flex justify-center align-center px-4",
                        attrs: { cols: "12", md: "6" },
                      },
                      [
                        t(
                          l.a,
                          {
                            staticClass: "pa-6 card-no-shadow",
                            attrs: {
                              width: "100%",
                              height: "100%",
                              "max-width": "400px",
                            },
                          },
                          [
                            t(w.a, {
                              staticClass: "mb-4 mx-auto",
                              attrs: {
                                src: "/img/Logo_GrupoForpa.png",
                                alt: "Logo",
                                height: "200",
                                contain: "",
                              },
                            }),
                            e._v(" "),
                            t(
                              c.b,
                              {
                                staticClass: "text-center",
                                staticStyle: {
                                  "font-size": "24px",
                                  color: "black",
                                },
                              },
                              [e._v("\n          ¡Bienvenido!\n        ")]
                            ),
                            e._v(" "),
                            t(
                              c.b,
                              {
                                staticClass: "text-center",
                                staticStyle: { "font-size": "14px" },
                              },
                              [
                                e._v(
                                  "\n          Ingresa tus datos para acceder.\n        "
                                ),
                              ]
                            ),
                            e._v(" "),
                            t(
                              x.a,
                              {
                                ref: "loginForm",
                                on: {
                                  submit: function (t) {
                                    return (
                                      t.preventDefault(),
                                      e.login.apply(null, arguments)
                                    );
                                  },
                                },
                                model: {
                                  value: e.valid,
                                  callback: function (t) {
                                    e.valid = t;
                                  },
                                  expression: "valid",
                                },
                              },
                              [
                                t(_.a, {
                                  staticClass: "mb-3",
                                  attrs: {
                                    label: "Número de teléfono",
                                    type: "tel",
                                    rules: e.phoneRules,
                                    required: "",
                                    dense: "",
                                    outlined: "",
                                  },
                                  model: {
                                    value: e.phoneNumber,
                                    callback: function (t) {
                                      e.phoneNumber = t;
                                    },
                                    expression: "phoneNumber",
                                  },
                                }),
                                e._v(" "),
                                t(_.a, {
                                  staticClass: "mb-3",
                                  attrs: {
                                    label: "Contraseña",
                                    type: e.passwordVisible
                                      ? "text"
                                      : "password",
                                    rules: e.passwordRules,
                                    required: "",
                                    dense: "",
                                    outlined: "",
                                    "append-icon": "mdi-eye",
                                  },
                                  on: {
                                    "click:append": e.togglePasswordVisibility,
                                  },
                                  model: {
                                    value: e.password,
                                    callback: function (t) {
                                      e.password = t;
                                    },
                                    expression: "password",
                                  },
                                }),
                                e._v(" "),
                                t(f.a, {
                                  staticClass: "mb-4",
                                  attrs: { label: "Recordar esta sesión" },
                                  model: {
                                    value: e.rememberMe,
                                    callback: function (t) {
                                      e.rememberMe = t;
                                    },
                                    expression: "rememberMe",
                                  },
                                }),
                                e._v(" "),
                                t(
                                  o.a,
                                  {
                                    staticClass: "white-text",
                                    attrs: {
                                      color: "#118737",
                                      type: "submit",
                                      block: "",
                                      disabled: !e.valid,
                                      rounded: "",
                                    },
                                  },
                                  [
                                    e._v(
                                      "\n            Iniciar sesión\n          "
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                            e._v(" "),
                            t(
                              k.a,
                              {
                                attrs: { color: "error", top: "" },
                                model: {
                                  value: e.snackbar,
                                  callback: function (t) {
                                    e.snackbar = t;
                                  },
                                  expression: "snackbar",
                                },
                              },
                              [
                                t("span", [e._v(e._s(e.snackbarMessage))]),
                                e._v(" "),
                                t(
                                  o.a,
                                  {
                                    attrs: { color: "white", text: "" },
                                    on: {
                                      click: function (t) {
                                        e.snackbar = !1;
                                      },
                                    },
                                  },
                                  [e._v("Cerrar")]
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
                    e._v(" "),
                    t(
                      h.a,
                      {
                        staticClass:
                          "d-none d-md-flex justify-end align-center pr-0",
                        staticStyle: {
                          padding: "0",
                          display: "flex",
                          height: "100vh",
                          position: "relative",
                          overflow: "hidden",
                          "border-top-left-radius": "50px",
                          "border-bottom-left-radius": "50px",
                        },
                        attrs: { cols: "12", md: "6" },
                      },
                      [
                        t(
                          d.a,
                          {
                            staticStyle: {
                              width: "100%",
                              "box-shadow": "none",
                            },
                            attrs: {
                              cycle: "",
                              "show-arrows": "",
                              height: "100%",
                              "hide-delimiters": "",
                            },
                            model: {
                              value: e.model,
                              callback: function (t) {
                                e.model = t;
                              },
                              expression: "model",
                            },
                          },
                          e._l(e.images, function (img, e) {
                            return t(
                              m.a,
                              { key: e },
                              [
                                t(w.a, {
                                  staticStyle: {
                                    "object-fit": "contain",
                                    width: "100%",
                                    height: "100%",
                                  },
                                  attrs: { src: img, alt: "Imagen de fondo" },
                                }),
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
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "5abe5e0c",
          null
        );
      t.default = component.exports;
    },
  },
]);
