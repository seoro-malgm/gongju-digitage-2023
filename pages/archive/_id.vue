<template>
  <div class="my-5">
    <b-container>
      <div class="mb-3">
        <router-link to="/program">
          <i class="icon icon-left-big" />
          프로그램 목록으로 돌아가기
        </router-link>
      </div>

      <article>
        <header>
          <ul class="list-unstyled d-flex align-items-center">
            <li class="border border-black bg-sub-1 px-2 py-1 mr-2 fw-700">
              컨퍼런스
            </li>
          </ul>
          <h1 class="text-20 text-lg-32">OOO 컨퍼런스 예시</h1>
          <span class="text-14 text-lg-18">
            2023.10.07 오후1시 ~ 오후 7시
          </span>
        </header>
        <hr />
        <section>
          <p class="text-15 text-lg-18">
            프로그램 내용 Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Incidunt reiciendis unde rem qui molestiae quos earum fugit ad
            porro at doloribus veritatis quia repudiandae et repellat, illo quas
            culpa totam.
          </p>
        </section>
      </article>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
