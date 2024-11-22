import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import useViewport from '../hooks/useViewPort';
import { mockData } from '../constant/portfolioData';
// import listThumb_LB세미콘기술홍보 from '../assets/images/listThumbnail/listThumb_LB세미콘기술홍보.png';
// import videoThumb_LB세미콘기술홍보 from '../assets/images/videoThumbnail/videoThumb_LB세미콘기술홍보.jpg';

const BrandMovie = () => {
  const params = useParams();
  const { isMobile, isDesktop } = useViewport();
  const [playVideo, setPlayVideo] = useState(false);
  const data = mockData[params.id];
  console.log(data);
  return (
    <div className="w-full flex flex-col items-center gap-10">
      <div className="w-full h-[290px] md:h-[400px] overflow-hidden relative md:p-0 mb-14">
        <img src={data.listThumbnail} className="w-full h-full object-cover" alt={data.title} />
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white text-h3-bold md:text-h1-bold lg:text-[65px] w-full flex justify-center break-keep">
          {data.title}
        </span>
      </div>

      <div className="w-full aspect-w-16 aspect-h-9 block mx-auto">
        <ReactPlayer
          url={data.videoSource}
          className=""
          width="100%"
          height="100%"
          controls={true}
          playing={playVideo}
          mute={true}
        />
        <div className="cursor-pointer" onClick={() => setPlayVideo(true)}>
          {!playVideo && <img src={data.videoThumbnail} className="w-full z-1"></img>}
        </div>
      </div>

      <div className="h-48"></div>
    </div>
  );
};

export default BrandMovie;
