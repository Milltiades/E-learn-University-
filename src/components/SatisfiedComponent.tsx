import React from "react";
import styled from "styled-components";

export default function SatisfiedComponent() {
  return (
    <MainDiv>
      <BackgroundDiv />
      <Content>
        <H2>ნუ დაკმაყოფილდებით საშუალო დონის მომავლით</H2>
        <P>
          შეურთდით L-earn საზოგადოებას და მიიღეთ პრაქტიკული განათლება, რომელიც
          აუცილებელია დღევანდელ ციფრულ სამყაროში წარმატების მისაღწევად. დაიწყე
          ახლავე!
        </P>
        <PriceP>
          <PriceLeft>₾ 99.99/თვე</PriceLeft>
          <PriceRight>₾ 299.99/თვე</PriceRight>
        </PriceP>
        <Button>შეურთდი</Button>
      </Content>
    </MainDiv>
  );
}


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
font-weight: 500;
font-size: 14px;
line-height: 140%;
text-align: center;
color: #FFFFFF;
margin-top: 32px;
@media (min-width: 767px) {
  font-size: 16px;
  width: 200px;
height: 62px;
}
`

const PriceP = styled.p`
    margin-top: 24px;
    @media (min-width: 767px) {
      margin-top: 32px;
    }
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
margin-left: 8px;
@media (min-width: 767px) {
  font-size: 24px;
  margin-left: 12px;
}
`

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
`
const P = styled.p`
margin-top: 12px;
    font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 150%;
text-align: center;
color: #181818;
@media (min-width: 767px) {
  font-size: 16px;
line-height: 160%;
margin-top: 16px;
}
`

const H2 = styled.h2`
    font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 150%;
text-align: center;
color: #181818;
@media (min-width: 767px) {
  font-size: 32px;
line-height: 140%;
}
`

const MainDiv = styled.div`
  width: 100%;
  position: relative;
  height: 398px;
  margin-top: 80px;
  @media (min-width: 767px) {
    height: 487px;
  }
`;

const BackgroundDiv = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(95.64deg, #276ef1 0.63%, #1bc8c8 100%);
  opacity: 0.1;
  position: absolute;
  top: 0;
  z-index: 0;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 40px 20px;
  position: absolute;
  top: 0;
  z-index: 10;
  @media (min-width: 767px) {
    padding: 80px 40px 60px 40px
  }
`;
