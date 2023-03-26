import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import AboutUsComponent from "./components/AboutUsComponent";
import AccordeonDiv from "./components/AccordeonDiv";
import CashSlider from "./components/CashSlider";
import CoursesComponent from "./components/CoursesComponent";
import FollowDiv from "./components/FollowDiv";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ImproveComponent from "./components/ImproveComponent";
import LineComponent from "./components/LineComponent";
import RememberComponent from "./components/RememberComponent";
import ReviewSlider from "./components/ReviewSlidet";
import SatisfiedComponent from "./components/SatisfiedComponent";
import VideoComponent from "./components/VideoComponent";

function App() {
  const [click, setClick] = useState<boolean>(false);

  return (
    <div className="App">
      <GlobalStyles />

      <HeaderComponent click={click} setClick={setClick} />
      <MainDiv display={click ? "none" : "block"}>
        <ImproveComponent />
        <VideoComponent />
        <RememberComponent />
        <AboutUsComponent />
        <CoursesComponent />
        <CashSlider />
        <SatisfiedComponent />
        <ReviewSlider />
        <AccordeonDiv />
        <FollowDiv />
        <FooterComponent />
      </MainDiv>
    </div>
  );
}

export default App;

const MainDiv = styled.div<any>`
  display: ${(props) => props.display};
`;

const GlobalStyles = createGlobalStyle`
  :root {
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
 
}


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'FiraGO', sans-serif;
}

body {
  min-width: 320px;
  min-height: 100vh;
  background: white
}

button {
  transition: all .3s;
  cursor: pointer;
}
.swiper-wrapper {
  width: 100vw;
} 
.swiper  {
  width: 100%;
} 

`;
