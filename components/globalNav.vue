<template>
  <header id="gnb">
    <b-container>
      <b-navbar class="" toggleable="lg">
        <!-- logo -->
        <b-navbar-brand class="px-3">
          <router-link
            to="/"
            replace
            class="logo-link btn btn-text px-0 py-1 py-xl-2 border-0"
          >
            <img :src="require('@/assets/logo.png')" alt="" />
          </router-link>
        </b-navbar-brand>
        <!-- toggler -->
        <b-navbar-toggle target="nav-collapse"> </b-navbar-toggle>
        <!-- links -->
        <b-collapse id="nav-collapse" class="justify-content-lg-end" is-nav>
          <b-navbar-nav class="w-100 justify-content-lg-around pt-3 pt-lg-0">
            <li
              v-for="(item, i) in links"
              :key="i"
              class="mx-lg-3 mb-3 mb-lg-0"
            >
              <router-link
                :to="item.path"
                class="text-16 text-lg-17 p-2 router-link"
              >
                {{ item.name }}
              </router-link>
            </li>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </header>
</template>

<script>
export default {
  props: {
    onScrolled: {
      type: Boolean,
      default: false,
    },
    auth: {
      type: [String, Boolean],
      default: false,
    },
  },
  data() {
    return {
      visible: false,
      links: [
        {
          name: "전시소개",
          path: "/about",
        },
        {
          name: "프로그램",
          path: "/program",
        },
        {
          name: "아카이빙",
          path: "/archive",
        },
        {
          name: "컨퍼런스",
          path: "/conference",
        },
        {
          name: "관람안내",
          path: "/info",
        },
        {
          name: "공지사항",
          path: "/notice",
        },
      ],
    };
  },
  computed: {
    path() {
      return this.$route.path;
    },
    mainActive() {
      return this.path === "/" && this.onScrolled;
    },
  },
  watch: {
    path(n) {
      this.visible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
#gnb {
  // padding: 0.5rem 0 1rem;
  width: 100%;
  max-width: 100vw;
  padding: 0;
  position: fixed;
  left: 0;
  z-index: 3000;
  background-color: white;
  // background-color: rgba($color: #fff, $alpha: 0.3);
  // backdrop-filter: blur(6px);
  // box-shadow: 0 2px 5px rgba($color: #000000, $alpha: 0.1);
  .navbar {
    padding: 1.25rem 0;
  }

  .logo-link {
    display: flex;
    // flex-direction: column;
    align-items: center;
    img {
      width: 170px;
      height: auto;
      margin-right: 16px;
      @media (min-width: $breakpoint-lg) {
        width: 200px;
      }
    }
  }

  #nav-collapse {
    .router-link {
      text-decoration: none;
      font-weight: 700;
      color: $darkest;
      &:link,
      &:visited {
        color: $darkest;
      }
      &:hover,
      &.nuxt-link-active {
        color: $primary;
      }
    }
  }
}
</style>
