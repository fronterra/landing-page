import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';

/** 
 * Contains all content for the hero section and stretches the whole
 * page length and width.
 */
export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 0 30px;
  width: 100vw;
  z-index: 2;
  overflow-x: hidden; 
`;

/**
 * 
 */
export const HeroTextContentContainer = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  height: 100%;
`;
export const HeroAnimationContentContainer = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`;

export const Arrow = styled(FaArrowRight)`
  color: ${(props) => (props.ishovering ? props.theme.colors.surface : props.theme.colors.accent )};

  transition: transform 0.4s ease-in-out;  
  transform: translate(${(props) => (props.ishovering ? '12px' : '8px')}, 2px);
  
`;

export const ImagesContainer = styled.div`
  z-index: 8;
  text-align: center;
`;

export const Image = styled.img`
  position: relative;
  align-content: center;
  margin: 20px 20px 0 0;
  opacity: .90;

  @media screen and (max-width: 768px) {
    width: 300px;
    margin: 10px 10px 0 0;
  }

  @media screen and (max-width: 350px) {
    width: 250px;
  }
`;

export const CtaButton = styled.button`
  margin-top: 24px;
  border-radius: 40px;
  height: 50px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.family};
  font-weight: 400;
  width: 200px;
  border: 2px solid ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.accent};
  background: transparent;

  :hover {
    transition: all 0.2s ease-in-out;
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.surface};
    cursor: pointer;
  }
`;

export const HeroContent = styled.div`
  max-width: 800px;
  height: fit-content;
  z-index: 800;
  margin-top: 10vh;
  align-items: center;
  padding: 8px 24px;

  @media screen and (max-width: 768px) {
    margin-top: 100px;
  }
`;

export const Row = styled.div`
`;


export const HeroH1 = styled.h1`
  color: ${({ theme }) => theme.colors.surface};
  font-family:  ${({ theme }) => theme.fonts.family};
  font-size: 48px;
  font-weight: 900;
  text-align: center;
  max-width: 800px;

  @media only screen and (max-width: 600px) {
    font-size: 28px;
    max-width: 480px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: ${({ theme }) => theme.colors.surface};
  font-size: 20px;
  font-family: Nunito Sans;
  font-weight: 200;
  text-align: center;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }
`;
