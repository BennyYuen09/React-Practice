import classNames from "classnames";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import '../styles/TodoItem.css'
import { REMOVE_TODOS, CHANGE_TODOS } from '../reducers/todoReducer'
import { API_DELETE, API_PUT } from "../apis/todos";

import { CloseCircleOutlined, EditOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Modal } from 'antd';
import { Input } from 'antd';

function TodoItem({ todo }) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const text = todo.text
    const id = todo.id;
    const [newString, setNewString] = useState(text);
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
        const newTodo = { id: todo.id, text: todo.text, finished: !todo.finished };
        API_PUT(newTodo)
            .then(response => dispatch({ type: CHANGE_TODOS, payload: response.data }));
    }

    function edit() {
        setIsModalVisible(false);
        const newText = newString;
        const newTodo = { id: todo.id, text: newText, finished: todo.finished };
        API_PUT(newTodo)
            .then(response => dispatch({ type: CHANGE_TODOS, payload: response.data }));
    }

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setNewString(todo.text)
    };

    return (
        <div className='TodoItem'>
            <span className={textClass} onClick={changeState}>{text}</span>
            <CloseCircleOutlined className='TodoItem-button' onClick={remove} />

            <EditOutlined className='TodoItem-button' onClick={showModal} />
            <Modal title="Please type the new Todo content:" visible={isModalVisible} onOk={edit} onCancel={handleCancel}>
                <Input value={newString} onChange={(event) => setNewString(event.target.value)} />
            </Modal>
        </div>
    )
}

export default TodoItem;