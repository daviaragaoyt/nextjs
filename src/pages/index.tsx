import { Container, Box, Button } from '@chakra-ui/react'
import { NextPage } from 'next'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import logo from '../../public/Horizontal-Colorida.png'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
   const router = useRouter()
   const urlDestino = 'https://nextjs-ebon-delta-53.vercel.app/formulario'

   const telaCadastro = () => {
      router.push('/formulario')
   }

   function teste() {}
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
               <div className="horarios">
                  <div className="lista-descricao">
                     <h1>
                        <strong>
                           Aqui está nosso horario de atendimento por ordem de
                           chegada
                           <br /> (no caso por ordem de cadastro dos
                           formularios):
                        </strong>
                     </h1>
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
                  </div>
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
                        <div className="lista-descricao">
                           As cirurgias são marcadas de acordo om a demanda de
                           pacientes para as aulas praticas realizadas pelos
                           alunos de medicina veterinária da Uniceplac.
                           <br />
                           Caso você e seu pet sejam escolidos, entraremos em
                           contato apenas 3 vezes, por meio do seu numero.
                           <br />
                           <h1>
                              <strong>
                                 As consultas não são gratuitas,para mais
                                 informações contate-nos.
                              </strong>
                           </h1>
                           <br />
                           <br />
                           <h1 className="Alert">Atenção:</h1>
                           <h1 className="lista-descricao">
                              <br />
                              <strong>
                                 Será feita 2 a 3 tentativas de contato,caso não
                                 tenhamos retorno, o paciente será retirado da
                                 lista de espera
                              </strong>
                              <br />
                           </h1>
                           <br />
                        </div>
                     </li>
                     <Button
                        color="#fff"
                        bgColor="#d68749"
                        onClick={telaCadastro}
                        border="5px solid #d68749"
                        _hover={{
                           background: '#3b7355',
                           borderColor: '#3b7355',
                        }}
                     >
                        Fazer Cadastro
                     </Button>
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
