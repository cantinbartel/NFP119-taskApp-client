import { useState, ChangeEvent } from 'react';
import { addUser } from '../services/user'
import Button from './Button';
import { CgAsterisk } from 'react-icons/cg';


const UserForm = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    addUser({name, email})
    setName('');
    setEmail('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label
        className="capitalize text-gray-600 font-semibold"
        htmlFor="name">name</label>
      <input
        className="w-full px-4 py-2 bg-gray-100 font-semibold mb-4  mt-2 rounded outline-none"
        id="name" 
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
      <label
        className="capitalize text-gray-600 font-semibold flex"
        htmlFor="email">Email<CgAsterisk className="text-xs text-red-500" /></label>
      <input
        className="w-full px-4 py-2 bg-gray-100 font-semibold mb-4 mt-2 rounded outline-none"
        id="email" 
        type="email"
        placeholder="Enter email"
        value={email}
        required
        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
      <Button className="mt-4">Create</Button>
    </form>
  )
};

export default UserForm;
