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
        <b-form-group id="status-input-group" label="Status" label-for="status">
        <b-form-select
          id="status"
          v-model="form.status"
          name="status"
          :options="statuses"
        ></b-form-select>
        <b-form-invalid-feedback
          :state="!form.errors.has('status')"
          v-text="form.errors.get('status')"
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
    customerId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      form: new Form({
        status: ""
      }),
      statuses: ['Due', 'Paid'],
      successMessage: "",
      isLoading: false,
    };
  },
  methods: {
    submit() {
      return this.form.patch("/api/customers/" + this.customerId + "/bills/" + this.id);
    },
    getBill() {
      this.isLoading = true;

      axios
        .get("/api/customers/" + this.customerId + "/bills/" + this.id)
        .then((response) => {
          this.form.status = response.data.data.status;

          this.isLoading = false;
        })
        .catch((error) => {
          console.error(error.response.data.message);
          this.isLoading = false;
        });
    },
  },
  created() {
    this.getBill();
  },
};
</script>
