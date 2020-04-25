import React, { Component } from "react";
import ToDos from "./components/ToDos";

class App extends Component {
  state = {
    toDos: [
      {
        id: 1,
        title: "hello world",
        completed: false,
      },
      {
        id: 2,
        title: "2hello world",
        completed: false,
      },
      {
        id: 3,
        title: "3hello world",
        completed: false,
      },
      {
        id: 4,
        title: "4hello world",
        completed: false,
      },
    ],
  };
  markComplete = (id) => {
    this.setState({
      todos: this.state.toDos.map((toDo) => {
        if (toDo.id === id) {
          toDo.completed = !toDo.completed;
        }
        return toDo;
      }),
    });
  };
  render() {
    console.log(this.state.toDos);

    return (
      <div className="App">
        <ToDos toDos={this.state.toDos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
