import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { nome, email } = await req.json();

    const novoCliente = await prisma.cliente.create({
      data: {
        nome,
        email,
      },
    });

    return NextResponse.json({ item: novoCliente }, { status: 200 });
  } catch (error) {
    console.error('Erro ao criar cliente:', error);
    return NextResponse.json({ error: 'Erro ao criar cliente' }, { status: 500 });
  } finally {
    await prisma.$disconnect(); // Desconectar o Prisma ao final da operação
  }
}

