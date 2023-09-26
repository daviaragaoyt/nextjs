import Image from "next/image";
import logo from '../../../public/logo.png';
import { Box } from "@chakra-ui/react";

const Navbar = () => {

    return (
    <Box className="header-menu">
        <nav>
            <Image src={logo} className="logo" alt="logo" width={100}/>
            <ul className="lista-menu">
                <li className="menu li">
                    <a href="#Home">Home</a>
                </li>
                <li className="menu li">
                    <a href="#informacao">Informações</a>
                </li>
                <li className="menu li">
                    <a href="#contato">Contato</a>
                </li>
            </ul>
        </nav>
    </Box>
    )
}

export default Navbar;