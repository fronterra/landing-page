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

const formatLink = ({ id, display, href }) => (
  <Link id={id} prefetch href={href} passHref>
    <StyledSidebarLink>
      {display}
    </StyledSidebarLink>
  </Link>
);


const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {
            menuData.keys.map((key) => formatLink(menuData.values[key]))
          }
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
