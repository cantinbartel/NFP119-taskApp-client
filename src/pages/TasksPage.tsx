import { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import EditTaskForm from '../components/EditTaskForm';
import Modal from '../components/Modal';
import { Task } from '../types/task'
import { getTasks } from '../services/task';
import Button from '../components/Button';

const TasksPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task>();
  const [refresh, setRefresh] = useState<number>(0);
  const [addTaskModalOpen, setAddTaskModalOpen] = useState(false);
  const [editTaskModalOpen, setEditTaskModalOpen] = useState(false);
  useEffect(() => {
    getTasks()
        .then(tsks => setTasks(tsks))
        .catch(err => console.log(err))
  }, [refresh])
  return (
    <div className="mt-16 w-full h-screen flex flex-col items-center relative">
      { !addTaskModalOpen && !editTaskModalOpen && (
        <>
          <Button className='absolute right-20' onClick={() => setAddTaskModalOpen(true)}>Add Task</Button>
          <div className='w-7/12'>
            <h2 className='text-3xl mr-12'>Tasks</h2>
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
        </>
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

export default TasksPage