import React from 'react';
import { TbBrandGithub, TbBrandInstagram, TbBrandLinkedin,  } from "react-icons/tb";
import { SiCodeforces } from "react-icons/si";

const LiftSide = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight'>
     <div  className='flex flex-col gap-4'>
      <a href="https://github.com/ibrahimsarder96" target="_blank">
        <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <TbBrandGithub/>
        </span>
      </a>
      <a href="https://www.linkedin.com/in/ibrahimsarder550/" target="_blank">
      <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <TbBrandLinkedin/>
        </span>
      </a>
      <a href="https://www.instagram.com/ibrahimahmedabir/" target="_blank">
      <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
         <TbBrandInstagram/>
        </span>
      </a>
      <a href="https://codeforces.com/profile/ibrahimbd" target="_blank">
      <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <SiCodeforces />
        </span>
      </a>
    </div>
   <div className='w-[2px] h-32 bg-textDark'></div>
    </div>
  );
};

export default LiftSide;