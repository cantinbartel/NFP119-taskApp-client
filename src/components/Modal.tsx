import { ReactNode } from "react";
import { MdClose } from 'react-icons/md';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};


const Modal = ({ isOpen, onClose, title, children }: ModalProps) => (
  <>
    {isOpen && (
      <div className="bg-white w-screen h-screen z-10 flex justify-center">
        <div className="w-7/12 flex flex-col relative">
        <MdClose 
          className="absolute right-0 text-3xl font-bold text-sky-700 cursor-pointer hover:scale-105"
          onClick={onClose} />
          <h2 className="text-3xl mb-16">{title}</h2>
          {children}
        </div>
      </div>
    )}
  </>
);

export default Modal;
