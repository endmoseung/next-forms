import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log(request.url, "리퀘스트에영");

  const response = NextResponse.next();

  //form데이터의 뒤로가기 양식 다시 제출 확인때문에 적용
  if (request.url.includes("serverAction")) {
    response.headers.set(
      "Cache-Control",
      "no-store, no-cache, must-revalidate, proxy-revalidate"
    );
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0"); // 즉시 만료
  }

  response.headers.set("AWSKRUG", "LOVE");

  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images|except).*)"],
};
