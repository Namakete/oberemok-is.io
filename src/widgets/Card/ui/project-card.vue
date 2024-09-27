<script lang="ts" setup>
import { Badge } from '~/shared/ui/Badge';

const props: ProjectCardType = defineProps<{
  title: string;
  description: string;
  icon: string;
  technology: BadgeTechnologyType[];
}>();
</script>

<template>
  <div class="card">
    <div class="card__wrapper">
      <header class="card__header">
        <div class="card__icon">{{ props.icon }}</div>
        <div class="card__header__content">
          <h1 class="card__content__title">{{ props.title }}</h1>
          <p class="card__content__description">
            {{ props.description }}
          </p>
        </div>
      </header>
      <div class="card__tech">
        <Badge v-for="(item, index) in props.technology" :key="index" :icon="item.icon" :label="item.label" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;

  &__wrapper {
    width: 100%;
    border-radius: 0.4rem;
    background-color: var(--color-card);
    box-shadow: var(--card-shadow-soft);
    padding: 1rem;
  }

  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    gap: 1rem;
  }

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.4rem;
    width: 3rem;
    height: 3rem;
  }

  &__content {
    &__title {
      font-size: var(--font-size-small);
      font-weight: var(--font-weight-base);
      color: var(--color-text-title);
    }

    &__description {
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }

    &__tech {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
  }

  &__tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
}
</style>
