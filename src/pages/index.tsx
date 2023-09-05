import { NextPage } from "next";
import Head from "next/head";
import { useMemo, useState } from "react";
import {
  criarUsuario as criarUsuario,
  deleteTodo as deletarUsuario,
  toggleUsuario,
  useUsuarios,
} from "../api";
import styles from "../styles/Home.module.css";
import { Usuario } from "../types";

export const ListaUsuarios: React.FC = () => {
  const { data: usuarios, error } = useUsuarios();

  if (error != null) return <div>Error ao carregar usuários...</div>;
  if (usuarios == null) return <div>Carregando...</div>;

  if (usuarios.length === 0) {
    return (
      <div className={styles.emptyState}>Tente adicionar um usuário! ☝️️</div>
    );
  }

  return (
    <ul className={styles.todoList}>
      {usuarios.map((usuario) => (
        <ItemUsuario usuario={usuario} />
      ))}
    </ul>
  );
};

const ItemUsuario: React.FC<{ usuario: Usuario }> = ({ usuario }) => (
  <li className={styles.todo}>
    <label className={styles.label}>{usuario.nome}</label>

    <button
      className={styles.deleteButton}
      onClick={() => deletarUsuario(usuario.id)}
    >
      ✕
    </button>
  </li>
);

const AddUsuarioInput = () => {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        criarUsuario(nome, senha);
        setNome("");
        setSenha("");
      }}
      className={styles.addTodo}
    >
      <input
        className={styles.input}
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        className={styles.input}
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button className={styles.addButton}>Adicionar</button>
    </form>
  );
};

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Railway NextJS Prisma</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>Usuários</h1>
      </header>

      <main className={styles.main}>
        <AddUsuarioInput />

        <ListaUsuarios />
      </main>
    </div>
  );
};

export default Home;
