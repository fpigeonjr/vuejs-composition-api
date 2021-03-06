<script setup lang="ts">
import { defineComponent, ref, computed } from "vue"
import moment from "moment"
import TimeLinePost from "./TimeLinePost.vue"
import { useStore } from "../store"
import type { Post } from "../mocks"

type Period = "Today" | "This Week" | "This Month"

const periods: Period[] = ["Today", "This Week", "This Month"]
const currentPeriod = ref<Period>("Today")
const store = useStore()
if (!store.getState().posts.loaded) {
  await store.fetchPosts()
}
const allPosts: Post[] = store
  .getState()
  .posts.ids.reduce<Post[]>((acc, id) => {
    const thePost = store.getState().posts.all.get(id)
    if (!thePost) {
      throw Error("This post was not found")
    }
    return acc.concat(thePost)
  }, [])
const posts = computed(() => {
  return allPosts.filter((post) => {
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
})
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
