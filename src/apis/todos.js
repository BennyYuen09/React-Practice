import api from "./api";

export const getTodoByApi = () => api.get('/todos');

export const addTodoByApi = (string) => api.post('/todos', { text: string, finished: false });

export const updateTodoByApi = (todo) => api.put("/todos/".concat(todo.id), todo);

export const deleteTodoByApi = (id) => api.delete("/todos/".concat(id));