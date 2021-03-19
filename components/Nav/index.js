import React from "react";
import styled from "styled-components";
import DesktopNav from "./DesktopNavbar";
import MobileNav from "./MobileNavbar";

const Navbar = () => {
  return (
    <Nav>
      <DesktopNav />
      <MobileNav />
    </Nav>
  );
};

export default Navbar;

const Nav = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;