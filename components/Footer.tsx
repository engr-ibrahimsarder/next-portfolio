import { TbBrandGithub, TbBrandInstagram, TbBrandLinkedin,  } from "react-icons/tb";
import { SiCodeforces } from "react-icons/si";

const Footer = () => {
  return (
    <div className="hidden mdl:inline-flex xl:hidden items-center justify-center py-6 mb-10 gap-4 w-full">
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
  );
};

export default Footer;