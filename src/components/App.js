import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// Components
import Main from './Main'
import Title from './Title'
import Sidebar from './Sidebar'
import Container from './Container'
import GlobalStyle from './Global'

// Experiments
import FrontPage from '../experiments/FrontPage'
import SimpleCube from '../experiments/SimpleCube'

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
							<Route path='/' exact component={FrontPage} />
							<Route path='/simple-cube' component={SimpleCube} />
						</Switch>
					</Main>
				</Router>
			</Container>
		</>
	)
}

export default App
