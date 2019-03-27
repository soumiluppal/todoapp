import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='taskHolder'>
                <p>{this.props.todo.title}</p>
                <button onClick={this.props.deleteTodo.bind(this, this.props.todo.id)}>Delete</button>
            </div>
        );
    }
}

export default Todo;