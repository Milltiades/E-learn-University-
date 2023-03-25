import React from "react";
import styled from "styled-components";

export default function CoursesComponent() {
  return (
    <MainDiv>
      <H1>კურსები</H1>
      <CoursesDiv>
        <Course1></Course1>
        <Course2></Course2>
        <Course3></Course3>
        <Course4></Course4>
        <Course5></Course5>
        <Course6></Course6>
        <Course7></Course7>
      </CoursesDiv>
    </MainDiv>
  );
}

const CoursesDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const H1 = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 140%;
  color: #181818;
  margin-left: 20px;
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 80px;
`;

const Course1 = styled.div`
  width: 50%;
  height: 135.4px;
  border-right: 1px solid #181818;
  border-bottom: 1px solid #181818;
`;
const Course2 = styled(Course1)`
  border-right: 0px solid #181818;
`;

const Course3 = styled.div`
  width: 50%;
  height: 180px;
  border-bottom: 1px solid #181818;
  border-right: 1px solid #181818; 
`;

const Course4 = styled(Course3)`
  border-right: 0px solid #181818;
`;
const Course5 = styled(Course3)``;
const Course6 = styled(Course4)``;

const Course7 = styled.div`
    width: 100%;
    height: 176px;
    border-bottom: 1px solid #181818;
`
