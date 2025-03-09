<template>
    <v-app>
        <!-- Barra de navegación superior -->
        <v-app-bar app color="#F3F3F3" style="box-shadow: none; padding-top: 5px;">
            <!-- Botón hamburguesa para móviles -->
            <v-btn icon @click="drawer = !drawer">
                <v-icon style="color: #29235C;">mdi-menu</v-icon> <!-- Cambiar color a #29235C -->
            </v-btn>

            <!-- Título dinámico basado en la opción seleccionada -->
            <v-toolbar-title class="ml-0"
                style="color: #29235C; font-weight: bold; font-size: 30px; white-space: normal; overflow: visible; text-overflow: unset;">
                {{ activeTitle }}
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <!-- Barra de búsqueda centrada -->
            <v-container class="d-flex justify-center" style="max-width: 100%; padding: 0;">
                <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar..." single-line hide-details flat
                    style="max-width: 600px; background-color: #ffffff; border-radius: 40px; font-size: 18px; height: 40px; padding-left: 15px; padding-right: 15px;"
                    color="#29235C" label-color="#29235C">
                    <!-- Lupa a la izquierda -->
                    <template v-slot:prepend>
                        <v-icon color="#29235C">mdi-magnify</v-icon>
                    </template>
                    <!-- Micrófono a la derecha -->
                    <template v-slot:append>
                        <v-icon color="#29235C" @click="activateMic">mdi-microphone</v-icon>
                    </template>
                </v-text-field>
            </v-container>

            <!-- Íconos de notificación y perfil -->
            <v-btn icon class="profile-btn" style="background-color: #D9D9D9;">
                <v-icon style="color: #29235C;">mdi-bell-outline</v-icon> <!-- Icono de campana -->
            </v-btn>
            <v-btn icon class="profile-btn" style="background-color: #D9D9D9;">
                <v-icon style="color: #29235C;">mdi-account-outline</v-icon> <!-- Icono de perfil -->
            </v-btn>
        </v-app-bar>

        <!-- Barra lateral (drawer) -->
        <v-navigation-drawer v-model="drawer" app temporary>
            <v-row class="pt-4 pb-6" justify="center">
                <v-img src="/img/Logo2While.png" alt="Logo" height="70%" class="mx-auto" />
            </v-row>

            <!-- Opciones de navegación -->
            <v-list>
                <v-list-item v-for="(item, index) in items" :key="item.title" :to="item.to"
                    :class="{ 'active-item': isActiveItem(item), 'hover-item': activeItem !== index }"
                    @click="setActiveItem(index, item)">
                    <v-list-item-icon>
                        <v-icon :class="{ 'white--text': !isActiveItem(item), 'blue--text': isActiveItem(item) }">
                            {{ item.icon }}
                        </v-icon>
                    </v-list-item-icon>
                    <v-list-item-title :class="{ 'white--text': !isActiveItem(item), 'blue--text': isActiveItem(item) }">
                        {{ item.title }}
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <!-- Contenido principal -->
        <v-main>
            <nuxt />
        </v-main>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            drawer: false, // Controla la apertura del drawer en móvil
            search: '',
            activeItem: null, // Sin valor inicial para evitar selección predeterminada
            activeTitle: 'Inicio', // Título predeterminado
            items: [
                { icon: 'mdi-home-outline', title: 'Inicio', to: '/user-no/' },  // Icono de contorno
                { icon: 'mdi-cart-outline', title: 'Pedidos', to: '/user-no/Orders' }, // Icono de contorno
                { icon: 'mdi-history', title: 'Historial', to: '/user-no/History' },
                { icon: 'mdi-book', title: 'Catálogo', to: '/user-no/Catalog' },
                { icon: 'mdi-logout', title: 'Salir', to: '/' },
            ],
        };
    },
    mounted() {
        // Establecer el título cuando la ruta cambia
        this.setTitleFromRoute();
    },
    watch: {
        $route: 'setTitleFromRoute',  // Detectar cambios en la ruta
    },
    methods: {
        // Cambiar el ítem activo y el título
        setActiveItem(index, item) {
            this.activeItem = index;
            this.activeTitle = item.title; // Actualizar el título basado en la opción seleccionada
            this.drawer = false;  // Cerrar el menú lateral cuando se selecciona una opción
        },

        // Establecer el título según la ruta
        setTitleFromRoute() {
            const routeTitle = this.items.find(item => item.to === this.$route.path)?.title;
            if (routeTitle) {
                this.activeTitle = routeTitle;  // Actualizar el título de acuerdo a la ruta
            }
        },

        // Verificar si el ítem está activo
        isActiveItem(item) {
            return this.$route.path === item.to;
        },

        // Activar micrófono (aquí agregamos solo una acción básica como ejemplo)
        activateMic() {
            console.log("Micrófono activado para búsqueda por voz");
        },
    },
};
</script>

<style scoped>
/* Barra lateral: fondo oscuro y texto blanco */
.v-navigation-drawer {
    background-color: #29235C !important;
    color: #ffffff;
}

.v-list-item {
    color: #ffffff;
    margin-top: 15px;
}

/* Estilos para el ítem activo */
.active-item {
    background-color: #F3F3F3 !important;
    border-radius: 20px;
    padding: 10px;
}

/* Estilos para el hover de los ítems */
.hover-item:hover {
    background-color: #F3F3F3 !important;
    border-radius: 20px;
    color: #29235C !important;
}

.hover-item:hover .v-icon {
    color: #29235C !important;
}

/* Estilos de color para íconos y títulos activos */
.white--text {
    color: white !important;
}

.blue--text {
    color: #29235C !important;
}

/* El logo en la parte superior */
.v-img {
    display: block;
    margin: 0 auto;
}

/* Barra superior en móviles */
@media (max-width: 600px) {
    .v-toolbar-title {
        color: #29235C;
        font-weight: bold;
        font-size: 18px;
    }

    .v-app-bar {
        background-color: #ffffff;
        color: #29235C;
        padding-top: 10px;
    }

    .v-btn {
        margin-right: 10px;
    }
}

/* Barra superior en desktop */
@media (min-width: 601px) {
    .v-app-bar {
        background-color: #ffffff;
        box-shadow: none;
        padding-top: 10px;
    }

    .v-text-field {
        max-width: 600px;
        margin: 0 auto;
        font-size: 20px;
    }

    .v-toolbar-title {
        font-size: 30px;
        white-space: normal;
        overflow: visible;
        text-overflow: unset;
    }

    .v-btn {
        margin-right: 20px;
    }
}

.profile-btn {
    border-radius: 50%;
    padding: 10px;
}
</style>
