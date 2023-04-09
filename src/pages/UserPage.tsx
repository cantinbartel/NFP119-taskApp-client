import { useState, useEffect } from 'react';
import { getUserById } from '../services/user';
import { User } from '../types/user';
import { Task } from '../types/task';
import { useLocation, Link, useNavigate, useParams } from 'react-router-dom';
import { MdDelete, MdEdit, MdAddTask } from 'react-icons/md';
import Button from '../components/Button';
import TaskList from '../components/TaskList';
import Modal from '../components/Modal';
import TaskForm from '../components/TaskForm';
import EditTaskForm from '../components/EditTaskForm';


const UserPage = () => {
    const [user, setUser] = useState<User | null >();
    const [tasks, setTasks] = useState<Task[]>([]);
    const [refresh, setRefresh] = useState<number>(0);
    const [addTaskModalOpen, setAddTaskModalOpen] = useState(false);
    const [editTaskModalOpen, setEditTaskModalOpen] = useState(false);
    const { id } = useParams();
    useEffect(() => {
        (async() => {
            if (!id) return
            const res = await getUserById(id)
            console.log('RES', res)
            setUser(res.user)
            setTasks(res.tasks)
        })()
    }, [refresh]);
    console.log('EDIT TASK --', editTaskModalOpen)
    return (
        <div className="mt-16 w-full flex flex-col items-center relative">
            { !addTaskModalOpen && !editTaskModalOpen && (
                <>
                    <Button className='absolute right-20' onClick={() => setAddTaskModalOpen(true)}>Add Task</Button>
                    <div className='w-7/12'>
                        {/* {tasks.length} */}
                        <p className='text-3xl capitalize mr-12'>{user?.name ? user.name : `User - ${id}`}</p>
                        {tasks.length > 0 ? 
                            <TaskList tasks={tasks} edit={() =>{ console.log('EDIT PAGE'); setEditTaskModalOpen(true)}} /> : 
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
                    {/* <EditTaskForm tasks={tasks} setTasks={setTasks} user={user} refresh={refresh} setRefresh={setRefresh} close={() => setAddTaskModalOpen(false)} /> */}
                    <EditTaskForm user={user} refresh={refresh} setRefresh={setRefresh} close={() => setAddTaskModalOpen(false)} />
                </Modal>
            )}
        </div>
    )
};

export default UserPage;
