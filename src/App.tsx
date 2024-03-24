import { useState } from 'react';
import TODO from './components/Todo'
import Todo from './modals/Todo';
import NewTodo from './components/NewTodo';
import TodosContextProvider from './store/todo-context'

function App() {
  return (
    <TodosContextProvider>
      <NewTodo/>
      <TODO/>
    </TodosContextProvider>
  );
}

export default App;
