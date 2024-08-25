import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import useViewport from '../hooks/useViewPort';
import banner from '../assets/videos/banner-video.mp4';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Banner = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  display: flex;
  justify-content: center;
`;

const Video = styled.div`
  width: 100vw;
  height: 1000px;
  height: auto;
  position: relative;
`;

const Wrap = styled.div`
  max-width: 1200px;
  width: 100%;
  padding-left: 62px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 52px;
  font-weight: 700;
  gap: 16px;
  color: white;
`;

const SubTitle = styled.div`
  font-size: 14px;
  color: #f8f8f8;
  margin: 36px 3px;
`;

const Section = styled.div`
  background-color: #f3f3f3;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  margin: 36px 0;
  padding: 36px 0;
`;

const SectionWrap = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 42px;
`;

const SectionTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 18px;
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin: auto;
`;

const Circle = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  border-radius: 50px;
  background-color: white;
  width: 70px;
  height: 70px;
`;

const IconText = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

const Icon = styled.img`
  width: 33px;
  margin-left: ${props => (props.$text === '사운드' ? '4px' : '0')};
`;

const ICON_LIST = [
  { src: '../../assets/images/icons/icon_video.svg', text: '영상', alt: '영상' },
  { src: '../../assets/images/icons/icon_website.svg', text: '웹사이트', alt: '웹사이트' },
  { src: '../../assets/images/icons/icon_bici.svg', text: 'BI/CI', alt: 'BI/CI' },
  { src: '../../assets/images/icons/icon_print.svg', text: '프린트', alt: '프린트' },
  { src: '../../assets/images/icons/icon_sound.svg', text: '사운드', alt: '사운드' },
];
const Main = () => {
  const { isMobile } = useViewport();
  const ref = useRef();
  const [autoplay, setAutoplay] = useState();

  // const addPlaying = () => {
  //   const vidoeElement = ref && ref.current;
  //   if (ref.current.autoplay == false) {
  //     ref.current.autoplay == true;
  //   }

  //   setAutoplay(ref.current.autoplay);
  //   vidoeElement.play();
  // };
  // useEffect(() => {
  //   addPlaying();
  // }, [autoplay]);

  return (
    <>
      <Container $isMobile={isMobile}>
        <Banner>
          <Video>
            <video ref={ref} autoPlay loop muted width="100%" height="100%">
              <source src={banner} type="video/mp4" />
            </video>
          </Video>
          <Wrap>
            <TitleContainer>
              <Title>
                <span>안녕하세요,</span>
                <span>종합 디자인 스튜디오</span>
                <span>멜로우 주식회사입니다.</span>
              </Title>
              <SubTitle>
                <span>PROJECT SHOW REEL</span>
              </SubTitle>
            </TitleContainer>
          </Wrap>
        </Banner>

        <Section>
          <SectionWrap>
            <SectionTitle>BUSINESS AREA</SectionTitle>
            <IconContainer>
              {ICON_LIST.map(item => (
                <IconBox>
                  <Circle>
                    <Icon src={item.src} alt={item.alt} $text={item.text}></Icon>
                  </Circle>
                  <IconText>{item.text}</IconText>
                </IconBox>
              ))}
            </IconContainer>
          </SectionWrap>
        </Section>
      </Container>
    </>
  );
};

export default Main;
