import React from "react";
import { TodoCounter } from "./TodoCounter";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
// import './App.css';

const todos = [
  {text: "Completar un item de la tarea 0", completed: true},
  {text: "Leer la lectura 1", completed: false},
  {text: "Terminar el curso de React", completed: false},
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
