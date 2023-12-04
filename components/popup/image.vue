<template>
  <div class="popup" v-show="show">
    <article class="popup-wrapper">
      <figure
        class="image-content bg-img ratio-67"
        :style="{
          backgroundImage: `url(${item?.image?.url})`,
          backgroundPosition: 'center',
        }"
      ></figure>
      <div class="utils">
        <b-row align-h="center">
          <b-col cols="10" class="py-2">
            <b-btn variant="outline-gray w-100" @click="close">팝업 닫기</b-btn>
          </b-col>
        </b-row>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    this.show = this.item?.show;
  },
  methods: {
    // 팝업닫기
    close() {
      this.show = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.popup {
  position: absolute;
  z-index: 9999;
  top: 1rem;
  left: 1rem;
  box-shadow: 0px 0px 10px rgba($color: #000000, $alpha: 0.3);
  .popup-wrapper {
    width: 600px;
    max-width: 80vw;
    figure.image-content {
      margin: 0;
    }
    .utils {
      background-color: white;
    }
  }
}
</style>
