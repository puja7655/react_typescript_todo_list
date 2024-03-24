import React, { ReactNode, useState } from "react";
import Todo from "../modals/Todo";

type TodoContextObj = {
    items: Todo[],
    onAddTodo: (text: string) => void,
    onRemove: (id: string) => void
}

interface MyProviderProps {
    children: ReactNode; // ReactNode type is used to represent the children of a React component
  }
  
export const todosContext = React.createContext<TodoContextObj>({
    items: [],
    onAddTodo: (text: string) => { },
    onRemove: (id: string) => { }
})

const TodosContextProvider:React.FC<MyProviderProps> = ({ children }) => {

    const [todo, setTodo] = useState<Todo[]>([])

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText)
        setTodo((prevTodo) => (
            prevTodo.concat(newTodo)
        ))
    };

    const handleRemoveToDo = (id: string) => {
        setTodo((prevState) => (
            prevState.filter((item) => (item.id !== id))
        ))
    }


    const contextValue: TodoContextObj = {
        items: todo,
        onAddTodo: addTodoHandler,
        onRemove: handleRemoveToDo
    }

    return (
        <todosContext.Provider value={contextValue}>{children}</todosContext.Provider>
    )
}

export default TodosContextProvider