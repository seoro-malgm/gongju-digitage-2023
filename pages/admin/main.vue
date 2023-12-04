<template>
  <div>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="info">
          팝업 이미지 변경
        </b-button>
      </b-card-header>
      <b-collapse
        id="accordion-1"
        accordion="my-accordion"
        role="tabpanel"
        @show="getPopup()"
      >
        <b-card-body>
          <template v-if="pending.popup">
            <b-spinner small />
          </template>
          <template v-if="!pending.popup">
            <b-form @submit.prevent="updatePopup">
              <b-row>
                <b-col cols="6">
                  <admin-input-image
                    title="팝업 이미지 변경"
                    desc="메인페이지에 나타나는 팝업 이미지를 변경합니다."
                    path="popupImage"
                    :file="popup.image"
                    @change="($event) => (popup.image = $event)"
                  />
                </b-col>
                <b-col cols="6">
                  <admin-item title="옵션" desc="공개여부 등을 설정합니다">
                    <b-form-checkbox v-model="popup.show" switch>
                      <div class="text-18 mt-n1">
                        공개
                        <span :class="{ 'fw-900': popup.show }">ON</span>
                        /
                        <span :class="{ 'fw-900': !popup.show }">OFF</span>
                      </div>
                    </b-form-checkbox>
                  </admin-item>
                </b-col>
              </b-row>

              <btn-submit :pending="pending.submitPopup">
                팝업 이미지 저장
              </btn-submit>
            </b-form>
          </template>
        </b-card-body>
      </b-collapse>
    </b-card>
    <!-- <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="info"> ... </b-button>
      </b-card-header>
      <b-collapse
        id="accordion-2"
        accordion="my-accordion"
        role="tabpanel"
      >
        <b-card-body>
          ...
          <template v-if="pending.popup">
            <b-spinner small />
          </template>
          <template v-if="!pending.popup">
            <b-form @submit.prevent="updatePopup">
            ...
              <btn-submit :pending="pending.submitPopup">
                팝업 저장
              </btn-submit>
            </b-form>
          </template>
        </b-card-body>
      </b-collapse>
    </b-card> -->
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  name: "admin-main",
  data() {
    return {
      pending: {
        popup: false,
        submitPopup: false,
      },
      popup: {
        no: "1",
        image: null,
        show: false,
      },
    };
  },
  methods: {
    async getPopup() {
      this.pending.popup = true;
      try {
        const data = await this.$firebase().getBoardItem("popup-image", [
          "no",
          "1",
        ]);
        if (data) {
          this.popup = data;
        }
      } catch (error) {
        console.error("error:", error);
      }
      this.pending.popup = false;
    },
    async updatePopup() {
      // pending
      this.pending.submitPopup = true;
      // start
      try {
        const data = await this.$firebase().updateBoardItem(
          "popup-image",
          ["no", "1"],
          this.popup
        );
        if (data) {
          window.toast("팝업 이미지가 저장되었습니다.", {
            toaster: "b-toaster-top-right",
          });
        }
      } catch (error) {
        window.toast(error, {
          toaster: "b-toaster-top-right",
        });
      }
      // end
      this.pending.submitPopup = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
