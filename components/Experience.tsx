import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import ReactBD from './works/ReactBD';
import Apple from './works/Apple';
import Facebook from './works/Facebook';

const Experience = () => {
  const [workReactBd, setWorkReactBd] = useState(false);
  const [workApple, setWorkApple] = useState(false);
  const [workFacebook, setWorkFacebook] = useState(false);

  const handleReactBD = () =>{
    setWorkReactBd(true);
    setWorkApple(false);
    setWorkFacebook(false);
  }
  const handleApple = () =>{
    setWorkReactBd(false);
    setWorkApple(true);
    setWorkFacebook(false);
  }
  const handleFacebook = () =>{
    setWorkReactBd(false);
    setWorkApple(false);
    setWorkFacebook(true);
  }

  return (
    <section id='experience'
    className='max-w-containerXs mx-auto py-10 lgl:py-24 px-4'
    >
      <SectionTitle title="Where I have worked"></SectionTitle>
      <div className='w-full mt--10 flex flex-col md:flex-row gap-16'>
        <ul className='md:w-32 flex flex-col'>
          <li onClick={handleReactBD}
          className={`${workReactBd ? 
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

export default Experience;