export interface Usuario {
  id: string;
  nome: string;
  senha: string;
  criadoEm: Date;
}

export interface Formulario {
  id: string;
  nome: string;
  sobrenome: string;
  email: string;
  telefone: string;
  nomePet: string;
  especie: string;
  raca: string;
  criadoEm: Date;
  // Genero:string;
}
