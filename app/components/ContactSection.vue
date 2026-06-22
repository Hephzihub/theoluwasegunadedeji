<template>
  <section id="contact" class="scroll-mt-[88px]">
    <div class="mx-auto max-w-shell px-8 pb-[90px] pt-[96px]">
      <div class="mb-[18px] font-mono text-[13px] text-meta">03 / CONTACT</div>
      <h2
        class="m-0 max-w-[900px] text-[clamp(38px,6.5vw,80px)] font-extrabold leading-[0.98] tracking-[-0.035em]"
      >
        Let&rsquo;s build something together.
      </h2>

      <div
        class="mt-[56px] grid border-t border-line-strong [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]"
      >
        <a
          v-for="c in contacts"
          :key="c.label"
          :href="c.href"
          :target="c.target"
          rel="noopener"
          class="group flex items-center justify-between gap-[16px] border-b border-line-strong px-[4px] py-[26px] no-underline transition-[padding,background] duration-200 hover:bg-[#fafafa] hover:pl-[14px]"
        >
          <span class="flex flex-col gap-[4px]">
            <span class="font-mono text-[12px] text-meta">{{ c.label }}</span>
            <span class="text-[18px] font-semibold tracking-[-0.01em]">{{
              c.value
            }}</span>
          </span>
          <span class="text-[18px] text-black">&#8599;</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { contacts } from '../data/portfolio'
</script>
