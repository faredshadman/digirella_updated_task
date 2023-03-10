<template>
  <section
    class="fixed z-50 inset-0 bg-blur w-screen flex items-center justify-center"
  >
    <div class="w-3/4 md:w-1/2 min-h-fit p-5 bg-white relative">
      <button @click="closeModal" class="absolute top-2 right-2">
        <CloseIcon />
      </button>
      <div class="flex flex-col gap-4">
        <div class="w-full">
          <label class="block" for="title">Title </label>
          <input
            placeholder="Title"
            class="border rounded w-full"
            v-model="todo.title"
          />
        </div>
        <div class="w-full">
          <label for="editedTags">Tags</label>
          <Multiselect
            id="editedTags"
            placeholder="Enter tag"
            :options="uniqueTags"
            v-model="todo.tags"
            :searchable="true"
            mode="tags"
            required
            :taggable="true"
            :close-on-select="false"
            :create-option="true"
          />
        </div>
        <div class="flex gap-2 items-center ml-auto">
          <button
            class="bg-green-400 p-2 text-white rounded"
            @click="handleSubmit"
          >
            Save Changes
          </button>
          <button @click="closeModal" class="bg-red-500 p-2 text-white rounded">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";
import { inject, ref } from "vue";
import CloseIcon from "@/icons/CloseIcon.vue";
export default {
  name: "EditModal",
  components: {
    CloseIcon,
    Multiselect,
  },
  props: {
    id: {
      required: true,
      type: Number || String,
    },
    isOpenModal: {
      required: true,
      type: Boolean,
    },
    closeModal: {
      required: true,
      type: Function,
    },
  },
  setup(props) {
    const { todos, setTodos, uniqueTags } = inject("todos");

    const todo = ref({
      ...todos.value?.filter((todo) => todo.id === props.id)[0],
    });

    const handleSubmit = () => {
      const newTodo = {
        title: todo.value.title,
        tags: Array.from(todo.value.tags),
        isComplete: todo.value.isComplete,
        id: todo.value.id,
      };
      setTodos([...todos.value.filter((t) => t.id !== todo.value.id), newTodo]);
      props.closeModal();
    };

    return {
      uniqueTags,
      todo,
      handleSubmit,
    };
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
