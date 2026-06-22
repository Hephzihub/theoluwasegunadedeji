<template>
  <article
    class="flex flex-col rounded-[10px] border border-line-strong bg-white p-[30px] transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-[3px] hover:border-black hover:shadow-[0_10px_30px_-16px_rgba(0,0,0,0.25)] motion-safe:animate-fadeUp-card"
  >
    <div class="mb-[18px] flex items-start justify-between gap-[16px]">
      <span class="font-mono text-[13px] text-[#bbb]">{{ project.num }}</span>
      <div class="flex flex-wrap justify-end gap-[6px]">
        <span
          v-for="cat in project.categories"
          :key="cat"
          class="rounded-full border border-black px-[10px] py-[4px] font-mono text-[11px] tracking-[0.02em] text-black"
          >{{ cat }}</span
        >
      </div>
    </div>

    <h3
      class="mb-[12px] mt-0 text-[21px] font-bold leading-[1.2] tracking-[-0.02em]"
    >
      {{ project.name }}
    </h3>

    <p class="mb-[22px] mt-0 flex-1 text-[15px] leading-[1.6] text-[#555]">
      {{ project.description }}
    </p>

    <div class="mb-[24px] flex flex-wrap gap-[7px]">
      <span
        v-for="t in project.tech"
        :key="t"
        class="rounded-[4px] bg-chip px-[9px] py-[5px] font-mono text-[12px] text-[#666]"
        >{{ t }}</span
      >
    </div>

    <div
      class="flex gap-[22px] border-t border-[#eee] pt-[18px] text-[14px] font-semibold"
    >
      <a
        v-if="project.showGithub"
        :href="project.github"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center gap-[6px] border-b border-transparent text-black no-underline transition-colors hover:border-black"
        >GitHub <span class="text-[11px]">&#8599;</span></a
      >
      <a
        v-if="project.showLive"
        :href="project.live"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center gap-[6px] border-b border-transparent text-black no-underline transition-colors hover:border-black"
        >Live Demo <span class="text-[11px]">&#8599;</span></a
      >
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Project } from '../data/portfolio'

defineProps<{ project: Project }>()
</script>
