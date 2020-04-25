import React, { Component } from "react";
import prototypes from "prop-types";

export class ToDoItem extends Component {
  render() {
    const { id, title } = this.props.toDo;
    return (
      <div style={itemStyle}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          {""}
          <button style={btnStyle}>delete</button>
        </p>
      </div>
    );
  }
}

// proptypes=====
ToDoItem.prototypes = {
  ToDo: prototypes.object.isRequired,
};
const btnStyle = {
  backgroundColor: "blue",
  color: "#fff",
  border: "none",
  float: "right",
    borderRadius: "20%",
    padding: '2px 9px',
  cursor:'pointer',
};

const itemStyle = {
  backgroundColor: "red",
  textColor: "yellow",
};

export default ToDoItem;
