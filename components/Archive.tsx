import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import {motion} from "framer-motion"

const Archive = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">Other Noteworthy Projects</h2>
        <p className="text-sm font-titleFont text-textGreen">View the archive</p>
      </div>    
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-24">
        <ArchiveCard
        title="Educare English Learning Academy"
        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit maxime dolorem ducimus corrupti quisquam eaque magni nemo numquam a doloribus, odio sunt odit eligendi accusantium fuga unde voluptates ab ipsum!"
        listItems= {["React", 'TailwindCss', "Firebase"]}
        link="https://ibrahim-sarder-portfolio.netlify.app/"
        />
        <ArchiveCard
        title="Educare English Learning Academy"
        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit maxime dolorem ducimus corrupti quisquam eaque magni nemo numquam a doloribus, odio sunt odit eligendi accusantium fuga unde voluptates ab ipsum!"
        listItems= {["React", 'TailwindCss', "Firebase"]}
        link="https://ibrahim-sarder-portfolio.netlify.app/"
        />
        <ArchiveCard
        title="Educare English Learning Academy"
        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit maxime dolorem ducimus corrupti quisquam eaque magni nemo numquam a doloribus, odio sunt odit eligendi accusantium fuga unde voluptates ab ipsum!"
        listItems= {["React", 'TailwindCss', "Firebase"]}
        link="https://ibrahim-sarder-portfolio.netlify.app/"
        />
        {
          showMore && (
            <>
            <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay:0.5}}
            >
               <ArchiveCard
        title="Educare English Learning Academy"
        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit maxime dolorem ducimus corrupti quisquam eaque magni nemo numquam a doloribus, odio sunt odit eligendi accusantium fuga unde voluptates ab ipsum!"
        listItems= {["React", 'TailwindCss', "Firebase"]}
        link="https://ibrahim-sarder-portfolio.netlify.app/"
        />
            </motion.div>
            <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay:0.5}}
            >
               <ArchiveCard
        title="Educare English Learning Academy"
        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit maxime dolorem ducimus corrupti quisquam eaque magni nemo numquam a doloribus, odio sunt odit eligendi accusantium fuga unde voluptates ab ipsum!"
        listItems= {["React", 'TailwindCss', "Firebase"]}
        link="https://ibrahim-sarder-portfolio.netlify.app/"
        />
            </motion.div>
            <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay:0.5}}
            >
               <ArchiveCard
        title="Educare English Learning Academy"
        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit maxime dolorem ducimus corrupti quisquam eaque magni nemo numquam a doloribus, odio sunt odit eligendi accusantium fuga unde voluptates ab ipsum!"
        listItems= {["React", 'TailwindCss', "Firebase"]}
        link="https://ibrahim-sarder-portfolio.netlify.app/"
        />
            </motion.div>
            </>
          )
        }
      
      </div>
      <div className="flex justify-center items-center mt-12">
        {
          showMore ?  <button onClick={()=>setShowMore(false)}
          className="w-36 h-12 text-textGreen rounded-md hover:bg-hoverColor border border-textGreen text-[13px] duration-300">Show Less</button> :
          <button onClick={()=>setShowMore(true)}
          className="w-36 h-12 text-textGreen rounded-md hover:bg-hoverColor border border-textGreen text-[13px] duration-300">Show More</button>
        }
       
      </div>
    </div>
  );
};

export default Archive;