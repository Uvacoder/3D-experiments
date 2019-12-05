import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// Components
import Main from './Main'
import Title from './Title'
import Sidebar from './Sidebar'
import Container from './Container'
import GlobalStyle from './Global'

// Experiments
import Intro from '../experiments/Intro'
import Cube from '../experiments/Cube'

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Container>
				<Router>
					<Sidebar>
						<Title>
							<Link to='/'>3D Experiments</Link>
						</Title>

						<Link to='/simple-cube'>Simple Cube</Link>
					</Sidebar>
					<Main>
						<Switch>
							<Route path='/' exact component={Intro} />
							<Route path='/simple-cube' component={Cube} />
						</Switch>
					</Main>
				</Router>
			</Container>
		</>
	)
}

export default App
