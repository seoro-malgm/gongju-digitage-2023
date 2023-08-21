<template>
  <div>
    <!-- 서브링크 -->
    <nav class="sub-nav">
      <b-row>
        <b-col offset="4" offset-md="8" cols="4">
          <ul class="sub-links">
            <li class="sub-link-item">
              <nuxt-link class="sub-link" to="/about/composition/layouts">
                전시배치
              </nuxt-link>
            </li>
            <li class="sub-link-item">|</li>
            <li class="sub-link-item">
              <nuxt-link class="sub-link" to="/about/composition/companies">
                참여업체
              </nuxt-link>
            </li>
          </ul>
        </b-col>
      </b-row>
    </nav>
    <!-- pending -->
    <pending-text></pending-text>
  </div>
</template>

<script>
export default {
  layout: "detail",
  mounted() {
    this.$router.push("/about/composition/layouts");
  },
};
</script>

<style lang="scss" scoped></style>
