<template>
  <v-col cols="auto pa-0">
    <v-dialog v-model="dialog" persistent max-width="800px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="cyan" dark v-bind="attrs" v-on="on">
          Agregar
        </v-btn>
      </template>

      <v-card class="pa-6">
        <div class="text-center  pb-5">
          <h3 class="headline">
            Registro de Rol y Permisos
          </h3>
        </div>
        <v-container>
          <v-form ref="formRegister" lazy-validation>
            <v-text-field
              v-model="rol"
              :rules="rolRules"
              label="Nombre del rol"
              required
            ></v-text-field>

            <v-text-field
              v-model="permission"
              :rules="permissionRules"
              label="Permisos"
              required
            ></v-text-field>
            <v-text-field
            v-model="access"
            :rules="accessRules"
            label="Acceso"
            required
            ></v-text-field>
            <v-btn color="success" class="mr-4 mt-4" @click="validateRegister">
              Registrar
            </v-btn>
            <v-btn
            class="float-right mt-4"
            @click="closeReset"
            >
              Cerrar
            </v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
  </v-col>
</template>
<script>
export default {
  data() {
    return {
      items: [
        "Administrador global",
        "Administrador clientes",
        "Administrador técnico",
        "General Compañía",
      ],
      dialog: false,
      rol: "",
      rolRules: [(v) => !!v || "El rol es requerido."],
      permission: "",
      permissionRules: [(v) => !!v || "El permiso es requerido."],
      access: "",
      accessRules: [(v) => !!v || "El permiso es requerido."],
    };
  },
  methods: {
    validateRegister() {
      this.$refs.formRegister.validate();
    },
    closeReset() {
      this.dialog = false;
      this.$refs.formRegister.reset();
    },
  },
};
</script>
