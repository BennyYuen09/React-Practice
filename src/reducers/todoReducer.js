import { v4 as uuidv4 } from 'uuid'

const initState = { todoList: [] };

const todoReducer = (state = initState, action) => {
    let newList;
    switch (action.type) {
        case 'assignTodoString':
            return { todoList: [...state.todoList, { id: uuidv4(), text: action.payload, finished: false }] };
        case 'removeTodoString':
            newList = state.todoList.filter(item => {
                return item.id !== action.payload
            });
            return {
                todoList: newList
            }
        case 'changeState':
            newList = state.todoList.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, finished: !item.finished }
                }
                return item;
            })
            return {
                todoList: newList
            }
        default:
            return state
    }
}

export default todoReducer;