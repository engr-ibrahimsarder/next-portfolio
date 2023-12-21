import { motion } from 'framer-motion';
import { TiArrowForward } from "react-icons/ti";

const Diploma = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}} 
    transition={{duration:0.1}}
    className='w-full'
    >
      <h3 className='flex gap-1 font-medium text-xl font-titleFont'>Diploma <span className='text-textGreen tracking-wide'>In Computer Science</span></h3>
      <p className='text-sm mt-1 font-medium text-textDark'>2018 Aug - 2022 Dec</p>
      <ul className='mt-6 flex flex-col gap-3'>
        <li className='text-base flex gap-2 text-textDark'><span className='text-textGreen mt-1'><TiArrowForward/></span> Barisal Polytechnic Institute.</li>
        <li className='text-base flex gap-2 text-textDark'><span className='text-textGreen mt-1'><TiArrowForward/></span> Barisal Polytechnic Institute or Barishal Polytechnic Institute or BPI is a Government Technical Institute in Barisal, Bangladesh. It is one of the largest polytechnic Institutes in Bangladesh.</li>
        <li className='text-base flex gap-2 text-textDark'><span className='text-textGreen mt-1'><TiArrowForward/></span> <a href="https://barishalpoly.gov.bd/" target='-blank'>
          <span className='text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group'>Learn More
          <span className='absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500'></span>
          </span></a></li>
      </ul>
    </motion.div>
  );
};

export default Diploma;