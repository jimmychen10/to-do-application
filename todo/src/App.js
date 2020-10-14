import React, {Component} from "react"
import Item from "./components/Item"

import todosData from "./data/todosData.js"
import "./App.css"


class App extends Component {
  constructor() {
      super()
      this.state = {
          todos: todosData
      }
  }
  
  render() {
      const todoItems = this.state.todos.map(item => <Item key={item.id} item={item}/>)
      
      return (
          <div className="todo-list">
              {todoItems}
          </div>
      )    
  }
}

export default App

