import Navbar from 'react-bootstrap/Navbar';
import { BsBarChartLineFill } from "react-icons/bs";
import { BsBarChartLine } from "react-icons/bs";
import { BsFileText } from "react-icons/bs";
import { BsFileTextFill } from "react-icons/bs";
import s from './NavbarComponent.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { CiMenuBurger } from "react-icons/ci";

type NavbarComponentType = {
    handleShow: () => void;
}

const navbarElements = [
    {
        id: 0,
        currentIcon: <BsBarChartLineFill />,
        icon: <BsBarChartLine />,
        text: 'All',
        url: '/'
    },
    {
        id: 1,
        currentIcon: <BsFileTextFill />,
        icon: <BsFileText />,
        text: 'Best',
        url: '/best'
    },
]

const NavbarComponent: React.FC<NavbarComponentType> = ({ handleShow }) => {
    const { pathname } = useLocation();

    return (
        <Navbar
            expand="lg"
            className={`${s.container} bg-body-tertiary`}
        >
            <Button onClick={handleShow} variant="secondary" className={s.burger}>
                <CiMenuBurger />
            </Button>
            {
                navbarElements.map((el) =>
                    <NavLink to={el.url} key={el.id}>
                        {
                            pathname === el.url ?
                                el.currentIcon
                                :
                                el.icon
                        }
                    </NavLink>
                )
            }
        </Navbar>
    )
}

export default NavbarComponent;