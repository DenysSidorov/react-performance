import React, { Component } from 'react';
import InputNew from './todo-input/input-new';
import TodoItem from './todo-item';

class Todo extends Component {
  render() {
    return (
      <div className="todo">
        <InputNew/>

        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </div>
    );
  }
}

export default Todo;
