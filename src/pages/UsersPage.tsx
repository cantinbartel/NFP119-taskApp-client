import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getUsers } from '../services/user';
import { User } from '../types/user';
import { MdAddTask } from 'react-icons/md';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { IoMdAddCircle } from 'react-icons/io';
import { FaListUl } from 'react-icons/fa';
import Modal from '../components/Modal';
import UserForm from '../components/UserForm';
import Button from '../components/Button';
import { addUser } from '../services/user'
import UserList from '../components/UserList';


const UsersPage = () => {
    // const [users, setUsers] = useState<User[]>([])
    const [users, setUsers] = useState<User[]>([])
    const [addUserModal, setAddUserModal] = useState(false);
    const [isOpenTaskForm, setOpenTaskForm] = useState(false);
    const [refresh, setRefresh] = useState(0);
    const navigate = useNavigate()
    useEffect(() => {
        (async() => {
            setUsers(await getUsers())
        })()
    }, [])

    const sendNewUser = (formData: any) => {
        setAddUserModal(false);
        // const add = async (userAdd : User)=>{
        //   const user = await addUser(userAdd);
        //   setRefresh(refresh+1);
        // }
        // add(formData);
    }
    return (
            <div className="mt-16 w-full flex flex-col items-center relative">
                { !addUserModal && (
                    <>
                        <Button className='absolute right-20' onClick={() => setAddUserModal(true)}>Add User</Button>
                        <div className='w-7/12'>
                            {/* {tasks.length} */}
                            <p className='text-3xl capitalize mr-12'>Users</p>
                            <UserList users={users} />
                        </div>
                    </>
                )}
                { addUserModal && (
                    <Modal
                    isOpen={addUserModal}
                    onClose={() => setAddUserModal(false)}
                    title='Add a new user'><UserForm /></Modal>
                )}
            </div>
    )
}

export default UsersPage
