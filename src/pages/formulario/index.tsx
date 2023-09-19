import { NextPage } from "next";
import styles from "../../styles/Formulario.module.css";
import { useState } from "react";
import { criarFormulario } from "../../api";

const Formulario: NextPage = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [nomePet, setNomePet] = useState("");
  const [especie, setEspecie] = useState("0");
  const [racaCachorro, setRacaCachorro] = useState("0");
  const [racaGato, setRacaGato] = useState("0");

  return (
    <div className={styles.container}>
      <form
        className={styles.main}
        onSubmit={async (e) => {
          e.preventDefault();
          criarFormulario(
            nome,
            sobrenome,
            email,
            telefone,
            nomePet,
            especie,
            racaCachorro
          );
        }}
      >
        <div className={styles.box}>
        <h1 className="Titulo">Formulário Veterinario</h1>
        <h2 className="Subtitulo">Informações do Proprietário:</h2>

        <label htmlFor="nome">
          <strong className="strong">Nome:</strong>
        </label>
        <input
          type="text"
          name="nome"
          className={styles.input}
          onChange={(evento) => setNome(evento.target.value)}
        />

        <label htmlFor="sobrenome">
          <strong className="strong">Sobrenome:</strong>
        </label>
        <input
          type="text"
          name="sobrenome"
          className={styles.input}
          onChange={(evento) => setSobrenome(evento.target.value)}
        />

        <label htmlFor="email">
          <strong className="strong">Email:</strong>
        </label>
        <input
          type="email"
          className={styles.input}
          onChange={(evento) => setEmail(evento.target.value)}
        />

        <label htmlFor="telefone">
          <strong className="strong">Numero:</strong>
        </label>
        <input
          type="number"
          name="telefone"
          className={styles.input}
          onChange={(evento) => setTelefone(evento.target.value)}
        />

        <h2 className="Subtitulo">Informações do paciente:</h2>
        <label htmlFor="nomePet">
          <strong className="strong">Nome do pet:</strong>
        </label>
        <input
          type="text"
          name="nomePet"
          className={styles.input}
          onChange={(evento) => setNomePet(evento.target.value)}
        />

        <label htmlFor="selectAnimal">
          <strong className="strong">Escolha um animal:</strong>
        </label>
        <select
          id="selectAnimal"
          className={styles.select}
          onChange={(evento) => setEspecie(evento.target.value)}
        >
          <option value="0">Selecione</option>
          <option value="Cachorro">Cachorro</option>
          <option value="Gato">Gato</option>
        </select>

        {especie == "Cachorro" && (
          <>
            <label htmlFor="selectRacaCachorro">
              <strong className="strong">Escolha a raça do cachorro:</strong>
            </label>
            <select
              id="selectRacaCachorro"
              className={styles.select}
              onChange={(evento) => {
                setRacaCachorro(evento.target.value);
                console.log(evento.target.value);
              }}
            >
              <option value="0">Caramelo</option>
              <option value="1">Poodle</option>
              <option value="2">Labrador Retriever</option>
              <option value="3">Bulldog Inglês</option>
              <option value="4">Yorkshire Terrier</option>
              <option value="5">Shih Tzu</option>
              <option value="6">Chihuahua</option>
              <option value="7">Golden Retriever</option>
              <option value="8">Rottweiler</option>
              <option value="9">Bulldog Francês</option>
              <option value="10">Outro</option>
            </select>
          </>
        )}

        {especie == "Gato" && (
          <>
            <label htmlFor="selectRacaGato">
              <strong className="strong">Escolha a raça do gato:</strong>
            </label>
            <select
              id="selectRacaGato"
              className={styles.select}
              onChange={(evento) => setRacaGato(evento.target.value)}
            >
              <option value="0">Vira-lata</option>
              <option value="1">Siamese</option>
              <option value="2">Persa</option>
              <option value="3">Maine Coon</option>
              <option value="4">Sphynx</option>
              <option value="5">Ragdoll</option>
              <option value="6">Bengal</option>
              <option value="7">Burmês</option>
              <option value="8">Outro</option>
            </select>
          </>
        )}

        <button type="submit" className={styles.button}>
          SALVAR
        </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
