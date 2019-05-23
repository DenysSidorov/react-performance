import React, { Component } from 'react';
import Clock from './clock/clock';
import Todo from './todo';

class Wrapper extends Component {
  render() {
    return (
      <div className="wrapper">
          <Clock/>
          <Todo/>
      </div>
    );
  }
}

export default Wrapper;
