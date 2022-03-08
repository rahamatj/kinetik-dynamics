<template>
  <div>
    <b-row class="my-2">
      <b-col cols="6">
        <h3>{{ heading }}</h3>
      </b-col>
      <b-col cols="6" class="text-right">
        <button
          v-if="!noCreateNew"
          type="button"
          class="btn-shadow d-inline-flex align-items-center btn btn-success"
          @click="onCreateNew"
        >
          Create New
        </button>
        <slot name="buttons"></slot>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    heading: String,
    noCreateNew: Boolean,
  },
  methods: {
      onCreateNew() {
        this.$emit('create-new')
      }
    }
};
</script>
