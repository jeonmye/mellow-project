import React, { useState } from 'react';
import styled from 'styled-components';
import useViewport from '../hooks/useViewPort';
import ReactPlayer from "react-player"

const data = [
    {
        "title": "한림대 인터뷰광고/홍보",
        "videoSource": "https://youtu.be/ZKRYNhcIsXg",
        "tag": "광고/홍보"
    },
    {
        "title": "안성아양아파트 공기정화 그래픽",
        "videoSource": "https://youtu.be/JLId6mhnXpQ",
        "tag": "3D/CG"
    },
    {
        "title": "KOICA 교육영상",
        "videoSource": "https://youtu.be/yzQlxm3fp9I",
        "tag": "이러닝 콘텐츠"
    },
    {
        "title": "KOICA 교육영상2",
        "videoSource": "https://youtu.be/qDSBf0NnXZo",
        "tag": "이러닝 콘텐츠"
    },
    {
        "title": "조선대 조리영상",
        "videoSource": "https://youtu.be/-baK_qR-Xo8",
        "tag": "이러닝 콘텐츠"
    },
    {
        "title": "산사태 안전 영상",
        "videoSource": "https://youtu.be/d4KJK9rnG8E",
        "tag": "애니메이션"
    },
    {
        "title": "건축물 붕괴 안전 영상",
        "videoSource": "https://youtu.be/_GC9w3fbfqg",
        "tag": "애니메이션"
    },
    {
        "title": "서강대학교 전형안내",
        "videoSource": "https://youtu.be/icH2RsrbG1k",
        "tag": "이러닝 콘텐츠"
    },
    {
        "title": "스피드랙 조립 매뉴얼",
        "videoSource": "https://youtu.be/HoLH4LxmyDo",
        "tag": "광고/홍보"
    },
    {
        "title": "공공의료보건재단",
        "videoSource": "https://youtu.be/QN1Z0KRfUsI",
        "tag": "모션그래픽"
    },
    {
        "title": "KSP 온라인 행사",
        "videoSource": "https://youtu.be/kOzlSH0hL9g",
        "tag": "모션그래픽"
    },
    {
        "title": "나비프라 자동화 로봇",
        "videoSource": "https://youtu.be/fIo9SBADGtI",
        "tag": "3D/CG"
    },
    {
        "title": "LS엠트론 홍보영상",
        "videoSource": "https://youtu.be/9DT9pjB75l8",
        "tag": "3D/CG"
    },
    {
        "title": "달걀 모션그래픽",
        "videoSource": "https://youtu.be/T19YufIicPc",
        "tag": "모션그래픽"
    },
    {
        "title": "QHbio 코스메틱",
        "videoSource": "https://youtu.be/kIltRW-szBI",
        "tag": "3D/CG"
    },
    {
        "title": "로보메이션",
        "videoSource": "https://youtu.be/2JF0ZyHe7EE",
        "tag": "3D/CG"
    },
    {
        "title": "시너지벤쳐스",
        "videoSource": "https://youtu.be/7B_C3NHQFw0",
        "tag": "3D/CG"
    },
    {
        "title": "시너지벤쳐스 모션그래픽",
        "videoSource": "https://youtu.be/pcn07-Kptb4",
        "tag": "모션그래픽"
    },
    {
        "title": "영등포 타임스퀘어 전시",
        "videoSource": "https://youtu.be/s47Yg_sRxSk",
        "tag": "3D/CG"
    },
    {
        "title": "CAMP 모션그래픽",
        "videoSource": "https://youtu.be/5Mlbvn06FlQ",
        "tag": "3D/CG"
    },
    {
        "title": "S3R CF",
        "videoSource": "https://youtu.be/mx_fqTR3v58",
        "tag": "광고/홍보"
    },
    {
        "title": "KS 인증 교육 모션",
        "videoSource": "https://youtu.be/DwK4yMROQc4",
        "tag": "모션그래픽"
    },
    {
        "title": "삼성화재 모션 매뉴얼",
        "videoSource": "https://youtu.be/wxV4PCF0-4g",
        "tag": "모션그래픽"
    },
    {
        "title": "JUS 캐릭터 모션",
        "videoSource": "https://youtu.be/PwPPOvwQ-Rg",
        "tag": "모션그래픽"
    },
    {
        "title": "뮤니쿤트",
        "videoSource": "https://youtu.be/aNr8rKrKjCQ",
        "tag": "모션그래픽"
    },
    {
        "title": "미쉐린 행사영상",
        "videoSource": "https://youtu.be/ZWXIXorEJno",
        "tag": "광고/홍보"
    },
    {
        "title": "2020 KMS 홍보영상",
        "videoSource": "https://youtu.be/RhJRE97x6J8",
        "tag": "3D/CG"
    },
    {
        "title": "LB세미콘 반도체 후공정 그래픽",
        "videoSource": "https://youtu.be/FVeujxWSux0",
        "tag": "3D/CG"
    },
    {
        "title": "쿨매트 기술설명",
        "videoSource": "https://youtu.be/UZGfR9aSHvk",
        "tag": "3D/CG"
    },
    {
        "title": "SVC 진공 펌프 부품",
        "videoSource": "https://youtu.be/zMkVzSBI8M0",
        "tag": "3D/CG"
    },
    {
        "title": "동운아나텍 홍보",
        "videoSource": "https://youtu.be/7HO0ZhPkEOo",
        "tag": "3D/CG"
    },
    {
        "title": "CJ 홍보관 전시영상",
        "videoSource": "https://youtu.be/ZNXP-wz7W2E",
        "tag": "3D/CG"
    },
    {
        "title": "튼튼영어 Lets bake a cake",
        "videoSource": "https://youtu.be/Ty5rE6zJyyI",
        "tag": "애니메이션"
    },
    {
        "title": "튼튼영어 Me too!",
        "videoSource": "https://youtu.be/DFv5lxzNLxk",
        "tag": "애니메이션"
    },
    {
        "title": "뉴발란스 키즈 위자드 2018",
        "videoSource": "https://youtu.be/dyroSXfP5K0",
        "tag": "광고/홍보"
    },
    {
        "title": "튼튼영어 Tooty ta",
        "videoSource": "https://youtu.be/0lOks-7Xrc4",
        "tag": "애니메이션"
    },
    {
        "title": "HAZZYS 브랜딩",
        "videoSource": "https://youtu.be/YhY7Yl7YZwE",
        "tag": "3D/CG"
    }
]

