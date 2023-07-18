<template>
  <div>
    <section class="intro border-top border-black">
      <intro-interaction :scrollY="scrollY" />

      <!-- scroll down -->
      <div class="scroll-down">
        <span class="text-18 text-md-20">Scroll Down</span>
        <div class="line" />
      </div>
    </section>
    <div class="wrapper">
      <section
        class="min-vh-100 bg-black d-flex align-items-center justify-content-center text-white"
      >
        영상
      </section>
      <section
        class="text-white py-5"
        :class="`bg-${[posters[posterIndex]]}`"
        :style="{ transition: 'background-color 0.5s' }"
      >
        <b-container class="my-md-5 py-5">
          <b-row align-v="stretch">
            <b-col cols="12" lg="7" order="1" order-md="0" class="pt-4 pb-5">
              <h2 class="text-40 text-md-56 mt-2">2023 디지털유산전</h2>
              <article class="mt-2">
                <p class="text-18 text-md-20">
                  1962년 문화재보호법 제정이래 변화된 문화재 정책 환경을
                  반영하고 유네스코 등 국제기준에 부합하는 국가유산 체계로
                  전환하기 위해 제정 추진한 [국가유산기본법]이 27일 국회
                  본회의에서 통과되었습니다. 국가유산기본법에 따라 기존
                  '디지털문화유산전'에서 '디지털유산전'으로 새롭게 재탄생합니다.
                </p>
              </article>
              <div
                class="d-flex align-items-center"
                v-for="(item, i) in infos"
                :key="i"
              >
                <span
                  class="bg-white text-black px-4 py-2 rounded-pill fw-700 mr-3"
                >
                  {{ item.name }}
                </span>
                <h3 class="text-20 text-md-24 text-lg-30 mt-2 mb-1">
                  {{ item.value }}
                </h3>
              </div>

              <div class="mt-3">
                <b-btn variant="sub-2" to="/info#일정_안내">
                  <span class="mx-1 fw-700 text-15 text-md-20"
                    >자세한 일정 보기
                  </span>
                  <i class="icon icon-right-big" />
                </b-btn>
              </div>
            </b-col>
            <b-col cols="12" md="5">
              <!-- <img
                class="w-100 shadow-lg"
                :src="require('@/assets/dummy.png')"
                alt="더미이미지"
              /> -->
              <client-only>
                <div class="slide-poster">
                  <carousel
                    :perPage="1"
                    :paginationEnabled="false"
                    :autoplay="true"
                    :loop="true"
                    :autoplayTimeout="2000"
                    v-model="posterIndex"
                  >
                    <slide
                      v-for="(item, i) in posters"
                      :key="i"
                      class="bg-img ratio-sm-141 ratio-141"
                      :style="{
                        backgroundImage: `url(${require(`@/assets/images/poster_${i}.png`)})`,
                        backgroundRepeat: 'no-repeat',
                      }"
                    >
                    </slide>
                  </carousel>
                </div>
              </client-only>
            </b-col>
          </b-row>
        </b-container>
      </section>
      <!-- 유틸 -->
      <section class="bg-gray-900 py-4">
        <b-container class="py-3 py-md-5">
          <b-row>
            <b-col cols="6" md="3" v-for="(item, i) in utils" :key="i">
              <router-link to="/" class="util-btn" tag="button">
                <div class="mb-2 icon-area">
                  <i :class="`icon icon-${item?.icon} text-30 text-md-48`" />
                </div>
                <div class="text-area text-15 text-md-20">
                  {{ item.name }}
                </div>
              </router-link>
            </b-col>
          </b-row>
        </b-container>
      </section>

      <!--  !유틸 -->
      <!-- <marquee-text
        text="DIVE into DIGITAL HERITAGE"
        :variant="`${[posters[posterIndex]]}`"
      /> -->

      <!-- 지도 및 오시는 길 -->
      <section class="section-gap">
        <b-row>
          <b-col
            cols="12"
            md="7"
            :style="{
              minHeight: '400px',
            }"
          >
            <!-- 구글맵 -->
            <map-google />
            <!-- !구글맵 -->
            <!-- <div
              class="bg-img ratio-67"
              :style="{
                backgroundImage: `url(${require('@/assets/map-dummy.png')})`,
              }"
            ></div> -->
          </b-col>
          <b-col cols="12" md="5">
            <article class="py-5 px-3">
              <h2 class="text-36 text-md-48 text-lg-56 underbar">오시는 길</h2>
              <ul class="list-unstyled">
                <li class="d-flex align-items-center mb-3">
                  <span
                    class="bg-black text-white px-4 py-2 rounded-pill fw-700 mr-3"
                  >
                    주소
                  </span>
                  <div class="text-15 text-md-20">
                    충남 공주시 고마나루길 90
                  </div>
                </li>
                <li class="d-flex align-items-start mb-3">
                  <span
                    class="bg-black text-white px-4 py-2 rounded-pill fw-700 mr-3"
                  >
                    대중교통
                  </span>

                  <ul class="list-unstyled text-15 text-md-20">
                    <li class="mb-0">
                      <span>
                        버스 이용시 공주종합버스터미널에서 오시는 법(약 50분
                        소요)
                      </span>
                    </li>
                    <li class="mb-2">
                      <strong>
                        &#x2460; 125번 종합버스터미널(옥룡동방면)
                      </strong>
                      <br />
                      → 문예회관, 경찰서 하차 후 도보 19분
                    </li>
                    <li class="mb-2">
                      <strong>
                        &#x2461; 550번 종합버스터미널(옥룡동방면)
                      </strong>
                      <br />
                      → 중동 사거리 하차 후 도보 10분
                      <br />
                      → 공주세무서, 북중학교 승차
                      <br />
                      → 국립공주박물관 하차 후 맞은편
                    </li>
                  </ul>
                </li>
                <li class="mb-3">
                  <span
                    class="bg-black text-white px-4 py-2 rounded-pill fw-700 mr-3"
                  >
                    무료 셔틀버스
                  </span>
                  <div class="text-15 text-md-20 mt-2">
                    준비중입니다.
                    <!-- Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sit, qui? -->
                  </div>
                </li>
              </ul>
            </article>
          </b-col>
        </b-row>
      </section>
      <!-- <marquee-text
        text="DIVE into DIGITAL HERITAGE"
        :variant="`${[posters[posterIndex]]}`"
      /> -->
      <!-- 참여기관 -->
      <section class="py-5 border-bottom border-black">
        <header class="text-center mb-4 py-3">
          <h2 class="text-36 text-md-48 text-lg-56 underbar">참여 기관</h2>
        </header>
        <b-container
          class="mb-5 py-5 px- px-md-5 bg-gray-100 position-relative"
        >
          <div
            class="position-absolute text-18 fw-700"
            :style="{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: '10',
            }"
          >
            7월 오픈 예정
          </div>
          <b-row class="mx-n2">
            <b-col
              cols="4"
              md="4"
              lg="3"
              class="mb-4 px-2"
              v-for="(item, i) in 24"
              :key="i"
            >
              <div class="bg-img ratio-35 bg-gray-200 text-center">
                <div class="text-white py-2"></div>
              </div>
            </b-col>
          </b-row>
          <!-- <pending-text /> -->
        </b-container>
      </section>
    </div>
  </div>
