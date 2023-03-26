import React from "react";
import styled from "styled-components";
import SmileIcons from "../SmileIcons";

export default function VideoComponent() {
  return (
    <MainDiv>
      <H2>როდესაც გჯერა, რომ რაღაც შესაძლებელია, შანსები იზრდება</H2>
      <VideoDiv>
        <Circle>
          <PlayIcon src="/assets/play.svg" alt="" />
        </Circle>
      </VideoDiv>
      <IconsDiv>
        <IconsDivUp>
            <IconButton>
                <img src="/assets/smile.svg" alt="" />
            </IconButton>
            <IconButton>
                <img src="/assets/insta.svg" alt="" />
            </IconButton>
            <IconButton>
                <img src="/assets/tiktok.svg" alt="" />
            </IconButton>
            <IconButton>
                <img src="/assets/twitter.svg" alt="" />
            </IconButton>
        
           
        </IconsDivUp>
        <IconsDivDown>
        <IconButton>
                <img src="/assets/youtube.svg" alt="" />
            </IconButton>
            <IconButton>
                <img src="/assets/linkedin.svg" alt="" />
            </IconButton>
            <IconButton>
                <img src="/assets/fb.svg" alt="" />
            </IconButton>
           
        </IconsDivDown>
      </IconsDiv>
    </MainDiv>
  );
}

const PlayIcon = styled.img`
  width: 18.67px;
  height: 21.33px;
  @media (min-width: 767px) {
    width: 23.33px;
    height: 26.67px;
  }
`
const IconButton = styled.button`
    border: none;
    background: transparent;
`

const IconsDivUp = styled.div`
    padding: 0 41.18px 0 41.63px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
     @media (min-width: 767px) {
      padding: 0;
      width: calc(100% - 100px);
      margin-right: 44px;
      align-items: flex-end;
    }
     @media (min-width: 1200px) {
      margin-right: 33px;
    }
`
const IconsDivDown = styled.div`
    padding: 0 88.18px 0 81.29px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 46.94px;
    @media (min-width: 767px) {
      padding: 0;
      margin-top: 0;
      width: calc(100% - 240px);
      align-items: flex-end;
    }
     @media (min-width: 1200px) {
      width: 50%;
    }
`
const IconsDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 60px;
     @media (min-width: 767px) {
      margin: 0 auto;
      flex-direction:row;
      justify-content: space-between;
      align-items: center;
      width: calc(100% - 220px);
      align-items: flex-end;
    }
    @media (min-width: 1200px) {
      width: 30%;
    }
   
`

const H2 = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: #181818;
  text-align: center;
  @media (min-width: 767px) {
    font-size: 32px;
    text-align: left;
  }
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 60px 20px 64px 20px;
  @media (min-width: 767px) {
    padding: 80px 39.52px 64px 40.48px;
  }
  @media (min-width: 1200px) {
    padding: 100px 80px 60px 80px;
    margin-top: 55px;
  }
 
`;

const VideoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
  width: 100%;
  height: 180px;
  background: black;
  @media (min-width: 767px) {
    margin-top: 24px;
    height: 320px;
  }
  @media (min-width: 1200px) {
    height: 520px;
  }
`;

const Circle = styled.div`
  width: 53.33px;
  height: 53.33px;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background:#666666;
  mix-blend-mode: normal;
  position: relative;
  @media (min-width: 767px) {
    width: 66.67px;
    height: 66.67px;
  }
  
`;


