import { Container, Box } from '@chakra-ui/react'
import { NextPage } from 'next'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import logo from '../../public/Horizontal-Colorida.png'

const Home: NextPage = () => {
   const urlDestino = './formulario'

   return (
      <Box className="body">
         <Navbar />
         <section className="principal">
            <article className="subcontainer-principal">
               <div>
                  <h1 className="nome-completo">
                     Clinica Veterinaria UNICEPLAC
                  </h1>
                  <br />
                  <br />
                  <br />
               </div>
               <br />
               <div className="texto-sobre">
                  Olá Seja Bem vindo ao site de cadastros para cirurgias no
                  Hospital Veterinario da Uniceplac
               </div>
               <br />
               <div id="#horarios" className="horarios">
                  <h1 className="lista-descricao">
                     <strong>
                        Aqui está nosso horario de atendimento por ordem de
                        chegada<br/> (no caso por ordem de cadastro dos formularios):
                     </strong>
                     <h3>
                        <strong>Segunda a sexta:</strong>
                     </h3>
                     <ul>
                        <li>
                           <strong>Das 08:00 as 11:00</strong>
                        </li>
                        <li>
                           <strong>E das 14:00 as 21:00</strong>
                        </li>
                     </ul>
                  </h1>
               </div>
            </article>
         </section>

         <section className="wrapper-portfolio2">
            <article id="informacao" className="container article-list">
               <div>
                  <h3 className="topico-principal">Avisos Importantes</h3>
               </div>
               <div className="lista-item">
                  <ul>
                     <li className="menu li">
                        <h1 className="lista-titulo">
                           Alguns avisos importantes sobre o cadastro:
                        </h1>
                        <h1 className="lista-descricao">
                           As cirurgias são marcadas de acordo om a demanda de
                           pacientes para as aulas praticas realizadas pelos
                           alunos de medicina veterinária da Uniceplac.
                           <br />
                           Caso você e seu pet sejam escolidos, entraremos em
                           contato apenas 3 vezes, por meio do seu numero.
                           <br />
                           <strong>
                              As consultas não são gratuitas,para mais
                              informações contate-nos.
                           </strong>
                           <br />
                           <br />
                           <h1 className="Alert">Atenção:</h1>
                           <h1 className="lista-descricao">
                              <br />
                              <strong>Será feita 2 a 3 tentativas de contato,caso não
                              tenhamos retorno, o paciente será retirado da
                              lista de espera</strong>
                              <br />
                           </h1>
                           <br />
                        </h1>
                     </li>
                     <a
                        className="link-cad"
                        href={urlDestino}
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <button>Fazer Cadastro</button>
                     </a>
                  </ul>
               </div>
            </article>
         </section>
         <Footer />
      </Box>
   )
}

export default Home
function setIsClient(arg0: boolean) {
   throw new Error('Function not implemented.')
}
