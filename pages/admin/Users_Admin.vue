<template>
    <v-container fluid class="pa-4">
        <v-row class="mb-6">
            <v-col cols="12" class="d-flex justify-space-between align-center">
                <h1 class="text-h5 font-weight-medium">Agrega nuevos usuarios</h1>
                <v-btn color="success" class="white--text px-4" @click="openAddUserDialog">
                    <v-icon left>mdi-account-plus</v-icon>
                    Añadir usuario
                </v-btn>
            </v-col>
        </v-row>

        <v-row>
            <v-col v-for="(usuario, index) in usuarios" :key="index" cols="12" sm="6" md="4" lg="4" class="py-1">
                <v-card outlined class="user-card" style="border-radius: 5px; border-left: 10px solid #4CAF50;">
                    <v-card-text class="py-4 px-4">
                        <div class="d-flex align-center">
                            <v-avatar color="#4CAF50" size="40" class="white--text font-weight-bold">
                                {{ getInitials(usuario.nombre) }}
                            </v-avatar>
                            <div class="ml-4">
                                <div class="font-weight-medium">{{ usuario.nombre }}</div>
                                <div class="d-flex align-center mt-1">
                                    <v-icon small class="mr-1">mdi-phone</v-icon>
                                    <span>{{ usuario.telefono }}</span>
                                </div>
                            </div>
                            <v-spacer></v-spacer>
                            <v-btn icon color="error" class="mx-1" @click="eliminarUsuario(index)">
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                            <v-btn icon color="success" class="mx-1" @click="editarUsuario(index)">
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <!-- Diálogo para añadir/editar usuario -->
        <v-dialog v-model="dialog" max-width="500px">
            <v-card>
                <v-card-title>
                    <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field v-model="editedItem.nombre" label="Nombre completo"
                                    required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="editedItem.telefono" label="Número de teléfono"
                                    required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="editedItem.contraseña" label="Contraseña del usuario"
                                    required></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="cerrarDialog">
                        Cancelar
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="guardarUsuario">
                        Guardar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <!-- Confirmación para eliminar -->
        <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
                <v-card-title class="text-h5">
                    ¿Estás seguro de que quieres eliminar este usuario?
                </v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDelete">No</v-btn>
                    <v-btn color="blue darken-1" text @click="eliminarUsuarioConfirmado">
                        Sí
                    </v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
export default {
    name: 'GestionUsuarios',
    layout: 'admin',
    head() {
        return {
            title: "Usuarios - Administrador",
            meta: [{ name: "usuarios", content: "Administrador" }],
        };
    },
    data() {
        return {
            usuarios: [
                {
                    nombre: 'Edgar Emmanuel',
                    telefono: '2491863710'
                },
                {
                    nombre: 'Edgar Emmanuel',
                    telefono: '2491863710'
                },
                {
                    nombre: 'Edgar Emmanuel',
                    telefono: '2491863710'
                },
                {
                    nombre: 'Edgar Emmanuel',
                    telefono: '2491863710'
                },
                {
                    nombre: 'Edgar Emmanuel',
                    telefono: '2491863710'
                },
                {
                    nombre: 'Edgar Emmanuel',
                    telefono: '2491863710'
                }
            ],
            dialog: false,
            dialogDelete: false,
            editedIndex: -1,
            deleteIndex: -1,
            editedItem: {
                nombre: '',
                telefono: ''
            },
            defaultItem: {
                nombre: '',
                telefono: ''
            }
        }
    },
    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'Nuevo Usuario' : 'Editar Usuario'
        }
    },
    methods: {
        getInitials(nombre) {
            // Obtener las iniciales del nombre
            return nombre
                .split(' ')
                .map(word => word.charAt(0).toUpperCase())
                .join('')
                .substring(0, 2)
        },

        openAddUserDialog() {
            this.editedIndex = -1
            this.editedItem = Object.assign({}, this.defaultItem)
            this.dialog = true
        },

        editarUsuario(index) {
            this.editedIndex = index
            this.editedItem = Object.assign({}, this.usuarios[index])
            this.dialog = true
        },

        cerrarDialog() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        guardarUsuario() {
            if (this.editedIndex > -1) {
                Object.assign(this.usuarios[this.editedIndex], this.editedItem)
            } else {
                this.usuarios.push(Object.assign({}, this.editedItem))
            }
            this.cerrarDialog()
        },

        eliminarUsuario(index) {
            this.deleteIndex = index
            this.dialogDelete = true
        },

        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.deleteIndex = -1
            })
        },

        eliminarUsuarioConfirmado() {
            this.usuarios.splice(this.deleteIndex, 1)
            this.closeDelete()
        }
    }
}
</script>

<style scoped>
.user-card {
    transition: all 0.2s;
    background-color: white;
}

.v-btn:hover {
    opacity: 0.9;
}
</style>