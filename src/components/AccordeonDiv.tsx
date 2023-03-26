import React, { useState } from "react";
import styled from "styled-components";
import data from "../data.json";

export default function AccordeonDiv() {
  const [clicked, setClicked] = useState(-1);
  const dataArray = [1, 2, 3, 4, 5, 6];

  const handleClick = (index: number) => {
    setClicked(index === clicked ? -1 : index);
  };

  return (
    <MainDiv>
        <H2>ხშირად დასმული კითხვები</H2>
        <Accordeon>
      {data.map((item, index) => {
        return (
          <ContentItem key={index}>
            <ItemHead>
              <H4>{data[index].question}</H4>
              <Button onClick={() => handleClick(index)}>
                {clicked === index ? (
                  <Img src="/assets/minus.svg" alt="" />
                ) : (
                  <Img src="/assets/plus.svg" alt="" />
                )}
              </Button>
            </ItemHead>
            <P style={{ display: clicked === index ? "block" : "none" }}>
            {data[index].answer}
            </P>
          </ContentItem>
        );
      })}
      </Accordeon>
    </MainDiv>
  );
}

const Accordeon = styled.div`
  width: 100%;
  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    
  }
`
const Img = styled.img`
  width: 20px;
  height: 20px;
  @media (min-width: 767px) {
    width: 24px;
    height: 24px;
  }
`

const H4 = styled.h4`
    font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 160%;
color: #181818;
width: calc(100% - 88px);
@media (min-width: 767px) {
  font-size: 20px;
}
`

const H2 = styled.h2`
    font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 140%;
color: #181818;
text-align: center;
margin-bottom: 24px;
@media (min-width: 767px) {
  font-size: 32px;
  text-align: start;
  margin-left:40.48px;
  margin-bottom: 32px
  
  
}
@media (min-width: 1200px) {
  margin-left:0;
}
`
const P = styled.p`
margin-top: 16px;
    font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 150%;
color: #181818;
@media (min-width: 767px) {
  font-size: 16px;
}


`

const Button = styled.button`
  border: none;
  background: transparent;
`;
const MainDiv = styled.div`
  width: 100%;
  margin-top: 80px;
  padding-bottom: 80px;
  @media (min-width: 767px) {
    padding: 0 40px 80px 40px;
  }
  @media (min-width: 1200px) {
    margin-top: 100px;
    padding: 0 80px 80px;
  }
  
`;

const ContentItem = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  border: 1px solid #EBEBEB;
  padding: 24px 20px;
  align-items: center;
  justify-content: center;
  @media (min-width: 767px) {
    min-height: 128px;
    margin-bottom: 16px;
    padding: 32px 40px 32px 32px;
  }
  @media (min-width: 1200px) {
    width: 49.35%;
  }
`;
const ItemHead = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
 
`;
