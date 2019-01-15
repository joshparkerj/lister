import React, { Component } from 'react';
import Droppable from './comp/Droppable';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Droppable key="fox"
          content="The quick brown fox leaps over the melted zamboni" />
        <Droppable key="yoda"
          content="Do or do not, there is no dark side leading to me" />
        <Droppable key="dresden"
          content="some kinda butchered quote or something" />
      </div>
    );
  }
}

export default App;
