"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const Carousel = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto">  {/* Centering with mx-auto */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="w-full"
      >
        <SwiperSlide>
          <div className="w-full h-[200px] sm:h-[320px] overflow-hidden rounded-[20px]">
            <img
              src="/images/home/hero/1.png"
              alt="Image 1"
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[200px] sm:h-[320px] overflow-hidden rounded-[20px]">
            <img
              src="/images/home/hero/2.png"
              alt="Image 2"
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[200px] sm:h-[320px] overflow-hidden rounded-[20px]">
            <img
              src="/images/home/hero/3.png"
              alt="Image 3"
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
