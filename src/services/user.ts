import { User } from '../types/user';
import { backendUrl } from '../utils';

/* GET ALL USERS */
export const getUsers = async() => {
    try {
        const response = await fetch(`${backendUrl}/api/users`);
        const users = response.json();
        return users;
    } catch(error) {
        console.log(error);
    }
};

/* GET USER BY ID */
export const getUserById = async(id: string) => {
    try {
        const response = await fetch(`${backendUrl}/api/users/${id}`);
        const user = response.json();
        return user;
    } catch(error) {
        console.log(error);
    }
};

/* POST - ADD USER */
export const addUser = async(user: User) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    try {
        const response = await fetch(`${backendUrl}/api/users`, requestOptions);
        const userSaved = response.json();
        return userSaved;
    } catch(error) {
        console.log(error);
    }
};
