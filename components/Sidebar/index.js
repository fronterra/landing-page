import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
  StyledSidebarLink
} from './SidebarElements';
import { menuData } from '../../data';
import Link from 'next/link';
import { DarkModeButton } from '../ButtonElements';

const formatLink = ({ id, display, href }) => (
  <Link key={id} id={id} href={href} passHref>
    <StyledSidebarLink>
      {display}
    </StyledSidebarLink>
  </Link>
);


const Sidebar = ({ isOpen, toggle, darkMode, toggleTheme }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarWrapper>
        <SidebarMenu>
          {
            menuData.keys.map((key) => formatLink(menuData.values[key]))
          }
          <DarkModeButton darkMode={darkMode} toggleTheme={toggleTheme} />
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
