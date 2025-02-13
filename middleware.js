import { NextResponse } from "next/server";

export async function middleware(request) {
  const RestrictedRoutes = [
    // "/custom-tour-package",
    "/day-trips",
    "/tour-packages",
    "/destinations",
  ];

  //   const BaseUrl = "https://nextcms-gamma.vercel.app/";
  const BaseUrl = "http://localhost:3000/";
  // const BaseUrl = "https://www.airportcab.lk/";

  const { nextUrl } = request;

  const isRestrictedRoute = RestrictedRoutes.some(
    (route) => nextUrl.pathname == route
  );

  console.log(isRestrictedRoute, "is Restricted Route");

  if (isRestrictedRoute) {
    return NextResponse.redirect(new URL("/not-found", BaseUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
