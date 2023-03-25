import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { useState } from "react";
export default function ReviewSlider() {
  const swiper = useSwiper();
  const [slider, setSlider] = useState(swiper);

  return (
    <MainDiv>
      <H2andButton>
        <H2>მიმოხილვა</H2>
        <Button onClick={() => slider.slidePrev()}> prev</Button>
        <Button onClick={() => slider.slideNext()}> next</Button>
      </H2andButton>

      <Swiper
        onSwiper={(swiper) => setSlider(swiper)}
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1.35}
        spaceBetween={12}
        // navigation
        autoplay={{ delay: 3000 }}
        //   pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <SlideDiv image={`url("/assets/reviewslider/review1.png")`}>
            
          </SlideDiv>
        </SwiperSlide>

        <SwiperSlide>
          <SlideDiv image={`url("/assets/reviewslider/review2.png")`}>
           
          </SlideDiv>
        </SwiperSlide>
      </Swiper>
    </MainDiv>
  );
}

const ShadowDiv = styled.div`
  width: 100%;
  height: 180px;
  padding: 0 0 16px 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url("/assets/cashslider/slideshadow.png");
  background-repeat: no-repeat;
  background-size: cover;
  top: 0;
  position: absolute;
`;
const P = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: #ffffff;
`;

const H2andButton = styled.div``;
const Button = styled.button`
  display: none;
`;
const MainDiv = styled.div`
  padding-top: 80px;
  width: 100%;
  padding-left: 20px;
`;

const H2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 140%;
  color: #181818;
  margin-bottom: 16px;
`;

const SlideDiv = styled.div<any>`
  width: 100%;
  height: 220px;
  background-image: ${(props) => props.image};
  background-repeat: no-repeat;
  background-size: cover;
  
`;

const ImgShadow = styled.img`
  width: 100%;
  height: 180px;
`;
