import React, {useState} from 'react';
import { BrowserRouter as Router,
	 Switch,
	 Route,
       } from 'react-router-dom';

import '@trendmicro/react-sidenav/dist/react-sidenav.css'; // temporary styles
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import './App.css';


const Sidebar = () => {
    const [state, setState] = useState(0);
    
    return (
	<div>
	    <SideNav
		onSelect= {(selected) => {
		    // do nothing
		}}
	    >
		<SideNav.Toggle />
		<SideNav.Nav defaultSelected='app'>
		    <NavItem eventKey='app'>
			<NavText>Home</NavText>
		    </NavItem>
		    <NavItem eventKey='app'>
			<NavText>Privacy</NavText>
		    </NavItem>
		    <NavItem eventKey='app'>
			<NavText>About</NavText>
		    </NavItem>
		    <NavItem eventKey='app'>
			<NavText>Logout</NavText>
		    </NavItem>
		</SideNav.Nav>
	    </SideNav>
	</div>
    )
}

const Barside = () => {
    const [state, setState] = useState(0);

    return(
	<div class='App-sidebar'>
	    <div class='Sidebar-element'>
		Home
	    </div>
	    <div class='Sidebar-element'>
		Playlists
	    </div>
	    <div class='Sidebar-element'>
		Privacy
	    </div>
	    <div class='Sidebar-element'>
		More
	    </div>
	    <br/><br/><br/><br/>
	    <div class='Sidebar-element'>
		Logout
	    </div>
	</div>
    )
}

export default Sidebar;
export {Barside};
