import React from "react";
import styled from "styled-components";

export default function HeaderComponent() {
  return (
    <Header>
      <Button>
        <BurgerImg src="/assets/burger.svg" alt="" />
      </Button>
      <LogoImg src="/assets/learn-logo.svg" alt="" />
    </Header>
  );
}

const Header = styled.div`

  width: 100%;
  padding: 32px 20px;
  background: white;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.3 ease;
`;
const BurgerImg = styled.img`
  width: 32px;
  height: 25px;
`;

const LogoImg = styled.img`
width: 118.67px;
height: 19.57px;
margin-left: 25.33px;
`;
