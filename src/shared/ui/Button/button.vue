<script lang="ts" setup>
import { cva, type VariantProps } from 'class-variance-authority';

const button = cva('button', {
  variants: {
    intent: {
      primary: 'button__primary',
      secondary: 'button__secondary'
    },
    size: {
      small: 'button__size-small',
      medium: 'button__size-medium',
      large: 'button__size-large'
    }
  },
  compoundVariants: [
    {
      intent: 'primary',
      size: 'medium',
      class: 'primaryMedium'
    }
  ]
});

type ButtonProps = VariantProps<typeof button>;

withDefaults(
  defineProps<{
    intent: ButtonProps['intent'];
    size: ButtonProps['size'];
  }>(),
  {
    intent: 'primary',
    size: 'medium'
  }
);
</script>

<template>
  <button :class="button({ intent, size })">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.button {
  display: inline-flex;

  &__primary {
    background-color: rgb(59 130 246);
    color: rgb(255 255 255);
    border-color: rgb(59 130 246);

    &:hover {
      background-color: rgb(29 78 216);
    }
  }

  &__secondary {
    background-color: rgb(255 255 255);
    color: rgb(59 130 246);
    border-color: rgb(59 130 246);

    &:hover {
      background-color: rgb(243 244 246);
    }
  }

  &__size {
    &-small {
      font-size: 0.875rem;
      line-height: 1.25rem;
      padding: 0.25rem 0.5rem;
    }

    &-medium {
      font-size: 1rem;
      line-height: 1.5rem;
      padding: 0.5rem 1rem;
    }

    &-large {
      font-size: 1.125rem;
      line-height: 1.75rem;
      padding: 0.75rem 1.5rem;
    }

    &-primaryMedium {
      text-transform: uppercase;
    }
  }
}
</style>
