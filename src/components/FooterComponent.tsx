import React from "react";
import styled from "styled-components";

export default function FooterComponent() {
  return (
    <MainDiv>
      <Logo src="/assets/learn-logo.svg" alt="" />
      <IconsDiv>
        <Button>
          <Icon src="assets/smile.svg" alt="" />
        </Button>
        <Button>
          <Icon src="assets/insta.svg" alt="" />
        </Button>
        <Button>
          <Icon src="assets/tiktok.svg" alt="" />
        </Button>
        <Button>
          <Icon src="assets/twitter.svg" alt="" />
        </Button>
        <Button>
          <Icon src="assets/youtube.svg" alt="" />
        </Button>
        <Button>
          <Icon src="assets/linkedin.svg" alt="" />
        </Button>
        <Button>
          <Icon src="assets/fb.svg" alt="" />
        </Button>
      </IconsDiv>
      <Content>
        <H5>გამოყენების პირობები</H5>
        <H5>კონფიდენციალობის წესები</H5>
        <H5Light>© 2023 L-earn</H5Light>
      </Content>
    </MainDiv>
  );
}

const H5Light = styled.h5`
    font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 140%;
color: #181818;
opacity: 0.5;
@media (min-width: 767px) {
  font-size: 16px;
}
`

const H5 = styled.h5`
    font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 140%;
color: #181818;
margin-bottom: 24px;
@media (min-width: 767px) {
  font-size: 16px;
  margin-right: 32px;
}
@media (min-width: 1200px) {
  margin-bottom: 0;
}
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    @media (min-width: 767px) {
      flex-direction: row;
    }
    @media (min-width: 1200px) {
      width: 100%;
      margin-top: 0px;
    }
`

const Button = styled.button`
    border: none;
    background: transparent;
    margin-right: 25px;
    width: 44px;
    margin-bottom: 35px;
`
const Icon = styled.img`
    height: 32px;
`

const IconsDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 39px;
  @media (min-width: 1200px) {
    width: auto;
    flex-wrap: nowrap;
     margin-top: 0;
     align-items: flex-end;
  }
  
`;

const Logo = styled.img`
  width: 185.91px;
  height: 26.09px;
  @media (min-width: 767px) {
    width: 233.38px;
    height: 34.78px;
  }
`;
const MainDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 40px 0 40px 20px;
  border-top: 2.62px solid #276EF1;
  @media (min-width: 767px) {
    padding: 60px 0 60px 40px;
    border-top: 2.57px solid #276EF1;
  }
  @media (min-width: 1200px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 60px 80px;
    justify-content: space-between;
  }
`;
