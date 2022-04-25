import React, {useState, useEffect} from "react";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodoList from "./TodosList";

const TodoContainer = () => {
  const [todos, setTodos] = useState(getInitialTodos());

  useEffect(() => {
    const temp = localStorage.getItem("todos")
    const loadedTodos = JSON.parse(temp)
    if (loadedTodos) {
      setTodos({
        todos: loadedTodos,
      })
    };
  }, [todos]);

  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem("todos")
    const savedTodos = JSON.parse(temp)
    return savedTodos || []
  }

  const handleChange = (id) => {
    setTodos((prevState) => ({
      todos: prevState.map((todo) => {
        if(todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        };
        return todo;
      })
    }));
  };

  const delTodo = (id) => {
    setTodos([
        ...todos.filter((todo) => todo.id !== id)
      ]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: todos.length + 1,
      title: title,
      completed: false
    };
    setTodos([
      ...todos, newTodo
    ]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos( 
      todos.map((todo) => {
        if(todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo
      }),
    )
  };


  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoProps={addTodoItem} />
        <TodoList
          todos={todos}
          handleChangeProps={handleChange}
          deleteTodoProps={delTodo}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  )
}

export default TodoContainer

// class TodoContainer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       todos: [],
//     }
//   }

//   componentDidMount() {
//     const temp = localStorage.getItem("todos")
//     const loadedTodos = JSON.parse(temp)
//     if (loadedTodos) {
//       this.setState({
//         todos: loadedTodos
//       })
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if(prevState.todos !== this.state.todos) {
//       const temp = JSON.stringify(this.state.todos);
//       localStorage.setItem('todos', temp);
//     }
//   }

//   handleChange = (id) => {
//     this.setState((prevState) => ({
//       todos: prevState.todos.map((todo) => {
//         if(todo.id === id) {
//           return {
//             ...todo,
//             completed: !todo.completed
//           }
//         };
//         return todo;
//       })
//     }));
//   };

//   delTodo = (id) => {
//     this.setState({
//       todos: [
//         ...this.state.todos.filter((todo) => todo.id !== id)
//       ]
//     });
//   };

//   addTodoItem = (title) => {
//     const newTodo = {
//       id: this.state.todos.length + 1,
//       title: title,
//       completed: false
//     };
//     this.setState({
//       todos: [...this.state.todos, newTodo]
//     });
//   };

//   setUpdate = (updatedTitle, id) => {
//     this.setState({
//       todos: this.state.todos.map((todo) => {
//         if(todo.id === id) {
//           todo.title = updatedTitle;
//         }
//         return todo
//       }),
//     })
//   };

//   render() {
//     return (
//       <div className="container">
//         <div className="inner">
//           <Header />
//           <InputTodo addTodoItem={this.addTodoItem} />
//           <TodoList 
//             todos={this.state.todos} 
//             handleChange={this.handleChange} 
//             deleteTodo={this.delTodo}
//             setUpdate={this.setUpdate}
//           />
//         </div>
//       </div>
//     )
//   }
// }

// export default TodoContainer