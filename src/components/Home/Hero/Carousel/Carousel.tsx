"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/autoplay';

const Carousel = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="w-full"
      >
        {[1, 2, 3].map((index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[200px] sm:h-[320px] overflow-hidden rounded-[20px] relative">
              <Image
                src={`/images/home/hero/${index}.png`}
                alt={`Image ${index}`}
                fill
                className="object-cover rounded-[20px]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
