<script lang="ts" setup>
const props: BadgeTechnologyType = defineProps<{
  icon: string;
  label: string;
}>();
</script>

<template>
  <span class="badge">
    <div class="badge__icon">{{ props.icon }}</div>
    <div class="badge__label">{{ props.label }}</div>
  </span>
</template>

<style lang="scss" scoped>
.badge {
  display: flex;
  flex-wrap: wrap;
  color: #ccc;
  padding: 0.2rem 0.5rem;
  border-radius: 1rem;
  border: #2b2b2b 1px solid;
  font-size: 12px;
  gap: 0.5rem;

  &__icon {
    border-radius: 50%;
  }

  &__label {
    font-size: 0.875rem;
    color: #aaa;
  }
}
</style>
