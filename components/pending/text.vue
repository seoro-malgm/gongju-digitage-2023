<template>
  <div class="py-3 text-center">
    <small class="text-15 text-md-16">{{ text }}</small>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "준비중입니다",
    },
  },
};
</script>

<style lang="scss" scoped></style>
