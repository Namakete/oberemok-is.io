<script lang="ts" setup>
import { Moon, Sun } from 'lucide-vue-next';

const colorMode = useColorMode();

const toggleColorMode = () => {
  return (colorMode.preference =
    colorMode.preference === 'light' ? 'dark' : 'light');
};
</script>

<template>
  <div class="theme-switcher">
    <div class="theme-switcher__icon" @click="toggleColorMode">
      <Moon
        class="theme-switcher__icon--moon"
        v-if="colorMode.preference === 'dark'"
      />
      <Sun class="theme-switcher__icon--sun" v-else />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.theme-switcher {
  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &--moon {
      color: var(--color-text-primary);
      height: var(--icon-size-small);
      width: var(--icon-size-small);
    }

    &--sun {
      color: var(--color-text-primary);
      height: var(--icon-size-small);
      width: var(--icon-size-small);
    }
  }
}
</style>
