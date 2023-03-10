<template>
  <header class="py-2 px-5 flex items-center">
    <nav>
      <RouterLink
        class="text-green-400 font-semibold font-sans text-4xl transition-all duration-200 ease-in hover:text-green-300"
        to="/"
      >
        DigiRella
      </RouterLink>
    </nav>
  </header>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  name: "NavBar",
  components: {
    RouterLink,
  },
};
</script>
