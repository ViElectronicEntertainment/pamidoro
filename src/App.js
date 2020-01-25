import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import { pool } from './pool.json';
import PoolForm from './components/PoolForm';
import Login from './components/login';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pool
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  removeTodo(index) {
    if (window.confirm('Estas seguro que deseas eliminar esta tarea?')){
      this.setState({
        pool: this.state.pool.filter((e, i) => {
          return i !== index
        })
      });
    }
    
  }

  handleAddTodo(pool) {
    this.setState({
      pool: [...this.state.pool, pool]
    })
  }

  render() {
    const pool = this.state.pool.map((pool, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-title text-center">
              <h3>{pool.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {pool.priority}
              </span>
            </div>
            <div className="card-body">
              {pool.description}
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}>
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        <Navigation />
        <br />
        <br />
        <br />
        <br />
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <img src={logo} className="App-logo" alt="logo"/>
              <PoolForm onAddTodo={this.handleAddTodo}></PoolForm>
            </div>
            <div className="col-md-8">
              <div className="row">
                {pool}
              </div>
            </div>
          </div>
        </div>
        <Login />
      </div>
    );
  }
}

export default App;
