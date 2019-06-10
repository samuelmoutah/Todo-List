import React, {Component} from 'react'
import TodoItem from './TodoItem';
import todosData from './todosData'

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(id) {
    this.setState(prevState => {
      const updateState = prevState.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updateState
      }
    })
  }

  render() {

    const todoComponents = this.state.todos.map(item => <TodoItem key={item.id} todos={item} handleChange={this.handleChange}/>)

    return(
      <div className="todo-list">
        {todoComponents}
      </div>
    )
  }
}

export default App