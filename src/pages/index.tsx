import { Container } from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import pessoas from '../../public/pessoas.png';

const Home: NextPage = () => {
    const urlDestino='https://nextjs-ebon-delta-53.vercel.app/formulario';

  return (
    <Container>
        <Navbar/>
            <section className="principal">
                <article className="subcontainer-principal">
                    <div>
                        <br/>
                        <Image src={pessoas} className="turminha" alt="pessoas"
                            width={200} height={500}/>
                    </div>
                    <div>
                        <h1 className="nome-completo">RV&Pets</h1>
                        <h2 className="criador">Feito pela turma de ADS</h2>
                    </div>
                    <div className="texto-sobre">
                        Olá Seja Bem vindo, somos um grupo de profissionais
                        talentosos e apaixonados por programação de
                        sites.Recentemente, tivemos a honra de colaborar com
                        a renomada Clínica Veterinária da Uniceplac para
                        criar um site que reflete a excelência em cuidados com
                        animais de estimação que eles oferecem.

                    </div>
                </article>
            </section>

            <section>
                <article id="Home" className="container article-lista">
                    <div>
                        <h3 className="topico-principal">Home</h3>
                    </div>
                    <div className="lista-item">
                        <ul>
                            <li className="menu li">
                                <h1 className="lista-titulo">Bem-vindo ao RV&Pets:
                                    Seu Portal de Saúde Animal!</h1>
                                <h1 className="lista-descricao">Projeto Criado
                                    para com intuito de ajudar a comunidade e
                                    facilitar seu cadastro
                                </h1>
                            </li>
                            <li className="menu li">
                                <h1 className="lista-descricao">
                                    No RV&Pets, estamos dedicados a promover a
                                    saúde e o bem-estar de seus companheiros
                                    peludos, emplumados ou escamados. Somos
                                    apaixonados pela medicina veterinária e
                                    estamos aqui para fornecer informações
                                    valiosas, recursos confiáveis e orientações
                                    especializadas para garantir que seus
                                    animais de estimação desfrutem de vidas
                                    longas e saudáveis.

                                    Nossa equipe de especialistas em medicina
                                    veterinária está comprometida em oferecer o
                                    melhor cuidado possível para seus animais de
                                    estimação. Com décadas de experiência
                                    combinada, nossa equipe traz uma riqueza de
                                    conhecimento em uma ampla variedade de
                                    tópicos relacionados à saúde animal. Desde
                                    cuidados preventivos até tratamentos
                                    avançados, estamos aqui para ajudar você a
                                    entender as necessidades de saúde de seus
                                    animais de estimação e tomar decisões
                                    informadas para sua saúde e felicidade.
                                    Além de ser uma valiosa fonte de informações
                                    sobre saúde animal, o RV&Pets também oferece
                                    recursos para facilitar o agendamento de
                                    consultas veterinárias para seus animais de
                                    estimação. Entendemos a importância de
                                    cuidar da saúde de seus companheiros peludos
                                    de forma eficaz e conveniente, e é por isso
                                    que disponibilizamos ferramentas que tornam
                                    o processo de agendamento de consultas
                                    simples e acessível.
                                    Realizamos Consultas em clínica geral,
                                    exames, vacinas e cirurgias. Os atendimentos
                                    serão realizados de acordo com ordem de
                                    chegada de segunda a sexta-feira das 8h às
                                    11h e 14h às 21h. Informações pelo telefone
                                    das 8h às 22h.
                                </h1>
                                
                            </li>
                        </ul>
                    </div>
                </article>
            </section>
            <section className="wrapper-portfolio">
                <article id="informacao" className="container article-list">
                    <div>
                        <h3 className="styles.topico-principal">Aviso</h3>
                    </div>
                    <div className="lista-item">
                        <ul>
                            <li className="menu li">
                                <h1 className="lista-titulo">Avisos importantes sobre
                                    o cadastro</h1>
                                <h1 className="lista-descricao"> Ao preencher um
                                    formulário veterinário para o seu amiguinho
                                    peludo, é essencial fornecer informações
                                    detalhadas e precisas para garantir o melhor
                                    atendimento possível. Este formulário é uma
                                    ferramenta crucial para os veterinários
                                    entenderem a saúde e o histórico do animal,
                                    permitindo um diagnóstico e tratamento
                                    adequados.
                                    Apos o preenchimento do formulario,
                                    entraremos em contato o mais breve possivel,
                                    marcando o dia e horario da consulta, a
                                    tentativa de contato acontece de duas a tres
                                    vezes, por isso atente-se.
                                    <br/>
                                    <br/>
                                    <h1 className="Alert">Atenção</h1><h1
                                        className="lista-descricao"> As
                                        consultas não são gratuitas,para mais
                                        informações contate-nos.
                                        <br/>
                                        <br/>
                                        Aqui estão alguns dos principais
                                        itens que podem ser solicitados em um
                                        formulário veterinário:</h1>

                                    <br/>
                                    <br/>
                                    <ul>
                                        <li>1.Informações do Proprietário:</li>
                                        <li>Nome completo do tutor;</li>
                                        <li>Numero de telefone/celular;</li>
                                        <li>E-mail </li>
                                    </ul>
                                    <br/>
                                    <ul>
                                        <li>2.Informações do Paciente:</li>
                                        <li>Nome do animal de estimação;</li>
                                        <li>Espécie(apenas cão ou gato) e</li>
                                        <li>Raça;</li>
                                    </ul>
                                </h1>
                            </li>
                            <a className="styles.link-cad"
                                href={urlDestino} target="_blank" rel="noopener noreferrer">
                                  <button>Fazer
                                Cadastro</button></a>
                        </ul>
                    </div>
                </article>
            </section>
        <Footer/>
      
        </Container>
  );
};

export default Home;
function setIsClient(arg0: boolean) {
    throw new Error("Function not implemented.");
}

