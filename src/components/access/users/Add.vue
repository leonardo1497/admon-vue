<template>

  <v-col cols="auto pa-0">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="800px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="cyan"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Agregar
        </v-btn>
      </template>

      <v-card class="pa-6">
        <div class="text-center  pb-5">
          <h3 class="headline">
            Registro de usuario
          </h3>
        </div>
        <v-container>
          <v-form ref="formRegister" lazy-validation>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Correo electrónico"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="emailConfirm"
                  :rules="emailConfirmRules"
                  label="Confirmación de correo electrónico"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  :type="show1 ? 'text' : 'password'"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  v-model="passwordRegister"
                  :rules="passwordRegisterRules"
                  label="Contraseña"
                  required
                  @click:append="show1 = !show1"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">  
                <v-text-field
                  :type="show2 ? 'text' : 'password'"
                  :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                  v-model="passwordRegisterConfirm"
                  :rules="passwordRegisterConfirmRules"
                  label="Confirmación contraseña"
                  required
                  @click:append="show2 = !show2"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-select
              class="pt-3"
              :items="items"
              label="Seleccione un rol"
              v-model="rol"
              :rules="rolRules"
              dense
            ></v-select>
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
  data()  {
    return {
      items: ['Administrador global', 'Administrador clientes', 'Administrador técnico', 'General Compañía'],
      dialog: false,
      show1: false,
      show2: false,
      email: "",
      emailRules: [
        (v) => !!v || "El correo electrónico es requerido.",
        (v) =>
          /.+@.+\..+/.test(v) || "El correo electrónico debe de ser válido",
      ],
      emailConfirm: "",
      emailConfirmRules: [
        (v) => !!v || "El correo electrónico es requerido.",
        (v) => v === this.email || "Los correos no coinciden.",
      ],
      passwordRegister: "",
      passwordRegisterRules: [(v) => !!v || "La contraseña es requerida."],
      passwordRegisterConfirm: "",
      passwordRegisterConfirmRules: [
        (v) => !!v || "La contraseña es requerida.",
        (v) => v === this.passwordRegister || "Las contraseñas no coinciden.",
      ],
      rol: "",
      rolRules :[(v) => !!v || "El rol es requerido."],
    };
  },
  methods: {
    validateRegister(){
      this.$refs.formRegister.validate()
    },
    closeReset() {
      this.dialog = false;
      this.$refs.formRegister.reset();
    },
  }
  }
</script>
