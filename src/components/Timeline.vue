<script setup lang="ts">
import { defineComponent, ref } from "vue";
defineComponent({
  name: "TimeLine",
});
</script>

<template>
  <nav class="is-primary panel">
    <span class="panel-tabs">
      <a href="#">Today</a>
      <a href="#">This Week</a>
      <a href="#">This Month</a>
    </span>
  </nav>
</template>

<style scoped></style>
