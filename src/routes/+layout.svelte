<script lang="ts">
  import './layout.css';
  import { shadcn } from '@clerk/ui/themes';
  import { ModeWatcher } from 'mode-watcher';
  import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from 'svelte-clerk';
  import favicon from '#lib/assets/favicon.svg';
  import { Toaster } from '#lib/components/ui/sonner/index.js';
  import type { LayoutProps } from './$types';

  let { children, data }: LayoutProps = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon}>
</svelte:head>

<ClerkProvider {...data} signInUrl="/sign-in" signUpUrl="/sign-up" appearance={{ theme: shadcn }}>
  <ModeWatcher />
  <Toaster />

  <header class="flex items-center justify-end gap-2 p-4">
    <Show when="signed-out">
      <SignInButton />
      <SignUpButton />
    </Show>
    <Show when="signed-in">
      <UserButton />
    </Show>
  </header>

  {@render children()}
</ClerkProvider>
