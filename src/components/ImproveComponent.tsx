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
      <DivImg>
        <DolarImg src="/assets/dolar-img.png" alt="" />
      </DivImg>
    </MainDiv>
  );
}
const DivImg = styled.div`
position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
`
const DolarImg = styled.img`
    width: 100%;
    position: absolute;
    top: -230px;
`

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
  margin-top: 24px;
`;

const Span = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  color: #276ef1;
`;

const P = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #181818;
  text-align: left;
  margin-top: 8px;
`;

const H1 = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 150%;
  text-align: left;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 20px 40px 20px;
`;

const MainDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
