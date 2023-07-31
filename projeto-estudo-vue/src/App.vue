<template>
  <the-navigation />
  <the-loader v-if="showLoading"></the-loader>
  <div>
    <div>
      <div>
        <div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
import { mapState } from "vuex";
import { defineAsyncComponent } from "vue";
import { AUTO_LOGIN_ACTION } from "./store/storeconstants";
import TheNavigation from "./components/TheNavigation.vue";

const TheLoader = defineAsyncComponent(() =>
  import("./components/TheLoader.vue")
);
export default {
  name: "App",
  computed: {
    ...mapState({
      showLoading: (state) => state.showLoading,
      autoLogout: (state) => state.auth.autoLogout,
    }),
  },

  watch: {
    autoLogout(curValue, oldValue) {
      if (curValue && curValue != oldValue) {
        this.$router.replace("/login");
      }
    },
  },
  components: {
    TheLoader,
    TheNavigation,
  },
  created() {
    this.$store.dispatch(`auth/${AUTO_LOGIN_ACTION}`);
  },
};
</script>
