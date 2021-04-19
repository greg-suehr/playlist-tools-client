import React from 'react';
import {Sidebar, Barside} from './Sidebar';

import logo from './icon-green.png';
import './App.css';

const query = window.matchMedia(`(min-width: 800px)`);

class Playlists extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    sidebarDocked: query.matches,
	    sidebarOpen: false
	};

	this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
	this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    };

    componentWillMount() {
	query.addListener(this.mediaQueryChanged);
    }

    componentWillUnmount() {
	query.removeListener(this.mediaQueryChanged);
    }

    mediaQueryChanged() {
	this.setState({ sidebarDocked: query.matches, sidebarOpen: false })
    }
    
    onSetSidebarOpen() {
	this.setState( { sidebarOpen: true })
    }

    render() {
	return (
            <div className="App-body">
		{
		    // <Sidebar />
		}
		 <Barside />   
		<p>
                    More stuff down here!
		</p>
	    </div>
	);
    };
};
    
export default Playlists;
