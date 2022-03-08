<template>
  <nav class="is-primary panel">
    <span class="panel-tabs">
      <a v-for="period in periods" :key="period">
        {{ period }}
      </a>
    </span>
  </nav>
</template>

<script setup lang="ts">
import { defineComponent, ref } from "vue";

console.log("setup");

const periods = ["Today", "This Week", "This Month"];

defineComponent({
  name: "TimeLine",
});
</script>

<style scoped></style>
