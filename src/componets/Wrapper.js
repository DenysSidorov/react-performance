import React, {Component} from 'react';
import Clock from './clock/clock';
import Todo from './todo';

class Wrapper extends Component {
  render() {
    return (
      <div className="wrapper">
        <Todo/>
        <Clock/>

      </div>
    );
  }
}

export default Wrapper;
