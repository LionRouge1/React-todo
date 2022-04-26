/* eslint-disable react/state-in-constructor,react/destructuring-assignment,
 react/destructuring-assignment,react/no-access-state-in-setstate
  */
import React, { PureComponent } from 'react';
import TodoItem from './TodoItem';

class TodoList extends PureComponent {
  render() {
    const {
      todos, handleChange, deleteTodo, setUpdate,
    } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChange={handleChange}
            deleteTodo={deleteTodo}
            setUpdate={setUpdate}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
