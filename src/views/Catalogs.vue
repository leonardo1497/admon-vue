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
        <Products />
      </v-tab-item>
      <v-tab-item>
        <Services />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
    import Products from "../components/catalogs/Products";
    import Services from "../components/catalogs/Services";
    export default {
      components: {
        Products,
        Services,
      },
      data() {
        return {
          tab: null,
          items: ["Productos", "Servicios"],
        };
      },
    };
</script>
