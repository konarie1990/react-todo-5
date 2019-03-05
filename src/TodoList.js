import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component {
  state = {
    items: []
  };
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => item.key !== key);

    this.setState({
      items: filteredItems
    });
  };
  addItem = e => {
    if (this.inputElement.value !== "") {
      const newItem = {
        text: this.inputElement.value,
        key: Date.now()
      };
      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      });

      // clears the input field
      this.inputElement.value = "";
    }
    // prevents the default behavior which is to refresh the dom
    e.preventDefault();
  };

  // onChangeHandler to refactor refs

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              ref={a => (this.inputElement = a)}
              placeholder="type stuff"
            />
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}

export default TodoList;
