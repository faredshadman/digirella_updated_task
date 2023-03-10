<template>
  <Multiselect
    class="w-1/2 md:w-1/3 mx-auto mb-5"
    placeholder="Filterlə"
    v-model="value"
    mode="tags"
    :close-on-select="false"
    :searchable="true"
    :options="uniqueTags"
  />
</template>

<script>
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";
import { ref, inject, watch } from "vue";
export default {
  name: "SearchBar",
  components: {
    Multiselect,
  },
  setup() {
    const value = ref([]);
    const { uniqueTags, searchTags } = inject("todos");

    watch(value, (newValue) => {
      searchTags.value = newValue;
    });

    return {
      value,
      uniqueTags,
    };
  },
};
</script>
