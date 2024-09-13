<script lang="ts" setup>
import { NavigationItems } from "~/widgets/Header/config";
import { ThemeSwitcher } from "@/widgets/Switcher";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__logo">Logo</div>
      <nav class="header__nav">
        <ul class="header__nav-list">
          <li
            v-for="(item, index) in NavigationItems"
            :key="index"
            :class="{ 'header__nav-item--active': route.path === item.href }"
            class="header__nav-item"
          >
            <NuxtLink :to="item.href" class="header__nav-link" prefetch>{{ item.title }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <ThemeSwitcher />
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
      color: var(--text-color-primary);
    }

    &-link {
      padding: 5px 10px;
      background-color: transparent;
      border-radius: 0.4rem;
      transition: background 0.3s ease;
      color: var(--color-link);
    }

    &-link:hover {
      color: var(--color-link-hover);
    }

    &-item--active .header__nav-link {
      background-color: var(--color-background-link);
      color: var(--color-link-hover);
    }
  }
}
</style>
