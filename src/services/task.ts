import { Task } from '../types/task';
import { backendUrl } from '../utils';

/* GET ALL USERS */
export const getTasks = async() => {
    try {
        const response = await fetch(`${backendUrl}/api/tasks`);
        const tasks = response.json();
        return tasks;
    } catch(error) {
        console.log(error);
    }
};

/* GET USER BY ID */
export const getTaskById = async(id: string) => {
    try {
        const response = await fetch(`${backendUrl}/api/tasks/${id}`);
        const task = response.json();
        return task;
    } catch(error) {
        console.log(error);
    }
};

/* GET TASKS RELATED TO A USER */
export const getTasksByUserId = async(userId: string) => {
    try {
        const response = await fetch(`${backendUrl}/api/tasks/${userId}/user`);
        const tasks = response.json();
        return tasks;
    } catch(error) {
        console.log(error);
    }
};

/* DELETE TASK */
export const deleteTask = async(id: string) => {
    try {
        const response = await fetch(`${backendUrl}/api/tasks/${id}`, { method: 'DELETE' });
        const deletedTask = response.json();
        return deletedTask;
    } catch(error) {
        console.log(error);
    }
};

/* POST - ADD TASK */
export const addTask = async(task: Task) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
    };
    try {
        const response = await fetch(`${backendUrl}/api/tasks`, requestOptions);
        const taskSaved = response.json();
        return taskSaved;
    } catch(error) {
        console.log(error);
    }
};

/* PUT - UPDATE TASK */
export const updateTask = async(updatedTask: Task, id: string | undefined) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedTask)
    };
    try {
        const response = await fetch(`${backendUrl}/api/tasks/${id}`, requestOptions);
        const updatedTask = response.json();
        return updatedTask;
    } catch(error) {
        console.log(error);
    }
};
