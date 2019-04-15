<template>
  <md-content>
    <form novalidate class="md-layout md-alignment-center-center" @submit.prevent="validateUser">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Register</div>
        </md-card-header>
        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('name')" md-clearable>
                <label for="name">Name</label>
                <md-input name="name" id="name" autocomplete="given-name" v-model="form.name" :disabled="sending" required/>
                <span class="md-error" v-if="!form.name.required">Name is required</span>
                <span class="md-error" v-else-if="!form.name.minLength">Name must have at least 3 letters</span>
              </md-field>
            </div>

            <div class="md-layout-item  md-small-size-100">
              <md-field :class="getValidationClass('email')" md-clearable>
                <label for="email">Email</label>
                <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" required/>
                <span class="md-error" v-if="!form.email.required">Email is required</span>
                <span class="md-error" v-else-if="!form.email.email">Invalid email</span>
              </md-field>
            </div>

            <div class="md-layout-item  md-small-size-100">
              <md-field :class="getValidationClass('password')">
                <label for="password">Password</label>
                <md-input type="password" name="password" id="password" v-model="form.password" :disabled="sending" required/>
                <span class="md-error" v-if="!form.password.required">Password is required</span>
                <span class="md-error" v-else-if="!form.password.minLength">Password must have at least 8 characters</span>
              </md-field>
            </div>
            
          </div>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions md-alignment="left">
          <md-button type="submit" class="md-raised md-primary" :disabled="sending">Create user</md-button>
        </md-card-actions>
      </md-card>
    </form>
  </md-content>
</template>

<script>
const { postSignUp } = require('@/api');
const { validationMixin } = require('vuelidate');
const { required, minLength, email } = require('vuelidate/lib/validators');

export default {
  name: 'SignUp',
  mixins: [validationMixin],
  data: () => ({
    form: {
      name: '',
      email: '',
      password: '',
    },
    userSaved: false,
    sending: false,
  }),
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3)
      },
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(8),
      }
    }
  },
  methods: {
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        };
      }
      return {};
    },
    clearForm() {
      this.$v.$reset();
      this.form.name = null;
      this.form.email = null;
      this.form.password = null;
    },
    saveUser() {
      this.sending = true;
      postSignUp(this.form.name, this.form.email, this.form.password)
      .then((response) => {
        console.log(response);
        this.userSaved = true;
        this.sending = false;
      });
    },
    validateUser() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.saveUser();
      }
    },
  }
};
</script>

<style scoped>
.md-content {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0rem;
}

.md-progress-bar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}
</style>

