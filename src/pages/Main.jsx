import React, { useState, useEffect } from 'react';
import useViewport from '../hooks/useViewPort';
import sampleBanner from '../assets/images/sampleBanner.jpg';

import { Link } from 'react-router-dom';
import { mockData } from '../constant/portfolioData';

const Main = () => {
  const { width, isMobile, isDesktop } = useViewport();
  const [portfolioData, setPortfolioData] = useState(mockData);

  useEffect(() => {
    if (portfolioData) {
      // 데이터를 이용한 추가 작업이 필요한 경우 여기에 작성
    }
  }, [portfolioData]);

  function splitArrayIntoThree(portfolioData) {
    const result = [[], [], []];
    portfolioData.forEach((item, index) => {
      result[index % 3].push(item);
    });
    return result;
  }

  function splitArrayIntoTwo(portfolioData) {
    const result = [[], []];
    portfolioData.forEach((item, index) => {
      result[index % 2].push(item);
    });
    return result;
  }

  const threeArrayThumbnailData = splitArrayIntoThree(portfolioData);
  const twoArrayThumbnailData = splitArrayIntoTwo(portfolioData);

  return (
    <div className="w-full px-6 md:p-0 lg:p-0 xl:p-0">
      <div className="w-full h-[380px] md:h-[600px] overflow-hidden relative py-8 md:p-0">
        <img src={sampleBanner} alt="배너" className="w-full h-full object-cover" />
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-h1-bold text-white mx-auto text-h3-bold md:text-h2-bold lg:text-h1-bold">
          by MELLOW
        </span>
      </div>
      <div className="flex justify-center gap-10 mt-4 w-full lg:gap-10 lg:mt-10 xl:gap-10 xl:mt-10">
        {!isDesktop &&
          threeArrayThumbnailData?.map((datas, index) => (
            <div key={index} className="min-h-screen flex flex-col items-center gap-16">
              {datas.map((item, idx) => {
                return (
                  <Link
                    to={`/brand-movie/${item.id}`}
                    key={item.id}
                    className="group w-[280px] xl:w-[320px] lg:w-[300px]"
                  >
                    <div className="relative w-full max-h-[380px] min-h-[150px] overflow-hidden xl:max-h-[420px] xl:min-h-[180px] lg:max-h-[400px] lg:min-h-[160px]">
                      <img src={item.listThumbnail} className="object-cover w-full h-full" alt={item.title} />
                      <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out"></div>
                      <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out text-h4-bold tracking-wider">
                        VIEW POST →
                      </span>
                    </div>
                    <span className="w-full whitespace-normal text-h3-bold text-center block mt-10 text-gray600 tracking-tighter">
                      {item.title}
                    </span>
                  </Link>
                );
              })}
            </div>
          ))}

        {!isMobile &&
          isDesktop &&
          twoArrayThumbnailData?.map((datas, index) => (
            <div key={index} className="min-h-screen flex flex-col items-center gap-16">
              {datas.map((item, idx) => {
                return (
                  <Link
                    to={`/brand-movie/${item.id}`}
                    key={item.id}
                    className="group w-[280px] xl:w-[320px] lg:w-[300px]"
                  >
                    <div className="relative w-full max-h-[380px] min-h-[150px] overflow-hidden xl:max-h-[420px] xl:min-h-[180px] lg:max-h-[400px] lg:min-h-[160px]">
                      <img src={item.listThumbnail} className="object-cover w-full h-full" alt={item.title} />
                      <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out"></div>
                      <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out text-h4-bold tracking-wider">
                        VIEW POST →
                      </span>
                    </div>

                    <span className="w-full whitespace-normal text-h4-bold text-center block  mt-10 text-gray600 tracking-tighter">
                      {item.title}
                    </span>
                  </Link>
                );
              })}
            </div>
          ))}

        {isMobile && (
          <div className="min-h-screen flex flex-col items-center gap-14">
            {portfolioData?.map((item, idx) => {
              return (
                <Link to={`/brand-movie/${item.id}`} key={item.id} className="group">
                  <div className="relative flex flex-col w-full">
                    <img src={item.listThumbnail} className="object-cover w-full h-full" alt={item.title} />
                    <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out"></div>
                    <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out text-h4-bold tracking-wider">
                      VIEW POST →
                    </span>
                  </div>
                  <span className="w-full whitespace-normal text-h3-bold text-center block mt-10 text-gray600 tracking-tighter px-3">
                    {item.title}
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
