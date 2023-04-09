import { Task } from '../types/task';


export const getTasks = async() => {
    try {
        const response = await fetch(`/api/tasks`);
        const tasks = await response.json();
        return tasks;
    } catch(error) {
        console.log(error);
    }
};

export const getTaskById = async(id: string) => {
    try {
        const response = await fetch(`/api/tasks/${id}`);
        const task = await response.json();
        return task;
    } catch(error) {
        console.log(error);
    }
};

export const getTasksByUserId = async(userId: string) => {
    try {
        const response = await fetch(`/api/tasks/${userId}/user`)
        const tasks = await response.json();
        return tasks;
    } catch(error) {
        console.log(error);
    }
};

export const deleteTask = async(id: string) => {
    try {
        const response = await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
        const deletedTask = await response.json();
        return deletedTask;
    } catch(error) {
        console.log(error)
    }
};

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

export const updateTask = async(updatedTask: Task, id: string | undefined) => {
    console.log('Task in UpdateTask', updatedTask)
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedTask)
    };
    try {
        const response = await fetch(`/api/tasks/${id}`, requestOptions);
        const updatedTask = await response.json();
        return updatedTask;
    } catch(error) {
        console.log(error)
    }
};
