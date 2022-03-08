<template>
  <user-dashboard>
    <div>
      <page-title
        :heading="heading"
        @create-new="$bvModal.show('create-bill-modal')"
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
        <show-bill :customer-id="customerId" ref="showBill" :id="id"></show-bill>
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
      <b-modal id="create-bill-modal" title="Create Bill" size="lg">
        <create-bill :customer-id="customerId" ref="createBill"></create-bill>
        <template v-slot:modal-footer>
          <div class="w-100">
            <div class="float-right">
              <b-button
                variant="danger"
                class="mr-2"
                @click="$bvModal.hide('create-bill-modal')"
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
      <b-modal id="edit-bill-modal" title="Change Bill Status" size="lg">
        <edit-bill :customer-id="customerId" ref="editBill" :id="id"></edit-bill>
        <template v-slot:modal-footer>
          <div class="w-100">
            <div class="float-right">
              <b-button
                variant="danger"
                class="mr-2"
                @click="$bvModal.hide('edit-bill-modal')"
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
  </user-dashboard>
</template>

<script>
import CreateBill from "./CreateBill";
import EditBill from "./EditBill";
import ShowBill from "./ShowBill";
import convertToLocaleDateTimeString from "../../../../utils/convertToLocaleDateTimeString";

export default {
  components: {
    CreateBill,
    EditBill,
    ShowBill,
  },
  data: () => ({
    heading: "Bills",
    apiUrl: "",
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
  computed: {
      customerId() {
          return this.$route.params.customerId
      }
  },
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
      this.apiUrl = "/api/customers/" + this.$route.params.customerId + "/bills"
  }
};
</script>
