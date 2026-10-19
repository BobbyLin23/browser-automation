import { PUBLIC_CLERK_SIGN_IN_URL } from '$app/env/public';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ locals }) => {
  const { userId } = locals.auth();

  if (!userId) {
    redirect(307, PUBLIC_CLERK_SIGN_IN_URL);
  }

  return { userId };
};
