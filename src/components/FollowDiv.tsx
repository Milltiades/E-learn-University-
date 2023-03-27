import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";


export default function FollowDiv() {

  const {register, getValues, formState : { errors}, handleSubmit} = useForm<any>();
  const onSubmit = () => {
    console.log(getValues("name"))
  }
  return (
    <MainDiv>
      <BackgroundDiv />
      <Content>
        <H2>გამოიწერე Newsletter!</H2>
        <Form action="" onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="">
            სრული სახელი *
            <Input type="text" placeholder="ნიკა თეთრუაშვილი" {...register("name", { required: "აუცილებლად შესავსები" })}/>
            {errors.name &&  <Error>{errors.name.message}</Error>}
          </Label>

          <Label htmlFor="">
            ელ. ფოსტა *
            <Input type="text" placeholder="nikusha.tetruashvili@gmail.com" {...register("email", { required: "აუცილებლად შესავსები" })}/>
            {errors.email &&  <Error>{errors.email.message}</Error>}
          </Label>
          <Button>Subscribe</Button>
        </Form>
      </Content>
    </MainDiv>
  );
}

const Error = styled.p<any>`
  color: red;
  text-align: center;
  align-self: flex-end;
  position: absolute;
  
  
`

// const SubmitInput = styled.input`
//   width: 100%;
//   background: #1bc8c8;
//   border-radius: 32px;
//   border: none;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   font-style: normal;
//   font-weight: 500;
//   font-size: 14px;
//   line-height: 140%;
//   color: #ffffff;
//   padding: 20px 0;
//   margin-top: 16px;
//   height: 60px;
// `;

const Button = styled.button`
     width: 100%;
  background: linear-gradient(90deg, #276EF1 0%, #1BC8C8 100%);
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
  color: #ffffff;
  padding: 20px 0;
  margin-top: 16px;
  height: 60px;
@media (min-width: 767px) {
  height: 62px;
  font-size: 16px;
}
`

const Form = styled.form`
  width: 100%;
  margin-top: 32px;
  
  @media (min-width: 767px) {
    margin-top: 40px;
  }
`;

const Label = styled.label`
position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #181818;
  @media (min-width: 767px){
    font-size: 16px;
  }
`;

const Input = styled.input`
  width: 100%;
  background: #ffffff;
  border-radius: 32px;
  border: none;
  padding: 20px 0 20px 32px;
  margin-top: 8px;
  margin-bottom: 16px;
  font-size: 14px;
  height: 60px;
  @media (min-width: 767px){
    font-size: 16px;
    height: 62px;
  }
  
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
  @media (min-width: 767px) {
    height: 499px;
     padding: 60px 40px;
  }
  @media (min-width: 1200px) {
    padding: 60px 28%;
  }
`;

const H2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 140%;
  text-align: center;
  color: #181818;
  @media (min-width: 767px) {
    font-size: 32px;
  }
`;

const MainDiv = styled.div`
  width: 100%;
  position: relative;
  height: 430px;
  @media (min-width: 767px) {
    height: 499px;
  }
`;

const BackgroundDiv = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 430px;
  background: linear-gradient(95.64deg, #276ef1 0.63%, #1bc8c8 100%);
  opacity: 0.1;
  z-index: 0;
  @media (min-width: 767px) {
    height: 499px;
  }
`;
