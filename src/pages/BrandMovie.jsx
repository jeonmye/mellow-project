import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import useViewport from '../hooks/useViewPort';
import LB세미콘기술홍보 from '../assets/images/thumbnail/2020LB세미콘기술홍보.png';
import LB세미콘_기술홍보 from '../assets/images/videoThumbnail/LB세미콘_기술홍보.jpg';

const BrandMovie = () => {
  const { isMobile, isDesktop } = useViewport();
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <div className="w-full flex flex-col items-center gap-10">
      <div className="w-full h-[400px] overflow-hidden relative md:p-0 mb-14">
        <img src={LB세미콘기술홍보} className="w-full h-full object-cover" alt="LB세미콘 기술홍보" />
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white text-h3-bold md:text-h1-bold lg:text-[65px] w-full flex justify-center break-keep">
          2020 LB세미콘 기술홍보
        </span>
      </div>
      {/* <span className="text-h1-bold">Project Overview</span>
      <span className="text-xs mx-9 md:mx-14 lg:mx-16 xl:mx-20">
        LB세미콘은 종합 건설자재 회사입니다. 슬로건 '역동성'을 주제로 하여 2020 홍보 영상을 제작했습니다. 반도체 후공정
        기술 등 LB세미콘의 핵심 기술 역량을 시각적으로 표현하고, 최신 공정 과정을 상세히 보여주어 시청자들이 회사의
        전문성과 기술 혁신에 대해 이해할 수 있도록 구성되었습니다.
      </span> */}
      <div className="w-full aspect-w-16 aspect-h-9 relative">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=FVeujxWSux0"
          className="absolute top-0 left-0 w-11/12"
          width="100%"
          height="100%"
          controls={true}
          playing={playVideo}
          mute={true}
        />
        <div className="cursor-pointer" onClick={() => setPlayVideo(true)}>
          {!playVideo && <img src={LB세미콘_기술홍보} className="w-full absolute z-1"></img>}
        </div>
      </div>

      <div className="h-48"></div>
    </div>
  );
};

export default BrandMovie;
