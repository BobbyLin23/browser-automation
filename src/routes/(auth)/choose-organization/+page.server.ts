import { redirect } from '@sveltejs/kit';
import { PUBLIC_CLERK_SIGN_IN_URL } from '$app/env/public';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ locals }) => {
  // A session with a pending choose-organization task counts as signed out by default,
  // which would redirect it away from this page and back to sign-in in a loop.
  const { userId } = locals.auth({ treatPendingAsSignedOut: false });

  if (!userId) {
    redirect(307, PUBLIC_CLERK_SIGN_IN_URL);
  }
};
