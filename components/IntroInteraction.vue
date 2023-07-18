<template>
  <div>
    <div
      class="action-wrap text-center"
      v-if="!hidden"
      :style="{
        ...actionWrapStyles,
      }"
    >
      <h1 class="text-100 text-md-120 text-lg-160 text-xl-240 fw-900 lh-80">
        <span class="word" :class="{ shown: scrollY >= 0 }"> DIVE <br /> </span>
        <span class="word" :class="{ shown: scrollY >= 100 }"> into</span>
      </h1>
      <div class="">
        <div class="letter">
          <h1
            class="text-100 text-md-120 text-lg-160 text-xl-240 fw-900 lh-80"
            :style="{
              backgroundImage: `url(${require(`@/assets/snapshot/snapshot_${index}.png`)})`,
              backgroundColor: 'black',
              backgroundPosition: `center ${scrollY / 100}%`,
              backgroundAttachment: 'fixed',
              backgroundRepeat: 'no-repeat',
            }"
          >
            <span class="word" :class="{ shown: scrollY >= 500 }">
              DIGITAL <br
            /></span>
            <span class="word" :class="{ shown: scrollY >= 800 }">
              HERITAGE
            </span>
          </h1>
          <!-- <div class="content"></div> -->
        </div>
      </div>
    </div>
    <div id="intro-interaction" />
  </div>
</template>

<script>
export default {
  props: {
    scrollY: {
      type: [String, Number],
      default: 0,
    },
    hidden: {
      type: [Boolean],
      default: false,
    },
  },
  data() {
    return {
      index: 0,
      observer: null,
      pinned: false,
      interval: false,
    };
  },
  computed: {
    actionWrapStyles() {
      const scaleUp = !!(this.scrollY % 3000);
      return {
        transform: `scale(${
          this.scrollY / 5000 + 0.2
          // scaleUp ? this.scrollY / 3000 : 1
        }) translate(-50%, -50%)`,
        letterSpacing: `${this.scrollY / 100}px`,
        transformOrigin: "0 0",
      };
    },
  },
  watch: {
    // scrollY(n) {
    //   if (!(n % 3)) {
    //     this.index = Math.round(Math.random() * 13);
    //   }
    // },
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
        this.index = Math.round(Math.random() * 13);
      }, 400);
    },
  },
};
</script>

<style lang="scss" scoped>
#intro-interaction {
  height: 3500px;
  background-size: cover;
}
.action-wrap {
  position: fixed;
  // top:
  top: 50%;
  left: 50%;
  z-index: 1;
  // transform: translateY(-50%);
  .letter {
    position: relative;
    display: inline-block;
    h1 {
      position: relative;
      display: inline-block;
      z-index: 10;
      background-size: cover;
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      // transition: background-image 0.5s $default-ease;
    }
  }
  .content {
    width: 100%;
    height: 100%;
    background-color: red;
    position: absolute;
    top: -0.75rem;
    left: 0;
    z-index: 9;
  }
}

.word {
  opacity: 0;
  transition: opacity 0.5s $default-ease;
  &.shown {
    opacity: 1;
  }
}
</style>
