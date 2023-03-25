import { useState } from 'react'
import { createGlobalStyle } from 'styled-components';
import AboutUsComponent from './components/AboutUsComponent';
import CoursesComponent from './components/CoursesComponent';
import HeaderComponent from './components/HeaderComponent';
import ImproveComponent from './components/ImproveComponent';
import RememberComponent from './components/RememberComponent';
import VideoComponent from './components/VideoComponent';



function App() {


  return (
    <div className="App">
      <GlobalStyles/>
      
      <HeaderComponent/>
      <ImproveComponent/>
      <VideoComponent/>
      <RememberComponent/>
      <AboutUsComponent/>
      <CoursesComponent/>
      
      
      
      
    </div>
  )
}

export default App;

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

`
