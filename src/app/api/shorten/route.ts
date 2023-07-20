import { NextResponse } from "next/server";
import { customAlphabet, nanoid } from "nanoid";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const { url } = await request.json();
  if (!url) {
    return NextResponse.json(
      { error: 'Field "url" is required' },
      {
        status: 400,
      }
    );
  }
  try {
    let check_url = new URL(url);
    const nanoid = customAlphabet(
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      5
    );
    const url_id = nanoid();

    await prisma.url.create({
      data: {
        full_url: url,
        shorter_id: url_id,
      },
    });

    return NextResponse.json({
      original_url: url,
      shortened_url: process.env.NEXT_PUBLIC_SITE_URL + "/" + url_id,
    });
  } catch (e: any) {
    return NextResponse.json(
      { error: e.message },
      {
        status: 400,
      }
    );
  }
}

export async function GET(request: Request) {
  return NextResponse.json({
    message: "Nothing here :)",
  });
}
