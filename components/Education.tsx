import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import Ssc from './education/Ssc';
import Diploma from './education/Diploma';
import Bsc from './education/Bsc';

const Education = () => {
  const [ssc, setSsc] = useState(false);
  const [diploma, setDiploma] = useState(false);
  const [bsc, setBsc] = useState(false);

  const handleSsc = () =>{
    setSsc(true);
    setDiploma(false);
    setBsc(false);
  }
  const handleDiploma = () =>{
    setSsc(false);
    setDiploma(true);
    setBsc(false);
  }
  const handleBsc = () =>{
    setSsc(false);
    setDiploma(false);
    setBsc(true);
  }
  return (
    <section id='education'
    className='max-w-containerXs mx-auto py-10 lgl:py-24 px-4'
    >
      <SectionTitle title="My Academic Education"></SectionTitle>
      <div className='w-full mt--10 flex flex-col md:flex-row gap-16'>
        <ul className='md:w-32 flex flex-col'>
          <li onClick={handleSsc}
          className={`${ssc ? 
            "border-l-textGreen text-textGreen" :
            "border-l-textDark text-textDark "
          }
             border-l-2 bg--transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Ssc
          </li>
          <li onClick={handleDiploma}
          className={`${diploma ? 
            "border-l-textGreen text-textGreen" :
            "border-l-textDark text-textDark "
          }
             border-l-2 bg--transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Diploma
          </li>
          <li onClick={handleBsc}
           className={`${bsc ? 
            "border-l-textGreen text-textGreen" :
            "border-l-textDark text-textDark "
          }
             border-l-2 bg--transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            BSC
          </li>
        </ul>
        {ssc &&   <Ssc/> }
        {diploma &&   <Diploma/> }
        {bsc &&   <Bsc/> }
      
      </div>
    </section>
  );
};

export default Education;