import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import { pool } from './pool.json';
console.log(pool);

class App extends Component {
  constructor() {
    super();
    this.state = {
      pool
    }
  }
  render() {
    const pool = this.state.pool.map((pool, i) => {
      return (
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{pool.title}</h3>
            </div>
            <div className="card-body">
              <span className="font-weight-bold">Responsable</span>
              <p>{pool.responsible}</p>
              <span className="font-weight-bold">Descripción</span>
              <p>{pool.description}</p>
              <span className="badge badge-pill badge-danger ml-2"> {pool.priority}</span>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        <Navigation />

        <div className="container">
          <div className="row mt-4">
            {pool}
          </div>
        </div>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Pamidoro Ama React.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aprende React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
