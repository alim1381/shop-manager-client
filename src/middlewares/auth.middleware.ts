import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function authMiddleware(middleware: any) {
  return async (req:any, event:any) => {
    const cookieStore = cookies();
    const { pathname } = req.nextUrl;
    const currentPath = pathname.split("/")[1];

    if (!["register", "login"].includes(currentPath)) {
      const token = cookieStore.get("accessToken")?.value;

      if (!token) {
        return NextResponse.redirect(new URL(`/login`, req.url));
      }

      return NextResponse.next();
    }

    if (["register", "login"].includes(currentPath)) {
      const token = cookieStore.get("accessToken")?.value;

      if (token) {
        return NextResponse.redirect(new URL("/", req.url));
      }

      return NextResponse.next();
    }

    // console.log("lang => ", currentLang);
    return middleware(req, event);
  };
}
