// api.js
export default ({ $axios }, inject) => {
  $axios.onRequest((config) => {
    const token =
      localStorage.getItem("accessToken") ||
      sessionStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  $axios.onError(async (error) => {
    const { response: { status } = {} } = error;
    if (status === 401) {
      try {
        const refreshToken =
          localStorage.getItem("refreshToken") ||
          sessionStorage.getItem("refreshToken");
        const refreshResponse = await $axios.$post(
          "/clientes/refresh-token",
          null,
          { headers: { "x-refresh-token": refreshToken } }
        );
        const newAccessToken = refreshResponse.accessToken;
        if (localStorage.getItem("accessToken")) {
          localStorage.setItem("accessToken", newAccessToken);
        } else {
          sessionStorage.setItem("accessToken", newAccessToken);
        }
        error.config.headers.Authorization = `Bearer ${newAccessToken}`;
        return $axios.request(error.config);
      } catch (refreshError) {
        console.error("Refresh token inválido o expirado:", refreshError);
      }
    }
    return Promise.reject(error);
  });

  const api = {
    login: (credentials) => $axios.$post("/clientes/login", credentials),
    logout: () => $axios.$post("/clientes/logout"),
    getClientes: () => $axios.$get("/clientes/getAll"),

    getProductos: (params) => $axios.$get("/productos/productos", { params }),
    searchProductos: (term, params) =>
      $axios.$post("productos/buscarByname", { term }, { params }),
    // Método para crear un pedido
    createOrder: (data) => $axios.$post("/pedidos", data),
    // Método para agregar un producto al pedido (usa la ruta actualizada)
    addProductToOrder: (data) => $axios.$post("/pedidos/add-product", data),
    getOrderProducts: (orderId) => $axios.$get(`/pedidos/productos/${orderId}`),
    getUserOrders: (userId, estado = 'Todas') =>
      $axios.$get(`/pedidos/user/${userId}`, { params: { estado } }),    
    refreshToken: () => $axios.$post("/clientes/refresh-token")
  };

  inject("api", api);
};
