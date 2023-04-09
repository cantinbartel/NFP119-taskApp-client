import React from 'react';
import { Task } from '../types/task';
import { Link } from 'react-router-dom';
import { MdDelete, MdEdit, MdAddTask } from 'react-icons/md'

type TaskListProps = {
  tasks: Task[]
  edit: () => void
}

const TaskList = ({ tasks, edit }: TaskListProps) => {
  return (
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
            <td className="px-2 text-left py-2 w-1/2">{task.title}</td>
            <td className="px-2 text-left text-sky-600">completed</td>
            <td className="px-2 text-left">
              <Link to={`/tasks/${task._id}`}>
                <button className="px-2 py-1 mx-auto cursor-pointer">Details</button>
              </Link>
              {/* <button 
                  className="px-2 py-1 mx-auto cursor-pointer"
                  onClick={() => navigate(`/tasks/${task._id}`)}>Details</button> */}
            </td>
            <td>
              {/* <button className='mt-2 text-sky-600 hover:text-sky-700' onClick={() => navigate(`/tasks/${task._id}/edit`)}>{<MdEdit />}</button> */}
                <button 
                  className='mt-2 text-sky-600 hover:text-sky-700' 
                  onClick={edit}>{<MdEdit />}</button>
            </td>
            <td>
              <button 
                className='mt-2 text-sky-600 hover:text-sky-700' 
                onClick={() => window.confirm('Are you sure you want to delete this task?')}>{<MdDelete />}</button>    
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};

export default TaskList;
