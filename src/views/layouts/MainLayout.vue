<template>
  <div class="w-full min-h-screen bg-linear">
    <Navbar />
    <main>
      <router-view />
    </main>
    <footer>
      <span>{{ new Date().getFullYear() }}</span>
    </footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "MainLayout",
  components: {
    Navbar,
  },
};
</script>
