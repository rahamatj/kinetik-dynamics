<template>
  <dashboard>
    <div>
      <page-title
        :heading="heading"
        @create-new="$bvModal.show('create-customer-modal')"
      >
      </page-title>
      <b-alert :show="successMessage !== ''" variant="success" dismissible>
        {{ successMessage }}
      </b-alert>
      <b-card class="main-card mb-4">
        <datatable ref="customersTable" :api-url="apiUrl" :fields="fields">
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
              variant="primary"
              size="sm"
              class="mr-2 mb-2"
              @click="edit(row.item.id)"
            >
              Edit
            </b-button>
            <b-button
              variant="warning"
              size="sm"
              class="mr-2 mb-2"
              @click="bills(row.item.id)"
            >
              Bills
            </b-button>
            <b-button
              variant="danger"
              size="sm"
              class="mr-2 mb-2"
              @click="destroy(row.item.id)"
            >
              Delete
            </b-button>
          </template>
        </datatable>
      </b-card>
      <b-modal id="show-customer-modal" title="Customer Details" size="lg">
        <show-customer ref="showCustomer" :id="id"></show-customer>
        <template v-slot:modal-footer>
          <div class="w-100">
            <div class="float-right">
              <b-button
                variant="danger"
                class="mr-2"
                @click="$bvModal.hide('show-customer-modal')"
              >
                Cancel
              </b-button>
              <b-button
                variant="success"
                @click="$bvModal.hide('show-customer-modal')"
              >
                Ok
              </b-button>
            </div>
          </div>
        </template>
      </b-modal>
      <b-modal id="create-customer-modal" title="Create Customer" size="lg">
        <create-customer ref="createCustomer"></create-customer>
        <template v-slot:modal-footer>
          <div class="w-100">
            <div class="float-right">
              <b-button
                variant="danger"
                class="mr-2"
                @click="$bvModal.hide('create-customer-modal')"
                :disabled="isStoring"
              >
                Cancel
              </b-button>
              <b-button variant="success" @click="store" :disabled="isStoring">
                <b-spinner class="spinner" small v-if="isStoring"></b-spinner>
                Ok
              </b-button>
            </div>
          </div>
        </template>
      </b-modal>
      <b-modal id="edit-customer-modal" title="Edit Customer" size="lg">
        <edit-customer ref="editCustomer" :id="id"></edit-customer>
        <template v-slot:modal-footer>
          <div class="w-100">
            <div class="float-right">
              <b-button
                variant="danger"
                class="mr-2"
                @click="$bvModal.hide('edit-customer-modal')"
                :disabled="isUpdating"
              >
                Cancel
              </b-button>
              <b-button
                variant="success"
                @click="update"
                :disabled="isUpdating"
              >
                <b-spinner class="spinner" small v-if="isUpdating"></b-spinner>
                Ok
              </b-button>
            </div>
          </div>
        </template>
      </b-modal>
    </div>
  </dashboard>
</template>

<script>
import CreateCustomer from "./CreateCustomer";
import EditCustomer from "./EditCustomer";
import ShowCustomer from "./ShowCustomer";
import convertToLocaleDateTimeString from "../../utils/convertToLocaleDateTimeString";

export default {
  components: {
    CreateCustomer,
    EditCustomer,
    ShowCustomer,
  },
  data: () => ({
    heading: "Customers",
    apiUrl: "/api/customers",
    fields: [
      {
        key: "row_no",
        label: "#",
      },
      {
        key: "name",
        sortable: true,
      },
      {
        key: "email",
        sortable: true,
      },
      {
        key: "address",
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

      this.$refs.createCustomer
        .submit()
        .then((data) => {
          this.successMessage = data.message;
          this.isStoring = false;
          this.$bvModal.hide("create-customer-modal");
          this.$refs.customersTable.refresh();
        })
        .catch((data) => {
          this.isStoring = false;
          console.error(data.message);
        });
    },
    show(id) {
      this.id = id;
      this.$bvModal.show("show-customer-modal");
    },
    edit(id) {
      this.id = id;
      this.$bvModal.show("edit-customer-modal");
    },
    update() {
      this.isUpdating = true;

      this.$refs.editCustomer
        .submit()
        .then((data) => {
          this.successMessage = data.message;
          this.isUpdating = false;
          this.$bvModal.hide("edit-customer-modal");
          this.$refs.customersTable.refresh();
        })
        .catch((data) => {
          this.isUpdating = false;
          console.error(data.message);
        });
    },
    bills(id) {
        this.$router.replace({ name: 'bills', params: { customerId: id } });
    },
    destroy(id) {
      this.$bvModal
        .msgBoxConfirm("Are you sure you want to delete this?", {
          title: "Please Confirm",
          okVariant: "danger",
          okTitle: "YES",
          cancelTitle: "NO",
        })
        .then((value) => {
          if (value) {
            axios
              .delete("/api/customers/" + id)
              .then((response) => {
                this.successMessage = response.data.message;
                this.$refs.customersTable.refresh();
              })
              .catch((error) => console.error(error.response.data.message));
          }
        })
        .catch((error) => console.error(error.response.data.message));
    },
  },
};
</script>