</template>

<script>
// import allCategories from "~/assets/json/allCategories";

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
      form: {
        name: null,
        isForeigner: false,
        phone: null,
        program: null,
      },
      posters: ["primary", "secondary", "third"],
      posterIndex: 0,
      infos: [
        { name: "주제", value: "DIVE into DIGITAL HERITAGE" },
        { name: "기간", value: "2023.10.6(금)~10.8(일)" },
        { name: "장소", value: "공주 아트센터 고마" },
        { name: "주최", value: "공주시" },
        { name: "주관", value: "국립공주대학교 공주학연구원 | 알엠소프트" },
      ],
      utils: [
        {
          name: "행사 안내",
          icon: "lock-open-alt",
        },
        {
          name: "부스 안내",
          icon: "lock-open-alt",
        },
        {
          name: "사전등록",
          icon: "lock-open-alt",
        },
        {
          name: "프로그램 안내",
          icon: "lock-open-alt",
        },
      ],
    };
  },
  computed: {
    itemPinned() {
      if (!this.items?.length) return [];
      const pinned = this.items.filter((i) => i.pinned);
      return pinned;
    },
    query() {
      return this.$route.query;
    },
    // hideIntro() {
    //   return !!(this.scrollY >= 1000);
    // },
  },
  watch: {
    query(n) {
      // this.getItems(n);
    },
  },
  methods: {
    scrollToBottom() {
      window.scrollTo(0, document.body.scrollHeight);
    },
    preRegister() {
      console.log("this.form:", this.form);
    },
    // async init() {
    //   try {
    //     const [intro] = await Promise.all([this.getIntro()]);
    //     this.intro = intro;
    //   } catch (error) {
    //     console.error("error:", error);
    //   }
    // },
    // async getIntro() {
    //   try {
    //     const data = await this.$firebase().getBoardItem("intro-image", "1");
    //     if (data) {
    //       return data;
    //     }
    //   } catch (error) {
    //     console.error("error:", error);
    //   }
    // },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  z-index: 2;
  background-color: white;
}
section.intro {
  // height: 100vh;
  // max-height: calc(100vh - 75px);
  position: relative;
  // > video {
  //   position: absolute;
  //   width: 100%;
  //   top: 50%;
  //   left: 50%;
  //   transform: translate(-50%, -50%);
  //   // z-index: 10;
  //   @media (max-width: $breakpoint-xl) {
  //     width: auto;
  //     min-height: 100vh;
  //   }
  // }
  overflow: hidden;
  header {
    h1 {
      mix-blend-mode: difference;
      position: relative;
      z-index: 10;
      color: white;
    }
  }
  .bar {
    min-width: 30vw;
    min-height: 100px;
    position: absolute;
    z-index: 2;
    transition: all 0.6s $default-ease;
    transform: translate(-50%, -50%);
  }
}

