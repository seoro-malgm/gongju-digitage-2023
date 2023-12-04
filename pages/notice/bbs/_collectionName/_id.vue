<template>
  <div>
    <pre style='position:fixed;right:0;bottom:0;padding:0.5rem;background-color:#eee;z-index:999999'>
    id:{{id}}
    </pre>
    <header
      class="detail-header"
      :style="{
        backgroundImage: `url(${require('@/assets/images/pattern_0.png')})`,
      }"
    >
      <small class="text-13 text-lg-14 my-0 mt-lg-auto mb-lg-0">
        Dive into Digital Heritage
      </small>
      <h2 class="text-30 text-lg-48 lh-125">
        <template v-if="item?.title">
          {{ item?.title }}
        </template>
        <template v-else>
          <b-spinner />
        </template>
      </h2>
      <b-container class="mt-auto mb-4 d-none d-lg-flex justify-content-end">
        <b-breadcrumb>
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
    <article class="pt-3 pb-5">
      <div class="container">
        <p class="text-15 text-lg-16">
          <template v-if="item?.content">
            <client-only>
              <p v-html="item?.content"></p>
            </client-only>
          </template>
          <template v-else>
            <b-spinner />
          </template>
        </p>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: null,
      currentBreadcrumb: [
        { text: "홈", href: "/" },
        { text: "공지사항", href: "/notice/news" },
      ],
    };
  },
  computed: {
    collectionName() {
      return this.$route.params?.collectionName;
    },
    id() {
      return this.$route.params?.id;
    },
  },
  async mounted() {
    await this.getItem();
    await this.incrementViewer();
  },
  methods: {
    async getItem() {
      const { getBoardItem } = this.$firebase();
      console.log({
        collectionName: this.collectionName, id: this.id
      })
      this.item = await getBoardItem(this.collectionName, ["id",this.id]);
    },
    async incrementViewer() {
      const { incrementViewer } = this.$firebase();
      await incrementViewer(this.collectionName, ["id",this.id]);
    },
  },
};
</script>

<style lang="scss" scoped>
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
    min-height: 300px;
  }
}
</style>
