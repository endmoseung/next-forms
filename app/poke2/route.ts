// app/api/pokemon/ditto/route.ts

import { NextResponse } from "next/server";

// Next.js Route Handler
export async function GET() {
  try {
    // PokeAPI로부터 Ditto에 대한 데이터 fetch
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/2");

    // 데이터가 없거나 문제가 있을 경우 에러 반환
    if (!res.ok) {
      return NextResponse.json(
        { message: "Failed to fetch data" },
        { status: 500 }
      );
    }

    const data = await res.json();

    // 데이터 반환
    return NextResponse.json(data);
  } catch (error) {
    // 에러 처리
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
