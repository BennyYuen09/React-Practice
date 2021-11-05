const initState = { todoList: [] };

const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case INIT_TODOS:
            return todoInit(state, action);

        case APPEND_TODOS:
            return todoAppend(state, action);

        case REMOVE_TODOS:
            return todoRemove(state, action);

        case CHANGE_TODOS:
            return todoChange(state, action);

        default:
            return state;
    }
}

const todoInit = (state, action) => {
    return { todoList: action.payload };
}


const todoAppend = (state, action) => {
    return { todoList: [...state.todoList, action.payload] };
}

const todoRemove = (state, action) => {
    const newList = state.todoList.filter(item => {
        return item.id !== action.payload
    });
    return { todoList: newList }
}

const todoChange = (state, action) => {
    const newList = state.todoList.map((item) => {
        if (item.id === action.payload.id) {
            return action.payload;
        }
        return item;
    })
    return { todoList: newList }
}


export const INIT_TODOS = 'todo/init';
export const APPEND_TODOS = 'todo/append';
export const REMOVE_TODOS = 'todo/remove';
export const CHANGE_TODOS = 'todo/changeState'

export default todoReducer;