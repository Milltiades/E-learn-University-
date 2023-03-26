import React from "react";
import styled from "styled-components";

export default function ImproveComponent() {
  return (
    <MainDiv>
      <Content>
        <H1>
          გააუმჯობესე უნარები და გაზარდე შემოსავალი <br />
          L-earn პროგრამით
        </H1>
        <P>
          <Span>639+</Span> სტუდენტი უკვე ცხოვრობს L-earn დისციპლინით
        </P>
        <Button>შეურთდი</Button>
      </Content>
      <DivImg display={window.innerWidth > 1200 ? "none" : "flex"}>
        {window.innerWidth > 767 ? (
          <DolarImg src="/assets/tablet/tabletDolar.png" alt="" />
        ) : (
          <DolarImg src="/assets/dolar-img.png" alt="" />
        )}
      </DivImg>
      {/* <DesktopBackground/> */}
      <DesktopImg src="/assets/desktop/desktopbackground.png" alt="" />
    </MainDiv>
  );
}

const DesktopImg = styled.img`
  display: none;
  position: absolute;
  right: 0;
  top: 0;
  @media (min-width: 1200px) {
    display: flex;
    height: 534px;
  }
  @media (min-width: 1439px) {
    height: 544px;
  }
  @media (min-width: 1800) {
    height: 634px;
  }
`
const DesktopBackground = styled.div`
  width: 100vw;
z-index: 10000;
  top: -100px;
  height: 634px;
  /* transform: translateY(-100px); */
position: relative;
  background-image: url("assets/desktop/desktopbackground.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: right;
`;
const DivImg = styled.div<any>`
  display: ${(props) => props.display};
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  @media (min-width: 767px) {
    height: 294px;
  }
`;
const DolarImg = styled.img`
  width: 100%;
  position: absolute;
  top: -230px;
  @media (min-width: 767px) {
    top: -380px;
  }
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 32px;
  width: 200px;
  height: 60px;
  background: #276ef1;
  border-radius: 32px;
  border: none;
  color: white;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  margin: 24px auto 0;
  transition: all 0.3s ease;
  &:hover {
    background: #1350c2;
  }
  @media (min-width: 767px) {
    margin: 32px 0 0;
  }
`;

const Span = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  color: #276ef1;
  @media (min-width: 767px) {
    font-size: 32px;
  }
`;

const P = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #181818;
  text-align: center;
  margin-top: 8px;
  @media (min-width: 767px) {
    font-size: 16px;
    text-align: left;
  }
`;

const H1 = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 150%;
  text-align: center;
  @media (min-width: 767px) {
    font-size: 3rem;
    line-height: 150%;
    text-align: left;
  }
  @media (min-width: 1200px) {
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 20px 40px 20px;
position: relative;
  @media (min-width: 767px) {
    padding: 8px 40px 40px 42px;
  }
  @media (min-width: 1200px) {
    width: 50vw;
    padding: 36px 0 0 80px;
    z-index: -2000;
    
   
  }
`;

const MainDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 1200px) {
    flex-direction: row;
    
  }
`;
