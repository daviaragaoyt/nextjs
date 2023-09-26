import {
   Box,
   Table,
   TableContainer,
   Tbody,
   Td,
   Th,
   Thead,
   Tr,
} from '@chakra-ui/react'
import { useFormularios } from '../../api'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

const Listagem = () => {
   const { data: formularios, error } = useFormularios()

   if (error != null) return <div>Erro ao carregar Formularios</div>
   if (formularios == null) return <div>Carregando...</div>

   if (formularios.length === 0) {
      return <div>Tente adicionar um formulário</div>
   }

   return (
      <>
         <Navbar />
         <Box bgColor={'tranparent'} height={70}></Box>
         <TableContainer>
            <Table variant="simple">
               <Thead>
                  <Tr>
                     <Th>Pessoa</Th>
                     <Th>E-mail</Th>
                     <Th>Nome do Pet</Th>
                     <Th>Espécie</Th>
                     <Th>Raça</Th>
                  </Tr>
               </Thead>
               <Tbody>
                  {formularios.map((item, index) => (
                     <Tr key={index}>
                        <Td>
                           {item.nome} {item.sobrenome}
                        </Td>
                        <Td>{item.email}</Td>
                        <Td>{item.nomePet}</Td>
                        <Td>{item.especie}</Td>
                        <Td>{item.raca}</Td>
                     </Tr>
                  ))}
               </Tbody>
            </Table>
         </TableContainer>
         <Footer />
      </>
   )
}

export default Listagem
