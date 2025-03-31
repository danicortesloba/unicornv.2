/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

interface DataType {
    navbarPlacement?: string;
    toggleSubMenu?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const MainMenu = ({ navbarPlacement, toggleSubMenu }: DataType) => {
    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement ? navbarPlacement : ""}`} data-in="fadeInDown" data-out="fadeOutUp">
                <li>
                    <Link to="/" className="active" data-toggle="dropdown">Inicio</Link>
            </li>
            <li>
                    <Link to="/servicios"  data-toggle="dropdown" >Servicios</Link>
            </li>
           
                <li>    
                <Link to="/conocenos">Sobre Nosotros</Link>
                </li>
                <li>    
                <Link to="/contacto">Contacto</Link>
                </li>
            </ul>
        </>
    );
};

export default MainMenu;