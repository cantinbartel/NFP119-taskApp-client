import { useState, useEffect } from 'react'
import { getTaskById } from '../services/task'
import { Task } from '../types/task'
import { useParams } from 'react-router-dom'


const TaskPage = () => {
  const [task, setTask] = useState<Task>()
  const { id } = useParams()

  useEffect(() => {
    if(!id) return 
    (async() => {
      setTask(await getTaskById(id))
    })()
  }, [])

  return (
    <div className='w-full flex justify-center'>
      <div className='w-5/12 flex flex-col items-center border-2 mt-20 py-6 rounded shadow-lg'>
        <p className='text-2xl font-semiboldr mb-4'>{task?.title}</p>
        <p>{task?.description ? task.description : 'No description'}</p>
        <p className='mt-4'>Designated user: {task?.user?.name}</p>
        <p className='text-sky-600 mt-4'>completed</p>
        <button>Mark as completed</button>
      </div>
    </div>
  )
}

export default TaskPage
