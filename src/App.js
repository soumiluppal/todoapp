import React, { Component } from 'react';
import logo from './logo.svg';
import TodoList from './components/TodoList';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      todos: [{
        id: 1,
        title: 'Temprorary 1',
        complete: false
      }]
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    let newId = this.state.todos.length + 1;
    let newTodo = {
      id: newId,
      title: this.state.title,
      complete: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(function(todo) {
        if(id != todo.id) {
          return todo;
        }
      })]
    })
  }

  render() {
    const { todos } = this.state;

    return (
      <div className="App">
        <div className="container">
          <form onSubmit={this.onSubmit}>
            <input name='title' type='text' onChange={this.onChange}/>
            <input type='submit'/>
          </form>
          <TodoList todos={todos} deleteTodo={this.deleteTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
