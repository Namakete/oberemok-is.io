Правильно ли я использую onMounted ?

<script lang="ts" setup>
import { DefaultLayout } from '@/widgets/Layouts';
import { AnimatedWrapper } from '@/widgets/Wrapper';
import { ProjectCard } from '@/widgets/Card';
import projectsData from '@/app/data/project-data.json';
import projectsPinnedData from '@/app/data/project-pinned-data.json';
import { notNullable } from '~/shared/libs';

const getProjectsData = ref<ProjectCardType[]>([]);

const fetchProjectsData = () => {
  try {
    getProjectsData.value = projectsData;
  } catch (error) {
    console.error(error);
  }
};

const pinnedProjects = computed(() => {
  return getProjectsData.value
    .filter((item) => notNullable(item.id))
    .filter((item) => projectsPinnedData.projects.includes(item.id));
});

onMounted(() => {
  fetchProjectsData();
});
</script>

<template>
  <DefaultLayout>
    <AnimatedWrapper>
      <section class="section">
        <div class="section__wrapper">
          <div class="section__wrapper-title">About me</div>
          <div class="section__wrapper-about">Something right here text here!</div>
        </div>
      </section>
      <section class="section">
        <div class="section__wrapper">
          <div class="section__wrapper-title">Connect</div>
          <div class="section__wrapper-about">Something right here text here!</div>
        </div>
      </section>
      <section class="section">
        <div class="section__wrapper">
          <div class="section__wrapper-title">Featured Projects</div>
          <div class="section__wrapper-projects">
            <div v-for="(item, index) in pinnedProjects" :key="index">
              <ProjectCard class="section__wrapper-projects-card" :item="item" />
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="section__wrapper">
          <div class="section__wrapper-title">Work</div>
          <div class="section__wrapper-about">Something right here text here!</div>
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

    &-title {
      color: var(--color-text-title);
      font-size: var(--font-size-large);
      font-weight: var(--font-weight-bold);
      margin: 1rem 0 1rem 0;
    }

    &-about {
      color: var(--color-text-primary);
      font-size: var(--font-size-small);
    }

    &-projects {
      display: grid;
      gap: 1rem;
      position: relative;

      &:hover &-card {
        filter: brightness(0.9);
        transition: filter 0.3s ease;
      }

      .section__wrapper-projects-card {
        &:hover {
          filter: brightness(1);
          transition: filter 0.3s ease;
        }
      }
    }
  }
}
</style>
