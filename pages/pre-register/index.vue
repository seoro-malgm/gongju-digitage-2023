<template>
  <div>
    <section class="py-5 min-vh-100">
      <b-container class="mb-5 py-5">
        <header class="py-3">
          <h2 class="text-36 text-lg-48 text-lg-56 underbar">
            사전등록하세요!
          </h2>
          <p class="text-15 text-lg-20">
            현재 프로그램이 준비중입니다. 프로그램이 모두 준비되면 사전등록이
            가능하도록 신청을 열어두겠습니다!
          </p>
        </header>
        <div class="mt-4">
          <form-pre-register @submit="preRegister" />
          <!-- <b-form @submit.prevent="preRegister">
            <b-input-group
              class="input-group align-items-start mb-4 flex-nowrap"
            >
              <template #prepend>이름</template>
              <div class="d-flex flex-column w-100">
                <b-form-input
                  placeholder="이름을 입력하세요"
                  class="mt-1"
                  v-model="form.name"
                />
                <b-form-radio-group
                  class="input-group p-0 align-items-center"
                  id="isForeigner"
                  v-model="form.isForeigner"
                >
                  <b-form-radio :value="false">내국인</b-form-radio>
                  <b-form-radio :value="true">외국인</b-form-radio>
                </b-form-radio-group>
              </div>
            </b-input-group>

            <b-input-group class="input-group mb-4">
              <template #prepend>연락처</template>
              <b-form-input
                placeholder="연락처를 입력하세요('-' 제외)"
                v-model="form.phone"
              />
            </b-input-group>
            <b-input-group class="input-group mb-4">
              <template #prepend>신청 프로그램</template>
              <b-form-select v-model="form.program">
                <b-form-select-option :value="null">
                  선택하세요
                </b-form-select-option>
              </b-form-select>
            </b-input-group>
            <b-row class="mt-4" align-h="center">
              <b-col cols="10" md="8" lg="6">
                <b-btn
                  variant="sub-2 text-white fw-700 px-3 py-3 w-100 text-15 text-lg-20"
                  type="submit"
                >
                  사전등록
                </b-btn>
                <div class="mt-1 text-center">
                  <small class="text-13 text-lg-14">
                    사전등록 확인을 하러 오셨나요?
                  </small>
                  <b-btn variant="link p-0" to="/pre-register/confirm">
                    사전등록 확인하기 <i class="icon icon-right-big" />
                  </b-btn>
                </div>
              </b-col>
            </b-row>
          </b-form> -->
        </div>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: null,
        isForeigner: false,
        phone: null,
        program: null,
      },
    };
  },
  methods: {
    preRegister() {
      console.log("this.form:", this.form);
      this.$router.push("/pre-register/registered");
    },
  },
};
</script>

<style lang="scss" scoped></style>
