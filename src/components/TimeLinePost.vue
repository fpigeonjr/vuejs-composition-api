<template>
  <a :key="post.id" class="panel-block">
    <div class="is-flex is-flex-direction-column is-align-items-flex-start">
      <a href="#">{{ post.title }}</a>
      <div>{{ post.created.format("Do MMM") }}</div>
    </div>
  </a>
</template>

<script setup lang="ts">
import { defineComponent } from "vue"
import { Post } from "../mocks"

defineProps({
  post: {
    type: Object as () => Post,
    required: true
  }
})

defineComponent({
  name: "TimelinePost"
})
</script>

<style scoped></style>
