import classNames from "classnames";
import React from "react";
import { useDispatch } from "react-redux";
import '../styles/TodoItem.css'
import { REMOVE_TODOS, CHANGE_TODOS } from '../reducers/todoReducer'
import { API_DELETE, API_PUT } from "../apis/todos";

function TodoItem({ todo, index }) {
    //(todo.finished) ? <del>{todo.text}</del> :
    const text = todo.text
    const id = todo.id;
    const dispatch = useDispatch();

    const textClass = classNames({
        'TodoItem-text': true,
        'TodoItem-textDel': todo.finished
    })

    function remove() {
        API_DELETE(id)
            .then(response => dispatch({ type: REMOVE_TODOS, payload: response.data }));
    }

    function changeState() {
        API_PUT(id, !todo.finished)
            .then(response => dispatch({ type: CHANGE_TODOS, payload: response.data }));
    }

    return (
        <div className='TodoItem' onClick={changeState}>
            <span className={textClass}>{index + 1}. {text}</span>
            <button className='TodoItem-button' onClick={remove}>X</button>
        </div>
    )
}

export default TodoItem;