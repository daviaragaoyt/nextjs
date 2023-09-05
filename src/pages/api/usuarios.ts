import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    // get all usuarios
    const usuarios = await prisma.usuario.findMany({
      orderBy: { criadoEm: "desc" },
    });
    res.json(usuarios);
  } else if (req.method === "POST") {
    // create usuario
    const nome = JSON.parse(req.body).nome;
    const senha = JSON.parse(req.body).senha;
    const usuario = await prisma.usuario.create({
      data: { nome: nome, senha: senha },
    });

    res.json(usuario);
  } else if (req.method === "PUT") {
    // update usuario
    const id = req.query.id as string;
    const data = JSON.parse(req.body);
    const usuario = await prisma.usuario.update({
      where: { id },
      data,
    });

    res.json(usuario);
  } else if (req.method === "DELETE") {
    // delete usuario
    const id = req.query.id as string;
    await prisma.usuario.delete({ where: { id } });

    res.json({ status: "ok" });
  }
};
