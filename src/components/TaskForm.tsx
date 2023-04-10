import { useState, useEffect, ChangeEvent } from 'react';
import Button from './Button';
import { CgAsterisk } from 'react-icons/cg';
import { addTask } from '../services/task';
import { User } from '../types/user';
import { getUsers } from '../services/user';

type TaskFormProps = {
  user?: any
  refresh: number
  setRefresh: (refresh: number) => void
  close: () => void
};

const TaskForm = ({ user: usr, refresh, setRefresh, close }: TaskFormProps) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [userId, setUserId] = useState<string>();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    if (usr) return
    getUsers()
      .then(setUsers)
      .catch(console.log)
  }, []);

  useEffect(() => {
    setUserId(users[0]?._id);
  }, [users]);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    addTask({ title, description, user: usr ? usr._id : userId })
      .then(() => setRefresh(refresh+1));
    
    close();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label
        className="capitalize text-gray-600 font-semibold flex"
        htmlFor="title">title<CgAsterisk className="text-xs text-red-500" /></label>
      <input
        className="w-full px-4 py-2 bg-gray-100 font-semibold mb-4  mt-2 rounded outline-none"
        id="name" 
        type="text"
        placeholder="Enter name"
        value={title}
        required
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
      <label
        className="capitalize text-gray-600 font-semibold"
        htmlFor="description">Description</label>
      <textarea
        className="w-full h-40 px-4 py-2 bg-gray-100 font-semibold mb-4 mt-2 rounded outline-none"
        id="description" 
        placeholder="Enter description"
        value={description}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)} />
      { !usr && (
        <div>
          <label
            className="capitalize text-gray-600 font-semibold mr-8"
            htmlFor="assignee">Assignee</label>
          <select 
            className="outline-none"
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setUserId(e.target.value)}>
            {users.map(u => (
              <option key={u._id} value={u._id}>{u.name}</option>
            ))}
          </select>
        </div>
      )}
      <Button className={`${usr ? 'mt-4' : 'mt-8'}`}>Create</Button>
    </form>
  )
};

export default TaskForm;
