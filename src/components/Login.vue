<template>
  <md-content>
    <md-card>
      <md-field>
        <label>Email</label>
        <md-input v-model="email" type="email"></md-input>
      </md-field>
      <md-field>
        <label>Password</label>
        <md-input v-model="password" type="password"></md-input>
      </md-field>
      <md-button @click="login()" class="md-raised md-primary">Login</md-button>
    <md-snackbar :md-position="position" :md-duration="isInfinity ? Infinity : duration" :md-active.sync="showSnackbar" md-persistent>
      <span>The Email or Password is Incorrect</span>
      <md-button class="md-primary" @click="showSnackbar = false">Retry</md-button>
    </md-snackbar>
    </md-card>
  </md-content>
</template>

<script>
const api = require('@/api');

export default {
  name: 'Login',
  data: () => ({
    email: '',
    password: '',
    showSnackbar: false,
    position: 'center',
    duration: 4000,
    isInfinity: false
  }),
  beforeMount() {
    if (api.checkIfCookieIsAlive() === true) {
      this.$router.push({ path: 'Playlists' });
    }
  },
  methods: {
    async login() {
      const result = await api.postLogin(this.email, this.password);
      if (result.status !== 200) {
        this.showSnackbar = true;
      } else {
        this.$bus.$emit('logged', true);
      }
    },
  },
};
</script>

<style scoped>
.md-content {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0rem;
}

.md-card {
  width: 400px;
  padding: 1rem;
}
</style>
