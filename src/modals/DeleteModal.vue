<template>
  <section
    class="fixed z-50 inset-0 bg-blur w-screen flex items-center justify-center"
  >
    <div class="w-3/4 md:w-1/3 min-h-fit p-5 bg-white relative">
      <button class="absolute top-2 right-2" @click="closeModal">
        <CloseIcon />
      </button>
      <div class="flex flex-col gap-4">
        <div class="w-full">Are you sure to delete todo?</div>
        <div class="flex gap-2 items-center ml-auto">
          <button
            class="bg-green-400 p-2 text-white rounded"
            @click="handleDelete"
          >
            Delete
          </button>
          <button class="bg-red-500 p-2 text-white rounded" @click="closeModal">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CloseIcon from "@/icons/CloseIcon.vue";
export default {
  name: "DeleteModal",
  components: {
    CloseIcon,
  },
  props: {
    isOpenModal: {
      required: true,
      type: Boolean,
    },
    closeModal: {
      required: true,
      type: Function,
    },
    handleDelete: {
      required: true,
      type: Function,
    },
  },
};
</script>
