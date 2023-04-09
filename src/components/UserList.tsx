import React from 'react';
import { User } from '../types/user';
import { Link } from 'react-router-dom';
import { MdAddTask } from 'react-icons/md';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { IoMdAddCircle } from 'react-icons/io';
import { FaListUl } from 'react-icons/fa';

type UserListPropsType = {
  users: User[]
}

const UserList = ({ users }: UserListPropsType ) => {
  console.log('USERS PROPS', users)
  return (
    <table className="w-full mt-10">
      <thead className="w-full border border-gray-200">
          <tr className='py-4'>
              <th className="px-2 py-3 text-left">NAME</th>
              <th className="px-2 text-left">EMAIL</th>
              <th className="px-2"></th>
          </tr>
      </thead>
      <tbody>
          {users?.map((user: User) => (
              <tr key={user._id} className="bg-gray-100 hover:bg-gray-50 border border-gray-200">
                  <td className="px-2 text-left py-2 w-1/2">{user?.name || `User - ${user._id}`}</td>
                  <td className="px-2 text-left text-sky-600">{user.email}</td>
                  <td>
                      <Link to={`/users/${user._id}`}>
                          <button className='mt-2 text-sky-600 hover:text-sky-700'>{<FaListUl />}</button>
                      </Link>
                  </td>
                  <td>
                      <button className='mt-2 text-sky-600 hover:text-sky-700' onClick={() => window.confirm('Are you sure you want to delete this task?')}>{<MdAddTask />}</button>
                  </td>
              </tr>
          ))}
      </tbody>
    </table>
  )
};

export default UserList;
