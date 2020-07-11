import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar2 } from './components/NavigationBar2';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				{/* Implementasi Router */}
				<Router>
					<NavigationBar2 />					
					<Layout>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/about" component={About} />							
							<Route component={NoMatch} />
						</Switch>
					</Layout>
				</Router>				
			</React.Fragment>
		);
	}
}

export default App;
