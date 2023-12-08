import { motion } from 'framer-motion';
import { TiArrowForward } from "react-icons/ti";

const Ssc = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}} 
    transition={{duration:0.1}}
    className='w-full'
    >
      <h3 className='flex gap-1 font-medium text-xl font-titleFont'>S.S.C <span className='text-textGreen tracking-wide'>@Facebook</span></h3>
      <p className='text-sm mt-1 font-medium text-textDark'>2018 February</p>
      <ul className='mt-6 flex flex-col gap-3'>
        <li className='text-base flex gap-2 text-textDark'><span className='text-textGreen mt-1'><TiArrowForward/></span> Hello</li>
        <li className='text-base flex gap-2 text-textDark'><span className='text-textGreen mt-1'><TiArrowForward/></span> Hello</li>
        <li className='text-base flex gap-2 text-textDark'><span className='text-textGreen mt-1'><TiArrowForward/></span> Hello</li>
      </ul>
    </motion.div>
  );
};

export default Ssc;