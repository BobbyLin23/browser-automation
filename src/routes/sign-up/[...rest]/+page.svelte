<script lang="ts">
  import { SignUp } from 'svelte-clerk';
</script>

<main class="flex min-h-[calc(100svh-5rem)] items-center justify-center p-4">
  <SignUp signInUrl="/sign-in" fallbackRedirectUrl="/" />
</main>
