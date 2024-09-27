<script lang="ts" setup>
const getDelayAnimation = (index: number, delay: number): Record<string, string> => ({
  animationDelay: `${index * delay}s`
});
</script>

<template>
  <div class="animated">
    <div class="animated__wrapper">
      <template v-for="(child, index) in $slots.default?.()" :key="index">
        <div :style="getDelayAnimation(index, 0.2)" class="animated__wrapper-item">
          <component :is="child" />
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.animated {
  &__wrapper {
    &-item {
      opacity: 0;
      transform: translateY(1.25rem);
      animation: var(--animation-duration);
    }
  }
}
</style>
