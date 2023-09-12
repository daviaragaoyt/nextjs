import useSWR, { mutate } from "swr";
import { Usuario } from "./types";

const fetcher = (input: RequestInfo, init?: RequestInit) =>
  fetch(input, init).then((res) => res.json());

const usuarioPath = "/api/usuarios";

export const useUsuarios = () => useSWR<Usuario[]>(usuarioPath, fetcher);

export const criarUsuario = async (nome: string, senha: string) => {
  mutate(
    usuarioPath,
    usuarios => [{ nome: nome, senha: senha }, ...usuarios],
    false,
  );
  await fetch(usuarioPath, {
    method: "POST",
    body: JSON.stringify({ nome, senha }),
  });

  mutate(usuarioPath);
};

export const toggleUsuario = async (usuario: Usuario) => {
  mutate(
    usuarioPath,
    usuarios =>
      usuarios.map(t =>
        t.id === usuario.id ? { ...usuario, completed: !t.completed } : t,
      ),
    false,
  );
  await fetch(`${usuarioPath}?usuarioId=${usuario.id}`, {
    method: "PUT",
    body: JSON.stringify({}),
  });
  mutate(usuarioPath);
};

export const deleteUsuario = async (id: string) => {
  mutate(usuarioPath, usuarios => usuarios.filter(t => t.id !== id), false);
  await fetch(`${usuarioPath}?usuarioId=${id}`, { method: "DELETE" });
  mutate(usuarioPath);
};
