import useSWR, { mutate } from "swr";
import { Usuario } from "./types";

const fetcher = (input: RequestInfo, init?: RequestInit) =>
  fetch(input, init).then((res) => res.json());

const usuarioPath = "/api/usuarios";

export const useUsuarios = () => useSWR<Usuario[]>(usuarioPath, fetcher);

export const criarUsuario = async (nome: string, senha: string) => {
  mutate(
    usuarioPath,
    usuarios => [{ nome: nome, senha: senha, id: "new-todo" }, ...usuarios],
    false,
  );
  await fetch(usuarioPath, {
    method: "POST",
    body: JSON.stringify({ nome , senha}),
  });

  mutate(usuarioPath);
};

export const toggleUsuario = async (todo: Usuario) => {
  mutate(
    usuarioPath,
    usuarios =>
      usuarios.map(t =>
        t.id === todo.id ? { ...todo, completed: !t.completed } : t,
      ),
    false,
  );
  await fetch(`${usuarioPath}?todoId=${todo.id}`, {
    method: "PUT",
    body: JSON.stringify({}),
  });
  mutate(usuarioPath);
};

export const deleteTodo = async (id: string) => {
  mutate(usuarioPath, usuarios => usuarios.filter(t => t.id !== id), false);
  await fetch(`${usuarioPath}?todoId=${id}`, { method: "DELETE" });
  mutate(usuarioPath);
};
