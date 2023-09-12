import { NextPage } from "next";
import styles from "../../styles/Formulario.module.css";
import { useState } from "react";

const Formulario: NextPage = () => {
  const [valueSelectAnimal, setValueSelectAnimal] = useState("0");

  const submitFormulario = (e: any) => {
    e.preventDefault();

    console.log("davi gay");
  };

  return (
    <div className={styles.container}>
      <form className={styles.main} onSubmit={submitFormulario}>
        <h1>Formulário Veterinario</h1>
        <h2>Informações do Proprietário:</h2>

        <label htmlFor="nome">
          <strong>Nome:</strong>
        </label>
        <input type="text" name="nome" className={styles.input} />

        <label htmlFor="sobrenome">
          <strong>Sobrenome:</strong>
        </label>
        <input type="text" name="sobrenome" className={styles.input} />

        <label htmlFor="email">
          <strong>Email:</strong>
        </label>
        <input type="email" className={styles.input} />

        <label htmlFor="numero">
          <strong>Numero:</strong>
        </label>
        <input type="number" name="tel" className={styles.input} />

        <h2>Informações do paciente:</h2>
        <label htmlFor="nome">
          <strong>Nome do pet:</strong>
        </label>
        <input type="text" name="nome" className={styles.input} />

        <label htmlFor="selectAnimal">
          <strong>Escolha um animal:</strong>
        </label>
        <select
          id="selectAnimal"
          onChange={(evento) => setValueSelectAnimal(evento.target.value)}
          className={styles.select}
        >
          <option value="0">Selecione</option>
          <option value="1">Cachorro</option>
          <option value="2">Gato</option>
        </select>

        {valueSelectAnimal == "1" && (
          <>
            <label htmlFor="selectRacaCachorro">
              <strong>Escolha a raça do cachorro:</strong>
            </label>
            <select id="selectRacaCachorro" className={styles.select}>
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

        {valueSelectAnimal == "2" && (
          <>
            <label htmlFor="selectRacaGato">
              <strong>Escolha a raça do gato:</strong>
            </label>
            <select id="selectRacaGato" className={styles.select}>
              <option value="0">Vira-lata</option>
              <option value="1">Siamese</option>
              <option value="2">Persa</option>
              <option value="3">Maine Coon</option>
              <option value="4">Sphynx</option>
              <option value="5">Ragdoll</option>
              <option value="6">Bengal</option>
              <option value="7">Burmês</option>
              <option value="7">Outro</option>
            </select>
          </>
        )}

        <button type="submit" className={styles.button}>
          SALVAR
        </button>
      </form>
    </div>
  );
};

export default Formulario;
