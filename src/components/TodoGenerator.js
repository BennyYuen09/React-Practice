import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { API_POST } from "../apis/todos";
import { APPEND_TODOS } from '../reducers/todoReducer'
import '../styles/TodoGenerator.css'
import 'antd/dist/antd.css';

import { Button } from 'antd';

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
            <Button type="primary" onClick={updateToStore} style={{margin:'5px'}}>Add</Button>
        </div>
    )
}

export default TodoGenerator;