import React, {Component} from "react"
import Item from "./components/Item"

import todosData from "./data/todosData.js"
import "./App.css"


class App extends Component {
  constructor() {
      super()
      this.state = {
          items: todosData
      }
      this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        // Update state so that the item with the given id flips `completed` from false to true (or vise versa)
        // Remember not to modify prevState directly, but instead to return a new version of state with the change you want included in that update. (Think how you might use the `.map` method to do this)
        this.setState(prevState =>{
            const updatedItems = prevState.items.map(item =>{
                if(item.id === id){
                    item.completed = !item.completed
                }
                return item
            }
            
            )
            return{
                items: updatedItems
            }
        }

        )
    
    }
    
    render() {
        const todoItems = this.state.items.map(item => <Item key={item.id} item={item} fun = {this.handleChange}/>)
        
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )    
    }
}

export default App