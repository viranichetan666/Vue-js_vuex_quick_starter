<template>
  <div class="login-page pa50">
    Login Page
    <div>
      status: {{ isLogin }}
    </div>
    <div class="my20">
      <a-button type="primary" @click="onLogin">Login</a-button>
    </div>
    <div>
      <a-button type="primary" @click="onLogout">Logout</a-button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters({
      isLogin: 'auth/isLogin',
    }),
  },
  methods: {
    ...mapActions('auth', [
      'loginSuccess',
      'logout',
    ]),
    onLogin() {
      this.loginSuccess();
      // this.$store.dispatch('auth/loginSuccess');
    },
    onLogout() {
      this.logout();
      // this.$store.dispatch('auth/logout');
    },
  },
};
</script>
