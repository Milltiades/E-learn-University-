import React, { useRef } from "react";
import styled from "styled-components";

export default function AboutUsComponent(
  
) {

  const refUs = useRef<any>()
  return (
    <MainDiv ref={refUs}>
      <Content>
        <H2>რა არის L-earn?</H2>
        <P>
          L-earn ეს არის საზოგადოება, სადაც შეგიძლიათ არა მხოლოდ დახვეწოთ თქვენი
          უნარები, არამედ მიიღოთ სერიოზული ფულადი შემოსავლები. ჩვენი პრაქტიკული
          სწავლების ტექნიკით, თქვენ შეგიძლიათ დაეუფლოთ ბაზრის ყველაზე მოთხოვნად
          პროფესიებს და გაეცნოთ მზარდ ინდუსტრიებს, როგორიც არის: Trading, Crypto
          & NFT, E-Commerce, Video Editing, Copywriting და უახლესი AI
          ინსტრუმენტები.
          <br />
          <br />
          შესანიშნავი დროა საკუთარ თავში ინვესტირებისთვის არის ახლა, და არ
          არსებობს უკეთესი გზა დასაწყებად, ვიდრე L-earn საზოგადოებაში
          გაწევრიანება.
          <br />
          <br />
          გადადგით პირველი ნაბიჯი ფინანსური ტრიუმფისკენ და ნახავთ, როგორ
          შეგვიძლია დაგეხმაროთ თქვენი მომავლის ჩამოყალიბებაში.
        </P>
        <Button>შემოგვიერთდი</Button>
      </Content>
      <DivImg />
    </MainDiv>
  );
}

const DivImg = styled.div`
  width: 100%;
  height: 240px;
  background-image: url("/assets/mobileroom.png");
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 32px;
  @media (min-width: 767px) {
    background-image: url("/assets//tablet/tabletRoom.png");
    height: 340px;
    margin-top: 40px;
  }
  @media (min-width: 1200px) {
    height: 573px;
    background-image: url("/assets//desktop/desktopRoom.png");
    margin-top: 0;
  }
`;
const Button = styled.button`
  width: 200px;
  height: 60px;
  background: linear-gradient(90deg, #276ef1 0%, #1bc8c8 100%);
  border-radius: 32px;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  color: #ffffff;
  margin-top: 24px;
  transition: all .3s ease;
  &:hover {
    background: linear-gradient(90deg, #1350C2 0%, #159595 100%);
  }
  @media (min-width: 767px) {
    margin-top: 32px;
  }
`;

const MainDiv = styled.div`
  width: 100%;
  @media (min-width: 1200px) {
    padding: 0 80px;
    display: flex;
    flex-direction: row;
    margin-top: 100px;
  }
`;

const Content = styled.div`
  width: 100%;
  padding: 80px 20px 0 20px;
  @media (min-width: 767px) {
    padding: 80px 39.52px 0 40.48px;
  }
  @media (min-width: 1200px) {
    padding: 40px 16px 0 0;
  }
`;

const H2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 140%;
  color: #181818;
  @media (min-width: 767px) {
    font-size: 32px;
  }
`;

const P = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: #181818;
  margin-top: 8px;
  @media (min-width: 767px) {
    font-size: 16px;
    margin-top: 16px;
  }
`;
