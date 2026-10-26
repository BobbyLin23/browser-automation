<script lang="ts">
  import AppSidebar from '#lib/components/app-sidebar.svelte';
  import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger
  } from '#lib/components/ui/sidebar/index.js';
  import type { LayoutProps } from './$types';

  let { children }: LayoutProps = $props();
</script>

<SidebarProvider>
  <AppSidebar />

  <SidebarInset>
    <header class="flex h-12 shrink-0 items-center gap-2 px-3 md:hidden">
      <SidebarTrigger />
    </header>

    <div class="flex min-h-0 flex-1 flex-col overflow-auto p-4">
      {@render children()}
    </div>
  </SidebarInset>
</SidebarProvider>
