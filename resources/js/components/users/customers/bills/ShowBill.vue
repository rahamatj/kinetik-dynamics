<template>
  <div>
    <div
      class="d-flex h-100 justify-content-center align-items-center"
      v-if="isLoading"
    >
      <b-spinner class="spinner" variant="primary"></b-spinner>
    </div>
    <div v-if="!isLoading">
      <b-table stacked :items="operators" :fields="fields"> </b-table>
    </div>
  </div>
</template>

<script>
import convertToLocaleDateTimeString from "../../../../utils/convertToLocaleDateTimeString";

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
      operators: [],
      fields: [
        "month",
        "year",
        {
          key: "amount",
          formatter: (value) => value + "/- tk",
        },
        {
          key: "created_at",
          formatter: (value) => convertToLocaleDateTimeString(value),
        },
      ],
      isLoading: false,
    };
  },
  methods: {
    getBill() {
      this.isLoading = true;

      axios
        .get("/api/customers/" + this.customerId + "/bills/" + this.id)
        .then((response) => {
          this.operators.push(response.data.data);

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
