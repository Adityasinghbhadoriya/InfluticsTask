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
    <div className="w-full min-h-screen bg-white relative px-4 sm:px-6 lg:px-0">
      <div className="pt-20">
        <Swiper
          modules={[Autoplay, Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {thumbnails.map((thumb, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-[60vw] sm:h-[30vw] md:h-[25vw] bg-black rounded-xl overflow-hidden">
                <img
                  src={thumb}
                  alt=""
                  className="w-full h-full rounded-xl object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90"></div>
                <div className="absolute bottom-5 sm:bottom-10 left-5 sm:left-10 z-10">
                  <button className="flex items-center justify-center">
                    <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
                    </div>
                  </button>
                  <div>
                    <h1 className="mt-2 sm:mt-5 font-semibold text-white hover:text-pink-500 text-sm sm:text-lg">
                      Smiley woman pop party studio medium shot
                    </h1>
                    <h1 className="text-white mt-1 sm:mt-3 text-xs sm:text-base">@facebook</h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex items-center justify-center gap-4 sm:gap-8 mt-8 pb-10">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-red-100 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-md hover:bg-red-200 transition cursor-pointer"
        >
          <img src={arrowicon} className="rotate-180 w-4 sm:w-5" alt="Prev" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-red-100 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-md hover:bg-red-200 transition cursor-pointer"
        >
          <img src={arrowicon} className="w-4 sm:w-5" alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default StreamingVideos3_page;
