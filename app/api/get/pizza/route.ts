import { prismaClient } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(_: any, res: any) {
  const items = await prismaClient.pizza.findMany();

  return NextResponse.json({ items });
}
