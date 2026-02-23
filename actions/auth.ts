'use server';

import { setAuthCookie } from '@/lib/auth';

export async function setAuthToken(token: string) {
  setAuthCookie(token);
}
