<template>
  <SearchBar />
  <AddTodo />
  <TodoList />
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import SearchBar from "@/components/SearchBar.vue";
import AddTodo from "@/components/AddTodo.vue";
import { useStorage } from "@/hooks/storage";
import { provide, computed, ref, watch } from "vue";
export default {
  name: "HomeView",
  components: {
    TodoList,
    SearchBar,
    AddTodo,
  },
  setup() {
    const [todos, setTodos] = useStorage("todos");
    const searchTags = ref([]);

    const uniqueTags = computed(() => {
      const tags = todos.value?.flatMap((todo) => todo.tags) || [];
      return [...new Set(tags)];
    });
    const filteredTodos = ref();
    filteredTodos.value = todos.value;

    watch(searchTags, () => {
      if (searchTags.value.length === 0) {
        filteredTodos.value = todos.value;
        return;
      }
      const filteredTodoList = todos.value.filter((todo) => {
        return todo.tags.some((tag) => searchTags.value.includes(tag));
      });
      filteredTodos.value = filteredTodoList;
    });

    watch(todos, () => {
      filteredTodos.value = todos.value;
    });
    provide("todos", {
      todos,
      setTodos,
      uniqueTags,
      searchTags,
      filteredTodos,
    });

    return { todos, setTodos, searchTags };
  },
};
</script>
