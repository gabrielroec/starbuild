import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Middleware para redirecionamento de "/" para "/site"
export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // Redireciona automaticamente de "/" para "/site"
  if (url.pathname === "/") {
    url.pathname = "/site";
    return NextResponse.redirect(url);
  }

  // Caso contrário, continue para o `clerkMiddleware`
  return clerkMiddleware({ publicRoutes: ["/site", "/api/uploadthing"] })(req);
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
