"use client"
import React from 'react';

type Props = {
  isOpen: boolean;
  toggle: () => void;
  children: React.ReactNode;
}

const Sidebar:React.FC<Props> = ({isOpen, toggle, children}) => {
  
  return (
    <div className={`bg-gray-200 h-screen w-1/4 fixed top-0 ${isOpen ? 'right-0' : '-right-full'}`}>
      <button className="absolute top-2 right-2 text-gray-500" onClick={toggle}>
        {isOpen ? 'Close' : 'Open'}
      </button>
      {children}
    </div>
  );
};

export default Sidebar;
