import React, {Component} from 'react';
import TodoCount from './todo-count';

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
        <TodoCount/>
        <input type="text"
               value={this.state.text}
               onChange={this.handleUserType}/>
        <button>Ok</button>
      </div>
    );
  }
}

export default InputNew;
