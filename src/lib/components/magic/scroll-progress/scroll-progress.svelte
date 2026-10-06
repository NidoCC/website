<script lang="ts">
  import { motion, useScroll } from "motion-sv";
  import { cn } from "$lib/utils";

  interface ScrollProgressProps {
    class?: string;
  }

  let { class: className }: ScrollProgressProps = $props();

  let scroll = $derived(useScroll());
</script>

<motion.div
  class={cn(
    "fixed inset-x-0 top-0 z-50 h-1 origin-top-left bg-linear-to-r from-[#00d492] via-[#00d492] to-[#22faaa]",
    className,
  )}
  style={{
    scaleX: scroll.scrollYProgress,
  }}
/>
