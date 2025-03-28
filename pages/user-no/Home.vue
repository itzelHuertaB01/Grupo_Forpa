<template>
  <v-container fluid class="fondo">
    <v-row no-gutters>
      <!-- Chips de marca -->
      <v-col cols="12" class="productos-wrapper d-flex flex-wrap">
        <v-chip-group active-class="verde white--text" class="d-flex flex-wrap justify-center">
          <v-chip v-for="(marca, i) in marcas" :key="i" @click="filtrarMarca(marca)" class="chip-filtro">
            {{ marca }}
          </v-chip>
        </v-chip-group>
      </v-col>

      <!-- Tarjetas de productos -->
      <v-col :cols="mostrarPedidos ? 8 : 12" class="pedidos-sidebar pr-3 pl-3 transition-width">
        <v-card class="productos-container pa-3" style="max-height: 75vh; overflow-y: auto;">
          <div class="productos-scroll">
            <v-card v-for="(producto, index) in productosFiltrados" :key="index"
              class="producto-card d-flex flex-column pa-3">
              <div class="decoracion-verde"></div>
              <v-row class="producto-info ml-5 align-center" @click="toggleDetalles(index)">
                <v-col cols="10">
                  <strong>{{ producto.nombre || producto.descripcion }}</strong>
                  <p>
                    <span class="verde--text font-weight-bold">Marca:</span> {{ producto.marca }} &nbsp;
                    <span class="verde--text font-weight-bold">Clave:</span> {{ producto.clave }} &nbsp;
                    <span class="verde--text font-weight-bold">Código:</span> {{ producto.codigo }}
                  </p>
                </v-col>
                <v-col cols="2" class="d-flex align-center justify-end">
                  <v-btn icon class="boton-azul" @click.stop="agregarACarrito(producto)">
                    <v-icon class="white--text">mdi-plus</v-icon>
                  </v-btn>
                  <v-btn icon class="boton-azul ml-2" @click.stop="toggleDetalles(index)">
                    <v-icon class="white--text">{{ producto.mostrarDetalles ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
              <v-expand-transition>
                <div v-if="producto.mostrarDetalles" class="producto-detalle pa-0">
                  <v-row class="ma-0 pa-0 pl-10 align-start">
                    <v-col cols="6" class="detalle-col">
                      <p><span class="verde--text font-weight-bold">Descripción:</span> {{ producto.descripcion }}</p>
                      <p><span class="verde--text font-weight-bold">Precio público:</span> {{ producto.precio }}</p>
                      <p><span class="verde--text font-weight-bold">Precio Mayoreo:</span> {{ producto.precioMayoreo }}</p>
                      <p><span class="verde--text font-weight-bold">Clave:</span> {{ producto.clave }}</p>
                    </v-col>
                    <v-col cols="6" class="detalle-col">
                      <p><span class="verde--text font-weight-bold">Marca:</span> {{ producto.marca }}</p>
                      <p><span class="verde--text font-weight-bold">Código:</span> {{ producto.codigo }}</p>
                      <p><span class="verde--text font-weight-bold">Peso:</span> {{ producto.peso }}</p>
                      <p><span class="verde--text font-weight-bold">Unidad:</span> {{ producto.unidad }}</p>
                    </v-col>
                  </v-row>
                </div>
              </v-expand-transition>
            </v-card>
          </div>

          <!-- Paginación -->
          <v-row justify="center" align="center" class="mt-4">
            <v-btn icon @click="paginaActual > 1 && cambiarPagina(paginaActual - 1)">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-text-field
              v-model.number="paginaActual"
              type="number"
              class="mx-2"
              style="max-width: 80px;"
              @keyup.enter="cambiarPagina(paginaActual)"
            />
            <v-btn icon @click="paginaActual < totalPaginas && cambiarPagina(paginaActual + 1)">
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-row>
        </v-card>
      </v-col>

      <!-- Lateral de pedidos -->
      <v-col cols="4" v-if="mostrarPedidos" class="pedidos-sidebar pr-3 pl-3">
        <v-card class="pedidos-card pa-4 d-flex flex-column" style="height: 75vh;">
          <div style="overflow-y: auto; flex: 1;">
            <h2 class="font-weight-bold">Mis Pedidos</h2>
            <div v-for="(item, index) in carritoPaginado" :key="index" class="pedido-item">
              <v-divider></v-divider>
              <strong class="mb-2 d-block">{{ item.nombre }}</strong>
              <v-row align="center" class="cantidad-container mt-2">
                <div class="cantidad-wrapper">
                  <v-btn icon class="cantidad-btn-outline" @click="modificarCantidad(index + inicioCarrito, -1)">
                    <v-icon>mdi-minus</v-icon>
                  </v-btn>
                  <v-text-field 
                    v-model="item.cantidad" 
                    class="cantidad-box" 
                    dense 
                    solo 
                    hide-details 
                    background-color="transparent" 
                    flat
                  ></v-text-field>
                  <v-btn icon class="cantidad-btn-outline" @click="modificarCantidad(index + inicioCarrito, 1)">
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </div>
                <span class="precio-dinamico font-weight-bold">${{ (item.precio * item.cantidad).toFixed(2) }}</span>
              </v-row>
              <p class="disponibles">+50 disponibles</p>
              <v-btn small class="eliminar-btn" @click="modificarCantidad(index + inicioCarrito, -item.cantidad)">Eliminar</v-btn>
            </div>
          </div>
          <div>
            <v-divider class="my-2"></v-divider>
            <div class="total-container mb-2">
              <h3 class="font-weight-bold">Total</h3>
              <span class="font-weight-bold precio">${{ totalCarrito.toFixed(2) }}</span>
            </div>
            <!-- Paginación del carrito -->
            <v-row justify="center" align="center">
              <v-btn icon @click="paginaCarrito > 1 && cambiarPaginaCarrito(paginaCarrito - 1)">
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
              <v-text-field
                v-model.number="paginaCarrito"
                type="number"
                class="mx-2"
                style="max-width: 80px;"
                @keyup.enter="cambiarPaginaCarrito(paginaCarrito)"
              />
              <v-btn icon @click="paginaCarrito < totalPaginasCarrito && cambiarPaginaCarrito(paginaCarrito + 1)">
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-row>
            <v-btn block class="encargar-btn mt-2">Encargar</v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      mostrarPedidos: false,
      marcas: ["Todo", "Truper", "Expert", "Hermex", "Fiero", "Foset", "Klintek", "Pretul", "Ultracraft", "Volteck"],
      productos: [],
      carrito: [],
      marcaSeleccionada: "Todo",
      paginaActual: 1,
      totalPaginas: 1,
      paginaCarrito: 1,
      itemsPorPaginaCarrito: 4
    };
  },
  computed: {
    productosFiltrados() {
      return this.marcaSeleccionada === "Todo"
        ? this.productos
        : this.productos.filter(p => p.marca === this.marcaSeleccionada);
    },
    totalCarrito() {
      return this.carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    },
    totalPaginasCarrito() {
      return Math.ceil(this.carrito.length / this.itemsPorPaginaCarrito);
    },
    inicioCarrito() {
      return (this.paginaCarrito - 1) * this.itemsPorPaginaCarrito;
    },
    carritoPaginado() {
      return this.carrito.slice(this.inicioCarrito, this.inicioCarrito + this.itemsPorPaginaCarrito);
    }
  },
  methods: {
    filtrarMarca(marca) {
      this.marcaSeleccionada = marca;
    },
    toggleDetalles(index) {
      this.productos[index].mostrarDetalles = !this.productos[index].mostrarDetalles;
    },
    agregarACarrito(producto) {
      const existe = this.carrito.find(p => p.clave === producto.clave);
      if (existe) {
        existe.cantidad++;
      } else {
        this.carrito.push({ ...producto, cantidad: 1 });
      }
      this.mostrarPedidos = true;
    },
    modificarCantidad(index, cantidad) {
      this.carrito[index].cantidad += cantidad;
      if (this.carrito[index].cantidad <= 0) this.carrito.splice(index, 1);
      if (this.carrito.length === 0) this.mostrarPedidos = false;
    },
    async obtenerProductos() {
      try {
        const res = await this.$api.getProductos({ page: this.paginaActual });
        this.productos = res.data.map(p => ({ ...p, mostrarDetalles: false }));
        this.totalPaginas = Math.ceil(res.total / res.limit);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    },
    cambiarPagina(pagina) {
      if (pagina >= 1 && pagina <= this.totalPaginas) {
        this.paginaActual = pagina;
        this.obtenerProductos();
      }
    },
    cambiarPaginaCarrito(pagina) {
      if (pagina >= 1 && pagina <= this.totalPaginasCarrito) {
        this.paginaCarrito = pagina;
      }
    }
  },
  mounted() {
    this.obtenerProductos();
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/home.scss";
</style>
