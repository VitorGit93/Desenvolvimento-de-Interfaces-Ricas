import axios from "axios";
import { typeTarefa } from "../types/typeTarefa";

export const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 2000
});

export async function getAll() {
  const response = await api.get<typeTarefa[]>("tarefa"); // Adição do tipo de retorno da requisição
  return response.data;
}

export async function getById(id: number) {
  const response = await api.get<typeTarefa>(`tarefa/${id}`); // Adição do tipo de retorno da requisição
  return response.data;
}

export async function save(tarefa: typeTarefa) {
  const response = await api.post<typeTarefa>("tarefa", { ...tarefa }); // Adição do tipo de retorno da requisição
  return response.data;
}

export async function update(tarefa: typeTarefa) {
  const response = await api.put<typeTarefa>(`tarefa/${tarefa.id}`, { ...tarefa }); // Adição do tipo de retorno da requisição
  return response.data;
}

export async function exclude(id: number) {
  const response = await api.delete<typeTarefa>(`tarefa/${id}`); // Adição do tipo de retorno da requisição
  return response.data;
}
