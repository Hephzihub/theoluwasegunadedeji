<template>
  <section id="projects" class="scroll-mt-[88px]">
    <div class="mx-auto max-w-shell px-8 py-[90px]">
      <div
        class="mb-[40px] flex flex-wrap items-end justify-between gap-[24px]"
      >
        <div>
          <div class="mb-[10px] font-mono text-[13px] text-meta">
            02 / SELECTED WORK
          </div>
          <h2
            class="m-0 text-[clamp(34px,5vw,56px)] font-extrabold leading-none tracking-[-0.03em]"
          >
            Projects
          </h2>
        </div>
        <div class="font-mono text-[13px] text-[#777]">{{ countLabel }}</div>
      </div>

      <div class="mb-[36px] flex flex-wrap gap-[9px]">
        <button
          v-for="name in filterNames"
          :key="name"
          type="button"
          class="cursor-pointer rounded-[6px] border px-[16px] py-[9px] font-mono text-[13px] transition-all duration-150"
          :class="
            name === active
              ? 'border-black bg-black text-white'
              : 'border-[#e0e0e0] bg-white text-black'
          "
          @click="active = name"
        >
          {{ name }}
        </button>
      </div>

      <div
        class="grid gap-[22px] [grid-template-columns:repeat(auto-fit,minmax(340px,1fr))]"
      >
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.num"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { filterNames, projects } from '../data/portfolio'

const active = ref('All')

// Mirrors renderVals() in the design: show all, or projects whose categories include the filter.
const filteredProjects = computed(() =>
  projects.filter((p) => active.value === 'All' || p.categories.includes(active.value)),
)

const countLabel = computed(() => {
  const n = filteredProjects.value.length
  return `${n}${n === 1 ? ' project' : ' projects'}`
})
</script>
