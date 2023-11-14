import useSWR, { mutate } from "swr";
import { Usuario, Formulario } from "./types";

const fetcher = (input: RequestInfo, init?: RequestInit) =>
  fetch(input, init).then((res) => res.json());

const usuarioPath = "/api/usuarios";
const formularioPath = "/api/formularios";

//Usuario
// export const useUsuarios = () => useSWR<Usuario[]>(usuarioPath, fetcher);

// export const criarUsuario = async (nome: string, senha: string) => {
//   mutate(
//     usuarioPath,
//     usuarios => [{ nome: nome, senha: senha }, ...usuarios],
//     false,
//   );
//   await fetch(usuarioPath, {
//     method: "POST",
//     body: JSON.stringify({ nome, senha }),
//   });

//   mutate(usuarioPath);
// };

// export const toggleUsuario = async (usuario: Usuario) => {
//   mutate(
//     usuarioPath,
//     usuarios =>
//       usuarios.map(u =>
//         u.id === usuario.id ? { ...usuario, senha: '0000' } : u,
//       ),
//     false,
//   );
//   await fetch(`${usuarioPath}?usuarioId=${usuario.id}`, {
//     method: "PUT",
//     body: JSON.stringify({}),
//   });
//   mutate(usuarioPath);
// };

// export const deleteUsuario = async (id: string) => {
//   mutate(usuarioPath, usuarios => usuarios.filter(u => u.id !== id), false);
//   await fetch(`${usuarioPath}?usuarioId=${id}`, { method: "DELETE" });
//   mutate(usuarioPath);
// };

//Formulario
export const useFormularios = () => useSWR<Formulario[]>(formularioPath, fetcher);

export const criarFormulario = async (
  nome: string,
  sobrenome: string,
  email: string,
  telefone: string,
  nomePet: string,
  sexoPet: string,
  especie: string,
  raca: string,
) => {
  mutate(
    formularioPath,
    formularios => [{
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      telefone: telefone,
      nomePet: nomePet,
      sexoPet: sexoPet,
      especie: especie,
      raca: raca,
    }, ...formularios],
    false,
  );
  await fetch(formularioPath, {
    method: "POST",
    body: JSON.stringify({
      nome,
      sobrenome,
      email,
      telefone,
      nomePet,
      sexoPet,
      especie,
      raca,
    }),
  });

  mutate(formularioPath);
};

export const toggleFormulario = async (
  formulario: Formulario) => {
  mutate(
    formularioPath,
    formularios =>
      formularios.map(f =>
        f.id === formulario.id ? { ...formulario, nome: '0000' } : f,
      ),
    false,
  );
  await fetch(`${formularioPath}?formularioId=${formulario.id}`, {
    method: "PUT",
    body: JSON.stringify({}),
  });
  mutate(formularioPath);
};

export const deleteFormulario = async (id: string) => {
  mutate(formularioPath, formularios => formularios.filter(f => f.id !== id), false);
  await fetch(`${formularioPath}?formularioId=${id}`, { method: "DELETE" });
  mutate(formularioPath);
};


// export const useFormularios = () => useSWR<Formulario[]>(formularioPath, fetcher);

// export const criarFormulario = async (
//   nome: string,
//   sobrenome: string,
//   email: string,
//   telefone: string,
//   nomePet: string,
//   especie: string,
//   raca: string) => {
//   mutate(
//     formularioPath,
//     formularios => [
//       {
//         nome: nome,
//         sobrenome: sobrenome,
//         email: email,
//         telefone: telefone,
//         nomePet: nomePet,
//         especie: especie,
//         raca: raca
//       }
//       , ...formularios]
//     , false,
//   );
//   await fetch(formularioPath, {
//     method: "POST",
//     body: JSON.stringify({
//       nome: nome,
//       sobrenome: sobrenome,
//       email: email,
//       telefone: telefone,
//       nomePet: nomePet,
//       especie: especie,
//       raca: raca
//     }),
//   });

//   mutate(formularioPath);
// };

// export const toggleformulario = async (formularioToToggle: Formulario) => {
//   mutate(
//     formularioPath,
//     formularios =>
//       formularios.map(formulario =>
//         formulario.id === formulario.id ? { ...formularioToToggle, nome: 'Teste' } : formulario,
//       ),
//     false,
//   );
//   await fetch(`${formularioPath}?formularioId=${formularioToToggle.id}`, {
//     method: "PUT",
//     body: JSON.stringify({}),
//   });
//   mutate(formularioPath);
// };

// export const deleteFormulario = async (id: string) => {
//   mutate(formularioPath, formularios => formularios.filter(f => f.id !== id), false);
//   await fetch(`${formularioPath}?formularioId=${id}`, { method: "DELETE" });
//   mutate(formularioPath);
// };
