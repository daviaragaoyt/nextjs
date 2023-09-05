import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    // get all usuarios
    const usuarios = await prisma.usuario.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.json(usuarios);
  } else if (req.method === "POST") {
    // create usuario
    const text = JSON.parse(req.body).text;
    const usuario = await prisma.usuario.create({
      data: { text, completed: false },
    });

    res.json(usuario);
  } else if (req.method === "PUT") {
    // update usuario
    const id = req.query.usuarioId as string;
    const data = JSON.parse(req.body);
    const usuario = await prisma.usuario.update({
      where: { id },
      data,
    });

    res.json(usuario);
  } else if (req.method === "DELETE") {
    // delete usuario
    const id = req.query.usuarioId as string;
    await prisma.usuario.delete({ where: { id } });

    res.json({ status: "ok" });
  }
};
