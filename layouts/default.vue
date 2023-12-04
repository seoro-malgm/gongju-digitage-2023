<template>
  <div id="app">
    <template v-if="isBeta">
      <div
        class="min-vh-100 d-flex flex-column align-items-center justify-content-center"
      >
        <b-row align-v="center" align-h="center">
          <b-col cols="12" md="9" class="m-auto">
            <img :src="require('@/assets/images/beta_image.png')" alt="" />
          </b-col>
        </b-row>
      </div>
    </template>
    <template v-else>
      <global-nav :onScrolled="onScrolled" :auth="auth" />
      <!-- 내용 -->
      <main id="main" :class="{ 'is-main': path === '/' }">
        <!-- <transition> -->
        <NuxtChild :scrollY="scrollY" :onScrolled="onScrolled" />
        <!-- </transition> -->
      </main>
      <!-- <btn-floating
      :position="{
        bottom: onScrolled ? '2.5rem' : '-4rem',
        right: '1.5rem',
      }"
      variant="outline-gray-600 bg-white"
      @click="scrollTo(0, 0)"
    >
      <template #content>
        <i class="icon icon-up-big d-block" />
        <span class="mx-1 fw-700 text-15 text-lg-16"> TOP </span>
      </template>
    </btn-floating> -->

      <!-- footer -->
      <global-footer />
    </template>
  </div>
</template>

<script>
export default {
  name: "default",
  data() {
    return {
      scrollY: 0,
      onScrolled: false,
      isBeta: false,
    };
  },
  computed: {
    auth() {
      return this.$store.getters.getUser;
    },
    path() {
      return this.$route.path;
    },
    routeName() {
      return this.$route.name;
    },
  },
  mounted() {
    this.modal();
    window.toast = this.toast;
    // 스크롤 핸들러
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    // 스크롤 핸들러 해제
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    linkTo(link) {
      window.open(link, "_blank");
    },
    modal() {
      window.alert = async (
        msg,
        obj = {
          title: "알림",
        }
      ) => {
        const opt = {
          titleClass: "text-left text-133",
          dangerMsg: "",
          bodyClass: "px-3 pt-3 pb-2",
          contentClass: "confirm border-0 overflow-hidden ",
          headerClass:
            "rounded-0 bg-primary bg-opacity-15 text-left text-white",
          footerClass: "border-0 d-flex justify-content-end ",
          okTitle: "예",
          okVariant: "primary text-133 py-1 px-3",
          centered: true,
          size: "sm",
          noCloseOnBackdrop: true,
          autoFocusButton: "ok",
          returnFocus: this.$refs.app,
          hideHeaderClose: false,
          headerCloseContent: `<i class="icon icon-times text-133"></i>`,
          ...obj,
        };
        const msgVNode =
          typeof msg === "string"
            ? this.$createElement("div", {
                domProps: {
                  innerHTML: `
        <span class="text-13 lh-200 opacity-8">${msg}</span>
      `,
                },
              })
            : msg;
        return await this.$bvModal.msgBoxOk([msgVNode], opt);
      };
      window.confirm = async (
        msg,
        obj = {
          title: "알림",
        }
      ) => {
        const options = {
          titleClass: "text-left text-13",
          dangerMsg: "",
          bodyClass: "px-3 pt-3 pb-2",
          contentClass: "confirm border-0 overflow-hidden",
          headerClass:
            "rounded-0 bg-primary bg-opacity-15 text-left text-white",
          footerClass: "border-0 d-flex justify-content-end",
          okTitle: "예",
          cancelTitle: "아니오",
          okVariant: "outline-alert text-13 py-1 px-3",
          cancelVariant: "outline-primary text-13 py-1 px-3",
          centered: true,
          size: "sm",
          noCloseOnBackdrop: true,
          autoFocusButton: "ok",
          hideHeaderClose: false,
          headerCloseContent: `<i class="icon icon-times text-13"></i>`,
          ...obj,
        };
        const msgVNode =
          typeof msg === "string"
            ? this.$createElement("div", {
                domProps: {
                  innerHTML: `
        <span class="mb-4 text-13 lh-200 opacity-8">${msg}</span>
        <span class="text-danger text-13 lh-200">${options.dangerMsg}</span>
      `,
                },
              })
            : msg;
        return await this.$bvModal.msgBoxConfirm([msgVNode], options);
      };
    },
    async toast(
      msg,
      opt = {
        id: "toast",
        variant: "info",
        textVariant: "darkest",
      }
    ) {
      const h = this.$createElement;

      const bodyNode = h("div", {
        class: "px-2",
        domProps: {
          innerHTML: `
          <div class="text-${opt.textVariant} text-center">
            <span class="text-15 fw-500">${msg}</span>
          </div>
          `,
        },
      });

      this.$bvToast.toast(bodyNode, {
        solid: true,
        noCloseButton: true,
        headerClass: `bg-${opt.variant} p-0 border-0 text-white fw-600`,
        bodyClass: `bg-${opt.variant} py-3 border-0 rounded text-white fw-600`,
        toastClass: "border-0  pt-0",
        toaster: "b-toaster-top-right",
      });
    },
    handleScroll(e) {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      this.scrollY = scrollTop;
      if (scrollTop <= 50) {
        this.onScrolled = false;
      }

      if (scrollTop >= 180) {
        this.onScrolled = true;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
// $gnb-height: 82px;
#main {
  min-height: 100vh;
  padding-top: 94px;
  @media (min-width: $breakpoint-lg) {
    padding-top: 108px;
  }
  &.is-main {
    padding-top: 0;
  }
}
</style>
