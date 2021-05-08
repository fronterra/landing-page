import Link from 'next/link';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: transparent 80%;
  height: 60px;
  margin-top: -60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const Logo = styled.img`
  height: 60px;
  margin: 7px 0 0 0;
  cursor: pointer;
  transform: translateY(-5px);

  @media screen and (max-width: 500px) {
    height: 45px;
    margin: 10px 0 0 0;
  }
`;

export const NavLogo = styled.div`
  position: absolute;
  z-index: 999;
  color: #c9ffc2;
  font-family: dharma-gothic-c, sans-serif;
  font-weight: 800;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2.75rem;
  // display: flex;
  align-items: center;
  margin-left: 24px;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;
  z-index: 998;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 30%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #c9ffc2;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  text-align: center;
  text-decoration: none;
  padding: 1.1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    transition: all 0.1s ease-in-out;
    border-bottom: 6px solid black;
  }
`;

export const StyledLink = styled.a`
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  padding: 1.1rem;
  height: 100%;
  cursor: pointer;
  color: #c9ffc2;
  background: transparent;

  &:hover {
    transition: all 0.1s ease-in-out;   
    border-bottom: 6px solid #c9ffc2;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLinks = styled(Link)`
  // display: block;
  // text-align: center;
  // text-decoration: none;
  // padding: 1rem;
  // height: 60px !important;
  // cursor: pointer;

  // &.active {
  //   border-bottom: 3px solid black;
  // }
`;

export const NavBtnLink = styled.div`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
    color: black;
  }
`;
