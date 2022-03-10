<script setup lang="ts">
import { defineComponent } from "vue"
import TimeLine from "./TimeLine.vue"
import TheSpinner from "./TheSpinner.vue"

defineComponent({
  name: "App",
  components: {
    TimeLine,
    TheSpinner
  }
})
</script>

<template>
  <Suspense>
    <template #default>
      <TimeLine />
    </template>
    <template #fallback>
      <TheSpinner />
    </template>
  </Suspense>
</template>
