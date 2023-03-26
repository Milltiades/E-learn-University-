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
        <ButtonsDiv>
          <Button onClick={() => slider.slidePrev()}> 
          <img src="/assets/tablet/leftarrow.svg" alt="" />
          </Button>
          <Button onClick={() => slider.slideNext()}> 
          <img src="/assets/tablet/rightarrow.svg" alt="" />
          </Button>
        </ButtonsDiv>
      </H2andButton>

      {
        window.innerWidth > 1200 ? 
        <Swiper
        onSwiper={(swiper) => setSlider(swiper)}
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={4.1}
        spaceBetween={16}
        // navigation
        autoplay={{ delay: 3000 }}
        //   pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <SlideDiv image={`url("/assets/tablet/tabletreview1.png")`}>
            
          </SlideDiv>
        </SwiperSlide>

        <SwiperSlide>
          <SlideDiv image={`url("/assets/tablet/tabletreview2.png")`}>
           
          </SlideDiv>
        </SwiperSlide>

        <SwiperSlide>
          <SlideDiv image={`url("/assets/tablet/tabletreview1.png")`}>
            
          </SlideDiv>
        </SwiperSlide>

        <SwiperSlide>
          <SlideDiv image={`url("/assets/tablet/tabletreview2.png")`}>
           
          </SlideDiv>
        </SwiperSlide>

        <SwiperSlide>
          <SlideDiv image={`url("/assets/tablet/tabletreview1.png")`}>
            
          </SlideDiv>
        </SwiperSlide>
      </Swiper>
      :

        window.innerWidth > 767 ? 
        <Swiper
        onSwiper={(swiper) => setSlider(swiper)}
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={2.1}
        spaceBetween={16}
        // navigation
        autoplay={{ delay: 3000 }}
        //   pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <SlideDiv image={`url("/assets/tablet/tabletreview1.png")`}>
            
          </SlideDiv>
        </SwiperSlide>

        <SwiperSlide>
          <SlideDiv image={`url("/assets/tablet/tabletreview2.png")`}>
           
          </SlideDiv>
        </SwiperSlide>

        <SwiperSlide>
          <SlideDiv image={`url("/assets/tablet/tabletreview1.png")`}>
            
          </SlideDiv>
        </SwiperSlide>

        <SwiperSlide>
          <SlideDiv image={`url("/assets/tablet/tabletreview2.png")`}>
           
          </SlideDiv>
        </SwiperSlide>
      </Swiper>
      :
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

        <SwiperSlide>
          <SlideDiv image={`url("/assets/reviewslider/review1.png")`}>
            
          </SlideDiv>
        </SwiperSlide>

        <SwiperSlide>
          <SlideDiv image={`url("/assets/reviewslider/review2.png")`}>
           
          </SlideDiv>
        </SwiperSlide>
      </Swiper>
      }
    </MainDiv>
  );
}

const ButtonsDiv = styled.div`
display: none;
@media (min-width: 767px) {
display: flex;
  flex-direction: row;
  width: 132px;
  justify-content: space-between;
  margin-right: 40px;
  align-items: center;
}
@media (min-width: 1200px) {
  margin-right: 80px;
}
  
`

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

const H2andButton = styled.div`
@media (min-width: 767px) {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
}
`;
const Button = styled.button`
  display: none;
  @media (min-width: 767px) {
    display: flex;
    border: none;
    background: rgba(39, 110, 241, 0.1);
    border-radius: 50%;
    width: 60px;
    height: 60px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;
const MainDiv = styled.div`
  padding-top: 80px;
  width: 100%;
  padding-left: 20px;
  @media (min-width: 767px) {
    padding-top: 88px;
    padding-left: 40.48px;
  }
  @media (min-width: 1200px) {
    padding-top: 108px;
    padding-left: 80px;
  }
`;

const H2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 140%;
  color: #181818;
  margin-bottom: 16px;
  @media (min-width: 767px) {
    margin-bottom: 0;
    font-size: 32px;
  }
`;

const SlideDiv = styled.div<any>`
  width: 100%;
  height: 220px;
  background-image: ${(props) => props.image};
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 767px) {
    height: 260px;
  }
  
`;

const ImgShadow = styled.img`
  width: 100%;
  height: 180px;
`;
