<template>
  <customer-dashboard>
    <div>
      <page-title
        :heading="heading"
        :noCreateNew="true"
      >
      </page-title>
      <b-card class="main-card mb-4">
        <datatable ref="billsTable" :api-url="apiUrl" :fields="fields">
        </datatable>
      </b-card>
    </div>
  </customer-dashboard>
</template>

<script>
export default {
  data: () => ({
    heading: "Monthly Bills",
    apiUrl: "/api/customer/bills/monthly",
    fields: [
      {
        key: "row_no",
        label: "#",
      },
      {
        key: "year",
        sortable: true,
      },
      {
        key: "month",
        sortable: true,
      },
      {
        key: "total_amount",
        sortable: true,
        formatter: value => value + "/- tk"
      },
    ],
  }),
};
</script>
