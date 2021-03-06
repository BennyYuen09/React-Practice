import React, { useEffect } from "react";
import TodoGroup from './TodoGroup'
import TodoGenerator from './TodoGenerator'
import '../styles/TodoList.css'
import { useDispatch } from "react-redux";
import { INIT_TODOS } from "../reducers/todoReducer";
import { getTodoByApi } from "../apis/todos";

function TodoList() {
    const dispatch = useDispatch();
    useEffect(() => {
        getTodoByApi()
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