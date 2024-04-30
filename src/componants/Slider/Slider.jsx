import { Typewriter } from "react-simple-typewriter";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./slider.css";

const Slider = () => {
  const typeWriterWords = [
    "Wellcome to Art Box",
    "Looking for Painting and Drawing?",
    "Come and get it!!",
  ];

  return (
    <div className="relative">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper max-h-[700px]"
      >
        <SwiperSlide>
          <div className="slider1 bg-cover bg-center bg-no-repeat h-screen "></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider2 bg-cover bg-center bg-no-repeat h-screen"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider3 bg-cover bg-center bg-no-repeat h-screen"></div>
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-center items-center text-white text-center typeWriter absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 z-10">
        <Typewriter words={typeWriterWords} loop={false} cursor />
      </div>
    </div>
  );
};

export default Slider;
