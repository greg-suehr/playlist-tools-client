import React, {useState} from 'react';
import { BrowserRouter as Router,
	 Switch,
	 Route,
       } from 'react-router-dom';

const my_playlists = ['goblin ?', 'my p2', 'becca'];

const ListItem = ({label, path}) => <Route class='List-item' path={path}>{label}</Route>

const List = () => {
    const [state, setState] = useState(0);

    const ListItems = my_playlists.map((playlist) =>
	<ListItem label={playlist} path = 
    
    return (
	<div >
	    
	</div>
    )
}

export default List
