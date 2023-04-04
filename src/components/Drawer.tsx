import { DrawerButtonProps } from '../types/props'
import { BiUser, BiUserPlus, BiHomeAlt2 } from 'react-icons/bi'
import { MdTaskAlt, MdAddTask } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'



const Drawer = ({ menuOpen, setMenuOpen }: DrawerButtonProps) => {
  const navigate = useNavigate()
  const options = [
    { title: 'Home', icon: <BiHomeAlt2 />, link: '/' },
    { title: 'Users', icon: <BiUser />, link: '/users' },
    { title: 'Tasks', icon: <MdTaskAlt/>, link: '/tasks' },
    { title: 'Add User', icon: <BiUserPlus/>, link: '/add-user' },
    { title: 'Add Task', icon: <MdAddTask/>, link: '/add-task' },
  ]
  return (
    <div className={`fixed bg-sky-700 opacity-40 text-white text-3xl pl-32 h-screen pt-24 w-1/4 left-0 ${menuOpen ? 'transition overscroll-none' : '-translate-x-full transition'} cursor-pointer`}>
        {options.map(opt => (
          <p 
            className='mt-8 flex hover:text-slate-300'
            onClick={() => {navigate(opt.link); setMenuOpen(false)}}>
            <a className='mr-3'>{opt.icon}</a>{opt.title}</p>
        ))}
    </div>
  )
}

export default Drawer
