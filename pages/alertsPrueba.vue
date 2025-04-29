<template>
    <v-container>
      <!-- LOGIN -->
      <v-card class="mx-auto my-8 pa-6" max-width="400">
        <v-card-title class="text-h6">Iniciar sesión</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="login">
            <v-text-field v-model="telefono" label="Teléfono" required />
            <v-text-field v-model="contrasena" label="Contraseña" type="password" required />
            <v-btn block color="#247323" dark type="submit" rounded>Ingresar</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
  
      <!-- TABLA DE PEDIDOS -->
      <v-card class="my-8" elevation="2">
        <v-card-title class="text-h6">Pedidos</v-card-title>
        <v-data-table :headers="headers" :items="pedidos" class="elevation-1">
          <template #item.status="{ item }">
            <v-select
              v-model="item.status"
              :items="statusOptions"
              dense
              outlined
              hide-details
              style="max-width: 180px"
              @change="cambiarStatus(item)"
            ></v-select>
          </template>
          <template #item.acciones="{ item }">
            <v-btn icon color="red" @click="abrirConfirmacion('delete', item)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-card>
  
      <!-- MODAL DE CONFIRMACIÓN -->
      <v-dialog v-model="confirmacion.abierta" max-width="360">
        <v-card class="pa-6 text-center tarjeta-mejorada" elevation="12" rounded="xxl">
          <v-icon color="#e53935" size="80" class="mb-3 bounce-icon">mdi-alert</v-icon>
          <h2 class="titulo-error text-center">¿Estás seguro?</h2>
          <p class="mb-4 px-2">
            ¿Deseas eliminar el pedido de <strong>{{ confirmacion.pedido?.cliente }}</strong>?<br />
            ID: <strong>{{ confirmacion.pedido?.id }}</strong>
          </p>
          <v-btn text @click="cancelarEliminacion">Cancelar</v-btn>
          <v-btn color="#e53935" dark rounded class="ml-2" @click="confirmarAccion">Confirmar</v-btn>
        </v-card>
      </v-dialog>
  
      <!-- ALERTA VISUAL MEJORADA COMO MODAL -->
      <v-dialog v-model="alerta.activa" persistent max-width="360">
        <v-card class="pa-6 text-center tarjeta-mejorada" elevation="12" rounded="xxl">
          <v-icon
            :color="alerta.tipo === 'success' ? '#118737' : '#e53935'"
            size="80"
            class="mb-3 bounce-icon"
          >
            {{ alerta.tipo === 'success' ? 'mdi-check-circle-outline' : 'mdi-alert-circle-outline' }}
          </v-icon>
  
          <h2 :class="alerta.tipo === 'success' ? 'titulo-exito' : 'titulo-error'">
            {{ alerta.tipo === 'success' ? '¡ÉXITO!' : 'OH NO...' }}
          </h2>
  
          <p class="mb-4 px-2">{{ alerta.mensaje }}</p>
  
          <v-btn
            v-if="alerta.tipo !== 'success'"
            :color="'#e53935'"
            dark
            rounded
            class="px-6 py-2 text-uppercase"
            @click="alerta.activa = false"
          >
            Intentar de nuevo
          </v-btn>
        </v-card>
      </v-dialog>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        telefono: '',
        contrasena: '',
        alerta: {
          activa: false,
          tipo: '',
          mensaje: ''
        },
        headers: [
          { text: 'ID', value: 'id' },
          { text: 'Cliente', value: 'cliente' },
          { text: 'Estatus', value: 'status' },
          { text: 'Acciones', value: 'acciones', sortable: false }
        ],
        statusOptions: ['Confirmado', 'En preparación', 'En camino', 'Entregado'],
        pedidos: [
          { id: 1, cliente: 'Juan', status: 'Confirmado' },
          { id: 2, cliente: 'María', status: 'En preparación' },
          { id: 3, cliente: 'Carlos', status: 'En camino' }
        ],
        confirmacion: {
          abierta: false,
          accion: '',
          pedido: null
        }
      }
    },
    methods: {
      login() {
        if (this.telefono === '1234' && this.contrasena === 'admin') {
          this.mostrarAlerta('success', 'Has iniciado sesión correctamente.');
          setTimeout(() => {
            this.alerta.activa = false;
          }, 2500);
        } else {
          this.mostrarAlerta('error', 'Teléfono o contraseña incorrectos.');
        }
      },
      abrirConfirmacion(accion, pedido) {
        this.confirmacion = {
          abierta: true,
          accion,
          pedido
        }
      },
      confirmarAccion() {
        const { pedido } = this.confirmacion
        this.confirmacion.abierta = false
        this.mostrarAlerta('success', `Pedido #${pedido.id} eliminado.`)
        setTimeout(() => { this.alerta.activa = false }, 2500)
      },
      cancelarEliminacion() {
        this.confirmacion.abierta = false
        this.mostrarAlerta('error', 'Operación cancelada.')
        setTimeout(() => { this.alerta.activa = false }, 2500)
      },
      cambiarStatus(item) {
        this.mostrarAlerta('success', `Estatus del pedido #${item.id} actualizado a "${item.status}".`);
        setTimeout(() => {
          this.alerta.activa = false;
        }, 2500);
      },
      mostrarAlerta(tipo, mensaje) {
        this.alerta = { activa: true, tipo, mensaje }
      }
    }
  }
  </script>
  
  <style scoped>
  .tarjeta-mejorada {
    border-radius: 30px;
    background-color: #ffffff;
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease-in-out;
  }
  
  .titulo-exito {
    color: #118737;
    font-weight: bold;
    font-size: 22px;
    letter-spacing: 0.5px;
  }
  
  .titulo-error {
    color: #e53935;
    font-weight: bold;
    font-size: 22px;
    letter-spacing: 0.5px;
  }
  
  .bounce-icon {
    animation: bounce 0.6s ease;
  }
  
  @keyframes bounce {
    0% {
      transform: scale(0.9);
      opacity: 0;
    }
    50% {
      transform: scale(1.05);
      opacity: 1;
    }
    100% {
      transform: scale(1);
    }
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  