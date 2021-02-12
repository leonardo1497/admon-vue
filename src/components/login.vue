<template>
  <div class="background-login">
    <div class="d-flex justify-center">
      <div id="container-center">
      <v-tabs
        class="container-login"
        v-model="tab"
        background-color="cyan"
        dark
      >
      <v-tabs-slider></v-tabs-slider>
        <v-tab
          v-for="item in items"
          :key="item.tab"
        >
          {{ item.tab }}
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab" class="container-login">
        <v-tab-item>
          <v-card id="div_card" class="" flat>
            <div class="text-center mt-5">
              <h3 class="headline">
                Bienvenido
              </h3>
            </div>
            <v-container>
              <v-form ref="form" v-model="valid" class="pa-10" lazy-validation>
                  <v-text-field
                  v-model="username"
                  :rules="usernameRules"
                  label="Nombre"
                  required
                  ></v-text-field>

                  <v-text-field
                  type="password"
                  v-model="password"
                  :rules="passwordRules"
                  label="Contraseña"
                  required
                  ></v-text-field>

                  <div class="text-center">
                    <v-btn    
                    color="success"
                    class="mr-4 text-capitalize"
                    @click="validate"
                    >
                    Acceder
                    </v-btn>
                  </div>
              </v-form>
            </v-container>
            <v-snackbar
            v-model="snackbar"
            color="red"
            :timeout="2000" 
          >
            <v-container class="alert-width">
              <v-row><v-icon class="mr-3">mdi-alert-circle</v-icon> {{alertStatus}} </v-row>
              <v-row class="mt-5">
                {{alertMsg}}
              </v-row>
            </v-container>
          </v-snackbar>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <div class="text-center mt-5">
              <h3 class="headline">
                Completa tu información
              </h3>
            </div>
            <v-container>
              <v-form ref="formRegister" class="pa-10" v-model="valid" lazy-validation>
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field
                      v-model="confirmCode"
                      :rules="confirmCodeRules"
                      label="Código de cliente"
                      required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="company"
                        :rules="companyRules"
                        label="Compañía"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="telephone"
                        :rules="telephoneRules"
                        label="Teléfono"
                        type="number"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-text-field
                    v-model="address"
                    :rules="addressRules"
                    label="Dirección"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="contact"
                    :rules="contactRules"
                    label="Contacto"
                    required
                  ></v-text-field>
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
                      @click:append="show2 = !show2"
                      required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <div class="text-center">
                    <v-btn
                    color="success"
                    class="mr-4 mt-5 mb-5"
                    @click="validateRegister"
                    >
                    Crear cuenta
                    </v-btn>
                  </div>
              </v-form>
            </v-container>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return{
      show1: false,
      show2: false,
      snackbar: false,
      alertStatus: "",
      alertColor: "",
      alertMsg: "",
      tab: null,
      items: [
        { tab: 'Iniciar sesión' },
        { tab: 'Registro' },
      ],
      dialog: false,
      valid: true,
      username: "",
      usernameRules: [
        (v) => !!v || "El nombre es requerido.",
      ],
      password: "",
      passwordRules: [
        (v) => !!v || "La contraseña es requerida.",
      ],
      company: "",
      companyRules: [
        (v) => !!v || "El nombre de la compañia es requerido.",
      ],
      address: "",
      addressRules: [
        (v) => !!v || "La dirección es requerida.",
      ],
      telephone: "",
      telephoneRules: [
        (v) => !!v || "El teléfono es requerido.",
      ],
      contact: "",
      contactRules: [
        (v) => !!v || "El nombre del contacto es requerido.",
      ],
      email: "",
      emailRules: [
        v => !!v || 'El correo electrónico es requerido.',
        v => /.+@.+\..+/.test(v) || 'El correo electrónico debe de ser válido',
      ],
      emailConfirm: "",
      emailConfirmRules: [
        v => !!v || 'El correo electrónico es requerido.',
        v => v === this.email || 'Los correos no coinciden.',
      ],
      passwordRegister: "",
      passwordRegisterRules: [
        v => !!v || 'La contraseña es requerida.',
      ],
      passwordRegisterConfirm: "",
      passwordRegisterConfirmRules: [
        v => !!v || 'La contraseña es requerida.',
        v => v === this.passwordRegister || 'Las contraseñas no coinciden.'
      ],
      confirmCode: "",
      confirmCodeRules: [
        v => !!v || 'El código de confirmación es requerido'
      ]
    }
  },

  methods: {
    validate() {
      if(this.$refs.form.validate()){
        this.login();
      }
    },
    login () {
        let username = this.username
        let password = this.password
        this.$store.dispatch('login', { username, password })
       .then(response => {
         console.log({response})
       }).catch(err => {
         this.alertColor = "red"
         this.alertMsg = err.response.data;
         this.alertStatus = "Error"
         console.log(err.response.status, err.response.data)
         this.snackbar = true 
        })
    },
    validateRegister(){
      this.$refs.formRegister.validate()
    }
  },
  watch: {
    dialog (val) {
      if (!val) return

      setTimeout(() => (this.dialog = false), 4000)
    },
  },
};
</script>
<style>
  #container-center{
    width: 700px;
  }
  .container-login{
    max-width: 700px;
  }
  .alert-width{
    width: 1000px !important;
  }
</style>
