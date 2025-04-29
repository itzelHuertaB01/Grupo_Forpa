<template>
  <v-app>
    <v-container fluid class="d-flex align-center justify-center" style="height: 100vh; padding: 0; margin: 0;">
      <!-- Barra lateral fija -->
      <v-col cols="1" md="1" class="d-none d-md-flex justify-center align-center"
        style="background-color: #29235C; position: fixed; left: 0; top: 0; height: 100vh; width: 5px;">
      </v-col>

      <!-- Formulario de login -->
      <v-col cols="12" md="6" class="d-flex justify-center align-center px-4">
        <v-card width="100%" height="100%" max-width="400px" class="pa-6 card-no-shadow">
          <v-img src="/img/Logo_GrupoForpa.png" alt="Logo" height="200" class="mb-4 mx-auto" contain></v-img>

          <v-card-subtitle class="text-center" style="font-size: 24px; color: black;">¡Bienvenido!</v-card-subtitle>
          <v-card-subtitle class="text-center" style="font-size: 14px;">Ingresa tus datos para acceder.</v-card-subtitle>

          <v-form @submit.prevent="login" v-model="valid">
            <v-text-field v-model="phoneNumber" label="Número de teléfono" type="tel" :rules="phoneRules" required dense
              outlined class="mb-3"></v-text-field>

            <v-text-field v-model="password" label="Contraseña" :type="passwordVisible ? 'text' : 'password'"
              :rules="passwordRules" required dense outlined class="mb-3" append-icon="mdi-eye"
              @click:append="togglePasswordVisibility"></v-text-field>

            <v-checkbox v-model="rememberMe" label="Recordar esta sesión" class="mb-4"></v-checkbox>

            <v-btn color="#118737" type="submit" block :disabled="!valid" rounded class="white-text">
              Iniciar sesión
            </v-btn>
          </v-form>
        </v-card>
      </v-col>

      <!-- Carrusel de imágenes -->
      <v-col cols="12" md="6" class="d-none d-md-flex justify-end align-center pr-0" style="padding: 0; display: flex; height: 100vh; position: relative; overflow: hidden; border-top-left-radius: 50px; border-bottom-left-radius: 50px;">
        <v-carousel
          v-model="model"
          cycle
          show-arrows
          height="100%"
          hide-delimiters
          style="width: 100%; box-shadow: none;"
        >
          <v-carousel-item v-for="(img, index) in images" :key="index">
            <v-img :src="img" alt="Imagen de fondo" style="object-fit: contain; width: 100%; height: 100%;" />
          </v-carousel-item>
        </v-carousel>
      </v-col>

      <!-- ALERTA VISUAL MEJORADA -->
      <transition name="fade">
        <div v-if="alerta.activa" class="alerta-tarjeta">
          <v-card
            class="pa-6 text-center tarjeta-mejorada"
            elevation="10"
            rounded="xl"
          >
            <v-icon
              :color="alerta.tipo === 'success' ? '#118737' : '#e53935'"
              size="70"
              class="mb-3 bounce-icon"
            >
              {{ alerta.tipo === 'success' ? 'mdi-check-circle-outline' : 'mdi-alert-circle-outline' }}
            </v-icon>

            <h2 :class="alerta.tipo === 'success' ? 'titulo-exito' : 'titulo-error'">
              {{ alerta.tipo === 'success' ? '¡ÉXITO!' : 'OH NO...' }}
            </h2>

            <p class="mb-4">{{ alerta.mensaje }}</p>

            <v-btn
              :color="alerta.tipo === 'success' ? '#118737' : '#e53935'"
              dark
              class="px-6 py-2 text-uppercase"
              @click="alerta.activa = false"
            >
              {{ alerta.tipo === 'success' ? 'Hecho' : 'Intentar de nuevo' }}
            </v-btn>
          </v-card>
        </div>
      </transition>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      phoneNumber: '',
      password: '',
      rememberMe: false,
      valid: false,
      passwordVisible: false,
      alerta: {
        activa: false,
        tipo: '',
        mensaje: ''
      },
      phoneRules: [
        v => !!v || 'Número de teléfono es requerido',
        v => /^\d{10}$/.test(v) || 'Formato de número de teléfono inválido',
      ],
      passwordRules: [
        v => !!v || 'Contraseña es requerida',
        v => v.length >= 6 || 'Debe tener al menos 6 caracteres',
      ],
      model: 0,
      images: [
        '/img/login_imagen1.jpg',
        '/img/login_imagen2.jpg',
        '/img/login_imagen3.jpg',
        '/img/login_imagen4.jpg'
      ]
    };
  },
  methods: {
    login() {
      if (!this.phoneNumber || !this.password) {
        this.mostrarAlerta('error', 'Completa todos los campos.');
      } else if (this.phoneNumber === '1234' && this.password === 'admin') {
        this.mostrarAlerta('success', 'Has iniciado sesión correctamente.');
      } else {
        this.mostrarAlerta('error', 'Teléfono o contraseña incorrectos.');
      }
    },
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    },
    mostrarAlerta(tipo, mensaje) {
      this.alerta = { activa: true, tipo, mensaje };
    }
  }
};
</script>

<style scoped>
.card-no-shadow {
  box-shadow: none !important;
}

.white-text {
  color: #FFFFFF !important;
}

.alerta-tarjeta {
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  width: 320px;
}

.tarjeta-mejorada {
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
}

.titulo-exito {
  color: #118737;
  font-weight: bold;
  font-size: 22px;
  letter-spacing: 1px;
}

.titulo-error {
  color: #e53935;
  font-weight: bold;
  font-size: 22px;
  letter-spacing: 1px;
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
