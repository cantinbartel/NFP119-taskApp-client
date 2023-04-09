import { Task } from '../types/task';

// export const getTasks2 = async(): Promise<Task[]> => await (await fetch(`/api/tasks`)).json();

export const getTasks = async() => {
    try {
        const response = await fetch(`/api/tasks`);
        const tasks = await response.json();
        return tasks;
    } catch(error) {
        console.log(error);
    }
};

// export const getTaskById2 = async(id: string): Promise<Task> => await (await fetch(`/api/tasks/${id}`)).json();

export const getTaskById = async(id: string) => {
    try {
        const response = await fetch(`/api/tasks/${id}`);
        const task = await response.json();
        return task;
    } catch(error) {
        console.log(error);
    }
    await (await fetch(`/api/users/${id}`)).json()
};

export const deleteTask = async(id: string) => {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    };
    try {
        const response = await fetch(`/api/users/${id}`, requestOptions);
        const deletedTask = await response.json();
        return deletedTask;
    } catch(error) {
        console.log(error)
    }
};

// export const addTask2 = async(title: string, userId: string, description?: string) => {
//     const newTask: Task = { title, description, userId }
//     try {
//         const res = await fetch(`/api/tasks`, {
//             method: 'POST',
//             body: JSON.stringify(newTask),
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

export const addTask = async(task: Task) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
    };
    try {
        const response = await fetch(`/api/tasks`, requestOptions);
        const taskSaved = await response.json();
        return taskSaved;
    } catch(error) {
        console.log(error)
    }
};
