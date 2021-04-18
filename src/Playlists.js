import React from 'react';
import Sidebar from 'react-sidebar';

import List from './List';

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
		<div className="App-sidebar"> 
		<Sidebar
		    sidebar={ <List /> }
		    open={this.state.sidebarOpen}
		    docked={this.state.sidebarDocked}
		    onSetOpen={this.state.onSetOpen}
		/>
		</div>
		<p>
                    More stuff down here!
		</p>
	    </div>
	);
    };
};
    
export default Playlists;
