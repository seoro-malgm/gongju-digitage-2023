<template>
  <div>
    <b-form @submit.prevent="id ? updateItem() : submitItem()">
      <div>
        <admin-item title="공지사항 제목">
          <b-form-input v-model="form.title" />
        </admin-item>
      </div>
      <div class="mt-4">
        <admin-editor
          title="내용"
          desc="메뉴 상세에서 표시할 상세 내용을 작성합니다"
          storagePath="menuImage"
          @change="($event) => (form.content = $event)"
          :description="form.content"
        />
      </div>
      <div
        class="mt-3 border-top pt-2 d-flex align-items-center justify-content-end"
      >
        <btn-submit :pending="pending.submit">
          공지사항
          {{ id ? "수정" : "추가" }}
        </btn-submit>
      </div>
    </b-form>
  </div>
</template>
<script>
import { resize, createHash } from "~/plugins/commons.js";

export default {
  layout: "dashboard",
  name: "admin-notice-write",
  props: {
    auth: {
      type: [String, Boolean],
      default: false,
    },
  },

  data() {
    return {
      pending: {
        thumbnail: false,
      },
      form: {
        title: null,
        content: null,
      },
      imagesAttached: [],
      resize,
    };
  },
  computed: {
    id() {
      return this.$route.query?.id;
    },
    validate() {
      return !(
        !this.form.title ||
        this.form.title === "" ||
        !this.form.content ||
        this.form.content === "<p></p>"
      );
    },
  },
  async mounted() {
    await this.init();
  },
  methods: {
    // 해쉬 제작
    createHash,
    // 불러오기
    async init() {
      if (!this.id) return;
      try {
        const data = await this.$firebase().getBoardItem("notice", [
          "id",
          this.id,
        ]);
        if (data) {
          this.form = {
            ...data,
            // createdAt: new Date().toLocaleString(),
            updateDate: new Date().toLocaleString(),
          };
        }
      } catch (error) {
        console.error("error:", error);
      }
    },
    // 업로드
    async submitItem() {
      this.pending.submit = true;
      try {
        // 해쉬 생성
        const id = this.createHash();
        const data = await this.$firebase().addBoardItem("notice", {
          ...this.form,
          id,
          createdAt: new Date().toLocaleString(),
          updateDate: new Date().toLocaleString(),
        });
        if (data) {
          window.toast("업로드에 성공했습니다.");
          this.$router.push(`/admin/notice/list`);
        }
      } catch (error) {
        window.toast("업로드에 실패했습니다.");
        console.error("error:", error);
      }
      this.pending.submit = false;
    },
    // 업데이트
    async updateItem() {
      this.pending.submit = true;
      try {
        const data = await this.$firebase().updateBoardItem(
          "notice",
          ["id", this.id],
          {
            ...this.form,
            updateDate: new Date().toLocaleString(),
            viewer: 0,
          }
        );
        if (data) {
          window.toast("공지사항을 수정했습니다.");
          this.$router.push(`/admin/notice/list`);
        }
      } catch (error) {
        window.toast("수정에 실패했습니다.");
        console.error("error:", error);
      }
      this.pending.submit = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.input-thumbnail {
  width: 100%;
  padding: 3rem 3rem 49%;
  border-radius: 14px;
  border: 1px solid #eee;
  background-color: #ededed;
  text-align: center;
  position: relative;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .label-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.code-preview {
  width: 100%;
  max-height: 300px;
  padding: 16px;
  overflow-y: auto;
  background-color: #ededed;
}

.thumbnail-list {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  li {
    margin-right: 8px;
    margin-bottom: 8px;
    img {
    }
    input {
      display: none;
      + label {
        width: 94px;
        height: 94px;
        overflow: hidden;
        position: relative;
        img {
          width: 100%;
          position: absolute;
          height: 96px;
          width: auto;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        border: 2px solid $white;
      }
      &:checked {
        + label {
          border-color: $primary;
          &:after {
            position: absolute;
            z-index: 2;
            content: "선택됨";
            background-color: $primary;
            color: white;
            display: block;
            padding: 2px 4px;
            font-size: 12px;
            font-weight: 700;
            white-space: nowrap;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }
    }
  }
}
</style>
