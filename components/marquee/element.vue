<template>
  <div class="marquee-wrap" :style="{ minHeight: `${height}px` }">
    <div
      class="marquee"
      :style="{
        transform: `translate(${x * (reverse ? 1 : -1)}px, -50%)`,
        marginLeft: reverse ? '-100vw' : '0',
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: 320,
    },
    speed: {
      type: Number,
      default: 1,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      interval: false,
      x: 0,
    };
  },
  mounted() {
    // console.log(process.env.NODE_ENV);
    // if (process.env.NODE_ENV !== "development") {
    this.init();
    // }
  },
  beforeDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  },
  methods: {
    async init() {
      this.interval = setInterval(() => {
        // console.log(this.bars);
        this.x += this.speed;
      }, 10);
    },
  },
};
</script>

<style lang="scss" scoped>
.marquee-wrap {
  width: 100%;
  &::-webkit-scrollbar,
  &::-webkit-scrollbar-track {
    display: none;
  }
  position: relative;
  .marquee {
    position: absolute;
    margin-top: 4px;
    top: 50%;
    left: 0;
    display: inline-flex;
  }
}
</style>
