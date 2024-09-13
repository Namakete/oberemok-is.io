<script lang="ts" setup>
import { Header } from "@/widgets/Header";
import { Footer } from "~/widgets/Footer";
</script>

<template>
  <div class="layout layout--main">
    <div class="layout__wrapper">
      <Header />
      <main class="layout__content">
        <slot />
      </main>
      <Footer class="layout__footer" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  &--main {
    display: flex;
    justify-content: center;
    min-height: 100vh;
  }

  &__wrapper {
    width: 40rem;
    padding: 0 1rem 0 1rem;
  }

  &__content {
    width: 100%;
  }

  &__footer {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 40rem;
    padding: 0 1rem;
  }
}
</style>
