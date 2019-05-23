import React, { Component } from 'react';
import InputNew from './todo-input/input-new';
import TodoCount from './todo-input/todo-count';

class Todo extends Component {
  render() {
    return (
      <div className="todo">
        <InputNew/>
        <TodoCount/>
      </div>
    );
  }
}

export default Todo;
