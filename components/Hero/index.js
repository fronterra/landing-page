import React, { useState } from 'react';
import { Button } from '../ButtonElements';
import { Fade } from 'react-awesome-reveal';
import { useRouter } from 'next/router';

import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  FullScreen,
  SetGradient,
  FullScreenComponent,
  CtaButton,
  Arrow,
  ImagesContainer,
  Image
} from './HeroStyles';

import { homePageData } from '../../data/index';
import { FaArrowRight } from 'react-icons/fa';

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const router = useRouter();
  return (
    <>
      <HeroContainer>
        <HeroContent>
          <Fade delay={500} duration={1000}>
            <HeroH1>
              {homePageData.heading}
            </HeroH1>            
          </Fade>
          <Fade delay={1000} duration={1000}>
            <CtaButton onMouseEnter={onHover} onMouseLeave={onHover} onClick={(e) => {
              e.preventDefault();
              window.location.href = 'https://usp.ucsd.edu/news-and-events/in-the-news/fronterra.html';
            }}>
              {homePageData.ctaButton.content}
              <Arrow isHovering={hover}/>
            </CtaButton>            
          </Fade>
         
        </HeroContent>
        <ImagesContainer>
          <Fade delay={1500} duration={1000}>
            <Image key='1' src={homePageData.images.image1} alt=""/>
          </Fade>

          <Fade delay={2000} duration={1000}>
            <Image key='2' src={homePageData.images.image2} alt=""/>
          </Fade>

          <Fade delay={2500} duration={1000}>
            <Image key='3' src={homePageData.images.image3} alt=""/>            
          </Fade>
        </ImagesContainer> 
      </HeroContainer>
    </>
  );
}

export default HeroSection;