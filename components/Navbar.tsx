import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { easeIn, motion } from 'framer-motion';
import image from '@/public/assets/logo.png';
import Image from 'next/image';
import { MdOutlineClose } from "react-icons/md";
import { TbBrandGithub, TbBrandInstagram, TbBrandLinkedin,  } from "react-icons/tb";
import { SiCodeforces } from "react-icons/si";

const Navbar = () => {
  const ref = useRef<string | any>("");
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>{
    e.preventDefault();
    setShowMenu(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "")
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    // update the class name of the clicked link
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) =>{
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  }
  function handleClick(e: any){
    if(e.target.contains(ref.current)){
      setShowMenu(false);
    }
  }
  return (
    <div className='w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4'>
      <div className='max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between'>
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration:0.5}}
        >
          <Image src={image} className='w-24'  alt="logo"/>
        </motion.div>
        <div className='hidden mdl:inline-flex items-center gap-7'>
          <ul className='flex text[13px gap-7'>
            <Link href="#home" 
            onClick={handleScroll}
            className='uppercase flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
              <motion.li
              initial={{y: -10, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{duration: 0.1}}
              >Home</motion.li>
            </Link>
            <Link href="#about" 
            onClick={handleScroll}
            className='uppercase flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
              <motion.li
              initial={{y: -10, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{duration: 0.1, delay: 0.1}}
              >About</motion.li>
            </Link>
            {/* <Link href="#experience" className='uppercase flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
              <motion.li
              initial={{y: -10, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{duration: 0.1, delay: 0.2}}
              >Experience</motion.li>
            </Link> */}
            <Link href="#education" 
            onClick={handleScroll}
            className='uppercase flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
              <motion.li
              initial={{y: -10, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{duration: 0.1, delay: 0.2}}
              >Education</motion.li>
            </Link>
            <Link href="#project" 
            onClick={handleScroll}
            className='uppercase flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
              <motion.li
              initial={{y: -10, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{duration: 0.1, delay: 0.3}}
              >Project</motion.li>
            </Link>
            <Link href="#contact" 
            onClick={handleScroll}
            className='uppercase flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
              <motion.li
              initial={{y: -10, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{duration: 0.1, delay: 0.4}}
              >Contact</motion.li>
            </Link>
          </ul>
          <a href="/assets/resume.pdf" target="_blank" >
          <motion.button
          initial={{y: -10, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.1, delay: 0.5}}
          className='px-4 py-2 rounded-md uppercase text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'
          >Resume</motion.button>
          </a>
        </div>
        <div onClick={() => setShowMenu(true)} className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group'>
        <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
        <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-3 transition-all ease-in-out duration-300'></span>
        <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-1 transition-all ease-in-out duration-300'></span>
        </div>
        {
          showMenu && (
            <div
             ref={(node) => (ref.current = node)}
             onClick={handleClick}
            className='absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end'
            >
              <motion.div 
              initial={{x: 20,  opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{duration: 0.1}}
              className='w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative'
              >
                <MdOutlineClose onClick={() => setShowMenu(false)}
                 className="text-3xl absolute text-textGreen hover:text-red-500  top-4 right-4 cursor-pointer"/>
                 <div className='flex flex-col items-center gap-7'>
                 <ul className='flex flex-col text-base gap-7'>
            <Link href="#home" 
            onClick={handleScroll}
            className='uppercase flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
              <motion.li
              initial={{y: -10, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{
                duration: 0.1, 
                delay: 0.1, 
                ease: "easeIn"}}
              >Home</motion.li>
            </Link>
            <Link href="#about" 
            onClick={handleScroll}
            className='uppercase flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
              <motion.li
              initial={{y: -10, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{
                duration: 0.1, 
                delay: 0.2, 
                ease: "easeIn"}}
              >About</motion.li>
            </Link>
            {/* <Link href="#experience" className='uppercase flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
              <motion.li
              initial={{y: -10, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{duration: 0.1, delay: 0.2}}
              >Experience</motion.li>
            </Link> */}
            <Link href="#education" 
            onClick={handleScroll}
            className='uppercase flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
              <motion.li
              initial={{y: -10, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{
                duration: 0.1, 
                delay: 0.3, 
                ease: "easeIn"}}
              >Education</motion.li>
            </Link>
            <Link href="#project" 
            onClick={handleScroll}
            className='uppercase flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
              <motion.li
              initial={{y: -10, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{
                duration: 0.1, 
                delay: 0.4, 
                ease: "easeIn"}}
              >Project</motion.li>
            </Link>
            <Link href="#contact" 
            onClick={handleScroll}
            className='uppercase flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
              <motion.li
              initial={{y: -10, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{
                duration: 0.1, 
                delay: 0.5, 
                ease: "easeIn"}}
              >Contact</motion.li>
            </Link>
          </ul>
          <a href="/assets/resume.pdf" target="_blank" >
          <motion.button
          initial={{y: -10, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.1, delay: 0.5}}
          className='px-4 py-2 rounded-md uppercase text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'
          >Resume</motion.button>
          </a>
          <div  className='flex flex-row gap-4'>
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
    <motion.a 
    initial={{opacity:0}}
    animate={{opacity: 1}}
    transition={{delay: 1.2, ease: "easeIn"}}
    className='text-sm w-72 tracking-wide text-textGreen text-center mt-4'
href="mailto:er.ibrahimsarder@gmail.com"
    >
        <p>er.ibrahimsarder@gmail.com</p>
      </motion.a>
                 </div>
              </motion.div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Navbar;