<template>
  <div class="w-5/6 md:w-1/3 mx-auto">
    <h1 class="text-center text-3xl text-white">Add Todo</h1>
    <div class="flex flex-col gap-3">
      <div class="w-full">
        <label for="title" class="block text-xl text-white">Title </label>
        <input id="title" type="text" class="w-full p-1" v-model="title" />
      </div>
      <div class="w-full">
        <label for="tags" class="block text-xl text-white">Tags </label>
        <Multiselect
          id="tags"
          placeholder="Enter tag"
          :searchable="true"
          mode="tags"
          v-model="tags"
          :options="uniqueTags"
          :taggable="true"
          :close-on-select="false"
          :create-option="true"
        />
      </div>
      <button
        @click="addTodo"
        class="bg-blue-400 px-5 py-1 text-white rounded self-end"
      >
        Add
      </button>
    </div>
  </div>
</template>
<script>
import { ref, inject, computed } from "vue";
import { uid } from "@/utils/uid";
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";
export default {
  components: {
    Multiselect,
  },

  setup() {
    const { todos, setTodos } = inject("todos");
    const title = ref("");
    const tags = ref([]);

    const uniqueTags = computed(() => {
      const tags = todos.value?.flatMap((todo) => todo.tags) || [];
      return [...new Set(tags)];
    });

    const addTodo = () => {
      const id = uid();
      const newTodo = {
        id,
        title: title.value,
        tags: tags.value,
        isComplete: false,
      };
      const todoList =
        todos.value?.length > 0 ? [...todos.value, newTodo] : [newTodo];
      setTodos(todoList);
      title.value = "";
      tags.value = [];
    };
    return {
      title,
      tags,
      addTodo,
      uniqueTags,
    };
  },
};
</script>
