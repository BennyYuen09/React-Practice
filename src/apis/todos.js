import api from "./api";

export const API_GET = () => api.get('/todos');
export const API_POST = (string) => api.post('/todos', {text: string, finished: false});
export const API_PUT = async (id, finished) => api.put("/todos/".concat(id), {finished: finished});
export const API_DELETE = (id) => api.delete("/todos/".concat(id));