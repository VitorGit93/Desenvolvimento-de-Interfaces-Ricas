import axios from "axios";
import { typeTarefa } from "../types/typeTarefa";

export const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 2000
});

export async function getAll() {
  const typeTarefa = await api.get("typeTarefa");
  return typeTarefa.data;
}
export async function getById(id: number) {
  const typeTarefa = await api.get(`tasks/${id}`);
  return typeTarefa.data;
}
export async function save(typeTarefa: typeTarefa) {
  const response = await api.post(`typeTarefa`, {
    ...typeTarefa,
  });
  return response.data;
}
export async function update(typeTarefa: typeTarefa) {
  const response = await api.put(`typeTarefa/${typeTarefa.id}`, {
    ...typeTarefa,
  });
  return response.data;
}
export async function exclude(id: number) {
  const typeTarefa = await api.delete(`typeTarefa/${id}`);
  return typeTarefa.data;
}
