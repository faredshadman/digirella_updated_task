<template>
  <ul class="w-5/6 md:w-1/2 mt-5 mx-auto space-y-5">
    <TodoItem
      v-for="todo in todos?.sort((a, b) => a.id > b.id)"
      :key="todo.id"
      :todo="todo"
    />
  </ul>
</template>

<script>
import TodoItem from "@/atoms/TodoItem.vue";
import { inject } from "vue";
export default {
  name: "TodoList",
  components: {
    TodoItem,
  },
  setup() {
    const { filteredTodos: todos } = inject("todos");

    return {
      todos,
    };
  },
};
</script>
