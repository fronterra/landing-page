import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import LinkR from 'next/link';
import { BiMoon } from 'react-icons/bi';
import { FaLightbulb } from 'react-icons/fa';

export const Button = styled(LinkS)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#01BF71' : '#010606')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#010606' : '#ffffff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#ffffff' : '#01BF71')};
  }
`;

export const ButtonLink = styled(LinkR)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#01BF71' : '#010606')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#010606' : '#ffffff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#ffffff' : '#01BF71')};
  }
`;

const MoonIcon = styled(BiMoon)`
  color: #6564DB;
  font-size: 20px;
  @media only screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

const LightIcon = styled(FaLightbulb)`
  color: #F3A712;
  font-size: 20px;
  @media only screen and (max-width: 768px) {
    font-size: 40px;
  }
`; 

const DarkModeBtn = styled.button`
  background: transparent;
  padding: 5px 15px 2px 15px;
  border: none;
  margin-left: 20px;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    margin: 0px 40px 0px 40px;
  }
`;

export const DarkModeButton = ({ darkMode, toggleTheme }) => {
  return (
    <DarkModeBtn
      onClick={toggleTheme}
    >
      {
        darkMode ? (
          <MoonIcon />
        ) : (
          <LightIcon />
        )
      }
    </DarkModeBtn>
  );
};
