export default ({ $axios }, inject) => {
    const api = {
      getClientes: () => $axios.$get('/clientes/getAll'),
      getProductos: () => $axios.$get('/productos'), // Se traduce a: http://localhost:3001/api/productos
    };
    inject('api', api);
  };
  