import { Task } from '../types/task';

export const getTasks = async(): Promise<Task[]> => await (await fetch(`/api/tasks`)).json();

export const getTaskById = async(id: string): Promise<Task> => await (await fetch(`/api/users/${id}`)).json();

export const deleteTask = async(id: string): Promise<void> => { await fetch(`/api/users/${id}`, { method: 'DELETE' }) };

// export const addTask = async(title: string, userId: string, description?: string) => {
//     const userInfo: Task = { title, description, userId }
//     try {
//         const res = await fetch(`/api/users`, {
//             method: 'POST',
//             body: JSON.stringify(userInfo),
//             headers: {
//                 'Content-type': 'application/json'
//             }
//         })
//         const data: Promise<Task> = res.json()
//         return data
//     } catch(error) {
//         console.log(error)
//     }
// };
