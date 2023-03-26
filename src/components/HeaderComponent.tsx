import React from "react";
import styled from "styled-components";

export default function HeaderComponent() {
  return (
    <Header>
      <Button>
        <BurgerImg src="/assets/burger.svg" alt="" />
      </Button>
      <LogoImg src="/assets/learn-logo.svg" alt="" />
      <Ul>
        <Li>ჩვენს შესახებ</Li>
        <Li>მიმოხილვა</Li>
        <Li>FAQ</Li>
      </Ul>
    </Header>
  );
}


const Ul = styled.ul`
  display: none;
  @media (min-width: 767px){
    display: flex;
    flex-direction: row;
    align-items: center;
    width: calc(100% - 416px);
    justify-content: space-between;
    margin-left: 40px;
    cursor: pointer;
  }
`

const Li = styled.li`
  font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 140%;
color: #181818;
list-style: none;
`
const Header = styled.div`

  width: 100%;
  padding: 32px 20px;
  background: white;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (min-width:767px){
    padding: 52px 42px;
  }
`;
const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.3 ease;
  @media (min-width:767px){
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
margin-left: 25.33px;
@media (min-width:767px){
  margin-left: 1.33px;
}
`;
