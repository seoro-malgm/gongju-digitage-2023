<template>
  <b-modal
    id="modal-image-detail"
    titleClass="d-none"
    contentClass="bg-transparent border-0"
    headerClass="d-none"
    okTitle="닫기"
    okVariant="sub-2 px-3 fw-700"
    @ok="$emit('close')"
    ok-only
    size="xl"
    autoFocusButton="ok"
    hideHeaderClose
    bodyClass="p-0"
    footerClass="border-0 bg-transparent p-1"
    headerCloseContent="`<i class='icon icon-times text-1'></i>``"
    centered
  >
    <img :src="src" alt="" class="shadow-lg" />
  </b-modal>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped></style>
