import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import "../styles/DonePage.css"

const DonePage = () => {
    const todoList = useSelector(state => state.todoList);
    
    return (
    <div>
        <h1 className="DonePage">Done List</h1>
        {todoList.filter(item => item.finished).map((item, index) => (
                <TodoItem key={item.id} todo={item} index={index}/>
        ))}
    </div>
    )
}

export default DonePage;