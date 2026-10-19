<script lang="ts">
  import { OrganizationList } from 'svelte-clerk';
  import {
    PUBLIC_CLERK_AFTER_CREATE_ORGANIZATION_URL,
    PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL
  } from '$app/env/public';
</script>

<main class="flex min-h-svh items-center justify-center p-4">
  <OrganizationList
    hidePersonal
    afterSelectOrganizationUrl={PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL}
    afterCreateOrganizationUrl={PUBLIC_CLERK_AFTER_CREATE_ORGANIZATION_URL}
  />
</main>
