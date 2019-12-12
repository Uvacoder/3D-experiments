import React from 'react'
import styled from 'styled-components'

const About = styled.div`
  max-width: 600px;
  width: 100%;
`

const Title = styled.h1`
  font-size: 34px;
`

const Text = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
`

const Intro = () => (
  <About>
    <Title>3D Experiments</Title>
    <Text>
      This is a place where I post sketches and experiments while learning
      THREE.js.
    </Text>
  </About>
)

export default Intro
