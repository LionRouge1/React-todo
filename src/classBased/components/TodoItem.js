import React, {Component} from "react";
import styles from './TodoItem.module.css'

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    }
  };

  componentWillUnmount() {
    console.log("cleaning up...")
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    })
  };

  handleUpdatedDone = (event) => {
    if (event.key === "Enter") {
      this.setState({ editing: false })
    }
  }

  render() {

    let viewMode = {}
    let editMode = {}

    if (this.state.editing) {
      viewMode.display = "none"
    } else {
      editMode.display = "none"
    }

    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }
    const {todo, handleChange, deleteTodo, setUpdate} = this.props;
    const {completed, id, title} = todo;
    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode} >
          <input 
            type={"checkbox"}
            className={styles.checkbox}
            checked={completed}
            onChange={() => handleChange(id)}
          />
          <button onClick={() => deleteTodo(id)}>Delete</button>
          <span style={completed ? completedStyle : null}>
            {title}
          </span>
        </div>
        <input 
          type="text"
          className={styles.textInput}
          style={editMode}
          value={title}
          onChange={(e) => setUpdate(e.target.value, id)}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    )
  }
}

export default TodoItem