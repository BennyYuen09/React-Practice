import React from "react";
import { useDispatch } from "react-redux";
import '../styles/TodoItem.css'

function TodoItem({ todo }) {
    const text = (todo.finished) ? <del>{todo.text}</del> : todo.text
    const id = todo.id;
    const dispatch = useDispatch();

    function remove() {
        dispatch({ type: 'removeTodoString', payload: id })
    }

    function changeState() {
        dispatch({ type: 'changeState', payload: id })
    }

    return (
        <div className='TodoItem'>
            <span className='TodoItem-text' onClick={changeState}>{text}</span>
            <button className='TodoItem-button' onClick={remove}>X</button>            
        </div>
    )
}

export default TodoItem;