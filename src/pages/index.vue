<script lang="ts" setup>
import { DefaultLayout } from '@/widgets/Layouts';
import { AnimatedWrapper } from '@/widgets/Wrapper';
</script>

<template>
  <DefaultLayout>
    <AnimatedWrapper>
      <section class="section">
        <div class="section__wrapper">Home</div>
      </section>
    </AnimatedWrapper>
  </DefaultLayout>
</template>

<style lang="scss" scoped>
.section {
  &__wrapper {
    padding: 1rem;
    margin-bottom: 2rem;
  }
}
</style>
