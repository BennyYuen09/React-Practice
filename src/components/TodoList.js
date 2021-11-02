import React from "react";
import TodoGroup from './TodoGroup'
import TodoGenerator from './TodoGenerator'

function TodoList() {
    return (
        <div>
            <h5>Todo List</h5>
            <TodoGroup/>
            <TodoGenerator/>
        </div>
    )
}

export default TodoList;