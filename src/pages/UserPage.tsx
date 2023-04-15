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

    /* GET USER WHEN COMPONENT IS MOUNTING */
    useEffect(() => {
        getUserById(id!)
            .then(setUser)
            .catch(console.log);
    }, []);

    /* GET TASKS RELATED TO THE USER ONCE THE USER IS FOUND AND EVERY RENDER UPDATED TASKS IN REAL TIME */
    useEffect(() => {
        if(!user) return
        getTasksByUserId(user._id!)
            .then(tsks => setTasks(tsks));
    }, [user, refresh]);

    return (
        <div className="mt-16 w-full flex flex-col items-center relative">
            { !addTaskModalOpen && !editTaskModalOpen && (
                <>
                    <div className='w-11/12 md:w-3/4 lg:w-8/12 xl:w-7/12'>
                        <p className='text-3xl capitalize text-center md:text-start'>{user?.name ? user.name : `User - ${id}`}</p>
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
                    <Button className='mt-8 lg:mt-0 lg:absolute right-20' onClick={() => setAddTaskModalOpen(true)}>Add Task</Button>
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
                    <EditTaskForm task={selectedTask} refresh={refresh} setRefresh={setRefresh} close={() => setEditTaskModalOpen(false)} />
                </Modal>
            )}
        </div>
    )
};

export default UserPage;
