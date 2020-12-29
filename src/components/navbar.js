import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <div className="navbar-buttons">
                    <Link to="/photo/new" className="btn">New Photo</Link>
                    <Link to="/album/new" className="btn">New Album</Link>
                </div>
            
                <Link to="/">Photo Stream</Link> &nbsp;
                <Link to="/album">Album</Link>

                <div style={{clear: 'both'}}></div>
            </nav>
        );
    }
}