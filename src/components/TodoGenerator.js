import React, { useState } from "react";
import { useDispatch } from "react-redux";

function TodoGenerator() {
    const [todoString, setToDoString] = useState("")
    const dispatch = useDispatch();

    function updateString(event) {
        setToDoString(event.target.value);
    }

    function updateToStore(){
        dispatch({type:'assignTodoString', payload: todoString});
        dispatch({type:'incrementTotalNum'});
    }

    return (
        <div>
            <span>New Todo: <input value={todoString} onChange={updateString}></input></span>
            <button onClick={updateToStore}>Add</button>
        </div>
    )
}

export default TodoGenerator;