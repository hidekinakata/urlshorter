import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const link_info = await prisma.url.findUnique({
    where: {
      shorter_id: params.id,
    },
  });

  if (link_info) return NextResponse.json(link_info);
  else
    return NextResponse.json(
      {
        codeStatus: 400,
        message: "Could not find the link for provided id",
      },
      {
        status: 400,
      }
    );
}
