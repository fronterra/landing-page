import Burger from '@animated-burgers/burger-squeeze';

import {
    MobileIcon,
    Nav,
    NavbarContainer,
    NavMenu,
    Logo,
    StyledLink,
    StyledLinkContainer
} from './StyledComponents';
import Link from 'next/link';
import { menuData } from './data';
import { DarkModeButton } from '../Buttons/StyledComponents';

/** 
 * formats menu data into JSX component. Workaround 
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
        <StyledLinkContainer key={id}>
            <Link id={id} href={href} passHref>
                <StyledLink>
                    {display}
                </StyledLink> 
            </Link>                 
        </StyledLinkContainer>
     
    );
}

const Navbar = ({ darkMode, toggleTheme, toggle, isOpen }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <Logo toggle={toggle} />                 
                    <MobileIcon onClick={toggle}>
                        <Burger isOpen={isOpen} />
                    </MobileIcon>
                    <NavMenu>
                        {
                            menuData.keys.map((key) => formatLink(menuData.values[key]))
                        }
                        <DarkModeButton darkMode={darkMode} toggleTheme={toggleTheme} />
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
}

export default Navbar;