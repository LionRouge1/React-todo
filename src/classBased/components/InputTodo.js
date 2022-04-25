import React, { Component } from "react"

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.title){
      this.props.addTodoItem(this.state.title);
      this.setState({
      title: '',
    })
    }else {
      alert("please Write item");
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input 
          type="text"
          className="input-text"
          placeholder="Add Todo..."
          value={this.state.title}
          name="title"
          onChange={this.onChange}
        />
        <button className="input-submit">Submit</button>
      </form>
    )
  }
}
export default InputTodo