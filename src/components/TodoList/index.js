import React, { Component } from 'react';
import Todo from '../Todo'

class TodoList extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { todos } = this.props;

        return (
            <div className='container'>
                { todos.map((todo) => 
                    <Todo key={todo.id} todo={todo} deleteTodo={this.props.deleteTodo}/>
                )}
            </div>
        );
    }
}

export default TodoList;