import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <div className="navbar-buttons">
                    <Link to="/photo/new" className="btn">New Photo</Link>
                </div>
            
                <h1><Link to="/"><img src={logo} alt="Test" width="50" height="50" />Homepage</Link></h1>
            </nav>
        );
    }
}