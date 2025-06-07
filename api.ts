import { ITask } from "./types/tasks";

const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}/tasks`);
    const todos = await res.json();
    return todos;
}

