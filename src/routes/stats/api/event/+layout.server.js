import { redirect } from '@sveltejs/kit';

const PERMANENT_REDIRECT_CODE = 308;

export const load = () => {
  redirect(PERMANENT_REDIRECT_CODE, `https://plausible.io/js/script.js`);
};
