import { useState, useEffect } from 'react';
import { Task } from '../types/task';
import { getTasks } from '../services/task';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import EditTaskForm from '../components/EditTaskForm';
import Modal from '../components/Modal';
import Button from '../components/Button';

const TasksPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task>();
  const [refresh, setRefresh] = useState<number>(0);
  const [addTaskModalOpen, setAddTaskModalOpen] = useState(false);
  const [editTaskModalOpen, setEditTaskModalOpen] = useState(false);

  /* GET TASKS WHEN COMPONENT IS MOUNTING AND EVERY TIME THE TASKS ARE UPDATED */
  useEffect(() => {
    getTasks()
        .then(tsks => setTasks(tsks))
        .catch(err => console.log(err));
  }, [refresh]);

  return (
    <div className="mt-16 w-full flex flex-col items-center">
      { !addTaskModalOpen && !editTaskModalOpen && (
        <div className='flex flex-col items-center w-full'>
          <div className='w-11/12 md:w-7/12'>
            <h2 className='text-3xl mr-12 text-center md:text-start'>Tasks</h2>
            {tasks && tasks.length > 0 ? 
              <TaskList 
                tasks={tasks} 
                selectedTask={selectedTask}
                select={setSelectedTask} 
                edit={() => setEditTaskModalOpen(true)} 
                handleRefresh={() => setRefresh(refresh+1)} /> :
              <p className="mt-28 text-center text-2xl">No tasks found</p>
            }
          </div>
          <Button className='mt-8 lg:mt-0 lg:absolute right-40' onClick={() => setAddTaskModalOpen(true)}>Add Task</Button>
        </div>
      )}
      { addTaskModalOpen && (
        <Modal
          isOpen={addTaskModalOpen}
          onClose={() => setAddTaskModalOpen(false)}
          title='Add a new task'>
          <TaskForm refresh={refresh} setRefresh={setRefresh} close={() => setAddTaskModalOpen(false)} />
        </Modal>
      )}
      { editTaskModalOpen && (
        <Modal
          isOpen={editTaskModalOpen}
          onClose={() => setEditTaskModalOpen(false)}
          title='Edit task'>
          <EditTaskForm task={selectedTask} refresh={refresh} setRefresh={setRefresh} close={() => setEditTaskModalOpen(false)} />
        </Modal>
      )}
    </div>
  )
}

export default TasksPage;
