import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    // get all formularios
    const formularios = await prisma.formulario.findMany({

    });
    console.log("GALINHAAAAA do get: ", res.json(formularios))
    res.json(formularios);
  } else if (req.method === "POST") {
    console.log("GALINHAAAAA do post");
    // create formulario
    const nome = JSON.parse(req.body).nome;
    const sobrenome = JSON.parse(req.body).sobrenome;
    const email = JSON.parse(req.body).email;
    const telefone = JSON.parse(req.body).telefone;
    const nomePet = JSON.parse(req.body).nomePet;
    const especie = JSON.parse(req.body).especie;
    const raca = JSON.parse(req.body).raca;
    const formulario = await prisma.formulario.create({
      data: { nome, sobrenome, email, telefone, nomePet, especie, raca },
    });

    res.json(formulario);
  } else if (req.method === "PUT") {
    // update formulario
    const id = req.query.id as string;
    const data = JSON.parse(req.body);
    const formulario = await prisma.formulario.update({
      where: { id },
      data,
    });

    res.json(formulario);
  } else if (req.method === "DELETE") {
    // delete formulario
    const id = req.query.id as string;
    await prisma.formulario.delete({ where: { id } });

    res.json({ status: "ok" });
  }
};


