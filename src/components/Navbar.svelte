<script lang="ts">
  import * as NavigationMenu from "$lib/components/ui/navigation-menu/index.js";
</script>

<div
  class="fixed top-0 left-0 z-50 flex justify-center items-center w-full bg-black/30 backdrop-blur-lg border-b-2 border-emerald-400"
>
  <NavigationMenu.Root>
    <NavigationMenu.List>
      <NavigationMenu.Item>
        <NavigationMenu.Link
          href="/"
          class="font-mono text-lg rounded-none px-4">Home</NavigationMenu.Link
        >
      </NavigationMenu.Item>
      <span class="font-mono cursor-default mx-4">-</span>
      <NavigationMenu.Item>
        <NavigationMenu.Link
          href="/post"
          class="font-mono text-lg rounded-none px-4"
          >Resources</NavigationMenu.Link
        >
      </NavigationMenu.Item>
      <span class="font-mono cursor-default mx-4">-</span>
      <NavigationMenu.Item>
        <NavigationMenu.Link
          href="/"
          class="font-mono text-lg rounded-none px-4"
          >Sign In</NavigationMenu.Link
        >
      </NavigationMenu.Item>
    </NavigationMenu.List>
  </NavigationMenu.Root>
</div>
