import React, {Component} from 'react';
import logo from '../logo.svg';

class Navigation extends Component{
    render(){
        return(
        <nav className="navbar fixed-top navbar-dark bg-dark">
            <a className="navbar-brand" href="#top">
                <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="logo"/>
                Pamidoro
            </a>
        </nav>
        )
    }
}

export default Navigation;