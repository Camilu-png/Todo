import React from "react";
import "./TodoSearch.css"

function TodoSearch({searchValue, setSearchValue}){
    const [] = React.useState('');

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };
    return(
        <input 
        className="TodoSearch" 
        placeholder="Buscar una tarea"
        value={searchValue}
        onChange={onSearchValueChange}
        />
    );
}
export {TodoSearch};