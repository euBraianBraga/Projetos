<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <button
      type="button"
      aria-expanded="false"
      class="navbar-toggler"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="navbar sem-acesso" href="#"><b>Navbar</b></a>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" v-if="isAuthenticated" to="/">Home</router-link>
        </li>
        <li class="nav-item" v-if="!isAuthenticated">
          <router-link class="nav-link" to="/login">Logar</router-link>
        </li>
        <li class="nav-item" v-if="!isAuthenticated">
          <router-link class="nav-link" to="/signup">Cadastrar</router-link>
        </li>
        <li class="nav-item" v-if="isAuthenticated">
          <router-link class="nav-link" to="/posts">Vue Vue</router-link>
        </li>
        <li class="nav-item" v-if="isAuthenticated">
          <router-link class="nav-link" to="/postsReact"
            >Reage React</router-link
          >
        </li>
        <li class="nav-item" v-if="isAuthenticated">
          <a href="#" class="nav-link" @click.prevent="onLogout()">Sair</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import {
  IS_USER_AUTHENTICATE_GETTER,
  LOGOUT_ACTION,
} from "../store/storeconstants";
export default {
  computed: {
    ...mapGetters("auth", {
      isAuthenticated: IS_USER_AUTHENTICATE_GETTER,
    }),
  },
  methods: {
    ...mapActions("auth", {
      logout: LOGOUT_ACTION,
    }),
    onLogout() {
      this.logout();
      this.$router.replace("/login");
    },
  },
};
</script>
<style>
.navbar {
  z-index: 99;
}

body {
  font-family: "Poppins", sans-serif;
}

.sem-acesso {
  color: #7f7f7f !important;
}
</style>