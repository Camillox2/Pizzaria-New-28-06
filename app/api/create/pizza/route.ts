import { prismaClient } from "@/app/lib/prisma";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    const { nome, ingredientes, preco } = body;


    const item = await prismaClient.pizza.create({
      data: {
        nome,
        ingredientes,
        preco,
      },
    });

    return NextResponse.json({ item }, { status: 200 });
  } catch (error) {
    console.error("Erro ao criar item:", error);
    return NextResponse.json({ error: "Erro ao criar item" }, { status: 500 });
  }
}
