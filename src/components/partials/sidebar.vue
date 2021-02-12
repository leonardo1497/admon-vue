<template>
  <v-navigation-drawer 
    v-model="drawer"
    :mini-variant.sync="mini"
    permanent 
    app
   >
    <v-list style="padding-top: 0;">
      <v-list-item dark style="background: #1f7087">
        <v-list-item-content>
          <v-list-item-title class="title">
            ADMON
          </v-list-item-title>
          <v-list-item-subtitle>
            Sistema de administración
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-btn
          icon
          @click.stop="mini=!mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item class="pt-5 pb-3" link>
        <v-list-item-title >
          BIENVENIDO <br>
          Sandra Adams
        </v-list-item-title>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

      <v-list nav dense class="pa-0">
        <v-list-item-group
          active-class="cyan--text text--accent-4"
        >
          <v-list-item
            v-for="item in menuItems"
            :key="item.title"
            :to="item.path"
          >
            <v-icon class="pa-1"> mdi-{{item.icon}}</v-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logout">
            <v-icon class="pa-1"> mdi-logout</v-icon>
            <v-list-item-title>Cerrar sesión</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
        mini: false,
        drawer: true,
        menuItems: [
            { title: "Home", path: "/home", icon: "home" },
            { title: "Catálogos", path: "/catalogs", icon: "view-grid-plus" },
            { title: "Cards", path: "/cards", icon: "card" },
            { title: "Modals", path: "/modals", icon: "circle" },
            { title: "Acceso", path: "/access", icon: "shield-key" },
            { title: "Clientes", path: "/register", icon: "account-group" },
        ],
    };
  },
  methods: {
    logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
      },
  },
};
</script>