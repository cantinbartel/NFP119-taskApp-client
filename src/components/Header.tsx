import DrawerButton from './DrawerButton';
import { DrawerButtonProps } from '../types/props';
import { Link } from 'react-router-dom';
import { MdTaskAlt } from 'react-icons/md';


const Header = ({ menuOpen, setMenuOpen }: DrawerButtonProps) => (
    <div className="bg-sky-600 text-white text-4xl py-8 flex justify-between items-center pl-12 text-center">
        <DrawerButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Link to='/'>
              <p className='text-center font-semibold hover:text-slate-300 cursor-pointer'>Task App</p>
            </Link>
        <Link to='/tasks'><MdTaskAlt className='mr-20 hover:text-slate-300 cursor-pointer'/></Link>
    </div>
)

export default Header