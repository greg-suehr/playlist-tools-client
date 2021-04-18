import React from 'react';
import { BrowserRouter as Router,
	 Switch,
	 Route,
	 Redirect,
       } from 'react-router-dom';

import Login from './Login';
import Playlists from './Playlists';

import logo from './icon-green.png';
import './App.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false
        };
    };
    
    render() {
	return (
	    <div className="App">
		<Router>
		    <Switch>
			<Route path="/login">
			    <Login />
			</Route>
			<Route path="/app">
			    <Playlists />
			</Route>
			<Route path="/">
			    {this.authenticated ? <Redirect to="/login" /> : <Redirect to="/app" />}
			</Route>
		    </Switch>
		</Router>
	    </div>
	);
    };
};

export default App;
