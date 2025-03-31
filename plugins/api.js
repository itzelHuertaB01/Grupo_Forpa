export default ({ $axios }, inject) => {
  // Agrega el token de sesión a todas las peticiones (si existe)
  $axios.onRequest((config) => {
    const token =
      localStorage.getItem("accessToken") ||
      sessionStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  const api = {
    login: (credentials) => $axios.$post("/clientes/login", credentials),
    getClientes: () => $axios.$get("/clientes/getAll"),
    // Obtiene productos (GET) con paginación
    getProductos: (params) => $axios.$get("/productos/productos", { params }),
    // Búsqueda de productos (POST) enviando term en el body y { page, limit } en query params
    searchProductos: (term, params) =>
      $axios.$post("productos/buscarByname", { term }, { params }),
  };

  inject("api", api);
};
