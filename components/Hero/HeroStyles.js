import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import { FaArrowRight } from 'react-icons/fa';

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  min-height: 100vh;
  position: relative;
  z-index: 1;

  background: hsla(0, 0%, 0%, 1);

  background: linear-gradient(315deg, hsla(0, 0%, 0%, 1) 30%, hsla(240, 60%, 1%, 1) 40%, hsla(239, 47%, 18%, 1) 100%);
  
  background: -moz-linear-gradient(315deg, hsla(0, 0%, 0%, 1) 30%, hsla(240, 60%, 1%, 1) 40%, hsla(239, 47%, 18%, 1) 100%);
  
  background: -webkit-linear-gradient(315deg, hsla(0, 0%, 0%, 1) 30%, hsla(240, 60%, 1%, 1) 40%, hsla(239, 47%, 18%, 1) 100%);
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Arrow = styled(FaArrowRight)`
  color: ${({ isHovering }) => (isHovering ? 'darkblue' : '#c9ffc2')};

  transition: transform 0.4s ease-in-out;  
  transform: translate(${({ isHovering }) => (isHovering ? '14px' : '10px')}, 2px);
  
`;

export const ImagesContainer = styled.div`
  position: absolute;
  height: 500px;
  width: 500px;
  right: 0;
  bottom: 0;
  z-index: 8;
  align-items: center;
  text-algin: center;


  @media screen and (max-width: 700px) {
    max-height: 30vh;
    width: 100%;
  }
`;

export const Image = styled.img`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-algin: center;
  padding: 20px;
  opacity: .50
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
  z-index: 800;
  max-width: 1200px;
  // position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const FullScreen = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const FullScreenComponent = ({children}) => {
    return (
        <FullScreen>
            {children}
        </FullScreen>
    )
};

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

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;