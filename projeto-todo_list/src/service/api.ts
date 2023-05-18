import axios from "axios";
import { typeTarefa } from "../types/typeTarefa";

export const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 2000
});

export async function getAll() {
  const tarefa = await api.get("tarefa");
  return tarefa.data;
}
export async function getById(id: number) {
  const tarefa = await api.get(`tarefa/${id}`);
  return tarefa.data;
}
export async function save(tarefa: typeTarefa) {
  const response = await api.post(`tarefa`, { ...tarefa });
  return response.data;
}
export async function update(tarefa: typeTarefa) {
  const response = await api.put(`tarefa/${tarefa.id}`, { ...tarefa });
  return response.data;
}
export async function exclude(id: number) {
  const tarefa = await api.delete(`tarefa/${id}`);
  return tarefa.data;
}

export async function createTask(tarefa: typeTarefa) {
  try {
    const response = await api.post('/tarefa', tarefa);
    return response.data;
  } catch(error) {
    console.error('Erro ao criar a tarefa: ', error);
    throw error;
  }
}
