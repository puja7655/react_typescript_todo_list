import React, { useContext } from "react"
import Todo from "../modals/Todo"
import classes from './TodoList.module.css'
import {todosContext} from "../store/todo-context"

const TodoList:React.FC<{text:string,removeTodoList:()=>void}> = (props) => {
const todosCtx=useContext(todosContext)

    return (
         <li className={classes.item} onClick={props.removeTodoList}>{props.text}</li>
    )
}

export default TodoList