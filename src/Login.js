import React from 'react';
import { Link } from 'react-router-dom';

import logo from './icon-green.png';
import './App.css';

class Login extends React.Component {
    constructor(props) {
	super(props)
    }
    
    render() {
	return (
            <header className="App-header">
		<img src={logo} className="App-logo" alt="logo" />
		<p>
                    Great stuff coming soon!
		</p>
		<Link
		    className="App-link"
		    to="/app"
		>
                    Login
		</Link>
	    </header>
	);
    }
}

export default Login;
