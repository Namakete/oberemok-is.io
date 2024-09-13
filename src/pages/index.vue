<script lang="ts" setup>
import { DefaultLayout } from '@/widgets/Layouts';
import { ProjectCard } from '@/widgets/Card';
import { projects } from '@/shared/data';
import { AnimatedWrapper } from '@/widgets/Wrapper';
</script>

<template>
  <DefaultLayout>
    <AnimatedWrapper>
      <section class="section">
        <div class="section__wrapper">
          <div class="section__title">About</div>
          <div class="section__about">Something right here text!</div>
        </div>
      </section>
      <section class="section">
        <div class="section__wrapper">
          <div class="section__title">Projects</div>
          <div class="section__projects">
            <ProjectCard
              v-for="(project, index) in projects"
              :key="index"
              :title="project.title"
              :description="project.description"
              :icon="project.icon"
              :technology="project.technology"
            />
          </div>
        </div>
      </section>
    </AnimatedWrapper>
  </DefaultLayout>
</template>

<style lang="scss" scoped>
.section {
  &__wrapper {
    padding: 1rem;
    margin-bottom: 2rem;
  }

  &__title {
    color: var(--color-text-title);
    font-size: var(--font-size-base);
    margin: 1rem 0;
  }

  &__projects {
    display: grid;
    gap: 1rem;
  }
}
</style>
