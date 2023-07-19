<template>
  <header class="section-header">
    <small class="mb-3 mb-lg-5 text-14 text-lg-14">{{ small }}</small>
    <h4 class="fw-700 text-28 text-lg-40">{{ title }}</h4>
    <p class="mt-3 text-16 fw-700">{{ desc }}</p>
  </header>
</template>

<script>
export default {
  props: {
    small: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    desc: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.section-header {
  display: flex;
  flex-direction: column;
}
</style>
