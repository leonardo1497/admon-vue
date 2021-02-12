<template>
  <div>
    <v-toolbar dense>
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar"> </v-app-bar-nav-icon>
      </span>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-icon>mdi-{{item.icon}}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model="sidebar" absolute top temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            ADMON
          </v-list-item-title>
          <v-list-item-subtitle>
            Sistema de administración
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="blue--text text--accent-4"
        >
          <v-list-item
            v-for="item in menuItems"
            :key="item.title"
            :to="item.path"
          >
            <v-icon>mdi-{{item.icon}}</v-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appTitle: "ADMON",
      sidebar: false,
      menuItems: [
          { title: "Home", path: "/", icon: "home" },
          { title: "Table", path: "/table", icon: "grid" },
          { title: "Login", path: "/login", icon: "account" },
      ],
    };
  },
};
</script>
