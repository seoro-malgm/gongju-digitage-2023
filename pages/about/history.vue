<template>
  <div class="section-gap mt-0">
    <!-- 서브링크 -->
    <nav class="sub-nav">
      <b-row>
        <b-col offset="4" cols="4">
          <ul class="sub-links">
            <li class="sub-link-item">
              <nuxt-link class="sub-link" to="/about/history?year=2021">
                2021
              </nuxt-link>
            </li>
            <li class="sub-link-item">|</li>
            <li class="sub-link-item">
              <nuxt-link class="sub-link" to="/about/history?year=2022">
                2022
              </nuxt-link>
            </li>
          </ul>
        </b-col>
      </b-row>
    </nav>
    <article-detail text="전시 연혁">
      <b-row v-if="infos">
        <b-col cols="12" lg="5" class="mb-3 mb-lg-0">
          <div class="px-5 px-lg-3">
            <img
              :src="require(`@/assets/images/poster_${year || '2021'}.png`)"
              class="w-100"
              alt=""
            />
          </div>
        </b-col>
        <b-col cols="12" lg="7">
          <ul>
            <li
              class="border-bottom py-2 py-lg-3"
              v-for="(item, i) in infos"
              :key="i"
            >
              <b-row>
                <b-col cols="2">
                  <div class="text-15 text-lg-16 fw-600 px-lg-2">
                    {{ item.name }}
                  </div>
                </b-col>
                <b-col cols="10">
                  <div class="text-15 text-lg-16">
                    <template v-if="Array.isArray(item.value)">
                      <ul class="list-unstyled">
                        <li v-for="(item2, l) in item.value" :key="l">
                          {{ item2 }}
                        </li>
                      </ul>
                    </template>
                    <template v-else>
                      {{ item.value }}
                    </template>
                  </div>
                </b-col>
              </b-row>
            </li>
          </ul>
        </b-col>
      </b-row>
      <b-row class="mt-3 mt-lg-5" align-v="center" align-h="center">
        <b-col cols="5" lg="3">
          <a
            class="btn btn-primary w-100 fw-600 py-3 text-15 text-lg-18 shadow text-black"
            :href="downloadData?.report"
            target="_blank"
          >
            행사소개서 다운로드
          </a>
        </b-col>
        <b-col cols="5" lg="3">
          <a
            class="btn btn-sub-2 w-100 fw-600 py-3 text-15 text-lg-18 shadow text-black"
            :href="downloadData?.video"
            target="_blank"
            >행사 영상 바로가기
          </a>
        </b-col>
      </b-row>
    </article-detail>
  </div>
</template>

<script>
import archive from "@/data/archive/index.json";
export default {
  layout: "detail",
  data() {
    return {};
  },
  computed: {
    year() {
      return this.$route.query?.year;
    },
    infos() {
      return this.year
        ? [
            {
              name: "행사명",
              value: archive[this.year].title,
            },
            {
              name: "관람 기간",
              value: `${archive[this.year].date.year}.${
                archive[this.year].date.start
              } ~ ${archive[this.year].date.end}`,
            },
            {
              name: "주최",
              value: archive[this.year].host,
            },
            {
              name: "주관",
              value: archive[this.year].supervision,
            },
            {
              name: "후원",
              value: archive[this.year].sponsor,
            },
            {
              name: "성과",
              value: archive[this.year].performance,
            },
          ]
        : null;
    },
    downloadData() {
      return this.year
        ? {
            report: archive[this.year].report,
            video: archive[this.year].video,
          }
        : null;
    },
  },
  watch: {
    year(n) {},
  },
  mounted() {
    if (!this.year) {
      this.$router.push({
        path: "/about/history",
        query: {
          year: "2021",
        },
      });
    }
  },
};
</script>

<style lang="scss" scoped></style>
