<template>
  <div class="px-3 py-5 text-center">
    <b-spinner></b-spinner>
  </div>
</template>

<script>
export default {
  layout: "detail",
  mounted() {
    this.$router.push("/about/info");
  },
};
</script>

<style lang="scss" scoped></style>
