import Link from 'next/link';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: transparent;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: relative;
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

// export const Logo = styled.img`
//   height: 40px;
//   margin: 15px 0 0 0;
//   cursor: pointer;
//   transform: translateY(-5px);

//   @media screen and (max-width: 500px) {
//     height: 30px;
//     margin: 20px 0 0 0;
//   }
// `;

const NavLogo = styled.a`
  padding: 15px;
  text-align: center;
  font-size: 20px;
  font-family: gilbert;
  font-weight: 700;
  font-style: normal;
  color: ${({ theme }) => theme.colors.surface};
  text-decoration: none;
  cursor: pointer;
`;

export const Logo = () => {
  return (
    <Link href="/">
      <NavLogo>
        pollution project
      </NavLogo>
    </Link>
  )
}

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    // margin-top: 5px;
    // top: 3px;
    // right: 3px;
    transform: translate(-50%, 30%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #333333;
    z-index: 999 !important;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  // margin-right: -22px;

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
    border-bottom: 6px solid ${({ theme }) => theme.colors.surface};
  }
`;

export const StyledLinkContainer = styled.div`
  position: relative;
  wight: fit-content;
  height: fit-content;
  margin: 0 1rem 0 1rem;
`;


export const StyledLink = styled.a`
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  // padding: 1.1rem;
  height: 100%;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.surface};

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: -4px;
    left: 0;
    background-color: ${({ theme }) => theme.colors.surface};
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }

  &:hover::before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled.div`
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.surface};
  white-space: nowrap;
  padding: 10px 22px;
  color: ${({ theme }) => theme.colors.surface};
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
    color: ${({ theme }) => theme.colors.surface};
  }
`;
