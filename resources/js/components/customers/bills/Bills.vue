<template>
  <customer-dashboard>
    <div>
      <page-title
        :heading="heading"
        :noCreateNew="true"
      >
      </page-title>
      <b-alert :show="successMessage !== ''" variant="success" dismissible>
        {{ successMessage }}
      </b-alert>
      <b-card class="main-card mb-4">
        <datatable ref="billsTable" :api-url="apiUrl" :fields="fields">
          <template v-slot:cell(actions)="row">
            <b-button
              variant="info"
              size="sm"
              class="mr-2 mb-2"
              @click="show(row.item.id)"
            >
              Details
            </b-button>
            <b-button
              variant="danger"
              size="sm"
              class="mr-2 mb-2"
              @click="edit(row.item.id)"
            >
              Change Status
            </b-button>
          </template>
        </datatable>
      </b-card>
      <b-modal id="show-bill-modal" title="Bill Details" size="lg">
        <show-bill ref="showBill" :id="id"></show-bill>
        <template v-slot:modal-footer>
          <div class="w-100">
            <div class="float-right">
              <b-button
                variant="danger"
                class="mr-2"
                @click="$bvModal.hide('show-bill-modal')"
              >
                Cancel
              </b-button>
              <b-button
                variant="success"
                @click="$bvModal.hide('show-bill-modal')"
              >
                Ok
              </b-button>
            </div>
          </div>
        </template>
      </b-modal>
    </div>
  </customer-dashboard>
</template>

<script>
import ShowBill from "./ShowBill";
import convertToLocaleDateTimeString from "../../../utils/convertToLocaleDateTimeString";

export default {
  components: {
    ShowBill,
  },
  data: () => ({
    heading: "Bills",
    apiUrl: "/api/customer/bills",
    fields: [
      {
        key: "row_no",
        label: "#",
      },
      {
        key: "month",
        sortable: true,
      },
      {
        key: "year",
        sortable: true,
      },
      {
        key: "amount",
        sortable: true,
        formatter: value => value + "/- tk"
      },
      {
        key: "status",
        sortable: true,
      },
      {
        key: "created_at",
        formatter: (value) => convertToLocaleDateTimeString(value),
        sortable: true,
      },
      "actions",
    ],
    successMessage: "",
    isStoring: false,
    id: 0,
    isUpdating: false,
  }),
  methods: {
    store() {
      this.isStoring = true;

      this.$refs.createBill
        .submit()
        .then((data) => {
          this.successMessage = data.message;
          this.isStoring = false;
          this.$bvModal.hide("create-bill-modal");
          this.$refs.billsTable.refresh();
        })
        .catch((data) => {
          this.isStoring = false;
          console.error(data.message);
        });
    },
    show(id) {
      this.id = id;
      this.$bvModal.show("show-bill-modal");
    },
    edit(id) {
      this.id = id;
      this.$bvModal.show("edit-bill-modal");
    },
    update() {
      this.isUpdating = true;

      this.$refs.editBill
        .submit()
        .then((data) => {
          this.successMessage = data.message;
          this.isUpdating = false;
          this.$bvModal.hide("edit-bill-modal");
          this.$refs.billsTable.refresh();
        })
        .catch((data) => {
          this.isUpdating = false;
          console.error(data.message);
        });
    },
  },
  created() {
      this.apiUrl = "/api/customer/bills"
  }
};
</script>
