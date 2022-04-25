import React, {Component} from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    const {todos, handleChange, deleteTodo, setUpdate} = this.props
    return (
      <ul>
        {todos.map( todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo}
            handleChange={handleChange} 
            deleteTodo={deleteTodo}
            setUpdate={setUpdate}
          />
        ))}
      </ul>
    )
  }
}

export default TodoList