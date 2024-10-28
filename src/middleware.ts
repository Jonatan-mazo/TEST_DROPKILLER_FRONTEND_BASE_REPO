import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: '/', // Redirect to the sign-in page if not authenticated
  }
});

export const config = {
  matcher: [
    // Protect all routes except for the root page ('/')
    //'/home',
    "/dashboard/:path*",
    // Exclude these routes from middleware protection
    "/((?!api|auth|_next|static|favicon.ico|).*)",
  ],
};
