import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import thumb1 from "../assets/reelimage1.jpg";
import thumb2 from "../assets/reelimage2.jpg";
import thumb3 from "../assets/reelimage3.jpg";
import thumb4 from "../assets/reelimage4.jpg";
import thumb5 from "../assets/reelimage5.jpg";
import thumb6 from "../assets/reelimage6.jpg";
import arrowicon from '../assets/right-arrow.png';

const StreamingVideos3_page = () => {
  const swiperRef = useRef(null);
  const thumbnails = [thumb2, thumb3, thumb4, thumb5, thumb1, thumb6];

  return (
    <div className="w-full min-h-screen bg-white relative">
      {/* Wrapper for top padding */}
      <div className="pt-20">
        <Swiper
          modules={[Autoplay, Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={380} // gap between cards
          slidesPerView={3} // number of cards visible
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="overflow-visible"
        >
          {thumbnails.map((thumb, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-[30vw] w-[39vw] bg-black rounded-xl overflow-hidden">
                <img
                  src={thumb}
                  alt=""
                  className="w-full h-full rounded-xl object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90"></div>
                <div className="absolute bottom-10 left-10 z-10">
                  <button className="flex items-center justify-center">
                    <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
                    </div>
                  </button>
                  <div>
                    <h1 className="mt-5 font-semibold text-white hover:text-pink-500 text-lg">
                      Smiley woman pop party studio medium shot
                    </h1>
                    <h1 className="text-white mt-3">@facebook</h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation buttons below swiper */}
      <div className="flex items-center justify-center gap-8 mt-10 pb-10">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-red-100 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-red-200 transition cursor-pointer"
        >
          <img src={arrowicon} className="rotate-180 w-5" alt="Prev" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-red-100 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-red-200 transition cursor-pointer"
        >
          <img src={arrowicon} className="w-5" alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default StreamingVideos3_page;
