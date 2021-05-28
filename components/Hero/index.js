import React, { useState } from 'react';

import {
  HeroContainer,
  HeroContent,
  HeroH1,
  CtaButton,
  Arrow,
  ImagesContainer,
  Image,
  HeroP
} from './HeroStyles';

import { homePageData } from '../../data/index';

function HeroSection() {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(() => !hover);
  };

  return (
    <>
      <HeroContainer>
        <HeroContent>
            <HeroH1>
              {homePageData.heading}
            </HeroH1>
            <HeroP>
              {homePageData.subheading}
            </HeroP>
            <CtaButton onMouseEnter={handleHover} onMouseLeave={handleHover} onClick={(e) => {
              e.preventDefault();
              window.location.href = 'https://usp.ucsd.edu/news-and-events/in-the-news/fronterra.html';
            }}>
              {homePageData.ctaButton.content}
              <Arrow ishovering={hover ? hover : undefined} />
            </CtaButton>            
          <ImagesContainer>
              <Image src={homePageData.images.image1} alt=""/>

              <Image  src={homePageData.images.image2} alt=""/>
              <Image src={homePageData.images.image3} alt=""/>            

          </ImagesContainer>           
         
        </HeroContent>

      </HeroContainer>
    </>
  );
}

export default HeroSection;