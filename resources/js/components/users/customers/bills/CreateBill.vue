<template>
  <div>
    <b-alert :show="form.errors.hasMessage()" variant="danger" dismissible>
      {{ form.errors.getMessage() }}
    </b-alert>
    <b-form
      @keydown="form.errors.clear($event.target.name)"
      @change="form.errors.clear($event.target.name)"
    >
      <b-form-group id="month-input-group" label="Month" label-for="month">
        <b-form-select
          id="month"
          v-model="form.month"
          name="month"
          :options="months"
        ></b-form-select>
        <b-form-invalid-feedback
          :state="!form.errors.has('month')"
          v-text="form.errors.get('month')"
        ></b-form-invalid-feedback>
      </b-form-group>
      <b-form-group id="year-input-group" label="Year" label-for="year">
        <b-form-input
          id="year"
          type="number"
          v-model="form.year"
          name="year"
          placeholder="Enter year"
        >
        </b-form-input>
        <b-form-invalid-feedback
          :state="!form.errors.has('year')"
          v-text="form.errors.get('year')"
        ></b-form-invalid-feedback>
      </b-form-group>
      <b-form-group id="amount-input-group" label="Amount" label-for="amount">
        <b-form-input
          id="amount"
          type="number"
          v-model="form.amount"
          name="amount"
          step="any"
          placeholder="Enter amount"
        >
        </b-form-input>
        <b-form-invalid-feedback
          :state="!form.errors.has('amount')"
          v-text="form.errors.get('amount')"
        ></b-form-invalid-feedback>
      </b-form-group>
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
</template>

<script>
export default {
  props: {
    customerId: {
      required: true,
    },
  },
  data() {
    return {
      form: new Form({
        customer_id: Number(this.customerId),
        month: "January",
        year: 2000,
        amount: 0.00,
        status: "Due"
      }),
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      statuses: ['Due', 'Paid'],
      isLoading: false,
    };
  },
  methods: {
    submit() {
      return this.form.post("/api/customers/" + this.customerId + "/bills");
    },
  },
};
</script>
