<template>
  <section id="about" class="scroll-mt-[88px]">
    <div class="mx-auto flex max-w-shell flex-wrap gap-[56px] px-8 py-[90px]">
      <div class="flex-[0_0_200px]">
        <div class="mb-[10px] font-mono text-[13px] text-meta">01 / ABOUT</div>
        <div class="text-[22px] font-bold tracking-[-0.02em]">Profile</div>
      </div>

      <div class="flex-[1_1_480px]">
        <p
          class="m-0 max-w-[760px] text-[clamp(20px,2.4vw,27px)] font-medium leading-[1.45] tracking-[-0.01em]"
        >
          Backend engineer building APIs, real-time systems, and automation
          services with Node.js, TypeScript, MySQL, and MongoDB. After 4+ years
          building enterprise applications as a frontend engineer, I
          transitioned into backend development with a strong understanding of
          API consumers, application architecture, and developer experience. I
          enjoy building reliable systems and continuously expanding my backend
          expertise.
        </p>
        <p
          class="m-0 max-w-[760px] text-[clamp(20px,2.4vw,27px)] font-medium leading-[1.45] tracking-[-0.01em]"
          v-if="false"
        >
          I&rsquo;m a frontend engineer with 4+ years of experience building
          enterprise platforms, making a deliberate move into backend
          development. After years of working alongside backend engineers and
          consuming their APIs, I know exactly what makes a good one.
        </p>
        <p
          class="mt-[24px] max-w-[680px] text-[17px] leading-[1.65] text-ink-faint"
        >
          Comfortable working across Node.js/TypeScript and PHP/Laravel
          ecosystems for API development, with practical experience in
          production environments handling authentication, role-based access
          control, and API performance optimization. I model data with Prisma
          across MySQL and MongoDB, validate inputs with Zod, and write code
          that is readable and maintainable.
        </p>

        <div
          class="mb-[16px] mt-[48px] font-mono text-[12px] tracking-[0.04em] text-meta"
        >
          TECH STACK
        </div>
        <div class="flex flex-wrap gap-[10px]">
          <span
            v-for="item in stack"
            :key="item"
            class="rounded-[5px] border border-line-soft px-[14px] py-[9px] font-mono text-[13px] text-[#111] transition-colors hover:border-black"
            >{{ item }}</span
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { stack } from "../data/portfolio";
</script>
