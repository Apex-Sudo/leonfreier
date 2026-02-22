import { NextRequest, NextResponse } from 'next/server';

const locales = ['vi', 'zh'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if path starts with a non-default locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Skip static files, api routes, etc.
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/fugoku') ||
    pathname.includes('.') // static files
  ) {
    return NextResponse.next();
  }

  // If locale prefix found, rewrite to [lang] route
  if (pathnameHasLocale) {
    // Already has locale - let it through to [lang] routes
    return NextResponse.next();
  }

  // Default locale (en) - rewrite internally to /en/...
  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ['/((?!_next|api|fugoku|.*\\..*).*)'],
};