const AppbarBackbround = styled.div`
  width: 100%;
  height: 140px;
  background-image: url('../assets/images/appbarBackground.png')
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1064px;
`

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  width: 1080px;
  align-self: center;
  flex-wrap: wrap;
`

const VideoText = styled.div`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
`

const 비디오제작서비스Text = styled.div`
  font-size: 20px;
  margin-bottom: 40px;
`

const LoadMoreButton = styled.div`
  width: 80px;
  height: 20px;
  margin: 50px;
  cursor: pointer;
`

const Portfolio = () => {
  const { isMobile } = useViewport();
  const [page, setPage] = useState(1)

  return (
    <>
      <AppbarBackbround />
      <Container $isMobile={isMobile}>
        <Wrapper>
          <VideoText>VIDEO</VideoText>
          <비디오제작서비스Text>비디오 제작 서비스</비디오제작서비스Text>
          <PortfolioContainer>
            {data.filter((_, index) => index < page * 12).map((item) => {
              return <PortfolioItem videoSource={item.videoSource} title={item.title} tag={item.tag}/>
            })}
          </PortfolioContainer>
        </Wrapper>
        <LoadMoreButton onClick={() => {setPage(page + 1)}}>load more</LoadMoreButton>
      </Container>
    </>
  )
}

const PortfolioItemContainer = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  margin: 10px;
`
const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px
`
const Tag = styled.div`
  font-size: 12px;
  margin-top: 5px
`

const PortfolioItem = ({ videoSource, title, tag }) => {
  return (
    <>
    <PortfolioItemContainer>
      <ReactPlayer
        style={{ padding: 0 }}
        url={videoSource}
        width="250px"
        height="200px"
      >
      </ReactPlayer>
      <Title>{title}</Title>
      <Tag>{tag}</Tag>
      </PortfolioItemContainer>
    </>
  )
}

export default Portfolio;