import { useContext, useRef } from "react"
import classes from './NewTodo.module.css'
import {todosContext} from '../store/todo-context'

const NewTodo: React.FC = () => {
    const todosCtx=useContext(todosContext)
    const inputRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (event: React.FormEvent) => {
        event?.preventDefault()
        const enteredText = inputRef.current!.value;

        if (enteredText.trim().length === 0) {
            //throw any error
            return
        }
        todosCtx.onAddTodo(enteredText);

    }

    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <label htmlFor="text">Todo Text</label>
            <input type="text" id="text" ref={inputRef}></input>
            <button>Add Text</button>
        </form>
    )
}

export default NewTodo