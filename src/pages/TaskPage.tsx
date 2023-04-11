import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTaskById } from '../services/task';
import { Task } from '../types/task';


const TaskPage = () => {
  const [task, setTask] = useState<Task>();
  const { id } = useParams();

  useEffect(() => {
    if(!id) return; 
    getTaskById(id)
      .then(setTask)
      .catch(console.log);
  }, []);

  useEffect(() => {
    if(!id) return; 
    getTaskById(id)
      .then(result => console.log(result))
      .catch(console.log);
  }, []);
  
  return (
    <div className='w-full flex justify-center'>
      { task ? (
          <div className='w-5/12 flex flex-col items-center border-2 mt-20 py-6 rounded shadow-lg'>
            <p className='text-2xl font-semiboldr mb-4'>{task?.title}</p>
            <p>{task?.description ? task.description : 'No description'}</p>
            <p className='mt-4'>Designated user: {task?.user?.name}</p>
            <p className={`${task?.completed ? 'text-sky-600' : 'text-red-400'} mt-4`}>{task?.completed ? 'completed' : 'pending'}</p>
            <button>Mark as completed</button>
          </div>
        ) : <p className="mt-40 text-3xl">Task not found...</p> 
      }
    </div>
  )
};

export default TaskPage;
