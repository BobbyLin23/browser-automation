<script lang="ts">
  import './layout.css';
  import { shadcn } from '@clerk/ui/themes';
  import { ModeWatcher } from 'mode-watcher';
  import { ClerkProvider } from 'svelte-clerk';
  import favicon from '#lib/assets/favicon.svg';
  import { Toaster } from '#lib/components/ui/sonner/index.js';
  import { PUBLIC_CLERK_AFTER_SIGN_OUT_URL } from '$app/env/public';
  import type { LayoutProps } from './$types';

  let { children, data }: LayoutProps = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon}>
</svelte:head>

<ClerkProvider
  {...data}
  afterSignOutUrl={PUBLIC_CLERK_AFTER_SIGN_OUT_URL}
  appearance={{ theme: shadcn }}
>
  <ModeWatcher />
  <Toaster />

  {@render children()}
</ClerkProvider>
