import React, { useEffect } from "react";
import TodoGroup from './TodoGroup'
import TodoGenerator from './TodoGenerator'
import '../styles/TodoList.css'
import api from "../apis/api";
import { useDispatch } from "react-redux";
import { INIT_TODOS } from "../reducers/todoReducer";
import { API_GET } from "../apis/todos";

function TodoList() {
    const dispatch = useDispatch();
    useEffect(() => {
        API_GET()
        .then(response => dispatch({type: INIT_TODOS, payload: response.data}))
    })

    return (
        <div>
            <h5 className="TodoList-title">Todo List</h5>
            <TodoGroup />
            <TodoGenerator />
        </div>
    )
}

export default TodoList;