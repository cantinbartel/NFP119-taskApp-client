import { User } from './user';

export type Task = {
    title: string
    description?: string
    completed?: boolean
    _id?: string
    user?: User
};
