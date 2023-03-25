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
          <PriceLeft>₾ 99.99/თვე </PriceLeft> <PriceRight>₾ 299.99/თვე</PriceRight>
        </p>
        <ImgsAndBtn>
        <ImgLeft src="/assets/leftHand.png" alt="" />
            <Button>შეურთდი</Button>
            <ImgRight src="/assets/rightHand.png" alt="" />
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
    
`
const ImgLeft = styled.img`
    align-self: flex-start;
`
const ImgRight = styled.img`
    align-self: flex-end;
`

const MainDiv = styled.div`
  width: 100%;
  position: relative;
  height: 392px;
 
`;

const BackgroundDiv = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 392px;
  background: linear-gradient(95.64deg, #276ef1 0.63%, #1bc8c8 100%);
  opacity: 0.1;
  z-index: 0;
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
`;

const H2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
  color: #181818;
  width: 335px;
  text-align: center;
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
`;

const PriceLeft = styled.span`
    font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 140%;
text-align: center;
color: #181818;
`
const PriceRight = styled.span`
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 140%;
text-align: center;
text-decoration-line: line-through;
color: #181818;
opacity: 0.5;
`

const Button = styled.button`
    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 20px 32px;
width: 161px;
height: 60px;
background: #276EF1;
border-radius: 32px;
border: none;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 140%;
text-align: center;
color: #FFFFFF;

`