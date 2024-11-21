import React from 'react';
import useViewport from '../hooks/useViewPort';
import sampleBanner from '../assets/images/sampleBanner.jpg';
import LB세미콘기술홍보 from '../assets/images/thumbnail/2020LB세미콘기술홍보.png';
import { Link } from 'react-router-dom';

const Main = () => {
  const { width, isMobile, isDesktop } = useViewport();

  function splitArrayIntoThree(data) {
    const result = [[], [], []];
    data.forEach((item, index) => {
      result[index % 3].push(item);
    });
    return result;
  }

  function splitArrayIntoTwo(data) {
    const result = [[], []];
    data.forEach((item, index) => {
      result[index % 2].push(item);
    });
    return result;
  }

  const threeArrayThumbnailData = splitArrayIntoThree(data);
  const twoArrayThumbnailData = splitArrayIntoTwo(data);
  return (
    <div className="w-full px-6 md:p-0 lg:p-0 xl:p-0">
      <div className="w-full h-[380px] md:h-[600px] overflow-hidden relative py-8 md:p-0">
        <img src={sampleBanner} alt="배너" className="w-full h-full object-cover" />
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-h1-bold text-white mx-auto text-h3-bold md:text-h2-bold lg:text-h1-bold">
          by MELLOW
        </span>
      </div>
      <div className="flex justify-center gap-10 mt-10 w-full lg:gap-12 lg:mt-12 xl:gap-16 xl:mt-16">
        {!isDesktop &&
          threeArrayThumbnailData?.map((datas, index) => (
            <div key={index} className="min-h-screen flex flex-col">
              {datas.map((item, idx) => {
                return (
                  <Link to={`/brand-movie/${item.id}`} key={item.id} className="group">
                    <div className="relative flex flex-col w-[280px] max-h-[380px] min-h-[150px] overflow-hidden xl:w-[320px] xl:max-h-[420px] xl:min-h-[180px] lg:w-[300px] lg:max-h-[400px] lg:min-h-[160px]">
                      <img src={item.thumbnail} className="object-cover w-full h-full" />
                      <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out"></div>
                      <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out text-h4-bold tracking-wider">
                        VIEW POST →
                      </span>
                    </div>
                    <div className="flex my-10 justify-center">
                      <span className="text-h4-bold text-pretty">{item.title}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          ))}

        {!isMobile &&
          isDesktop &&
          twoArrayThumbnailData?.map((datas, index) => (
            <div key={index} className="min-h-screen flex flex-col">
              {datas.map((item, idx) => {
                return (
                  <Link to={`/brand-movie/${item.id}`} key={item.id} className="group">
                    <div className="relative flex flex-col w-[280px] max-h-[380px] min-h-[150px] overflow-hidden lg:w-[320px] lg:max-h-[420px] lg:min-h-[180px]">
                      <img src={item.thumbnail} className="object-cover w-full h-full" />
                      <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out"></div>
                      <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out text-h4-bold tracking-wider">
                        VIEW POST →
                      </span>
                    </div>
                    <div className="flex my-10 justify-center">
                      <span className="text-h4-bold text-pretty text-title-bold">{item.title}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          ))}

        {isMobile && (
          <div className="min-h-screen flex flex-col">
            {data.map((item, idx) => {
              return (
                <Link to={`/brand-movie/${item.id}`} key={item.id} className="group">
                  <div className="relative flex flex-col w-full">
                    <img src={item.thumbnail} className="object-cover w-full h-full" />
                    <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out"></div>
                    <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out text-h4-bold tracking-wider">
                      VIEW POST →
                    </span>
                  </div>
                  <div className="flex my-10 justify-center">
                    <span className="text-h4-bold text-pretty text-title-bold">{item.title}</span>
                  </div>
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

const data = [
  {
    id: '0',
    title: '2020 LB세미콘 기술홍보',
    videoSource: 'https://youtu.be/ZKRYNhcIsXg',
    thumbnail: LB세미콘기술홍보,
  },
  {
    id: '1',
    title: '안성아양아파트 공기정화',
    videoSource: 'https://youtu.be/JLId6mhnXpQ',
    thumbnail: 'https://picsum.photos/300/180?random=1',
  },
  {
    id: '2',
    title: 'KOICA 교육영상',
    videoSource: 'https://youtu.be/yzQlxm3fp9I',
    thumbnail: 'https://picsum.photos/300/300?random=1',
  },
  {
    id: '3',
    title: 'KOICA 교육영상2',
    videoSource: 'https://youtu.be/qDSBf0NnXZo',
    thumbnail: 'https://picsum.photos/200/180?random=1',
  },
  {
    id: '4',
    title: '조선대 조리영상',
    videoSource: 'https://youtu.be/-baK_qR-Xo8',
    thumbnail: 'https://picsum.photos/400/300?random=1',
  },
  {
    id: '5',
    title: '산사태 안전 영상',
    videoSource: 'https://youtu.be/d4KJK9rnG8E',
    thumbnail: 'https://picsum.photos/500/240?random=1',
  },
  {
    id: '6',
    title: '건축물 붕괴 안전 영상',
    videoSource: 'https://youtu.be/_GC9w3fbfqg',
    thumbnail: 'https://picsum.photos/400/500?random=1',
  },
  {
    id: '7',
    title: '서강대학교 전형안내',
    videoSource: 'https://youtu.be/icH2RsrbG1k',
    thumbnail: 'https://picsum.photos/200/300?random=1',
  },
  {
    id: '8',
    title: '스피드랙 조립 매뉴얼',
    videoSource: 'https://youtu.be/HoLH4LxmyDo',
    thumbnail: 'https://picsum.photos/400/500?random=1',
  },
  {
    id: '9',
    title: '공공의료보건재단',
    videoSource: 'https://youtu.be/QN1Z0KRfUsI',
    thumbnail: 'https://picsum.photos/450/400?random=1',
  },
  {
    id: '10',
    title: 'KSP 온라인 행사',
    videoSource: 'https://youtu.be/kOzlSH0hL9g',
    thumbnail: 'https://picsum.photos/400/300?random=1',
  },
  {
    id: '11',
    title: '나비프라 자동화 로봇',
    videoSource: 'https://youtu.be/fIo9SBADGtI',
    thumbnail: 'https://picsum.photos/400/300?random=1',
  },
  {
    id: '12',
    title: 'LS엠트론 홍보영상',
    videoSource: 'https://youtu.be/9DT9pjB75l8',
    thumbnail: 'https://picsum.photos/450/550?random=1',
  },
  {
    id: '13',
    title: '달걀 모션그래픽',
    videoSource: 'https://youtu.be/T19YufIicPc',
    thumbnail: 'https://picsum.photos/400/650?random=1',
  },
  {
    id: '14',
    title: 'QHbio 코스메틱',
    videoSource: 'https://youtu.be/kIltRW-szBI',
    thumbnail: 'https://picsum.photos/300/700?random=1',
  },
  {
    id: '15',
    title: '로보메이션',
    videoSource: 'https://youtu.be/2JF0ZyHe7EE',
    thumbnail: 'https://picsum.photos/200/600?random=1',
  },
  {
    id: '16',
    title: '시너지벤쳐스',
    videoSource: 'https://youtu.be/7B_C3NHQFw0',
    thumbnail: 'https://picsum.photos/400/300?random=1',
  },
  {
    id: '17',
    title: '시너지벤쳐스 모션그래픽',
    videoSource: 'https://youtu.be/pcn07-Kptb4',
    thumbnail: 'https://picsum.photos/600/450?random=1',
  },
  {
    id: '18',
    title: '영등포 타임스퀘어 전시',
    videoSource: 'https://youtu.be/s47Yg_sRxSk',
    thumbnail: 'https://picsum.photos/400/400?random=1',
  },
  {
    id: '19',
    title: 'CAMP 모션그래픽',
    videoSource: 'https://youtu.be/5Mlbvn06FlQ',
    thumbnail: 'https://picsum.photos/500/500?random=1',
  },
  {
    id: '20',
    title: 'S3R CF',
    videoSource: 'https://youtu.be/mx_fqTR3v58',
    thumbnail: 'https://picsum.photos/500/400?random=1',
  },
  {
    id: '21',
    title: 'KS 인증 교육 모션',
    videoSource: 'https://youtu.be/DwK4yMROQc4',
    thumbnail: 'https://picsum.photos/200/300?random=1',
  },
  {
    id: '22',
    title: '삼성화재 모션 매뉴얼',
    videoSource: 'https://youtu.be/wxV4PCF0-4g',
    thumbnail: 'https://picsum.photos/450/650?random=1',
  },
  {
    id: '23',
    title: 'JUS 캐릭터 모션',
    videoSource: 'https://youtu.be/PwPPOvwQ-Rg',
    thumbnail: 'https://picsum.photos/400/550?random=1',
  },
  {
    id: '24',
    title: '뮤니쿤트',
    videoSource: 'https://youtu.be/aNr8rKrKjCQ',
    thumbnail: 'https://picsum.photos/500/400?random=1',
  },
  {
    id: '25',
    title: '미쉐린 행사영상',
    videoSource: 'https://youtu.be/ZWXIXorEJno',
    thumbnail: 'https://picsum.photos/400/300?random=1',
  },
  {
    id: '26',
    title: '2020 KMS 홍보영상',
    videoSource: 'https://youtu.be/RhJRE97x6J8',
    thumbnail: 'https://picsum.photos/400/400?random=1',
  },
  {
    id: '27',
    title: 'LB세미콘 반도체 후공정',
    videoSource: 'https://youtu.be/FVeujxWSux0',
    thumbnail: 'https://picsum.photos/500/500?random=1',
  },
  {
    id: '28',
    title: '쿨매트 기술설명',
    videoSource: 'https://youtu.be/UZGfR9aSHvk',
    thumbnail: 'https://picsum.photos/700/400?random=1',
  },
  {
    id: '29',
    title: 'SVC 진공 펌프 부품',
    videoSource: 'https://youtu.be/zMkVzSBI8M0',
    thumbnail: 'https://picsum.photos/600/600?random=1',
  },
  {
    id: '30',
    title: '동운아나텍 홍보',
    videoSource: 'https://youtu.be/7HO0ZhPkEOo',
    thumbnail: 'https://picsum.photos/500/600?random=1',
  },
  {
    id: '31',
    title: 'CJ 홍보관 전시영상',
    videoSource: 'https://youtu.be/ZNXP-wz7W2E',
    thumbnail: 'https://picsum.photos/600/300?random=1',
  },
  {
    id: '32',
    title: '튼튼영어 Lets bake a cake',
    videoSource: 'https://youtu.be/Ty5rE6zJyyI',
    thumbnail: 'https://picsum.photos/400/300?random=1',
  },
  {
    id: '33',
    title: '튼튼영어 Me too!',
    videoSource: 'https://youtu.be/DFv5lxzNLxk',
    thumbnail: 'https://picsum.photos/500/500?random=1',
  },
  {
    id: '34',
    title: '뉴발란스 키즈 위자드 2018',
    videoSource: 'https://youtu.be/dyroSXfP5K0',
    thumbnail: 'https://picsum.photos/600/300?random=1',
  },
  {
    id: '35',
    title: '튼튼영어 Tooty ta',
    videoSource: 'https://youtu.be/0lOks-7Xrc4',
    thumbnail: 'https://picsum.photos/300/300?random=1',
  },
  {
    id: '36',
    title: 'HAZZYS 브랜딩',
    videoSource: 'https://youtu.be/YhY7Yl7YZwE',
    thumbnail: 'https://picsum.photos/400/300?random=1',
  },
];
