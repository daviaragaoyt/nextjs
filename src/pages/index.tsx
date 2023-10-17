import { Container, Box } from '@chakra-ui/react'
import { NextPage } from 'next'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import logo from '../../public/Horizontal-Colorida.png'


const Home: NextPage = () => {
   const urlDestino = 'https://nextjs-ebon-delta-53.vercel.app/formulario'

   return (
      <Box className="body">
         <Navbar />
         <section className="principal">
            <article className="subcontainer-principal">
               <Image src={logo} className="logo2" alt="logo2"></Image>
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
               
            </article>
         </section>

         <section className="wrapper-portfolio1">
            <article id="Horarios" className="container article-lista">
               <div className="horarios">
                  <h1 className="lista-descricao">
                     <strong>
                        Aqui está nosso horario de atendimento por ordem de
                        chegada (no caso por ordem de cadastro dos formularios):
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
                           <br />
                           Caso você e seu pet sejam escolidos, entraremos em
                           contato apenas 3 vezes, por meio do seu numero.
                           <br />
                           <br />
                           <h1 className="Alert">Atenção:</h1>
                           <h1 className="lista-descricao">
                              <br />
                              As consultas não são gratuitas,para mais
                              informações contate-nos.
                              <br />
                              <br />
                              Aqui estão alguns dos principais itens que podem
                              ser solicitados em um formulário veterinário:
                           </h1>
                           <br />
                           <br />
                           <ul>
                              <li><strong>1.Informações do Proprietário:</strong></li>
                              <li>Nome completo do tutor;</li>
                              <li>Numero de telefone/celular;</li>
                              <li>E-mail </li>
                           </ul>
                           <br />
                           <ul>
                              <li><strong>2.Informações do Paciente:</strong></li>
                              <li>Nome do animal de estimação;</li>
                              <li>Espécie(apenas cão ou gato) e</li>
                              <li>Raça;</li>
                              <li>Tipo de cirurgia;</li>
                              <li>
                                 E se é a primeira vez usando nossos serviços.
                              </li>
                           </ul>
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
