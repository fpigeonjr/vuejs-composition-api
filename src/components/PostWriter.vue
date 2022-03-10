<template>
  <div class="columns">
    <div class="column">
      <div class="field">
        <div class="label">New Post</div>
        <input type="text" class="input" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Post } from "../mocks"

defineProps({
  post: {
    type: Object as () => Post,
    required: true
  }
})
</script>

<style lang="scss" scoped></style>
