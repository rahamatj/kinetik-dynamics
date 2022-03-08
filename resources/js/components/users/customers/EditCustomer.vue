<template>
  <div>
    <div
      class="d-flex h-100 justify-content-center align-items-center"
      v-if="isLoading"
    >
      <b-spinner class="spinner" variant="primary"></b-spinner>
    </div>
    <div v-if="!isLoading">
      <b-alert :show="form.errors.hasMessage()" variant="danger" dismissible>
        {{ form.errors.getMessage() }}
      </b-alert>
      <b-form
        @keydown="form.errors.clear($event.target.name)"
        @change="form.errors.clear($event.target.name)"
      >
        <b-form-group id="name-input-group" label="Name" label-for="name">
          <b-form-input
            id="name"
            type="text"
            v-model="form.name"
            name="name"
            placeholder="Enter name"
          >
          </b-form-input>
          <b-form-invalid-feedback
            :state="!form.errors.has('name')"
            v-text="form.errors.get('name')"
          ></b-form-invalid-feedback>
        </b-form-group>
        <b-form-group id="email-input-group" label="Email" label-for="email">
          <b-form-input
            id="email"
            type="email"
            v-model="form.email"
            name="email"
            placeholder="Enter email"
          >
          </b-form-input>
          <b-form-invalid-feedback
            :state="!form.errors.has('email')"
            v-text="form.errors.get('email')"
          ></b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
          id="password-input-group"
          label="Password"
          label-for="password"
        >
          <b-form-input
            id="password"
            type="password"
            v-model="form.password"
            name="password"
            placeholder="Enter password"
          >
          </b-form-input>
          <b-form-invalid-feedback
            :state="!form.errors.has('password')"
            v-text="form.errors.get('password')"
          ></b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
          id="address-input-group"
          label="Address"
          label-for="address"
        >
          <b-form-textarea
            id="address"
            v-model="form.address"
            placeholder="Enter address"
            name="address"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
          <b-form-invalid-feedback
            :state="!form.errors.has('address')"
            v-text="form.errors.get('address')"
          ></b-form-invalid-feedback>
        </b-form-group>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      form: new Form({
        name: "",
        email: "",
        password: "",
        address: ""
      }),
      successMessage: "",
      isLoading: false,
    };
  },
  methods: {
    submit() {
      return this.form.patch("/api/customers/" + this.id);
    },
    getCustomer() {
      this.isLoading = true;

      axios
        .get("/api/customers/" + this.id)
        .then((response) => {
          this.form.name = response.data.data.name;
          this.form.email = response.data.data.email;
          this.form.address = response.data.data.address;

          this.isLoading = false;
        })
        .catch((error) => {
          console.error(error.response.data.message);
          this.isLoading = false;
        });
    },
  },
  created() {
    this.getCustomer();
  },
};
</script>
