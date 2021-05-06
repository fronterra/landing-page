import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import { FaArrowRight } from 'react-icons/fa';

/** 
 * Contains all content for the hero section and stretches the whole
 * page length and width.
 */
export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 30px;
  height: fit-content;
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
  width: 100%;
  height: 100%;
  justify-content: end;
`;

export const Arrow = styled(FaArrowRight)`
  color: ${({ isHovering }) => (isHovering ? 'darkblue' : '#c9ffc2')};

  transition: transform 0.4s ease-in-out;  
  transform: translate(${({ isHovering }) => (isHovering ? '14px' : '10px')}, 2px);
  
`;

export const ImagesContainer = styled.div`
  display: flex;
  padding: 0px;
  justify-content: start;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 1100px;
  width: 100%;
  z-index: 8;

  transform: translate(500px, -250px);

  @media screen and (max-width: 768px) {
    transform: translate(0px, 0px);
  }
`;

export const Image = styled.img`
  position: relative;
  margin: 20px 20px 0 0;
  opacity: .50;
  400px;

  @media screen and (max-width: 768px) {
    width: 300px;
  }
`;

export const CtaButton = styled.button`
  margin-top: 24px;
  font-weight: bold;
  height: 50px;
  font-size: 16px;
  font-family: Helvetica;
  width: 200px;
  border: 2px solid #c9ffc2;
  color: #c9ffc2;
  background: transparent;

  :hover {
    transition: all 0.4s ease-in-out;  
    background: #c9ffc2;
    color: darkblue;
    cursor: pointer;
  }
`;

export const HeroContent = styled.div`
  max-width: 1100px;
  height: fit-content;
  z-index: 800;
  margin-top: 150px;
  align-items: center;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const Row = styled.div`
`;


export const ChangableGradient = styled.div`
  background: linear-gradient(
    20deg,
    hsl(${props => props.hue}, 60%, 65%),
    hsl(${props => props.hue - 305}, 64%, 60%)
  );
  height: 100%;
  width: 100%;
`;

export const SetGradient = styled.div`
  background: linear-gradient(
    20deg,
    hsl(116,60%,65%), hsl(-189,64%,60%)    
  );
  height: 100%;
  width: 100%;
`;



export const HeroH1 = styled.h1`
  color: #c9ffc2;
  font-family: SoulcraftGX;
  font-size: 60px;
  font-weight: 600;
  text-align: start;
  max-width: 800px;

  @media screen and (max-width: 700px) {
    font-size: 40px;
    max-width: 480px;
  }

  @media screen and (max-width: 480px) {
    font-size: 30px;
    max-width: 280px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  font-family: sofia-pro, sans-serif;
  font-weight: 300;
  text-align: center;
  max-width: 600px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
