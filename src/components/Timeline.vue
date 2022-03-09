<script setup lang="ts">
import { defineComponent, ref, computed } from "vue"
import moment from "moment"
import TimeLinePost from "./TimeLinePost.vue"
import { today, thisWeek, thisMonth } from "../mocks"

type Period = "Today" | "This Week" | "This Month"

function delay() {
  return new Promise((resolve) => setTimeout(resolve, 2000))
}

const posts = computed(() =>
  [today, thisWeek, thisMonth].filter((post) => {
    if (currentPeriod.value === "Today") {
      return post.created.isAfter(moment().subtract(1, "day"))
    }
    if (currentPeriod.value === "This Week") {
      return post.created.isAfter(moment().subtract(1, "week"))
    }
    if (currentPeriod.value === "This Month") {
      return post.created.isAfter(moment().subtract(1, "month"))
    }
    return false
  })
)
await delay()
const periods = ["Today", "This Week", "This Month"]
const currentPeriod = ref<Period>("Today")
const setPeriod = (period: Period) => {
  currentPeriod.value = period
}

defineComponent({
  name: "TimeLine",
  components: {
    TimeLinePost
  }
})
</script>

<template>
  <nav class="is-primary panel">
    <span class="panel-tabs">
      <a
        v-for="period in periods"
        :key="period"
        :class="{ 'is-active': period === currentPeriod }"
        :data-test="period"
        @click="setPeriod(period)"
      >
        {{ period }}
      </a>
    </span>
    <TimeLinePost
      v-for="post in posts"
      :key="post.id"
      :post="post"
      class="panel-block"
    />
  </nav>
</template>

<style scoped></style>
