import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
  PUBLIC_CLERK_PUBLISHABLE_KEY: { public: true },
  CLERK_SECRET_KEY: {},
  PUBLIC_CLERK_SIGN_IN_URL: { public: true },
  PUBLIC_CLERK_SIGN_UP_URL: { public: true },
  PUBLIC_CLERK_AFTER_SIGN_OUT_URL: { public: true },
  PUBLIC_CLERK_TASK_CHOOSE_ORGANIZATION_URL: { public: true },
  PUBLIC_CLERK_AFTER_CREATE_ORGANIZATION_URL: { public: true },
  PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL: { public: true },
  PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL: { public: true }
});
