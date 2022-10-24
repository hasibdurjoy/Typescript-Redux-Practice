import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../../Assets/Images/slider/1.webp";
import image2 from "../../../Assets/Images/slider/2.webp";
import image3 from "../../../Assets/Images/slider/3.webp";
import image4 from "../../../Assets/Images/slider/4.webp";
const Slider = () => {
  return (
    <div className="mt-3">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={image1} alt="" style={{ width: "100%" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="" style={{ width: "100%" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="" style={{ width: "100%" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="" style={{ width: "100%" }} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
