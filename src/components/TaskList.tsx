import { Link } from 'react-router-dom';
import { Task } from '../types/task';
import { deleteTask } from '../services/task';
import { MdDelete, MdEdit } from 'react-icons/md';

type TaskListProps = {
  tasks: Task[]
  selectedTask?: Task
  select: (selectedTask: Task) => void
  edit: () => void
  handleRefresh: () => void
};

const TaskList = ({ tasks, selectedTask, select, edit, handleRefresh }: TaskListProps) => {
  const handleSelection = (task: Task) => {
    select(task);
    edit();
  };
  const handleDelete = async(task: Task) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      await deleteTask(task._id!)
      handleRefresh()
    }
  };
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
            <td className={`px-2 text-left ${task?.completed ? 'text-sky-600' : 'text-red-400'}`}>{task?.completed ? 'completed' : 'pending'}</td>
            <td className="px-2 text-left">
              <Link to={`/tasks/${task._id}`}>
                <button className="px-2 py-1 mx-auto cursor-pointer">Details</button>
              </Link>
            </td>
            <td>
              <button 
                className='mt-2 text-sky-600 hover:text-sky-700' 
                onClick={() => handleSelection(task)}>{<MdEdit />}</button>
            </td>
            <td>
              <button 
                className='mt-2 text-sky-600 hover:text-sky-700' 
                onClick={() => handleDelete(task)}>{<MdDelete />}</button>    
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};

export default TaskList;
