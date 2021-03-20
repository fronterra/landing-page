import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useMenuContext } from "../../state";
export const links = ["Documentation", "Deploy", "Partners"];

const DesktopNavLinks = () => {
  const { closeMenu } = useMenuContext();

  return (
    <NavLinksWrapper className="nav-links">
      {links.map((link) => (
        <li key={link}>
          <a href={`/${link}`} className="link">{link}</a>
        </li>
      ))}
    </NavLinksWrapper>
  );
};

export default DesktopNavLinks;

const NavLinksWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-direction: flex-end;
  align-items: flex-end;
  li {
    font-weight: 500;
    padding: 30px;
    font-size: 1.25rem;
    a {
      font-size: 20px;
      color: black;
      position: relative;
      text-decoration: none;
      padding-bottom: 8px;
    
       &:before,
      &:after {
        content: '';
        position: absolute;
        bottom: 2px;
        left: 0; right: 0;
        height: 2px;
        background-color: black;
      }
      &:before {
        opacity: 0;
        transform: translateY(- 8px);
        transition: transform 0s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity 0s;
      }
      &:after {
        opacity: 0;
        transform: translateY(8px/2);
        transition: transform .3s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity .3s;
      }
      &:hover,
      &:focus {
        &:before,
        &:after {
          opacity: 1;
          transform: translateY(0);
        }
        &:before {
          transition: transform .3s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity .3s;
        }
        &:after {
          transition: transform 0s .3s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity 0s .3s;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    flex-direction: center;
    align-items: center;
    li {
      font-weight: 400;
      font-size: 1.40rem;
      padding: 20px;
      margin: 0 !important;

    }
  }
`;

export const NavLink = styled(Link)`
  position: relative;
  text-decoration: none;
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