@keyframes updown {
  0% {
    height: 0;
  }
  100% {
    height: 80px;
  }
}
.scroll-down {
  position: absolute;
  left: 50%;
  // right: 1rem;
  // bottom: 0.5rem;
  top: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform: translate(-50%, -100%);
  mix-blend-mode: difference;
  color: white;
  z-index: 10;
  .line {
    position: relative;
    &:after {
      position: absolute;
      z-index: -1;
      content: "";
      display: block;
      bottom: 0;
      left: 50%;
      width: 2px;
      height: 0;
      transform: translateX(-50%);
      animation-name: updown;
      animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
      animation-duration: 1s;
      animation-fill-mode: forwards;
      animation-direction: alternate;
      animation-iteration-count: infinite;
      // background-color: $primary;
      background-color: white;
    }
    width: 4px;
    height: 100px;
    margin-bottom: 0;
  }
  &.active {
    display: flex;
    opacity: 1;
  }
}

.slide-poster {
  box-shadow: 0 0 24px rgba($color: #000000, $alpha: 0.3);
}

.util-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  appearance: none;
  border: 0;
  background-color: transparent;
  color: $gray-400;
  margin: 0 auto;
  .icon-area {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    transition: all 0.3s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .text-area {
    transition: all 0.3s;
  }
  &:hover {
    .icon-area {
      background-color: $white;
      color: $gray-900;
    }
    .text-area {
      font-weight: 900;
    }
  }
}
</style>
