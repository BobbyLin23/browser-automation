<script lang="ts">
  import './layout.css';
  import { shadcn } from '@clerk/ui/themes';
  import { ModeWatcher } from 'mode-watcher';
  import { ClerkProvider } from 'svelte-clerk';
  import favicon from '#lib/assets/favicon.svg';
  import { Toaster } from '#lib/components/ui/sonner/index.js';
  import type { LayoutProps } from './$types';

  let { children, data }: LayoutProps = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon}>
</svelte:head>

<ClerkProvider {...data} appearance={{ theme: shadcn }}>
  <ModeWatcher />
  <Toaster />

  {@render children()}
</ClerkProvider>
