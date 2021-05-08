import React from 'react';
import PollutionLogo from '../../public/logos/pollution-project-logo-white.png';

import Burger from '@animated-burgers/burger-squeeze';
import '@animated-burgers/burger-squeeze/dist/styles.css';

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
    StyledLink,
    StyledLinkContainer
} from './NavbarElements';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { menuData } from '../../data';

/** 
 * formats menu data into JSX component. Making the
 * desired styles work here required a workaround 
 * the is specified here: https://github.com/vercel/next.js/issues/1942#issuecomment-313925454
 *  */
const formatLink = ({ id, display, href, isExternal }) => {
    return isExternal ? (
        <StyledLinkContainer key={id}>
            <StyledLink id={id} href={href}>
                {display}
            </StyledLink>             
        </StyledLinkContainer>
    ) : (
        <StyledLinkContainer>
            <Link id={id} href={href} passHref>
                <StyledLink>
                    {display}
                </StyledLink> 
            </Link>                 
        </StyledLinkContainer>
     
    );
}

const Navbar = ({ toggle, isOpen }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <Link href="/">
                        <Logo src={PollutionLogo} />
                    </Link>
                    
                    <MobileIcon onClick={toggle}>
                        {/* <FaBars /> */}
                        <Burger isOpen={isOpen} />
                    </MobileIcon>
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