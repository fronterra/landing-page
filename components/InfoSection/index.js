import React from 'react';
import { Button } from '../ButtonElements';
import EmailCapture from '../EmailCapture';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img
} from './InfoElements';
import { Fade } from 'react-awesome-reveal';

const InfoSection = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  id,
  primary,
  darkText,
  dark,
  dark2,
  formElement
}) => {
  console.log(primary);
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Fade triggerOnce delay={300}>
              <Column1>
                <TextWrapper>
                  <TopLine>{topLine}</TopLine>
                  <Heading lightText={lightText}>{headline}</Heading>
                  <Subtitle darkText={darkText}>{description}</Subtitle>
                    {
                      formElement === 'email' ? 
                        (
                          <EmailCapture />
                        ) : 
                        (
                          <BtnWrap>
                            <Button
                              to='home'
                              smooth={true}
                              duration={500}
                              spy={true}
                              exact='true'
                              offset={-60}
                              primary={primary ? 1 : 0}
                              dark={dark ? 1 : 0}
                              dark2={dark2 ? 1 : 0}
                            >
                              {buttonLabel}
                            </Button>
                          </BtnWrap>
                        )              
                    }
                </TextWrapper>
              </Column1>              
            </Fade>
            
            <Column2>
              <Fade triggerOnce delay={700}>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
              </Fade>
            </Column2>              
            

          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
