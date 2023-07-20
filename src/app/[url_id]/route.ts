import { NextResponse } from "next/server";
import { customAlphabet, nanoid } from "nanoid";
import prisma from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { url_id: string } }
) {
  const url = await prisma.url.findUnique({
    where: {
      shorter_id: params.url_id,
    },
  });

  if (url) {
    await prisma.url.update({
      where: {
        shorter_id: url.shorter_id,
      },
      data: {
        clicks: url.clicks + 1,
      },
    });
    return Response.redirect(url.full_url);
  } else
    return Response.redirect(
      process.env.NEXT_PUBLIC_SITE_URL + "/invalid_link"
    );
}
