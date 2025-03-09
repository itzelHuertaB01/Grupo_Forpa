<template>
  <v-app>
    <v-container fluid class="d-flex align-center justify-center" style="height: 100vh; background-color: #FFFFFF;">
      <!-- Barra lateral fija -->
      <v-col cols="1" md="1" class="d-none d-md-flex justify-center align-center"
        style="background-color: #29235C; position: fixed; left: 0; top: 0; height: 100vh; width: 5px;">
      </v-col>

      <!-- Formulario de login -->
      <v-col cols="12" md="6" class="d-flex justify-center align-center px-4">
        <v-card width="100%" max-width="400px" class="pa-6 card-no-shadow">
          <v-img src="/img/Logo_GrupoForpa.png" alt="Logo" height="200" class="mb-4 mx-auto" contain></v-img>

          <v-card-subtitle class="text-center" style="font-size: 24px; color: black;">¡Bienvenido!</v-card-subtitle>
          <v-card-subtitle class="text-center" style="font-size: 14px;">Ingresa tus datos para
            acceder.</v-card-subtitle>

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

          <v-snackbar v-model="snackbar" color="error" top>
            <span>{{ snackbarMessage }}</span>
            <v-btn color="white" text @click="snackbar = false">Cerrar</v-btn>
          </v-snackbar>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" class="d-none d-md-flex justify-end align-center pr-0"
        style="padding-right: 0; display: flex; height: 100vh;">
        <v-img src="/img/login_imagen.png" alt="Imagen de fondo" height="100%"
          style="object-fit: cover; width: 100%; height: 100%; max-width: 100%; margin-left: auto;"></v-img>
      </v-col>

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
      snackbar: false,
      snackbarMessage: '',
      phoneRules: [
        v => !!v || 'Número de teléfono es requerido',
        v => /^\d{10}$/.test(v) || 'Formato de número de teléfono inválido',
      ],
      passwordRules: [
        v => !!v || 'Contraseña es requerida',
        v => v.length >= 6 || 'Debe tener al menos 6 caracteres',
      ],
    };
  },
  methods: {
    login() {
      if (!this.phoneNumber || !this.password) {
        this.snackbarMessage = 'Completa todos los campos.';
        this.snackbar = true;
        return;
      }

      console.log('Iniciando sesión con:', this.phoneNumber, this.password);
    },
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    },
  },
};
</script>

<style scoped>
.card-no-shadow {
  box-shadow: none !important;
}

.white-text {
  color: #FFFFFF !important;
}

@media (max-width: 600px) {
  .v-col {
    margin-left: 0 !important;
  }

  .v-card {
    width: 100%;
    max-width: 350px;
  }
}
</style>