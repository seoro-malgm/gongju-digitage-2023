<template>
  <div id="app">
    <global-nav :onScrolled="onScrolled" :auth="auth" />
    <!-- 내용 -->
    <main id="main" :class="{ 'is-main': path === '/' }">
      <header
        class="detail-header"
        :style="{
          backgroundImage: `url(${require('@/assets/images/pattern_0.png')})`,
        }"
      >
        <small class="text-13 text-lg-14 my-0 mt-lg-auto mb-lg-0"
          >Dive into Digital Heritage</small
        >
        <h2 class="text-30 text-lg-48 lh-125">
          <template v-if="routes && path?.length">
            {{ routes[path[0]] }}
          </template>
          <template v-else> - </template>
          <!-- {{ routeMeta?.title }} -->
        </h2>
        <b-container class="my-4 my-lg-5 d-none d-lg-flex justify-content-end">
          <b-breadcrumb class="mb-0">
            <b-breadcrumb-item
              :href="item.href"
              v-for="(item, i) in currentBreadcrumb"
              :key="i"
            >
              <template v-if="item?.text === '홈'">
                <i class="icon icon-home" />
              </template>
              <template v-else>
                {{ item.text }}
              </template>
            </b-breadcrumb-item>
          </b-breadcrumb>
        </b-container>
      </header>
      <!-- lnb -->
      <nav class="local-nav"></nav>
      <!-- content -->
      <b-container class="py-3">
        <NuxtChild :scrollY="scrollY" :onScrolled="onScrolled" />
      </b-container>
    </main>

    <global-footer />
  </div>
</template>

<script>
import routes from "@/assets/json/routes";
export default {
  name: "detail",
  data() {
    return {
      scrollY: 0,
      onScrolled: false,
      routes,
    };
  },
  computed: {
    auth() {
      return this.$store.getters.getUser;
    },
    path() {
      return this.$route?.name?.split("-");
    },

    currentBreadcrumb() {
      const routePath = this.$route.path;
      const paths = routePath.split("/").filter(Boolean);
      const breadcrumb = paths.map((path, index) => ({
        text: this.routes[path],
        href: `/${paths.slice(0, index + 1).join("/")}`,
      }));
      breadcrumb.unshift({ text: "홈", href: "/" });
      return breadcrumb;
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
  .detail-header {
    background-color: $primary;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: $white;
    background-position: center center;
    background-size: cover;
    min-height: 200px;
    @media (min-width: $breakpoint-lg) {
      min-height: 320px;
    }
  }
}
</style>
