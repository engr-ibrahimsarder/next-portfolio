import React from 'react';
import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";


const LiftSide = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight'>
      <a href="https://github.com/ibrahimsarder96" target="_blank">
        <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <TbBrandGithub/>
        </span>
      </a>
      <a href="http://" target="_blank">
      <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <TbBrandLinkedin/>
        </span>
      </a>
    </div>
  );
};

export default LiftSide;