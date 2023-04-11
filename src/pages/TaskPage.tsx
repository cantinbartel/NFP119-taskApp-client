import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTaskById } from '../services/task';
import { Task } from '../types/task';
import EditTaskForm from '../components/EditTaskForm';
import Modal from '../components/Modal';
import Button from '../components/Button';


const TaskPage = () => {
  const [task, setTask] = useState<Task>();
  const [selectedTask, setSelectedTask] = useState<Task>();
  const [refresh, setRefresh] = useState<number>(0);
  const [editTaskModalOpen, setEditTaskModalOpen] = useState(false);
  const { id } = useParams();

  /* GET TASKS WHEN COMPONENT IS MOUNTING AND EVERY TIME THE TASKS ARE UPDATED */
  useEffect(() => {
    if(!id) return; 
    getTaskById(id)
      .then(setTask)
      .catch(console.log);
  }, [refresh]);

  return (
    <div className='w-full flex justify-center relative mt-16'>
      { !editTaskModalOpen && (
        <>
          <Button className='absolute right-40' onClick={() => setEditTaskModalOpen(true)}>Edit Task</Button>
          { task ? (
              <div className='w-5/12 flex flex-col border-2 mt-14 py-6 rounded shadow-lg'>
                <p className='text-2xl font-semiboldr text-center font-medium pt-4'>{task?.title}</p>
                <p className="px-12 pt-8 font-medium">Description: </p>
                <p className="px-12 py-2">{task?.description ? task.description : 'No description'}</p>
                <div className="flex px-12 py-6">
                  <p className="font-medium mr-2">Designated user:</p>
                  <p>{task?.user?.name}</p>
                </div> 
                <div className="flex px-12 pb-4">
                  <p>Status: </p>
                  <p className={`${task?.completed ? 'text-sky-600' : 'text-red-400'} ml-2`}>{task?.completed ? 'completed' : 'pending'}</p>
                </div>
              </div>
            ) : <p className="mt-40 text-3xl">Task not found...</p> 
          }
        </>
      )}
      { editTaskModalOpen && (
        <Modal
          isOpen={editTaskModalOpen}
          onClose={() => setEditTaskModalOpen(false)}
          title='Edit task'>
          <EditTaskForm task={task} refresh={refresh} setRefresh={setRefresh} close={() => setEditTaskModalOpen(false)} />
        </Modal>
      )}
    </div>
  )
};

export default TaskPage;
