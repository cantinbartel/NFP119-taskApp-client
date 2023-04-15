import { DrawerButtonProps } from '../types/props';
import { useNavigate } from 'react-router-dom';
import { BiUser } from 'react-icons/bi';
import { MdTaskAlt } from 'react-icons/md';


const Drawer = ({ menuOpen, setMenuOpen }: DrawerButtonProps) => {
  const navigate = useNavigate();
  const options = [
    // { title: 'Home', icon: <BiHomeAlt2 />, link: '/' },
    { title: 'Users', icon: <BiUser />, link: '/users' },
    { title: 'Tasks', icon: <MdTaskAlt/>, link: '/tasks' }
  ];
  return (
    <div className={`fixed bg-sky-700 opacity-80 sm:opacity-50 text-white text-3xl pl-8 sm:pl-16 lg:pl-24 h-screen pt-24 w-1/2 lg:w-1/3 xl:w-1/4 left-0 ${menuOpen ? 'transition overscroll-none' : '-translate-x-full transition'} cursor-pointer z-20`}>
        {options.map((opt, i) => (
          <p 
            key={i}
            className='mt-8 flex hover:text-slate-300'
            onClick={() => {navigate(opt.link); setMenuOpen(false)}}>
            <a className='mr-3'>{opt.icon}</a>{opt.title}</p>
        ))}
    </div>
  )
};

export default Drawer;
