import api from "./api";

export const API_GET = () => api.get('/todos');

export const API_POST = (string) => api.post('/todos', { text: string, finished: false });

export const API_PUT = (todo) => api.put("/todos/".concat(todo.id), todo);

export const API_DELETE = (id) => api.delete("/todos/".concat(id));