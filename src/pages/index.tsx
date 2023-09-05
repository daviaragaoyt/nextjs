import { NextPage } from "next";
import Head from "next/head";
import { useMemo, useState } from "react";
import {
  criarUsuario as criarUsuario,
  deleteTodo,
  toggleUsuario,
  useUsuarios,
} from "../api";
import styles from "../styles/Home.module.css";
import { Usuario } from "../types";

export const TodoList: React.FC = () => {
  const { data: todos, error } = useUsuarios();

  if (error != null) return <div>Error loading todos...</div>;
  if (todos == null) return <div>Loading...</div>;

  if (todos.length === 0) {
    return (
      <div className={styles.emptyState}>Tente adicionar um usuário! ☝️️</div>
    );
  }

  return (
    <ul className={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </ul>
  );
};

const TodoItem: React.FC<{ todo: Usuario }> = ({ todo }) => (
  <li className={styles.todo}>
    <label className={styles.label}></label>

    <button className={styles.deleteButton} onClick={() => deleteTodo(todo.id)}>
      ✕
    </button>
  </li>
);

const AddTodoInput = () => {
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
        <AddTodoInput />

        <TodoList />
      </main>
    </div>
  );
};

export default Home;
