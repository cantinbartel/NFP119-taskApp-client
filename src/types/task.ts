import { User } from './user'

export type Task = {
    title: string
    description?: string
    _id?: string
    __v?: string | number
    userId?: string
    user?: User
}
