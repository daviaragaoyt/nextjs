import Image from "next/image";
import logo from '../../../public/logo3.png';
import { Box } from "@chakra-ui/react";

const Navbar = () => {

    return (
    <Box className="header-menu">
        <nav>
            <Image src={logo} className="logo3" alt="logo3" width={100}/>
            <ul className="lista-menu">
                        <li>
                            <a href="..#horarios">Horarios</a>
                        </li>
                    <li>
                        <a href="..#Informações">Avisos</a>
                    </li>
                    <li>
                        <a href="#contato">Contato</a>
                    </li>
                </ul>
        </nav>
    </Box>
    )
}

export default Navbar;