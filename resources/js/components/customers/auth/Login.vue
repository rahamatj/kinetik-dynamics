<template>
  <div>
    <div class="container h-100">
      <div class="h-100 row justify-content-center">
        <div class="col-10 col-md-8 col-lg-6">
          <b-alert
            :show="form.hasSuccessMessage()"
            variant="success"
            dismissible
          >
            {{ form.getSuccessMessage() }}
          </b-alert>
          <b-alert
            :show="form.errors.hasMessage()"
            variant="danger"
            dismissible
          >
            {{ form.errors.getMessage() }}
          </b-alert>
          <b-card title="Login as Customer" class="mb-2 mt-5">
            <b-form
              id="login-form"
              @submit.prevent="login"
              @keydown="form.errors.clear()"
            >
              <b-form-group
                id="email-form-group"
                label-cols-sm="4"
                label-cols-lg="3"
                content-cols-sm
                content-cols-lg="7"
                label="Email"
                label-for="email-input"
              >
                <b-form-input
                  type="email"
                  id="email-input"
                  v-model="form.email"
                ></b-form-input>
                <b-form-invalid-feedback
                  :state="!form.errors.has('email')"
                  v-text="form.errors.get('email')"
                ></b-form-invalid-feedback>
              </b-form-group>
              <b-form-group
                id="password-form-group"
                label-cols-sm="4"
                label-cols-lg="3"
                content-cols-sm
                content-cols-lg="7"
                label="Password"
                label-for="password-input"
              >
                <b-form-input
                  type="password"
                  id="password-input"
                  v-model="form.password"
                ></b-form-input>
                <b-form-invalid-feedback
                  :state="!form.errors.has('password')"
                  v-text="form.errors.get('password')"
                ></b-form-invalid-feedback>
              </b-form-group>
              <div>
                <b-button
                  id="login"
                  type="submit"
                  variant="primary"
                  size="lg"
                  :disabled="form.errors.any() || form.isLoading()"
                  ><b-spinner
                    class="spinner"
                    small
                    v-if="form.isLoading()"
                  ></b-spinner>
                  Login
                </b-button>
              </div>
            </b-form>
            <div class="mt-2">
                <router-link to="/">Log in as User</router-link>
            </div>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      form: new Form({
        email: "customer@email.com",
        password: "12345678",
      }),
    };
  },
  methods: {
    ...mapActions("customerLogin", ["authenticate"]),
    login() {
      this.authenticate(this.form)
        .then((data) => {
          let routeName = "customers.dashboard";

          this.$router.replace({ name: routeName });
        })
        .catch((data) => console.error(data.message));
    },
  },
};
</script>
