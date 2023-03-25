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
      {data.map((item, index) => {
        return (
          <ContentItem key={index}>
            <ItemHead>
              <H4>{data[index].question}</H4>
              <Button onClick={() => handleClick(index)}>
                {clicked === index ? (
                  <img src="/assets/minus.svg" alt="" />
                ) : (
                  <img src="/assets/plus.svg" alt="" />
                )}
              </Button>
            </ItemHead>
            <P style={{ display: clicked === index ? "block" : "none" }}>
            {data[index].answer}
            </P>
          </ContentItem>
        );
      })}
    </MainDiv>
  );
}

const H4 = styled.h4`
    font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 160%;
color: #181818;
width: calc(100% - 88px);
`

const H2 = styled.h2`
    font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 140%;
color: #181818;
text-align: center;
margin-bottom: 24px;
`
const P = styled.p`
margin-top: 16px;
    font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 150%;
color: #181818;
`

const Button = styled.button`
  border: none;
  background: transparent;
`;
const MainDiv = styled.div`
  width: 100%;
  margin-top: 80px;
  
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
`;
const ItemHead = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
 
`;
