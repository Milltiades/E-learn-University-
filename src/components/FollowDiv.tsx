import React from "react";
import styled from "styled-components";

export default function FollowDiv() {
  return (
    <MainDiv>
      <BackgroundDiv />
      <Content>
        <H2>გამოიწერე Newsletter!</H2>
        <Form action="">
          <Label htmlFor="">
            სრული სახელი *
            <Input type="text" placeholder="ნიკა თეთრუაშვილი" />
          </Label>

          <Label htmlFor="">
            ელ. ფოსტა *
            <Input type="text" placeholder="nikusha.tetruashvili@gmail.com" />
          </Label>
          <SubmitInput type="submit" />
        </Form>
      </Content>
    </MainDiv>
  );
}

const SubmitInput = styled.input`
    width: 100%;
    background: #1BC8C8;
  border-radius: 32px;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 140%;
color: #FFFFFF;
padding: 20px 0;
margin-top: 16px;
  
`

const Form = styled.form`
  width: 100%;
  margin-top: 32px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #181818;
`;

const Input = styled.input`
  width: 100%;
  background: #ffffff;
  border-radius: 32px;
  border: none;
  padding: 20px 0 20px 32px;
  margin-top: 8px;
  margin-bottom: 16px;
`;

const Content = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  height: 430px;
  z-index: 10;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
`;

const H2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 140%;
  text-align: center;
  color: #181818;
`;

const MainDiv = styled.div`
  width: 100%;
  position: relative;
  height: 430px;
`;

const BackgroundDiv = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 430px;
  background: linear-gradient(95.64deg, #276ef1 0.63%, #1bc8c8 100%);
  opacity: 0.1;
  z-index: 0;
`;
