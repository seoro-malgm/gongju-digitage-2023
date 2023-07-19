<template>
  <div>
    <!-- 인트로 -->
    <section class="intro min-vh-100 bg-gray-100">
      <b-container
        class="min-vh-100 d-flex align-items-center justify-content-around"
      >
        <b-row class="w-100">
          <b-col cols="12" md="6">
            <div class="d-flex flex-column">
              <h3 class="text-sub-2 text-20 text-lg-32">2023</h3>
              <h1 class="my-3 my-lg-4">디지털유산전 로고</h1>
              <h2 class="text-sub-2 text-20 text-lg-36">
                2023.10.06(금)-08(일)
              </h2>
              <h3 class="mt-3 mt-lg-4 text-primary text-18 text-lg-32">
                아트센터 고마
              </h3>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <!-- 프로그램 -->
    <section class="program min-vh-100 bg-gray-300 py-5">
      <b-container class="my-lg-5 py-4 py-lg-5">
        <header-section
          small="Program"
          title="한눈에 살펴보는 디지털유산전"
          desc="디지털유산전에서 준비한 다양한 프로그램을 만나보세요"
        />
        <div class="mt-3 mt-lg-5">
          <b-row class="mx-lg-n1 flex-column flex-lg-row" align-v="stretch">
            <b-col
              class="mb-3 mb-lg-0 px-lg-1 program-column"
              v-for="(item, i) in 8"
              :key="i"
              cols="12"
              lg="1"
              :class="{ active: programIndex === i }"
              @mouseenter="programIndex = i"
            >
              <div
                class="column-content p-3 d-flex flex-column justify-content-between h-100"
              >
                <div class="on-active">
                  <header
                    class="d-flex flex-column justify-content-between p-0 p-lg-3"
                  >
                    <small class="text-16 text-lg-18 mb-2 mb-lg-4"
                      >미래교육</small
                    >
                    <h5 class="text-24 text-lg-28 mb-auto lh-125">
                      미래미래미래에는 어떤 교육을 하게 될까? 미래미래미래에는
                      어떤 교육을 하게 될까?
                    </h5>
                  </header>
                </div>
                <div class="on-default">
                  <!-- <div class="d-flex align-items-center"> -->
                  <figure
                    class="bg-black mb-3 mx-auto d-none d-lg-block"
                    :style="{ width: '40px', height: '40px' }"
                  ></figure>
                  <div class="text mb-3 lh-120 mx-lg-auto">
                    <small class="text-13 text-lg-14 mb-2 mb-lg-3"
                      >미래교육</small
                    >
                    <h5 class="text-14 text-lg-15 mb-auto">
                      미래미래미래에는 어떤 교육을 하게 될까?
                    </h5>
                  </div>
                  <!-- </div> -->
                </div>
                <!-- footer -->
                <div
                  class="column-footer mt-auto mb-0 fw-700 text-15 text-lg-18"
                >
                  0{{ i + 1 }}
                </div>
              </div>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </section>
    <!-- 아카이빙 -->
    <section class="archive min-vh-100 py-5">
      <b-container class="my-lg-5 py-4 py-lg-5">
        <header-section
          small="Archive"
          title="아카이빙"
          desc="디지털문화산업전에서 준비한 다양한 아카이브를 만나보세요"
          class="mb-4 mb-lg-5"
        />
      </b-container>
      <div class="mt-4 mt-lg-5">
        <ul class="list-archive mb-3">
          <li v-for="(item, i) in 10" :key="i" class="archive-item">
            <figure class="bg-img ratio-67 bg-white"></figure>
          </li>
        </ul>
        <ul class="list-archive mb-3">
          <li v-for="(item, i) in 10" :key="i" class="archive-item">
            <figure class="bg-img ratio-67 bg-white"></figure>
          </li>
        </ul>
      </div>
    </section>
    <!-- 공지사항 -->
    <section class="notice py-5">
      <b-container class="my-lg-5 py-4 py-lg-5">
        <header-section
          small="Notice"
          title="공지사항"
          desc="공지사항과 자주묻는 질문을 알려드립니다"
          class="mb-4 mb-lg-5"
        />
        <b-row>
          <b-col cols="12" lg="6">
            <header
              class="d-flex align-items-center justify-content-between pb-2"
            >
              <h5 class="text-20 text-lg-24">새소식</h5>
              <b-btn variant="link text-gray-600 text-13 text-lg-15"
                >더보기
                <i class="icon icon-right-open" />
              </b-btn>
            </header>
            <ul class="list-bbs mb-5 mb-lg-0">
              <b-row tag="li" v-for="(item, i) in 5" :key="i" class="bbs-item">
                <b-col cols="9" class="text-truncate">
                  <router-link to="/" class="title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati, ad.
                  </router-link>
                </b-col>
                <b-col cols="3" class="text-right">
                  <span class="text-gray-600 text-13 text-14">2023.10.21</span>
                </b-col>
              </b-row>
            </ul>
          </b-col>
          <b-col cols="12" lg="6">
            <header
              class="d-flex align-items-center justify-content-between pb-2"
            >
              <h5 class="text-20 text-lg-24">FAQ</h5>
              <b-btn variant="link text-gray-600 text-13 text-lg-15"
                >더보기
                <i class="icon icon-right-open" />
              </b-btn>
            </header>
            <ul class="list-bbs mb-5 mb-lg-0">
              <b-row tag="li" v-for="(item, i) in 5" :key="i" class="bbs-item">
                <b-col cols="9" class="text-truncate">
                  <router-link to="/" class="title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati, ad.
                  </router-link>
                </b-col>
                <b-col cols="3" class="text-right">
                  <span class="text-gray-600 text-13 text-14">2023.10.21</span>
                </b-col>
              </b-row>
            </ul>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <!-- sns -->
    <section class="sns py-3 py-lg-5">
      <b-container class="my-lg-5 py-5">
        <header class="text-center mb-3">
          <h5 class="text-20 text-lg-32">디지털유산전 SNS</h5>
        </header>
        <nav class="tab-sns">
          <ul class="d-flex align-items-center justify-content-center">
            <li class="tab-item mx-2">
              <b-btn
                variant="text"
                @click="snsTabIndex = 0"
                :class="{ active: snsTabIndex === 0 }"
              >
                인스타그램
              </b-btn>
            </li>
            <li class="tab-item mx-2">
              <b-btn
                variant="text"
                @click="snsTabIndex = 1"
                :class="{ active: snsTabIndex === 1 }"
              >
                페이스북
              </b-btn>
            </li>
            <li class="tab-item mx-2">
              <b-btn
                variant="text"
                @click="snsTabIndex = 2"
                :class="{ active: snsTabIndex === 2 }"
              >
                유튜브
              </b-btn>
            </li>
          </ul>
        </nav>
        <section>
          <b-row class="my-3 my-lg-5 py-lg-4" align-h="center">
            <b-col
              cols="6"
              lg="20"
              class="mb-3 mb-lg-0"
              v-for="(item, i) in 5"
              :key="i"
            >
              <figure class="bg-black ratio-100"></figure>
            </b-col>
          </b-row>
        </section>
      </b-container>
    </section>
    <!-- 협력사 -->
    <section class="companies pt-3 pb-5">
      <header class="mt-3 text-center">
        <h5 class="text-20 text-lg-32 text-gray-600">
          2023 디지털유산전은 다양한 기업들과 함께합니다.
        </h5>
      </header>
      <ul class="list-companies mb-4 mb-lg-5 py-3">
        <li class="company-item text-center" v-for="(item, i) in 10" :key="i">
          <div class="border p-2">기관</div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  layout: "default",
  components: {},

  props: {
    auth: {
      type: [String, Boolean],
      default: false,
    },
    scrollY: {
      type: [String, Number],
      default: 0,
    },
    onScrolled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      programIndex: 0,
      snsTabIndex: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
section.program {
  .program-column {
    transition: all 0.3s $default-ease;
    cursor: pointer;
    .column-content {
      transition: all 0.3s $default-ease;
      border-radius: 15px;
      background-color: #f8f8fa;
      @media (min-width: $breakpoint-lg) {
        min-height: 500px;
      }
      .on-active {
        display: none;
      }
      .on-default {
        .text {
          @media (min-width: $breakpoint-lg) {
            writing-mode: vertical-rl;
            text-orientation: mixed;
          }
        }
      }
    }
    &:hover,
    &.active {
      @media (min-width: $breakpoint-lg) {
        flex: 0 0 41.66666667%;
        max-width: 41.66666667%;
      }

      .column-content {
        background-color: #f3ffe5;
        .on-active {
          display: block;
        }
        .on-default {
          display: none;
        }
      }
    }
  }
}

section.archive {
  background-color: rgba($color: $primary, $alpha: 0.62);
  .list-archive {
    display: flex;
    align-items: center;
    overflow: auto;
    padding: 0 20px;
    &::-webkit-scrollbar,
    &::-webkit-scrollbar-track {
      display: none;
    }
    .archive-item {
      flex: 0 0 330px;
      max-width: 330px;
      margin: 0 10px;
      figure {
        border-radius: 25px;
      }
    }
  }
}

section.notice {
  background-color: rgba($color: #b7b7b7, $alpha: 0.5);
  .list-bbs {
    border-top: 3px solid $gray-700;
    border-bottom: 3px solid $gray-700;
    .bbs-item {
      margin: 0.25rem 0;
      padding: 1rem 0;
      border-bottom: 1px dashed $gray-800;
      &:last-child {
        border-bottom-width: 0;
      }
      position: relative;
      padding-left: 16px;
      .title {
        &:link,
        &:hover,
        &:visited {
          color: $gray-700;
        }
      }
      &:before {
        position: absolute;
        z-index: 1;
        content: "";
        display: block;
        top: 45%;
        left: 12px;
        width: 8px;
        height: 8px;
        transform: translate(-50%, 0);
        background-color: $gray-900;
        border-radius: 50%;
      }
    }
  }
}

.tab-sns {
  border-bottom: 1px solid $gray-400;
  .tab-item {
    .btn {
      border: 0;
      border-bottom: 5px solid transparent;
      border-radius: 0;
      font-weight: 700;
      color: $gray-600;
      &.active {
        border: 0;
        color: $gray-800;
        border-bottom: 5px solid $gray-800;
      }
    }
  }
}
.nav-lin.active {
  border: 0;
  border-bottom: 5px solid $gray-800 !important;
}

.col-lg-20 {
  @media (min-width: $breakpoint-lg) {
    flex: 0 0 20%;
    max-width: 20%;
  }
}

section.companies {
  .list-companies {
    display: flex;
    align-items: center;
    overflow: auto;
    padding: 0 20px;
    &::-webkit-scrollbar,
    &::-webkit-scrollbar-track {
      display: none;
    }
    .company-item {
      flex: 0 0 330px;
      max-width: 330px;
      margin: 0 10px;
      figure {
        border-radius: 25px;
      }
    }
  }
}
</style>
