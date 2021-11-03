import React from "react";
import { useSelector } from "react-redux";
import TodoItem from './TodoItem';

function TodoGroup() {
    const todoList = useSelector(state => state.todoList);

    return (
        <div>
            {todoList.map((item, index) => (
                <TodoItem key={item.id} todo={item} index={index}/>
            ))}
        </div>
    )
}

export default TodoGroup;