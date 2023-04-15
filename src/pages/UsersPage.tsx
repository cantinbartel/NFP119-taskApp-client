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
          <div className='w-11/12 md:w-3/4 lg:w-8/12 xl:w-7/12'>
            <p className='text-3xl capitalize text-center md:text-start'>Users</p>
            <UserList users={users} />
          </div>
          <Button className='mt-8 lg:mt-0 lg:absolute right-40' onClick={() => setAddUserModal(true)}>Add User</Button>
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
