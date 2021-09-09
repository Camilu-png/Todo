import React from "react";
import "./TodoList.css"

const todos = [
    {text: "Completar un item de la tarea 0", completed: false},
    {text: "Leer la lectura 1", completed: false},
    {text: "Terminar el curso de React", completed: false},
  ];

function TodoList(props){
    return(
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}
export {TodoList};