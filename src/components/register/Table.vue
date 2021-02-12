<template>
  <v-card>
    <v-dialog v-model="dialog" persistent max-width="340" >
      <v-card class="pa-4">
        <v-card-title class="text-center">
          <v-row align="center" justify="center" class="mb-4">
            <v-icon color="yellow darken-1" style="font-size: 60px;">
              mdi-alert-circle-outline
            </v-icon>
          </v-row>
          ¿Está usted seguro de realizar la acción?
        </v-card-title>
        <v-card-actions>
          <v-container >
          <v-row>
            <v-col>
              <v-btn color="success" @click="confirmChangeUser">
                Continuar
              </v-btn>
            </v-col>
            <v-col >
              <v-btn class="float-right" @click="cancelChangeUser">
                Cancelar
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-data-table
      dense
      :headers="headers"
      :items="items"
      :search="search"
      :page.sync="page"
      @page-count="pageCount = $event"
      hide-default-footer
      :items-per-page="15"
      :footer-props="{
        'items-per-page-text': 'Registros por página',
        prevIcon: '',
        nextIcon: '',
        'disable-pagination': true,
      }"
    >
      <template v-slot:item.activate="{ item, index }">
        <v-switch
          v-model="items[index].activate"
          color="success"
          :value="items[index].activate"
          @click="openConfirmation(index)"
          hide-details
        ></v-switch>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              v-bind="attrs"
              v-on="on"
              color="cyan"
              dense
              @click="editItem(item)"
            >
              mdi-pencil
            </v-icon>
          </template>
          <span>Editar</span>
        </v-tooltip>
      </template>
      <template v-slot:top="{ pagination, options, updateOptions }">
        <v-row justify="start">
          <v-col cols="12" md="4">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Búsqueda"
              class="mr-5 ml-5"
            ></v-text-field
          ></v-col>
          <v-col cols="12" md="8">
            <v-data-footer
              class="pr-0 mr-0"
              prevIcon=""
              nextIcon=""
              :items-per-page-options="[15, 20, 25, -1]"
              :disable-pagination="true"
              :pagination="pagination"
              :options="options"
              @update:options="updateOptions"
              items-per-page-text="Registros por página"
            />
          </v-col>
        </v-row>
      </template>
    </v-data-table>
    <div class="text-center pt-2 pb-5">
      <v-pagination
        v-model="page"
        :length="pageCount"
        color="cyan"
      ></v-pagination>
    </div>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      idCurrentUser: 0,
      dialog: false,
      page: 1,
      pageCount: 0,
      search: "",
      headers: [
        {
          text: "Id",
          align: "start",
          value: "id",
        },
        { text: "Nombre", value: "name" },
        { text: "Correo", value: "email" },
        { text: "Compañía", value: "company" },
        { text: "Código de cliente", value: "confirmationCode" },
        { text: "", value: "activate", sortable: false },
        { text: "", value: "actions", sortable: false },
      ],
      items: [
        {
          id: 1,
          name: "Nombre 1",
          email: "example1@gmail.com",
          company: "Compañía 1",
          confirmationCode: "ADMON1497",
          activate: true,
        },
        {
          id: 2,
          name: "Nombre 1",
          email: "example1@gmail.com",
          company: "Compañía 1",
          confirmationCode: "ADMON1497",
          activate: true,
        },
        {
          id: 3,
          name: "Nombre 1",
          email: "example1@gmail.com",
          company: "Compañía 1",
          confirmationCode: "ADMON1497",
          activate: true,
        },
        {
          id: 4,
          name: "Nombre 1",
          email: "example1@gmail.com",
          company: "Compañía 1",
          confirmationCode: "ADMON1497",
          activate: true,
        },
        {
          id: 5,
          name: "Nombre 1",
          email: "example1@gmail.com",
          company: "Compañía 1",
          confirmationCode: "ADMON1497",
          activate: true,
        },
        {
          id: 6,
          name: "Nombre 1",
          email: "example1@gmail.com",
          company: "Compañía 1",
          confirmationCode: "ADMON1497",
          activate: false,
        },
        {
          id: 7,
          name: "Nombre 1",
          email: "example1@gmail.com",
          company: "Compañía 1",
          confirmationCode: "ADMON1497",
          activate: false,
        },
        {
          id: 8,
          name: "Nombre 1",
          email: "example1@gmail.com",
          company: "Compañía 1",
          confirmationCode: "ADMON1497",
          activate: false,
        },
        {
          id: 9,
          name: "Nombre 1",
          email: "example1@gmail.com",
          company: "Compañía 1",
          confirmationCode: "ADMON1497",
          activate: false,
        },
        {
          id: 10,
          name: "Nombre 1",
          email: "example1@gmail.com",
          company: "Compañía 1",
          confirmationCode: "ADMON1497",
          activate: false,
        },
        {
          id: 11,
          name: "Nombre 1",
          email: "example1@gmail.com",
          company: "Compañía 1",
          confirmationCode: "ADMON1497",
          activate: false,
        },
        {
          id: 12,
          name: "Nombre 1",
          email: "example1@gmail.com",
          company: "Compañía 1",
          confirmationCode: "ADMON1497",
          activate: false,
        },
      ],
    };
  },
  methods: {
    openConfirmation(id) {
      this.dialog = true;
      this.idCurrentUser = id;
    },
    confirmChangeUser() {
      this.dialog = false;
    },
    cancelChangeUser() {
      this.dialog = false;
      this.items[this.idCurrentUser].activate = !this.items[this.idCurrentUser]
        .activate;
    },
    editItem(item) {
      console.log({ item });
    },
  },
};
</script>
