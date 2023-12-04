<template>
  <div>
    <client-only>
      <template v-if="pending">
        <Loading />
      </template>
      <template v-else>
        <b-row tag="ul" align-h="center" v-if="currentDigitage?.length">
          <b-col
            v-for="(item, i) in currentDigitage"
            :key="i"
            tag="li"
            cols="12"
            md="6"
            class="mb-4 py-4"
          >
            <article class="archive-item" @click="openDetail(item.src)">
              <figure class="item-image-wrapper">
                <img :src="item.src" alt="" />
              </figure>
              <section class="item-body">
                <h6>
                  {{ item.value }}
                </h6>
              </section>
            </article>
          </b-col>
        </b-row>
      </template>
    </client-only>
    <modal-image-detail :src="currentSrc" />
  </div>
</template>

<script>
import archives from "@/data/archive/index";
export default {
  layout: "detail",
  data() {
    return {
      archives,
      pending: false,
      currentSrc: null,
    };
  },
  computed: {
    year() {
      return this.$route.params?.archiveYear;
    },
    currentDigitage() {
      let result = [];
      if (!this.year) return [];
      const current = this.archives[this.year];
      if (!current?.data?.length) return [];
      const currentData = current?.data;
      for (let i = 0; i < currentData?.length; i++) {
        const sources = currentData[i]?.sources;
        for (let l = 0; l < sources?.length; l++) {
          const source = sources[l];
          result.push({
            value: currentData[i].value,
            src: require(`@/data/archive/${this.year}/${currentData[i].key}/${source}`),
          });
        }
      }
      return result;
    },
  },
  methods: {
    openDetail(src) {
      this.currentSrc = src;
      this.$bvModal.show("modal-image-detail");
    },
  },
};
</script>

<style lang="scss" scoped>
.archive-item {
  border: 1px solid #bbbbbb;
  &:hover {
    cursor: pointer;
    .item-image-wrapper {
      img {
        transform: translate(-50%, -50%) scale(1.02);
      }
    }
  }
  .item-image-wrapper {
    position: relative;
    padding-bottom: 56.2%;
    position: relative;
    overflow: hidden;
    img {
      position: absolute;
      z-index: 2;
      display: block;
      top: 50%;
      left: 50%;
      width: auto;
      height: auto;
      min-height: 100%;
      transition: transform 0.2s $default-ease;
      transform: translate(-50%, -50%);
    }
  }
  .item-body {
    padding: 1rem;
    border-top: 1px solid #bbbbbb;
  }
}
</style>
