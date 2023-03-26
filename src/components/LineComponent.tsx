import React from 'react'
import styled from 'styled-components'

export default function LineComponent() {
  return (
    <Line/>
  )
}



const Line = styled.div`
    background: #276EF1;
    width: 100%;
height: 2.62px;
@media (min-width: 767px) {
  height: 2.57px;
}
`