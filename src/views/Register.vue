<template>
  <div>
    <v-tabs v-model="tab" background-color="cyan" dark>
      <v-tabs-slider></v-tabs-slider>

      <v-tab>
        Clientes
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab" style="background: transparent;">
      <v-tab-item class="pa-10">
        <div class="text-center pt-3 pb-3">
            <h2 class="headline">
              Administración de clientes
            </h2>
          </div>
      
          <Add />
          <Table class="mt-5" />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
import Add from "../components/register/Add";
import Table from "../components/register/Table";
export default {
  name: "App",
  components: {
    Add,
    Table,
  },
  data () {
      return {
        tab: null,
      }
    },
};
</script>
