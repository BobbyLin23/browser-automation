import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
  PUBLIC_CLERK_PUBLISHABLE_KEY: { public: true },
  CLERK_SECRET_KEY: {}
});
