<template>
  <div>
    <section class="section-gap mt-0">
      <img :src="require('@/assets/images/artcenter_goma.png')" alt="" />
      <b-row class="overview-row">
        <b-col cols="10" md="8" class="overview-column" offset="1">
          <h3 class="text-24 text-lg-32 py-3 px-2 fw-600">
            디지털유산전은 <br class="d-block" />
            문화유산의 계승과 보존을 위해 <br />
            디지털 문화유산의 가치창출 및 생태계 조성하여 <br />
            새로운 시대의 흐름을 선도하는데 앞장서고 있습니다.
          </h3>
        </b-col>
      </b-row>
    </section>
    <section class="section-gap">
      <article-detail text="전시개요">
        <ul class="mt-n3">
          <li
            v-for="(item, i) in infos"
            :key="i"
            class="border-bottom py-2 py-lg-3"
          >
            <b-row>
              <b-col cols="2">
                <div class="text-15 text-lg-16 fw-600 px-lg-2">
                  {{ item.name }}
                </div>
              </b-col>
              <b-col cols="10">
                <div class="text-15 text-lg-16">
                  {{ item.value }}
                </div>
              </b-col>
            </b-row>
          </li>
        </ul>
      </article-detail>
    </section>
    <section class="section-gap">
      <article-detail text="BI">
        <ul class="mt-5 px-2">
          <!-- 시그니처 로고마크 -->
          <li class="mb-5 pb-lg-5">
            <b-row align-v="start">
              <b-col cols="1">
                <h6 class="text-18 text-lg-20">시그니처 로고마크</h6>
              </b-col>
              <b-col cols="11">
                <hr class="mt-3 mb-2" />
                <p class="text-13 text-lg-15">
                  문화유산에 흐르는 디지털 신호를 표현. 아날로그 신호가 디지털
                  신호로 바뀌면서 나타나는 빛을 디자인적 요소로 표현하여
                  문화유산을 보존하고 향유하는 방식의 변화를 나타내고자 하였다.
                </p>
              </b-col>
            </b-row>
            <b-row align-h="center" class="my-5 py-lg-3">
              <b-col cols="10" lg="7">
                <img
                  :src="require('@/assets/images/bi/logo-mark.png')"
                  alt="시그니쳐 로고마크 이미지"
                />
              </b-col>
            </b-row>
          </li>
          <!-- 로고변형 -->
          <li class="mb-5 pb-lg-5">
            <b-row align-v="start">
              <b-col cols="1">
                <h6 class="text-18 text-lg-20">로고변형</h6>
              </b-col>
              <b-col cols="11">
                <hr class="mt-3 mb-2" />
                <p class="text-13 text-lg-15">
                  로고타입은 로고마크와 더불어 디지털유산전의 아이덴티티를
                  시각적으로 전달하는 가장 기본적인 요소이다. 글자꼴 형태에 따라
                  비례 조정한 것이므로, 모양과 굵기, 비례 등을 임의로 변경하는
                  것을 금지한다.
                </p>
              </b-col>
            </b-row>
            <b-row align-h="center" class="my-5 py-lg-3">
              <b-col cols="11" lg="10">
                <img
                  :src="require('@/assets/images/bi/logo-transform.png')"
                  alt="로고변형 이미지"
                />
              </b-col>
            </b-row>
          </li>
          <!-- 전용색상 -->
          <li class="mb-5 pb-lg-5">
            <b-row align-v="start">
              <b-col cols="1">
                <h6 class="text-18 text-lg-20">전용색상</h6>
              </b-col>
              <b-col cols="11">
                <hr class="mt-3 mb-2" />
                <p class="text-13 text-lg-15">
                  디지털유산전의 색상 표현은 매뉴얼에 명시된 컬러를 표준으로
                  삼는다. 특히 Web환경 사용 시 각 컬러의 CMYK색상과 RGB색상
                  코드를 잘 구분하여 적용한다.
                </p>
              </b-col>
            </b-row>
            <b-row align-h="center" class="my-5 py-lg-3">
              <b-col cols="10" lg="8">
                <img
                  :src="require('@/assets/images/bi/color.png')"
                  alt="컬러 색상"
                />
              </b-col>
            </b-row>
          </li>
        </ul>
      </article-detail>
    </section>
  </div>
</template>

<script>
export default {
  layout: "detail",
  computed: {
    infos() {
      return this.$store.getters.getInfos;
    },
  },
};
</script>

<style lang="scss" scoped>
.overview-row {
  margin-top: -48px;
}
.overview-column {
  background-color: rgba($color: #fff, $alpha: 0.8);
}
</style>
