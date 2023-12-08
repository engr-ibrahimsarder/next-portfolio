import React, { useState } from 'react';
import SectionTitle from './SectionTitle';

const Education = () => {
  const [ssc, setSsc] = useState(false);
  const handleSsc = () =>{
    setSsc(true);
    setWorkApple(false);
    setWorkFacebook(false);
  }
  return (
    <section id='#education'
    className='max-w-containerXs mx-auto py-10 lgl:py-24 px-4'
    >
      <SectionTitle title="My Academic Education"></SectionTitle>
      <div className='w-full mt--10 flex flex-col md:flex-row gap-16'>
        <ul className='md:w-32 flex flex-col'>
          <li onClick={handleSsc}
          className={`${wor ? 
            "border-l-textGreen text-textGreen" :
            "border-l-textDark text-textDark "
          }
             border-l-2 bg--transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            ReactBD
          </li>
          <li onClick={handleApple}
          className={`${workApple ? 
            "border-l-textGreen text-textGreen" :
            "border-l-textDark text-textDark "
          }
             border-l-2 bg--transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Apple
          </li>
          <li onClick={handleFacebook}
           className={`${workFacebook ? 
            "border-l-textGreen text-textGreen" :
            "border-l-textDark text-textDark "
          }
             border-l-2 bg--transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Facebook
          </li>
        </ul>
        {workReactBd &&   <ReactBD/> }
        {workApple &&   <Apple/> }
        {workFacebook &&   <Facebook/> }
      
      </div>
    </section>
  );
};

export default Education;