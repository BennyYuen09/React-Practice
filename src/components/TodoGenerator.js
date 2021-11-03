import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { API_POST } from "../apis/todos";
import { APPEND_TODOS } from '../reducers/todoReducer'
import '../styles/TodoGenerator.css'

function TodoGenerator() {
    const [todoString, setToDoString] = useState("")
    const dispatch = useDispatch();

    function updateString(event) {
        setToDoString(event.target.value);
    }

    function updateToStore(){
        API_POST(todoString).then(response => dispatch({type: APPEND_TODOS, payload: response.data}))
    }

    return (
        <div className='TodoGenerator'>
            <span>New Todo: <input value={todoString} onChange={updateString}></input></span>
            <button onClick={updateToStore}>Add</button>
        </div>
    )
}

export default TodoGenerator;