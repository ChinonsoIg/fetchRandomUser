import React, { Component } from 'react';
import './App.css';
import FetchDog from './doggo';

function NavBar() {
  return (
    <div className="navwrapper">
      <div className="navbar">
        <div className="heading">
          <h1>This is My React Doggo App</h1>
          <h3>Want to buy dog? But finding it difficult to make a choice, flip through these pictures and pick one! <br /><br />Good Luck!!</h3>
        </div>
        <div className="search">
          <input type="text" placeholder="Search" />
          <button id="fetch">Fetch</button>
        </div>
      </div>
    </div>
  );
}

function DisplayArea() {
  return (
    <div>
      <FetchDog />
    </div>
  );
}

class App extends Component {
  render() {
    return(
      <div>
        <NavBar />
        <DisplayArea />
      </div>
    )
  }
}

export default App;
