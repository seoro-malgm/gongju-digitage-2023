<template>
  <article class="article-detail">
    <header-local-section :text="text" />
    <div class="px-2 px-lg-3 mt-5">
      <slot></slot>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped></style>
