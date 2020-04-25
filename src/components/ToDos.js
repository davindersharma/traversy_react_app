import React, { Component } from "react";
import ToDoItem from "./ToDoItem";
import propTypes from "prop-types";

class ToDos extends Component {
  render() {
    return this.props.toDos.map((toDo) => (
      <ToDoItem
        key={toDo.id}
        toDo={toDo}
        markComplete={this.props.markComplete}
      />
    ));
  }
}
ToDos.propTypes = {
  toDos: propTypes.array.isRequired,
};

export default ToDos;
