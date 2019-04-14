<template>
  <md-content>
    <md-card>
      <md-field>
          <label>Name</label>
          <md-input v-model="name" required></md-input>
      </md-field>
      <md-field>
          <label>Email</label>
          <md-input v-model="email" type="email" required></md-input>
      </md-field>
      <md-field>
          <label>Password</label>
          <md-input v-model="password" type="password"></md-input>
      </md-field>
      <md-button @click="signUp" class="md-raised md-primary">Sign Up</md-button>
      <md-snackbar :md-position="position" :md-duration="isInfinity ? Infinity : duration" :md-active.sync="showSnackbar" md-persistent>
      <span>{{this.message}}</span>
      <md-button class="md-primary" @click="showSnackbar = false">Retry</md-button>
    </md-snackbar>
    </md-card>
  </md-content>
</template>

<script>
const api = require('@/api');

export default {
  name: 'SignUp',
  data: () => ({
    name: '',
    email: '',
    password: '',
    message: '',
    showSnackbar: false,
    position: 'center',
    duration: 4000,
    isInfinity: false
  }),
  methods: {
    async signUp() {
      if (this.name === '' || this.email === '' || this.password === '') {
        this.showSnackbar = true;
        this.message = 'your informations is incorrect';
      } else {
        const result = await api.postSignUp(this.name, this.email, this.password);
        console.log(this.name);
        console.log(result);
        if (result.status === 200) {
          const login = await api.postLogin(this.email, this.password);
          if (login.status === 200) {
            this.showSnackbar = true;
            this.$router.push({ path: 'Playlists' });
          } else {
            this.showSnackbar = true;
            this.message = 'probleme with the connection.';
          }
        }
      }
    }
  }
};
</script>

<style scoped>
.md-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  padding: 1rem 0rem;
}

.md-card {
  width: 400px;
  padding: 1.0rem;
}
</style>

