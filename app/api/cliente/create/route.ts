import { prismaClient } from "@/app/lib/prisma";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    const { nome, email } = body;


    const item = await prismaClient.cliente.create({
      data: {
        nome,
        email,
      },
    });

    return NextResponse.json({ item }, { status: 200 });
  } catch (error) {
    console.error("Erro ao criar item:", error);
    return NextResponse.json({ error: "Erro ao criar item" }, { status: 500 });
  }
}
