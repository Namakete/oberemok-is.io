<script lang="ts" setup>
import { Moon, Sun } from 'lucide-vue-next';

const colorMode = useColorMode();

const toggleColorMode = () => (colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light');
</script>

<template>
  <button class="theme-switcher">
    <div class="theme-switcher__icon" @click="toggleColorMode">
      <Moon class="theme-switcher__icon--moon" v-if="colorMode.preference === 'dark'" />
      <Sun class="theme-switcher__icon--sun" v-else />
    </div>
  </button>
</template>

<style lang="scss" scoped>
.theme-switcher {
  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--icon-size-small);
    width: var(--icon-size-small);

    &--moon {
      color: var(--color-link);

      &:hover {
        color: var(--color-link-hover);
        transition: all 0.3s ease;
      }
    }

    &--sun {
      color: var(--color-link);

      &:hover {
        color: var(--color-link-hover);
        transition: all 0.3s ease;
      }
    }
  }
}
</style>
