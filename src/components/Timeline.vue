<template>
  <nav class="is-primary panel">
    <span class="panel-tabs">
      <a
        v-for="period in periods"
        :key="period"
        :class="{ 'is-active': period === currentPeriod }"
        @click="setPeriod(period)"
      >
        {{ period }}
      </a>
    </span>
  </nav>
</template>

<script setup lang="ts">
import { defineComponent, ref } from "vue";

type Period = "Today" | "This Week" | "This Month";

const periods = ["Today", "This Week", "This Month"];
const currentPeriod = ref<Period>("Today");
const setPeriod = (period: Period) => {
  currentPeriod.value = period;
};

defineComponent({
  name: "TimeLine",
});
</script>

<style scoped></style>
