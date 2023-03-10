<template>
  <li
    class="p-2 flex items-center justify-between"
    :class="{
      'bg-white': !todoItem.isComplete,
      'bg-green-400': todoItem.isComplete,
    }"
  >
    <div class="flex-1">
      <h3>{{ todoItem.title }}</h3>
      <div class="w-3/4 flex-wrap flex items-center gap-1 p-1">
        <span
          v-for="(tag, idx) in todoItem.tags"
          :key="idx"
          class="px-2 py-1 rounded-sm"
          :class="{
            'bg-white text-black': todoItem.isComplete,
            'bg-green-400 text-white': !todoItem.isComplete,
          }"
          >{{ tag }}</span
        >
      </div>
    </div>
    <div class="flex items-center gap-1">
      <EditIcon @click="openEditModal" />
      <DeleteIcon @click="openDeleteModal" />
      <input
        type="checkbox"
        class="w-8 h-6 accent-white text-white"
        v-model="todoItem.isComplete"
        @change="handleComplete"
      />
    </div>
    <transition name="fade">
      <EditModal
        v-if="isOpenModalForEdit"
        :id="todoItem.id"
        :isOpenModal="isOpenModalForEdit"
        :closeModal="closeEditModal"
      />
    </transition>
    <transition name="fade">
      <DeleteModal
        v-if="isOpenModalForDelete"
        :isOpenModal="isOpenModalForDelete"
        :closeModal="closeDeleteModal"
        :handleDelete="handleDelete(todoItem.id)"
      />
    </transition>
  </li>
</template>

<script>
import DeleteIcon from "@/icons/DeleteIcon.vue";
import EditIcon from "@/icons/EditIcon.vue";
import DeleteModal from "@/modals/DeleteModal.vue";
import EditModal from "@/modals/EditModal.vue";
import { toRefs, inject, ref } from "vue";
export default {
  name: "TodoItem",
  components: { EditIcon, DeleteIcon, DeleteModal, EditModal },
  props: {
    todo: Object,
  },
  setup(props) {
    const { todo: todoItem } = toRefs(props);
    const { todos, setTodos } = inject("todos");
    const isOpenModalForDelete = ref(false);
    const isOpenModalForEdit = ref(false);

    const openDeleteModal = () => (isOpenModalForDelete.value = true);
    const openEditModal = () => (isOpenModalForEdit.value = true);

    const closeDeleteModal = () => (isOpenModalForDelete.value = false);
    const closeEditModal = () => (isOpenModalForEdit.value = false);

    const handleComplete = () => setTodos(todos.value);

    const handleDelete = (id) => {
      return () => {
        let filteredTodos = todos.value?.filter((todo) => todo.id !== id);
        setTodos(filteredTodos);
      };
    };

    return {
      todoItem,
      setTodos,
      handleComplete,
      handleDelete,
      openDeleteModal,
      isOpenModalForDelete,
      closeDeleteModal,
      openEditModal,
      closeEditModal,
      isOpenModalForEdit,
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
