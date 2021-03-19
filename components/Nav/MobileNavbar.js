import React, { useEffect } from "react";
import styled from "styled-components";
import { useMenuContext } from "../../state";
import NavLinks from "./NavLinks";
import Hamburger from "hamburger-react";

const MobileNavbar = () => {
  const { isMenuOpen } = useMenuContext();
  
  useEffect(() => {
    const original = window.getComputedStyle(document.body).overflow;

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = original;
    };
  }, [isMenuOpen]);

  return (
    <>
      {isMenuOpen && (
        <MobileNav>
          <NavLinks />
        </MobileNav>
      )}
    </>
  );
};

export default MobileNavbar;

const MobileNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;