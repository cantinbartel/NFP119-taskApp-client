import React, { useState, useEffect } from 'react'
import { getUserById } from '../services/user'
import { User } from '../types/user'
import { Task } from '../types/task'
import { useLocation, Link } from 'react-router-dom'

const UserPage = () => {
    const [user, setUser] = useState<User | null>()
    const [tasks, setTasks] = useState<any>([]) /* Type Problem Task[] throws an Error */
    const location = useLocation()
    const id: string = location.pathname.split('/')[2]
    useEffect(() => {
        (async() => {
            const res = await getUserById(id)
            setUser(res.user)
            setTasks(res.tasks)
        })()
    }, [])
    console.log('Tasks ', tasks)
    return (
        <div className="mt-16 w-full flex flex-col items-center">
            <div className='w-7/12'>
                <p className='text-3xl capitalize'>{user?.name ? user.name : `User - ${id}`}</p>
                <table className="w-full mt-10">
                    <thead className="w-full border border-gray-200">
                        <tr className='py-4'>
                            <th className="px-2 py-3 text-left">TITLE</th>
                            <th className="px-2 text-left">STATUS</th>
                            <th className="px-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks?.map((task: Task) => (
                            <tr key={task._id} className="bg-gray-100 hover:bg-gray-50 border border-gray-200">
                                <td className="px-2 text-left py-2">{task.title}</td>
                                <td className="px-2 text-left">completed</td>
                                <td className="px-2 text-left">
                                    <Link to={`/tasks/${id}`}>
                                        <button className="px-2 py-1 mx-auto cursor-pointer">Details</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserPage