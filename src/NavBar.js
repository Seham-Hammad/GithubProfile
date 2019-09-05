import React from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends React.Component {

    render() {
        return (
            <div>
                <NavLink to='/'> Home</NavLink>
                <NavLink to='/user'>User</NavLink>
                <NavLink to='/repos'>Repos</NavLink>
                
            </div>
             
    );
    }
}