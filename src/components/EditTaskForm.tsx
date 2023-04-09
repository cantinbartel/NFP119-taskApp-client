import { useState, useEffect, ChangeEvent } from 'react';
import Button from './Button';
import { CgAsterisk } from 'react-icons/cg';
import { useParams } from 'react-router-dom';
import { addTask } from '../services/task';
import { User } from '../types/user';
import { Task } from '../types/task';
import { RefreshProps } from '../types/props'
import { MdRefresh } from 'react-icons/md';
import { updateTask } from '../services/task';

type TaskFormProps = {
  user: any
  task?: Task
  refresh: number
  setRefresh: (refresh: number) => void
  close: () => void
}

const EditTaskForm = ({ user, task, refresh, setRefresh, close }: TaskFormProps) => {
  const [title, setTitle] = useState<string>(task?.title || '');
  const [description, setDescription] = useState<string>(task?.description || '');

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!task) return
    updateTask({ title, description, user: user._id }, task._id)
      .then(() => setRefresh(refresh+1))
    close()
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
      <Button className="mt-4">Update</Button>
    </form>
  )
};

export default EditTaskForm;
