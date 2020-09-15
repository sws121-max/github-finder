import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import NotFound from './components/Pages/NotFound';
import GithubState from './context/github/GithubState';
import AlertState from './context/Alert/AlertState';
import './App.css';
const App = () => {
	// state = {
	// 	users: [],
	// 	user: {},
	// 	repos: [],
	// 	loading: false,
	// 	alert: null,
	// };
	// async componentDidMount() {
	// 	this.setState({ loading: true });
	// 	const res = await axios.get(`https://api.github.com/users?client_id=$
	// 	{process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.REACT_APP_GITHUB_CLIENT_SECRET}`);
	// 	this.setState({ users: res.data, loading: false });
	// }

	return (
		<GithubState>
			<AlertState>
				<Router>
					<div className="App">
						<NavBar />

						<div className="container">
							<Alert />
							<Switch>
								<Route exact path="/" component={Home} />
								<Route exact path="/about" component={About} />
								<Route exact path="/user/:login" component={User} />
								<Route component={NotFound} />
							</Switch>
						</div>
					</div>
				</Router>
			</AlertState>
		</GithubState>
	);
};

export default App;
