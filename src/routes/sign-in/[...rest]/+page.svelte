<script lang="ts">
  import { SignIn } from 'svelte-clerk';
</script>

<main class="flex min-h-[calc(100svh-5rem)] items-center justify-center p-4">
  <SignIn signUpUrl="/sign-up" fallbackRedirectUrl="/" />
</main>
