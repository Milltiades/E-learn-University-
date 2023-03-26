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
export default function CashSlider() {
  const swiper = useSwiper();
  const [slider, setSlider] = useState(swiper);

  return (
    <MainDiv>
      <H2andButton>
        <H2>Cash Rules Everything Around Us</H2>
        <ButtonsDiv>
          <Button onClick={() => slider.slidePrev()}> 
          <img src="/assets/tablet/leftarrow.svg" alt="" />
          </Button>
          <Button onClick={() => slider.slideNext()}> 
          <img src="/assets/tablet/rightarrow.svg" alt="" />
          </Button>
        </ButtonsDiv>
      </H2andButton>

      {window.innerWidth > 767 ?
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
          <SlideDiv image={`url("/assets/tablet/tabletslide1.png")`}>
            <ShadowDiv>
              <P>გიორგი თ.</P>
            </ShadowDiv>
          </SlideDiv>
        </SwiperSlide>

        <SwiperSlide>
        <SlideDiv image={`url("/assets/tablet/tabletslide2.png")`}>
            <ShadowDiv>
              <P>ლაშა ლ.</P>
            </ShadowDiv>
          </SlideDiv>
        </SwiperSlide>

        <SwiperSlide>
          <SlideDiv image={`url("/assets/tablet/tabletslide1.png")`}>
            <ShadowDiv>
              <P>გიორგი თ.</P>
            </ShadowDiv>
          </SlideDiv>
        </SwiperSlide>

        <SwiperSlide>
        <SlideDiv image={`url("/assets/tablet/tabletslide2.png")`}>
            <ShadowDiv>
              <P>ლაშა ლ.</P>
            </ShadowDiv>
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
          <SlideDiv image={`url("/assets/cashslider/slide1.png")`}>
            <ShadowDiv>
              <P>გიორგი თ.</P>
            </ShadowDiv>
          </SlideDiv>
        </SwiperSlide>

        <SwiperSlide>
          <SlideDiv image={`url("/assets/cashslider/slide2.png")`}>
            <ShadowDiv>
              <P>ლაშა ლ.</P>
            </ShadowDiv>
          </SlideDiv>
        </SwiperSlide>

        <SwiperSlide>
          <SlideDiv image={`url("/assets/cashslider/slide1.png")`}>
            <ShadowDiv>
              <P>გიორგი თ.</P>
            </ShadowDiv>
          </SlideDiv>
        </SwiperSlide>

        <SwiperSlide>
          <SlideDiv image={`url("/assets/cashslider/slide2.png")`}>
            <ShadowDiv>
              <P>ლაშა ლ.</P>
            </ShadowDiv>
          </SlideDiv>
        </SwiperSlide>
      </Swiper>}
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
  @media (min-width: 767px) {
    height: 220px;
    background-image: url("/assets/tablet/tabletshadow.png");
  }
   @media (min-width: 1200px) {
    height: 360px;
  }
`;
const P = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: #ffffff;
`;

const H2andButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 767px) {
     margin-bottom: 24px;
  }
  @media (min-width: 1200px) {
    margin-bottom: 31px;
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
  width: 70%;
  @media (min-width: 767px) {
    font-size: 32px;
    width: calc(100% - 200px);
     margin-bottom: 0px;
  }
`;

const SlideDiv = styled.div<any>`
  width: 100%;
  height: 180px;
  background-image: ${(props) => props.image};
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  @media (min-width: 767px) {
    height: 220px;
  }
  @media (min-width: 1200px) {
    height: 360px;
  }
`;

const ImgShadow = styled.img`
  width: 100%;
  height: 180px;
`;
