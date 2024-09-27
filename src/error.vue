<script setup>
import { DefaultLayout } from '@/widgets/Layouts';
import { NavigationItems } from '@/widgets/Header/config';

const error = useError();
</script>

<template>
  <NuxtLayout>
    <DefaultLayout>
      <div class="error">
        <div class="error__wrapper">
          <section class="error__wrapper-section">
            <h1 class="error__wrapper-section-title">{{ error.statusCode }}</h1>
            <p class="error__wrapper-section-description">
              Uh oh! This page does not exists, maybe you clicked an old link or misspelled. Please try again…
            </p>
            <NuxtLink :to="NavigationItems.home.href" class="error__wrapper-section-return">Return home</NuxtLink>
          </section>
        </div>
      </div>
    </DefaultLayout>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.error {
  &__wrapper {
    &-section {
      &-title {
        color: var(--color-text-title);
        font-size: var(--font-size-xxxlarge);
        font-weight: var(--font-weight-base);
      }

      &-description {
        color: var(--color-text-description);
      }

      &-return {
        color: var(--color-text-secondary);
        font-size: var(--font-size-base);
        text-decoration: underline;
      }
    }
  }
}
</style>
