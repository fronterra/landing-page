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
} from './StyledComponents';

const HeroSection = (props) => {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(() => !hover);
  };

  return (
    <>
      <HeroContainer>
        <HeroContent>
            <HeroH1>
              {props.heading}
            </HeroH1>
            <HeroP>
              {props.subheading}
            </HeroP>
            <CtaButton onMouseEnter={handleHover} onMouseLeave={handleHover} onClick={(e) => {
              e.preventDefault();
              window.location.href = 'https://usp.ucsd.edu/news-and-events/in-the-news/fronterra.html';
            }}>
              {props.ctaButton.content}
              <Arrow ishovering={hover ? 'true' : undefined} />
            </CtaButton>            
          <ImagesContainer>
              <Image src={props.images.image1} alt=""/>           
          </ImagesContainer>           
        </HeroContent>
      </HeroContainer>
    </>
  );
}

export default HeroSection;