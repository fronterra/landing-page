import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useMenuContext } from "../../state";
export const links = ["about"];

const DesktopNavLinks = () => {
  const { closeMenu } = useMenuContext();

  return (
    <NavLinksWrapper className="nav-links">
      {links.map((link) => (
        <li key={link}>
          <NavLink href={`/${link}`} className="link" onClick={closeMenu}>
            {link}
          </NavLink>
        </li>
      ))}
    </NavLinksWrapper>
  );
};

export default DesktopNavLinks;

const NavLinksWrapper = styled.ul`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  li:not(:last-child) {
    margin-right: 26px;
  }
  li:last-child {
    margin-left: auto;
  }
  button {
    background: white;
    outline: none;
    border: none;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    li {
      padding: 12px;
      margin: 0 !important;
    }
  }
`;

export const NavLink = styled(Link)`
  position: relative;
  color: white;
  text-decoration: none;
  text-transform: capitalize;
  color: black;
  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 2px;
    width: 0;
    background: black;
    transition: width 150ms linear;
  }
  &:hover::before {
    width: 100%;
  }
`;