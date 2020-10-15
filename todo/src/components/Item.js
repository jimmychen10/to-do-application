import React from "react"



function Item(props) {

    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed} onChange={() => props.fun(props.item.id) }/>
            <p>{props.item.text}</p>
        </div>
    )
}

export default Item