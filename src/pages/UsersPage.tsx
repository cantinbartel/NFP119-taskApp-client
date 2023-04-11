import { useState, useEffect } from 'react';
import { User } from '../types/user';
import { getUsers } from '../services/user';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';
import Modal from '../components/Modal';
import Button from '../components/Button';


const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [addUserModal, setAddUserModal] = useState(false);

  /* GET USERS WHEN COMPONENT IS MOUNTING */
  useEffect(() => {
    getUsers()
      .then(setUsers)
      .catch(console.log)
  }, []);

  return (
    <div className="mt-16 w-full flex flex-col items-center relative">
      { !addUserModal && (
        <>
          <Button className='absolute right-20' onClick={() => setAddUserModal(true)}>Add User</Button>
          <div className='w-7/12'>
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
};

export default UsersPage;
