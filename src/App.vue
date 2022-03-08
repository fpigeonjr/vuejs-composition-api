<script setup lang="ts">
import { defineComponent } from "vue"
import TimeLine from "./components/TimeLine.vue"

defineComponent({
  name: "App",
  components: {
    TimeLine
  }
})
</script>

<template>
  <section class="section">
    <div class="container">
      <TimeLine />
    </div>
  </section>
</template>

<style>
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
</style>
