import { User } from '../types/user';
import { Task } from '../types/task';

type UserInfo = {
    user: User
    tasks: Task
}


export const getUsers = async(): Promise<User[]> => await (await fetch(`/api/users`)).json();

export const getUserById = async(id: string): Promise<UserInfo> => await (await fetch(`/api/users/${id}`)).json();

export const addUser = async(email: string, name?: string) => {
    const userInfo: User = { email, name }
    try {
        const res = await fetch(`/api/users`, {
            method: 'POST',
            body: JSON.stringify(userInfo),
            headers: {
                'Content-type': 'application/json'
            }
        })
        const data: Promise<User> = res.json()
        return data
    } catch(error) {
        console.log(error)
    }
};
