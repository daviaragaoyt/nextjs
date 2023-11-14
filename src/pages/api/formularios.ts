import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { useFormularios } from '../../api'
import { OrderedList } from '@chakra-ui/react'

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    // get all formularios
    const formularios = await prisma.formulario.findMany({})

    console.log('GALINHAAAAA do get: ', res.json(formularios))
    res.json(formularios)
  } else if (req.method === 'POST') {
    console.log('GALINHAAAAA do post')
    // create formulario
    const nome = JSON.parse(req.body).nome
    const sobrenome = JSON.parse(req.body).sobrenome
    const email = JSON.parse(req.body).email
    const telefone = JSON.parse(req.body).telefone
    const nomePet = JSON.parse(req.body).nomePet
    const sexoPet = JSON.parse(req.body).sexoPet
    const especie = JSON.parse(req.body).especie
    const raca = JSON.parse(req.body).raca
    const formulario = await prisma.formulario.create({
      data: { nome, sobrenome, email, telefone, nomePet, especie, raca },
    })

    res.json(formulario)
  } else if (req.method === 'PUT') {
    // update formulario
    const id = req.query.id as string
    const data = JSON.parse(req.body)
    const formulario = await prisma.formulario.update({
      where: { id },
      data,
    })

    res.json(formulario)
  } else if (req.method === 'DELETE') {
    // delete formulario
    const id = req.query.id as string
    await prisma.formulario.delete({ where: { id } })

    res.json({ status: 'ok' })
  }
}

/*JAVASCRIPT PARA PASSSAR OS DADOS PARA O EXCEL

const express = require('express')
const { Client } = require('pg')

const app = express()
const port = process.env.PORT || 3000

// Configuração do cliente do PostgreSQL usando variáveis de ambiente da Railway
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // Para contornar problemas com certificados SSL
})

app.get(
  'postgres://postgres:eBefAB2a4*1Ac5d6EGC631-5DC146e4d@viaduct.proxy.rlwy.net:28099/railway',
  async (req, res) => {
    try {
      await client.connect()

      const resultadoConsulta = await client.query(
        'postgres://postgres:eBefAB2a4*1Ac5d6EGC631-5DC146e4d@viaduct.proxy.rlwy.net:28099/railway'
      )
      const dadosDoBanco = resultadoConsulta.rows

      res.json(dadosDoBanco)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Erro ao obter dados do banco' })
    } finally {
      await client.end()
    }
  }
)

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`)
})

import { useState, useEffect } from 'react'

function SuaComponente() {
  const [dadosDoBanco, setDadosDoBanco] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const resposta = await fetch(
          'http://localhost:3000/api/formularios'
        )
        const dados = await resposta.json()
        setDadosDoBanco(dados)
      } catch (error) {
        console.error('Erro ao obter dados do banco:', error)
      }
    }

    fetchData()
  }, [])

  // Restante do seu componente
}*/
