import { NextPage } from 'next';
import styles from '../../styles/Formulario.module.css';
import { useState } from 'react';
import { criarFormulario } from '../../api';
import { Box } from '@chakra-ui/react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Image from '../../../public/logo.png';

const Formulario: NextPage = () => {
   const [nome, setNome] = useState('')
   const [sobrenome, setSobrenome] = useState('')
   const [email, setEmail] = useState('')
   const [telefone, setTelefone] = useState('')
   const [nomePet, setNomePet] = useState('')
   const [especie, setEspecie] = useState('0')
   const [racaCachorro, setRacaCachorro] = useState('0')
   const [racaGato, setRacaGato] = useState('0')

   return (
      <Box className={styles.body}>
         <Navbar></Navbar>
         <br/>
         <div className={styles.container2}>
         <form
            className={styles.main}
            onSubmit={async (e) => {
               e.preventDefault()
               console.log("Formulario Enviado");
               criarFormulario(
                  nome,
                  sobrenome,
                  email,
                  telefone,
                  nomePet,
                  especie,
                  racaCachorro
               )
            }}
         >
            <div className={styles.box}>
               <h1 className={styles.Titulo}>
                  <strong className={styles.strong}>
                     Formulário Veterinario
                  </strong>
               </h1>
               <h2 className={styles.Subtitulo}>
                  {' '}
                  <strong className={styles.strong}>
                     Informações do Proprietário:
                  </strong>
               </h2>

               <label htmlFor="nome">
                  <strong className={styles.strong}>Nome:</strong>
               </label>
               <input
                  type="text"
                  name="nome"
                  placeholder="Nome:"
                  className={styles.input}
                  onChange={(evento) => setNome(evento.target.value)}
               />

               <label htmlFor="sobrenome">
                  <strong className={styles.strong}>Sobrenome:</strong>
               </label>
               <input
                  type="text"
                  name="sobrenome"
                  placeholder="Sobrenome:"
                  className={styles.input}
                  onChange={(evento) => setSobrenome(evento.target.value)}
               />

               <label htmlFor="email">
                  <strong className={styles.strong}>Email:</strong>
               </label>
               <input
                  type="email"
                  placeholder="Email:"
                  className={styles.input}
                  onChange={(evento) => setEmail(evento.target.value)}
               />

               <label htmlFor="telefone">
                  <strong className={styles.strong}>Telefone:</strong>
               </label>
               <input
                  type="number"
                  name="telefone"
                  placeholder="Telefone:"
                  className={styles.input}
                  onChange={(evento) => setTelefone(evento.target.value)}
               />

               <h2 className={styles.Subtitulo}>
                  {' '}
                  <strong className={styles.strong}>
                     Informações do paciente:
                  </strong>
               </h2>
               <label htmlFor="nomePet">
                  <strong className={styles.strong}>Nome do pet:</strong>
               </label>
               <input
                  type="text"
                  name="nomePet"
                  placeholder="Nome do pet:"
                  className={styles.input}
                  onChange={(evento) => setNomePet(evento.target.value)}
               />

               <label htmlFor="selectAnimal">
                  <strong className={styles.strong}>Escolha um animal:</strong>
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

               {especie == 'Cachorro' && (
                  <>
                     <label htmlFor="selectRacaCachorro">
                        <strong className={styles.strong}>
                           Escolha a raça do cachorro:
                        </strong>
                     </label>
                     <select
                        id="selectRacaCachorro"
                        className={styles.select}
                        onChange={(evento) => {
                           setRacaCachorro(evento.target.value)
                           console.log(evento.target.value)
                        }}
                     >
                        <option value="Caramelo">Caramelo</option>
                        <option value="Poodle">Poodle</option>
                        <option value="Labrador Retriever">
                           Labrador Retriever
                        </option>
                        <option value="Bulldog Inglês">Bulldog Inglês</option>
                        <option value="Yorkshire Terrier">
                           Yorkshire Terrier
                        </option>
                        <option value="Shih Tzu">Shih Tzu</option>
                        <option value="Chihuahua">Chihuahua</option>
                        <option value="Golden Retriever">
                           Golden Retriever
                        </option>
                        <option value="Rottweiler">Rottweiler</option>
                        <option value="Bulldog Francês">Bulldog Francês</option>
                        <option value="Outro">Outro</option>
                     </select>
                  </>
               )}

               {especie == 'Gato' && (
                  <>
                     <label htmlFor="selectRacaGato">
                        <strong className={styles.strong}>
                           Escolha a raça do gato:
                        </strong>
                     </label>
                     <select
                        id="selectRacaGato"
                        className={styles.select}
                        onChange={(evento) => setRacaGato(evento.target.value)}
                     >
                        <option value="Não sei">Não sei</option>
                        <option value="Siamese">Siamese</option>
                        <option value="Persa">Persa</option>
                        <option value="Maine Coon">Maine Coon</option>
                        <option value="Sphynx">Sphynx</option>
                        <option value="Ragdoll">Ragdoll</option>
                        <option value="Bengal">Bengal</option>
                        <option value="Burmês">Burmês</option>
                        <option value="Outro">Outro</option>
                     </select>
                  </>
               )}

               <button type="submit" className={styles.button} >
                  <strong>SALVAR</strong>
               </button>
            </div>
         </form>
         </div>
         <Footer />
      </Box>
   )
}

export default Formulario
