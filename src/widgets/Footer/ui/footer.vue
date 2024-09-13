<script lang="ts" setup>
import { SocialItems } from '~/widgets/Footer/config';
</script>

<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <ul class="footer__list">
        <li
          class="footer__list-item"
          v-for="(item, index) in SocialItems"
          :key="index"
        >
          <NuxtLink :to="item.href" class="footer__list-item-title" prefetch>{{
            item.title
          }}</NuxtLink>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 4rem;
  }

  &__list {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    &-item-title {
      color: var(--color-link);
    }
  }

  &__list-item {
    &:not(:last-child)::after {
      content: '/';
      margin: 0 0.5rem;
    }
  }
}
</style>
