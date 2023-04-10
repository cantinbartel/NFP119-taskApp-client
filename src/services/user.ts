import { User } from '../types/user';


export const getUsers = async() => {
    try {
        const response = await fetch(`/api/users`);
        const users = await response.json();
        return users;
    } catch(error) {
        console.log(error);
    }
};

export const getUserById = async(id: string) => {
    try {
        const response = await fetch(`/api/users/${id}`);
        const user = await response.json();
        return user;
    } catch(error) {
        console.log(error);
    }
};

export const addUser = async(user: User) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    try {
        const response = await fetch(`/api/users`, requestOptions);
        const userSaved = await response.json();
        return userSaved;
    } catch(error) {
        console.log(error);
    }
};
