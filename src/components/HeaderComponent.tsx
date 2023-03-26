import React, { useState } from "react";
import styled from "styled-components";

export default function HeaderComponent({
  click,
  setClick,
}: {
  click: any;
  setClick: any;
}) {
  return (
    <Header
    center={click ? "flexStart" : "center"}
    height={click ? "100vh" : "auto"}>
      <Ul>
        <Li>ჩვენს შესახებ</Li>
        <Li>მიმოხილვა</Li>
        <Li>FAQ</Li>
      </Ul>
      <Button onClick={() => setClick(!click)}>
        {click ? (
          <BurgerImg src="/assets/x.svg" alt="" />
        ) : (
          <BurgerImg src="/assets/burger.svg" alt="" />
        )}
      </Button>
      <LogoImg src="/assets/learn-logo.svg" alt="" />
      
        <UlMobile display={click? "block" : "none"}>
          <LiMobile>ჩვენს შესახებ</LiMobile>
          <LiMobile>მიმოხილვა</LiMobile>
          <LiMobile style={{marginBottom:"0"}}>FAQ</LiMobile>
        </UlMobile>
      
    </Header>
  );
}

const UlMobile = styled.ul<any>`
display: ${(props) => props.display};
  position: absolute;
  right: 50%;
  top: 50%;
  transform: translate(50%, -50%);
  width: 100%;
`

const LiMobile = styled.li`
  font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 150%;
text-align: center;
color: #181818;
list-style: none;
margin-bottom: 80px;
`

const Ul = styled.ul`
  display: none;
  @media (min-width: 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: calc(100% - 376px);
    justify-content: space-between;
    position: relative;
    left: 162px;
    cursor: pointer;
  }
  @media (min-width: 1200px) {
    padding: 40px 80px;
    width: 30%;
  }
  @media (min-width: 1200px) {
    padding: 0 ;
  }
`;

const Li = styled.li`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #181818;
  list-style: none;
`;
const Header = styled.div<any>`
  position: relative;
  width: 100%;
  padding: 32px 20px;
  background: white;
  display: flex;
  flex-direction: row-reverse;
  align-items: ${(props) => props.center};
  height: ${(props) => props.height};
  @media (min-width: 767px) {
    padding: 52px 42px;
    flex-direction: row;
  }
  @media (min-width: 1200px) {
    padding: 40px 80px;
  }
`;
const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.3 ease;
  height: 20px;
  @media (min-width: 767px) {
    display: none;
  }
`;
const BurgerImg = styled.img`
  width: 32px;
  height: 25px;
  z-index: 1000;
 
`;

const LogoImg = styled.img`
  width: 118.67px;
  height: 19.57px;
  right: 50%;
  transform: translateX(50%);
  position: absolute;
  @media (min-width: 767px) {
    left: 0;
    transform: translateX(40px);
  }
  @media (min-width: 1200px) {
    transform: translateX(80px);
  }
`;
