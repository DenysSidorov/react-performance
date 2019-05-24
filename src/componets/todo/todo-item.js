import React, {Component} from 'react';
import TodoCount from "./todo-input/todo-count";

class Todo extends Component {
  render() {
    return (
      <div className="todoItem">
        <TodoCount count={4}/>
        <span className="todoItem_text">text</span>
        <span className="todoItem_remove">X</span>
      </div>
    );
  }
}

export default Todo;

const ItemCount = ({count}) => {
  return (
    <span className="todoItem_count">{count}</span>
  )
}
