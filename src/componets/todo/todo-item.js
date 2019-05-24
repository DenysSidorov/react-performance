import React, {Component} from 'react';

class Todo extends Component {
  render() {
    return (
      <div className="todoItem">
        <ItemCount count={4}/>
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
