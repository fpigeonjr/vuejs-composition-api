<template>
  New Post
  <PostWriter :post="newPost" />
</template>

<script setup lang="ts">
import PostWriter from "./PostWriter.vue"
import type { Post } from "../mocks"
import moment from "moment"

const newPost: Post = {
  id: "-1",
  title: "New Post",
  created: moment()
}
</script>

<style lang="scss" scoped></style>
