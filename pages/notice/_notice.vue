<template>
  <div class="section-gap mt-5">
    <!-- news -->
    <template v-if="collectionName === 'news'">
      <div class="news-list">
        <header class="news-header">
          <b-row>
            <b-col cols="7" lg="8"> 제목 </b-col>
            <b-col cols="3" lg="2" class="text-center"> 작성일 </b-col>
            <b-col cols="2" lg="2" class="text-center"> 조회수 </b-col>
          </b-row>
        </header>
        <section class="news-body">
          <ul>
            <li class="news-item" v-for="(item, i) in notices" :key="i">
              <b-row>
                <b-col cols="7" lg="8">
                  <header class="d-flex align-items-center">
                    <span class="news-type mr-2">공지</span>
                    <router-link
                      :to="`/notice/bbs/notice/${item?.id}`"
                      class="text-truncate px-2 fw-600"
                    >
                      {{ item?.title }}
                    </router-link>
                  </header>
                </b-col>
                <b-col cols="3" lg="2">
                  <div class="text-center">
                    <span class="text-13 text-md-15 text-gray-500">
                      {{ item?.createdAt }}
                    </span>
                  </div>
                </b-col>
                <b-col cols="2" lg="2">
                  <div class="text-center">
                    <span class="text-13 text-md-15 text-gray-500">
                      {{ item?.viewer }}
                    </span>
                  </div>
                </b-col>
              </b-row>
            </li>
          </ul>
        </section>
      </div>
    </template>
    <!-- faqs -->
    <template v-if="collectionName === 'faq'">
      <section>
        <div class="pb-1 mb-2">
          <span class="fw-700">총 {{ faqs?.length }}개</span>
        </div>
        <ul class="faq-list">
          <li v-for="(item, i) in faqs" :key="i" class="border-bottom">
            <header class="py-3">
              <b-btn
                block
                variant="text p-0 d-flex align-items-start justify-content-between text-left"
                v-b-toggle="`faq-${i}`"
              >
                <span class="status mr-3">Q</span>
                <span
                  class="fw-700 text-15 text-md-18 text-left text-truncate pt-2 q-title ml-0 mr-auto"
                >
                  {{ item?.title }}
                </span>
                <div class="px-4 py-2">
                  <i class="icon icon-down-open text-16 text-md-20" />
                </div>
              </b-btn>
            </header>

            <b-collapse :id="`faq-${i}`" role="tabpanel">
              <div class="p-3 border-top bg-gray-200">
                <div class="pl-2 d-flex align-items-center">
                  <span class="status mr-3">A</span>
                  <p class="text-15 text-md-18">
                    <client-only>
                      <p v-html="item.content" />
                    </client-only>
                  </p>
                </div>
              </div>
            </b-collapse>
          </li>
        </ul>
      </section>
    </template>
  </div>
</template>

<script>
export default {
  layout: "detail",
  data() {
    return {
      notices: null,
      faqs: null,
    };
  },
  computed: {
    collectionName() {
      return this.$route.params?.notice;
    },
  },
  watch: {
    collectionName(n) {
      this.getNotice(n);
    },
  },
  async mounted() {
    await this.getNotice(this.collectionName);
  },
  methods: {
    async getNotice(collectionName) {
      const { getAllBoardItems } = this.$firebase();
      const items = await getAllBoardItems(
        collectionName === "news" ? "notice" : "faq",
        null,
        null,
        ["createdAt", "desc"]
      );
      if (collectionName === "news") {
        this.notices = items;
      } else {
        this.faqs = items;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.news-list {
  border-top: 3px solid #707070;
  .news-header {
    background-color: #f6f6f6;
    padding: 0.5rem 1rem;
  }
  .news-body {
    ul {
      li.news-item {
        padding: 1rem 1rem;
        border-bottom: 1px solid #707070;
        &:last-child {
          border-bottom-width: 0;
        }
        .news-type {
          background-color: #707070;
          font-weight: 700;
          color: white;
          padding: 1px 8px;
          display: block;
          + h6 {
            color: #8b8b8b;
          }
        }
      }
    }
  }
}

.faq-list {
  border-top: 3px solid #707070;
  .btn {
    i.icon-down-open {
      transition: all 0.2s $default-ease;
    }
    &.not-collapsed {
      i.icon-down-open {
        transform: rotate(-180deg);
      }
    }
  }
  .q-title {
    color: #8b8b8b;
  }
}

.status {
  width: 40px;
  min-width: 40px;
  height: 40px;
  display: flex;
  padding: 4px;
  border-radius: 50%;
  background-color: #707070;
  color: white;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 700;
}
</style>
