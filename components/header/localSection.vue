<template>
  <header class="header-local-section mb-3 mb-lg-3 pb-2 pb-lg-3">
    <h5 class="text-20 text-lg-28 fw-600 px-2 px-lg-3">
      {{ text }}
    </h5>
    <div
      class="tip"
      :style="{
        backgroundImage: `url(${require(`@/assets/images/paths/local-section-header-tip.svg`)})`,
      }"
    ></div>
  </header>
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

<style lang="scss" scoped>
.header-local-section {
  position: relative;
  // border-bottom: 3px solid #1d1d1d;
  &:after {
    position: absolute;
    z-index: 1;
    display: block;
    content: "";
    bottom: 0;
    left: 11px;
    width: calc(100% - 11px);
    height: 3px;
    background-color: #1d1d1d;
    pointer-events: none;
  }
  .tip {
    position: absolute;
    z-index: 1;
    display: block;
    bottom: -25px;
    left: 0;
    width: 11px;
    height: 28px;
    pointer-events: none;
    background-repeat: no-repeat;
    background-size: contain;
  }
}
</style>
