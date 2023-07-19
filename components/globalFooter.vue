<template>
  <footer id="gnf">
    <b-container class="pt-3 pb-5 pt-lg-4 position-relative">
      <b-btn
        variant="outline-gray-700 position-absolute bg-white rounded-0"
        @click="scrollTo(0, 0)"
        :style="{
          right: '1rem',
          top: '-24px',
        }"
      >
        <i class="icon icon-up-open d-block" />
        <span class="mx-1 fw-700 text-14 text-lg-15"> TOP </span>
      </b-btn>
      <ul class="list-unstyled d-flex flex-column flex-lg-row">
        <li class="mb-1 mx-lg-2">
          <span class="text-15 text-lg-16">
            <strong>주최:</strong>
            <a href="https://www.gongju.go.kr/kr/index.do" target="_blank">
              공주시청
            </a>
          </span>
        </li>
        <li class="mb-1 mx-lg-2">
          <span class="text-15 text-lg-16">
            <strong>주관:</strong>
            <a
              href="https://kjhak.kongju.ac.kr/M01045/index.do"
              target="_blank"
            >
              국립공주대학교 공주학연구원
            </a>
            |
            <a href="https://www.rmsoft.co.kr/" target="_blank"> 알엠소프트 </a>
          </span>
        </li>
        <li class="mb-1 mx-lg-2">
          <span class="text-15 text-lg-16">
            <strong> 후원:</strong>
            <a href="https://www.cha.go.kr/main.html" target="_blank">
              문화재청
            </a>
          </span>
        </li>
        <li class="mb-1 mx-lg-2">
          <span class="text-15 text-lg-16">
            <strong>문의:</strong>
            공주학연구원 (
            <a href="tel:041-850-0448">041-850-0448</a>
            )
          </span>
        </li>
      </ul>
      <hr class="mt-5 mb-3 border-gray-500" />
      <div class="text-right text-13 text-lg-14">
        Copyright&copy; 2023 디지털문화유산전 All rights reserved
      </div>
      <!-- <nav class="footer-nav"> -->
      <!-- <b-btn variant="link " to="/brand">
          <span class="text-15"> 브랜드 아이덴티티(BI/CI) </span>
        </b-btn> -->
      <!-- <b-btn variant="link" :to="{ name: 'terms-privacy' }"
          >개인정보처리방침</b-btn
        >
        <b-btn variant="link" :to="{ name: 'customer-services-qna' }"
          >고객지원</b-btn
        >
        <b-btn variant="link" :to="{ name: 'customer-services-faq' }"
          >자주 묻는 질문</b-btn
        > -->
      <!-- </nav> -->
    </b-container>
  </footer>
</template>

<script>
import { copyText } from "~/plugins/commons.js";
export default {
  data() {
    return {
      contacts: [
        {
          icon: "mail-1",
          url: "/",
        },
        {
          icon: "instagram",
          url: "/",
        },
        {
          icon: "comment-empty",
          url: "/",
        },
      ],
    };
  },
  methods: {
    copyText,
    scrollTo(x, y) {
      window.scrollTo(x, y);
    },
  },
};
</script>

<style lang="scss" scoped>
#gnf {
  background-color: #333;
  color: $gray-500;
  position: relative;
  z-index: 2;
  @media (max-width: $breakpoint-md) {
    padding-bottom: 60px;
  }
  .footer-nav {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    .btn {
      font-size: 0.75rem;
      font-weight: 700;
      padding: 0;
      margin-right: 8px;
    }
  }
  h4.logo {
    > img {
      width: 80px;
    }
  }
  li {
    margin-bottom: 2px;
    font-size: 13px;
    color: $gray-500;
    .btn {
      font-size: 0.85rem;
    }
  }
}
a:link,
a:visited,
a:active,
a:hover {
  color: $gray-500;
  text-decoration: none;
}
</style>
