<template>
  <header
    class="sticky top-0 z-50 border-b border-line bg-white/[0.82] backdrop-blur-[14px] backdrop-saturate-[180%]"
  >
    <div
      class="mx-auto flex max-w-shell items-center justify-between gap-6 px-8 py-4"
    >
      <a
        href="#top"
        class="flex items-center gap-[7px] font-mono text-sm font-semibold tracking-[-0.01em] no-underline"
      >
        <span
          class="inline-flex h-6 w-6 items-center justify-center rounded-[3px] bg-black text-[11px] text-white"
          >OA</span
        >
        <span>oluwasegun.dev</span>
      </a>

      <nav class="flex items-center gap-[18px] text-sm font-medium sm:gap-[30px]">
        <a
          href="#about"
          class="hidden text-ink-muted no-underline transition-colors hover:text-black sm:inline"
          >About</a
        >
        <a
          href="#projects"
          class="hidden text-ink-muted no-underline transition-colors hover:text-black sm:inline"
          >Projects</a
        >
        <a
          href="#contact"
          class="hidden text-ink-muted no-underline transition-colors hover:text-black sm:inline"
          >Contact</a
        >
        <a
          :href="resumeHref"
          target="_blank"
          rel="noopener"
          class="text-ink-muted no-underline transition-colors hover:text-black"
          >Resume</a
        >
        <a
          href="https://github.com/hephzihub"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-[6px] rounded-[4px] border border-black px-[14px] py-[7px] font-mono text-[13px] no-underline transition-colors hover:bg-black hover:text-white"
          >GitHub <span class="text-[11px]">&#8599;</span></a
        >
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
// TODO: swap for the final resume PDF once provided.
const resumeHref = '/oluwasegun-adedeji-resume.pdf'
</script>
