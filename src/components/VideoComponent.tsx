import React from "react";
import styled from "styled-components";
import SmileIcons from "../SmileIcons";

export default function VideoComponent() {
  return (
    <MainDiv>
      <H2>როდესაც გჯერა, რომ რაღაც შესაძლებელია, შანსები იზრდება</H2>
      <VideoDiv>
        <Circle>
          <img src="/assets/play.svg" alt="" />
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

const IconButton = styled.button`
    border: none;
    background: transparent;
`

const IconsDivUp = styled.div`
    padding: 0 41.18px 0 41.63px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const IconsDivDown = styled.div`
    padding: 0 88.18px 0 81.29px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 46.94px;
`
const IconsDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 62px;
`

const H2 = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
  color: #181818;
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 60px 20px 64px 20px;
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
  
`;


