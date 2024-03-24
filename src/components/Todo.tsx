import React, { useContext } from "react"
import TodoList from "./TodoList"
import classes from './Todo.module.css'
import {todosContext} from '../store/todo-context'

const TODO: React.FC = () => {
    const todosCtx=useContext(todosContext)
    return (
        <ul className={classes.todos}>
            {todosCtx.items.map((item) => (
                <TodoList 
                key={item.id} 
                text={item.text} 
                removeTodoList={todosCtx.onRemove.bind(null, item.id)} />
            ))}
        </ul>
    )
}

export default TODO