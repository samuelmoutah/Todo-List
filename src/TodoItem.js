import React from 'react'

function TodoItem(props) {
    const completedStyle = {
        fontStyle: 'italic',
        color: '#cdcdcd',
        textDecoration: 'line-through'
    }

    return(
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.todos.completed}
                onChange={(event) => {props.handleChange(props.todos.id)}}/>
            <p style={props.todos.completed ? completedStyle : null}>{props.todos.text}</p>
        </div>
    )
}

export default TodoItem