<script setup lang="ts">
import { defineComponent } from "vue"
import TimeLine from "./components/TimeLine.vue"
import TheSpinner from "./components/TheSpinner.vue"

defineComponent({
  name: "App",
  components: {
    TimeLine,
    TheSpinner
  }
})
</script>

<template>
  <section class="section">
    <div class="container">
      <Suspense>
        <template #default>
          <TimeLine />
        </template>
        <template #fallback>
          <TheSpinner />
        </template>
      </Suspense>
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
