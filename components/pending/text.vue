<template>
  <div class="px-1 py-5 text-center">
    <b-spinner variant="sub-2" />
    <small class="d-block mt-3 text-15 text-lg-16 text-gray-600">
      {{ text }}
    </small>
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
