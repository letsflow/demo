import { cookies } from 'next/headers';

export const COOKIE_NAME = 'auth-token';

export function setAuthCookie(token: string) {
  cookies().set(COOKIE_NAME, token, { httpOnly: true, sameSite: 'lax' });
}

export function getAuthCookie(): string | undefined {
  return cookies().get(COOKIE_NAME)?.value;
}

