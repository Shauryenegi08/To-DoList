import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:1337/api',
});

export const getTodos = () => API.get('/todos');

export const addTodo = (title) =>
  API.post('/todos', {
    data: {
      title,
      completed: false,
    },
  });

export const deleteTodo = (id) => API.delete(`/todos/${id}`);

export const updateTodo = (id, completed) =>
  API.put(`/todos/${id}`, {
    data: { completed },
  });
