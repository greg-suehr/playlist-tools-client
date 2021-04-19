import React, {useState} from 'react';

import 'App.css';


const my_playlists = [{ 'id': 1,
			'name': 'goblin ?'
		      },
		      {	'id': 2,
			'name': 'my p2'
		      },
		      { 'id': 3,
			'name': 'becca'
		      }
		      ];

const Scroll = () => {
    const [state, setState] = useState(0);

    const ListItems = my_playlists.map((playlist) =>
	<Switch>
	    <ListItem label={playlist.name} path='/app/playlists/{playlist.name}' />
	</Switch>
    );
    
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

export default Scroll
