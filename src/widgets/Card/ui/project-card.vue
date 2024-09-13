<script lang="ts" setup>
import { Badge } from "~/shared/ui/Badge";

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
        <div>
          <h3 class="card__title">{{ props.title }}</h3>
          <p class="card__description">
            {{ props.description }}
          </p>
        </div>
      </header>
      <div class="card__tech">
        <Badge
          v-for="(item, index) in props.technology"
          :key="index"
          :icon="item.icon"
          :label="item.label"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  &__wrapper {
    width: 100%;
    border-radius: 0.5rem;
    background-color: #171717;
    padding: 1rem;
  }

  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    &__icon {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #333;
      border-radius: 50%;
      width: 3rem;
      height: 3rem;
      margin-right: 1rem;
    }

    &__title {
      font-size: 1.25rem;
      font-weight: 600;
    }

    &__description {
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }
  }

  &__tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
}
</style>
