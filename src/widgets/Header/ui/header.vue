<script lang="ts" setup>
import { NavigationItems } from '~/widgets/Header/config';
import { ThemeSwitcher } from '@/widgets/Switcher';
import { useRoute } from 'vue-router';
import { MenuIcon, XIcon } from 'lucide-vue-next';

const route = useRoute();

const isMenuOpen = ref(false);

const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value);
</script>

<template>
  <header :class="['header', { 'menu-open': isMenuOpen }]">
    <div class="header__wrapper">
      <NuxtLink :to="NavigationItems.home.href" toclass="header__logo">Logo</NuxtLink>
      <nav class="header__nav">
        <ul class="header__nav-list">
          <li
            v-for="(item, index) in NavigationItems.links"
            :key="index"
            :class="{ 'header__nav-item--active': route.path === item.href }"
            class="header__nav-item"
          >
            <NuxtLink :to="item.href" class="header__nav-link" prefetch>{{ item.title }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="header__actions">
        <ThemeSwitcher />
        <button class="header__actions__menu-btn" @click="toggleMenu">
          <MenuIcon class="header__actions__menu-btn__icon" v-if="!isMenuOpen" />
          <XIcon class="header__actions__menu-btn__icon" v-else />
        </button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  color: var(--text-color-primary);
  padding: 2rem 0;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__nav {
    &-list {
      list-style: none;
      display: flex;
      gap: 1.5rem;
      align-items: center;
    }

    &-link {
      padding: 0.5rem 1rem;
      border-radius: 0.4rem;
      transition: background 0.3s ease;

      &:hover {
        color: var(--color-link-hover);
        transition: all 0.3s ease;
      }
    }

    &-item--active &-link {
      background-color: var(--color-background-link);
      color: var(--color-link-hover);
    }
  }

  &__actions {
    display: flex;
    align-items: center;

    &__menu-btn {
      display: none;
    }
  }

  @include respond-to(tablet) {
    &__nav {
      &-list {
        display: none;
      }
    }

    &__actions {
      gap: 2rem;

      &__menu-btn {
        display: block;
        color: var(--color-link);

        &__icon {
          display: flex;
          align-items: center;
          height: calc(var(--icon-size-small) * 1.2);
          width: calc(var(--icon-size-small) * 1.2);

          &:hover {
            color: var(--color-link-hover);
            transition: all 0.3s ease;
          }
        }
      }
    }
  }
}
</style>
