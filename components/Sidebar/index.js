import React from 'react';
import {
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  StyledSidebarLink
} from './StyledComponents';
import { menuData } from '../Navbar/data';
import Link from 'next/link';
import { DarkModeButton } from '../Buttons/StyledComponents';

const formatLink = ({ id, display, href, toggle }) => {
  return (
    <Link key={id} id={id} href={href} passHred>
      {/* workaround for closing mobile sidebar when link is clicked */}
      <StyledSidebarLink onClick={toggle}> 
        {display}
      </StyledSidebarLink>
    </Link>
  );
};


const Sidebar = ({ isOpen, darkMode, toggleTheme, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarWrapper>
        <SidebarMenu>
          {
            menuData.keys.map((key) => formatLink({...menuData.values[key], toggle}))
          }
          <DarkModeButton darkMode={darkMode} toggleTheme={toggleTheme} />
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
