import { NextRequest, NextResponse } from "next/server";

import prisma from "@/db";

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    await prisma.user.create({
      data: {
        username: body.uname,
        password: body.password,
      },
    });
  } catch (e) {
    NextResponse.json({
      msg: "error @ signup",
    });
  }

  return NextResponse.json({ body });
}
