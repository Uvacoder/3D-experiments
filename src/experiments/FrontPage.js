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
		<Title>Hello World</Title>
		<Text>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
			veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
			commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
			velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
			cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
			est laborum.
		</Text>
	</About>
)

export default Intro
