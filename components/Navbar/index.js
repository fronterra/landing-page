import React from 'react';
import PollutionLogo from '../../public/logos/pollution-project-logo-neon.png';
import {
    MobileIcon,
    Nav,
    NavbarContainer,
    NavItem,
    NavLinks,
    NavLogo,
    NavMenu,
    Logo,
    Item,
    StyledLink
} from './NavbarElements';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { menuData } from '../../data';

/** 
 * formats menu data into JSX component. Making the
 * desired styles work here required a workaround 
 * the is specified here: https://github.com/vercel/next.js/issues/1942#issuecomment-313925454
 *  */
const formatLink = ({ id, display, href }) => (
    <Link id={id} prefetch href={href} passHref>
        <StyledLink>
            {display}
        </StyledLink> 
    </Link>
);

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <Logo src={PollutionLogo} />
                    {/* <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon> */}
                    <NavMenu>
                        {
                            menuData.keys.map((key) => formatLink(menuData.values[key]))
                        }
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
}

export default Navbar;