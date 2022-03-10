<script setup lang="ts">
import { defineComponent } from "vue"
import NavBar from "./components/NavBar.vue"

defineComponent({
  name: "App",
  components: {
    NavBar
  }
})
</script>

<template>
  <section class="section">
    <div class="container">
      <NavBar />
      <RouterView />
    </div>
  </section>
</template>

<style>
#app {
  max-width: 60rem;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
</style>
