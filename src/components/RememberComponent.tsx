import React from "react";
import styled from "styled-components";

export default function RememberComponent() {
  return (
    <MainDiv>
      <BackgroundDiv />
      <ContentDiv>
        <H2>გახსოვდეს, რომ მოგება არის სხვაობა შემოსავალსა და ხარჯს შორის</H2>
        <P>
          L-earn დისციპლინით მინიმალური ხარჯებით მაქსიმალურ შემოსავლებს მიიღებ
        </P>
        <p>
          {" "}
          <PriceLeft>₾ 99.99/თვე </PriceLeft>{" "}
          <PriceRight>₾ 299.99/თვე</PriceRight>
        </p>
        <ImgsAndBtn>
          {window.innerWidth > 767 ? (
            <ImgLeft src="/assets/tablet/tabletLeftHand.png" alt="" />
          ) : (
            <ImgLeft src="/assets/leftHand.png" alt="" />
          )}
          <Button>შეურთდი</Button>
          {window.innerWidth > 767 ? (
            <ImgRight src="/assets/tablet/tabletRightHand.png" alt="" />
          ) : (
            <ImgRight src="/assets/rightHand.png" alt="" />
          )}
        </ImgsAndBtn>
      </ContentDiv>
    </MainDiv>
  );
}

const ImgsAndBtn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 21px;
  height: 81px;
  @media (min-width: 767px) {
    margin-top: 0;
    padding: 0 68px;
    height: 159px;
  }
`;
const ImgLeft = styled.img`
  align-self: flex-start;
`;
const ImgRight = styled.img`
  align-self: flex-end;
  @media (min-width: 767px) {
    margin-top: 34px;
  }
`;

const MainDiv = styled.div`
  width: 100%;
  position: relative;
  height: 392px;
  @media (min-width: 767px) {
    height: 419px;
  }
`;

const BackgroundDiv = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 392px;
  background: linear-gradient(95.64deg, #276ef1 0.63%, #1bc8c8 100%);
  opacity: 0.1;
  z-index: 0;
  @media (min-width: 767px) {
    height: 419px;
  }
`;

const ContentDiv = styled.div`
  width: 100%;
  height: 392px;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  position: absolute;
  top: 0;
  overflow: hidden;
  @media (min-width: 767px) {
    padding: 60px 0;
    height: 419px;
  }
`;

const H2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
  color: #181818;
  width: 335px;
  text-align: center;
  @media (min-width: 767px) {
    font-size: 32px;
    width: calc(100% - 80px);
  }
`;

const P = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  text-align: center;
  color: #181818;
  margin-top: 12px;
  margin-bottom: 24px;
  @media (min-width: 767px) {
    font-size: 16px;
    margin-top: 16px;
  }
`;

const PriceLeft = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 140%;
  text-align: center;
  color: #181818;
  @media (min-width: 767px) {
    font-size: 32px;
  }
`;
const PriceRight = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  text-align: center;
  text-decoration-line: line-through;
  color: #181818;
  opacity: 0.5;
  margin-left: 2px;
  @media (min-width: 767px) {
    font-size: 24px;
    margin-left: 6px;
  }
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 32px;
  width: 161px;
  height: 60px;
  background: #276ef1;
  border-radius: 32px;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  text-align: center;
  color: #ffffff;
  @media (min-width: 767px) {
    margin-top: 20px;

    font-size: 16px;
    width: 200px;
    height: 62px;
  }
`;
