<template>
  <md-content>
    <md-card>
      <md-field>
          <label>Email</label>
          <md-input v-model="email"></md-input>
      </md-field>
      <md-field>
          <label>Password</label>
          <md-input v-model="password" type="password"></md-input>
      </md-field>
      <md-button @click="login" class="md-raised md-primary">Login</md-button>
    </md-card>
  </md-content>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    email: '',
    password: '',
  }),
  methods: {
    login() {
      return this.email;
    },
  },
};
</script>

<style scoped>
.md-content {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0rem;
}

.md-card {
  width: 400px;
  padding: 1.0rem;
}
</style>
