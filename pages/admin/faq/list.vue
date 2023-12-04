<template>
  <div>
    <header class="bg-gray-100 p-3 rounded-lg mb-4">
      <b-btn variant="primary text-white" to="/admin/faq/write">
        + 새 FAQ</b-btn
      >
    </header>
    <section>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th width="80%">제목</th>
              <th width="20%">관리</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="items?.length">
              <tr v-for="(item, i) in items" :key="i" class="border-bottom">
                <td>
                  {{ item?.title }}
                </td>

                <td class="text-center">
                  <b-btn
                    variant="info"
                    :to="{
                      path: '/admin/faq/write',
                      query: {
                        id: item.id,
                      },
                    }"
                  >
                    수정
                  </b-btn>
                  <b-btn variant="alert" @click="removeItem(item, i)">
                    삭제
                  </b-btn>
                </td>
              </tr>
            </template>
            <template v-else>
              <tr>
                <td colspan="6" class="text-center text-14 text-gray-600">
                  <template v-if="pending">
                    <Loading />
                  </template>
                  <template v-else>
                    <div class="py-3">
                      <span>FAQ이 없습니다.</span>
                    </div>
                  </template>
                </td>
              </tr>
            </template>
          </tbody>
          <!-- <tfoot></tfoot> -->
        </table>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  name: "admin-faq-list",
  data() {
    return {
      items: null,
      pending: false,
      selectedItem: null,
    };
  },
  async mounted() {
    await this.getItems();
  },
  methods: {
    async getItems() {
      const { getAllBoardItems } = this.$firebase();
      this.items = await getAllBoardItems("faq", null, null, [
        "createdAt",
        "desc",
      ]);
    },
    async removeItem(item, index) {
      const bool = await window.confirm(
        `FAQ을 <strong>"${item.title}"</strong>를 삭제하시겠습니까?`
      );
      if (bool) {
        try {
          const data = await this.$firebase().removeBoardItem("faq", [
            "id",
            item.id,
          ]);
          if (data) {
            window.toast("삭제에 성공했습니다.");
            this.items.splice(index, 1);
          }
        } catch (error) {
          window.toast("삭제에 실패했습니다.");
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.thumbnail {
  width: 200px;
  height: auto;
}
</style>
