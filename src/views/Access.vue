<template>
  <div>
    <v-tabs v-model="tab" background-color="cyan" dark>
      <v-tabs-slider></v-tabs-slider>

      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab" style="background: transparent;">
      <v-tab-item>
        <Users />
      </v-tab-item>
      <v-tab-item>
        <Permissions />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import Users from "../components/access/Users";
import Permissions from "../components/access/Permissions";
export default {
  components: {
    Users,
    Permissions,
  },
  data() {
    return {
      tab: null,
      items: ["Usuarios", "Roles y Permisos"],
    };
  },
};
</script>
