import React from "react"
import Item1 from "./components/Item1"
import Item2 from "./components/Item2"
import Item3 from "./components/Item3"
import Item4 from "./components/Item4"
import "./App.css"

function App (){
  return(
    <div className="todo-list">
      <Item1/>
      <Item2/>
      <Item3/>
      <Item4/>
    </div>
  )
}

export default App