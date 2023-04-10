import { DrawerButtonProps } from '../types/props';


const DrawerButton = ({ menuOpen, setMenuOpen }: DrawerButtonProps) => (
  <div className='border border-white h-12 w-12 flex justify-center items-center rounded cursor-pointer'>
    <div className="w-8 flex flex-col" onClick={() => setMenuOpen(!menuOpen)}>
      <span className={`h-0.5 w-full bg-white my-1 ${menuOpen ? 'rotate-45 translate-y-1.5 transition' : 'transition'}`}></span>
      <span className={`h-0.5 w-full bg-white my-1 ${menuOpen ? 'hidden transition' : 'transition'}`}></span>
      <span className={`h-0.5 w-full bg-white my-1 ${menuOpen ? '-rotate-45 -translate-y-1 transition' : 'transition'}`}></span>
    </div>
  </div>
);

export default DrawerButton;
