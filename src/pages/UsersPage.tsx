import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { getUsers } from '../services/user'
import { User as UserType } from '../types/user'
import { User } from '../components/User'


const UsersPage = () => {
    const [users, setUsers] = useState<UserType[] | null>()
    useEffect(() => {
        (async() => {
            setUsers(await getUsers())
        })()
    }, [])
    console.log('USERS -- ', users)
    return (
        <div className='w-screen flex flex-col items-center mt-20'>
            <div className='w-10/12s text-2xl font-semibold'>Users</div> 
            <div className='w-10/12 flex flex-row just flex-wrap mt-12'>
                {users?.map((usr, i) => (
                    <User user={usr} />
                ))}
            </div>
        </div>
    )
}

export default UsersPage
