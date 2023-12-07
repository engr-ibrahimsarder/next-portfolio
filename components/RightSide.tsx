import React from 'react';

const RightSide = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight'>
      <div  className='flex flex-col gap-4'>
      <a href="mailto:er.ibrahimsarder@gmail.com">
        <p className='text-sm rotate-90 w-[25rem] tracking-wide text-textGreen'>er.ibrahimsarder@gmail.com</p>
      </a>
      </div>
      <div className='w-[2px] h-32 bg-textDark'></div>
    </div>
  );
};

export default RightSide;