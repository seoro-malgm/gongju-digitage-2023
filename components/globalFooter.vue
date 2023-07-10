<template>
  <footer id="gnf">
    <b-container fluid class="py-3 pb-5">
      <ul class="list-unstyled">
        <li class="mb-1">
          <span class="text-15 text-md-16">
            주최:
            <a href="https://www.gongju.go.kr/kr/index.do" target="_blank">
              공주시청
            </a>
          </span>
        </li>
        <li class="mb-1">
          <span class="text-15 text-md-16">
            주관:
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
        <li class="mb-1">
          <span class="text-15 text-md-16">
            후원:
            <a href="https://www.cha.go.kr/main.html" target="_blank">
              문화재청
            </a>
          </span>
        </li>
        <li class="mb-1">
          <span class="text-15 text-md-16">
            문의: 공주학연구원 (
            <a href="tel:041-850-0448">041-850-0448</a>
            )
          </span>
        </li>
      </ul>

      <nav class="footer-nav">
        <b-btn variant="link " to="/brand">
          <span class="text-15"> 브랜드 아이덴티티(BI/CI) </span>
        </b-btn>
        <!-- <b-btn variant="link" :to="{ name: 'terms-privacy' }"
          >개인정보처리방침</b-btn
        >
        <b-btn variant="link" :to="{ name: 'customer-services-qna' }"
          >고객지원</b-btn
        >
        <b-btn variant="link" :to="{ name: 'customer-services-faq' }"
          >자주 묻는 질문</b-btn
        > -->
      </nav>
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
  },
};
</script>

<style lang="scss" scoped>
#gnf {
  background-color: black;
  color: white;
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
    color: $white;
    .btn {
      font-size: 0.85rem;
    }
  }
}
</style>
