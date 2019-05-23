import React, {Component} from 'react';
import TodoInput from './todo-count';

class InputNew extends Component {
  state = {
    text: ''
  }

  handleUserType = (ev) => {
    this.setState({text: ev.target.value});
  }

  render() {
    return (
      <div className="inputNew">
        <TodoInput/>
        <input type="text"
               value={this.state.text}
               onChange={this.handleUserType}/>
      </div>
    );
  }
}

export default InputNew;
