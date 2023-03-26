import React, { useRef, useState } from "react";
import styled from "styled-components";

export default function HeaderComponent({
  click,
  setClick,
 
}: {
  click: any;
  setClick: any;
 
}) {

  function handleClick() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  
  return (
    <Header
    center={click ? "flexStart" : "center"}
    height={click ? "100vh" : "autopx"}>
      <Ul>
        <Li onClick={() => {
          console.log("click")
          setClick(false);
          setTimeout(() => {
            window.scrollTo({top: 1900, behavior: 'smooth'})
          }, 100)
        }}>ჩვენს შესახებ</Li>
        <Li 
         onClick={() => {
          console.log("click")
          setClick(false);
          setTimeout(() => {
            window.scrollTo({top: 2520, behavior: 'smooth'})
          }, 100)
        }}
        >მიმოხილვა</Li>
        <Li
         onClick={() => {
          console.log("click")
          setClick(false);
          setTimeout(() => {
            window.scrollTo({top: 4700, behavior: 'smooth'})
          }, 100)
        }}
        >FAQ</Li>
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
          <LiMobile onClick={() => {
          console.log("click")
          setClick(false);
          setTimeout(() => {
            window.scrollTo({top: 1600, behavior: 'smooth'})
          }, 100)
        }}
          >ჩვენს შესახებ</LiMobile>
          <LiMobile
          onClick={() => {
            console.log("click")
            setClick(false);
            setTimeout(() => {
              window.scrollTo({top: 2500, behavior: 'smooth'})
            }, 100)
          }}
          >მიმოხილვა</LiMobile>
          <LiMobile style={{marginBottom:"0"}}
          onClick={() => {
            console.log("click")
            setClick(false);
            setTimeout(() => {
              window.scrollTo({top: 4400, behavior: 'smooth'})
            }, 100)
          }}
          >FAQ</LiMobile>
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
cursor: pointer;
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
  cursor: pointer;
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
  height: 25px;
  @media (min-width: 767px) {
    display: none;
  }
`;
const BurgerImg = styled.img`
  width: 32px;
  height: 25px;
 
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
