<template>
  <div>
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
</template>

<script>
export default {
  data() {
    return {
      form: new Form({
        name: "",
        email: "",
        password: "",
        address: ""
      }),
      isLoading: false,
    };
  },
  methods: {
    submit() {
      return this.form.post("/api/customers");
    },
  },
};
</script>
