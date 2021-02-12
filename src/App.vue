<template>
  <v-app>
    <!--Navbar v-if="authenticated" /-->
    <Sidebar v-if="isLoggedIn" />
    <v-app-bar
      flat
      v-if="isLoggedIn"
      class="bg-topbar"
      style="height:66.8px!important;"
      app
    ></v-app-bar>
    <v-main class="bg-content">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

//import Navbar from './components/partials/navbar.vue'
import Sidebar from './components/partials/sidebar.vue'
export default {
  name: "App",
  computed : {
    isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
  },
  components: {
    Sidebar,
    //Navbar
  },
    data(){
      return {
        authenticated : true,
      }
    },
  methods: {
    logout: function () {
      this.$store.dispatch('logout')
      .then(() => {
        this.$router.push('/login')
      })
    }
  },
  created: function () {
    /*this.$http.interceptors.response.use(undefined, function (err) {
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch(logout)
        }
        throw err;
      });
    });*/
  }
};
</script>
