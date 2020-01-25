import React, { Component } from 'react';
import logo from '../logo.svg';
import Login from './login';

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                <a className="navbar-brand" href="#top">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="logo" />
                    Pamidoro
            </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#top">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#top"> Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/ViElectronicEntertainment/pamidoro" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <Login />
                </span>
                </div>
            </nav>
        )
    }
}

export default Navigation;