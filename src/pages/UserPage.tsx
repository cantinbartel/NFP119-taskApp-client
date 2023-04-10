import { useState, useEffect } from 'react';
import { User } from '../types/user';
import { Task } from '../types/task';
import { getUserById } from '../services/user';
import { getTasksByUserId } from '../services/task';
import { useParams } from 'react-router-dom';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import EditTaskForm from '../components/EditTaskForm';
import Modal from '../components/Modal';
import Button from '../components/Button';


const UserPage = () => {
    const [user, setUser] = useState<User>();
    const [tasks, setTasks] = useState<Task[]>([]);
    const [selectedTask, setSelectedTask] = useState<Task>();
    const [refresh, setRefresh] = useState<number>(0);
    const [addTaskModalOpen, setAddTaskModalOpen] = useState(false);
    const [editTaskModalOpen, setEditTaskModalOpen] = useState(false);
    const { id } = useParams();
    useEffect(() => {
        getUserById(id!)
            .then(setUser)
            .catch(console.log);
    }, []);
    useEffect(() => {
        getTasksByUserId(user?._id!)
            .then(tsks => setTasks(tsks));
    }, [user, refresh]);
    return (
        <div className="mt-16 w-full flex flex-col items-center relative">
            { !addTaskModalOpen && !editTaskModalOpen && (
                <>
                    <Button className='absolute right-20' onClick={() => setAddTaskModalOpen(true)}>Add Task</Button>
                    <div className='w-7/12'>
                        <p className='text-3xl capitalize mr-12'>{user?.name ? user.name : `User - ${id}`}</p>
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
                    <TaskForm user={user} refresh={refresh} setRefresh={setRefresh} close={() => setAddTaskModalOpen(false)} />
                </Modal>
            )}
            { editTaskModalOpen && (
                <Modal
                    isOpen={editTaskModalOpen}
                    onClose={() => setEditTaskModalOpen(false)}
                    title='Edit task'>
                    <EditTaskForm user={user} task={selectedTask} refresh={refresh} setRefresh={setRefresh} close={() => setEditTaskModalOpen(false)} />
                </Modal>
            )}
        </div>
    )
};

export default UserPage;
