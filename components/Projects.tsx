import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { education } from "@/public";
import { ecommerce } from "@/public";
import { weather } from "@/public";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some thing I have Built"></SectionTitle>
      <div className="w-full flex flex-col items-center justify-between gap-8">
        {/* project one */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a href=""
            className="w-full xl:w-1/2 h-auto relative group"
            >
              <div>
                <Image 
                className="w-full h-full object-contain"
                src={education}
                alt="education"
                />
              </div>
            </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-4 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Featured Project</p>
              <h3 className="text-2xl font-bold">Smart Education</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">This is learning platform. This website is programming language and Cyber security. The website is user friendly.</p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Reactjs</li>
                <li>TailwindCss</li>
                <li>Firebase</li>
                <li>React Router</li>
                <li>Deploy Firebase</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a href="https://github.com/ibrahimsarder96/education-center"
                target="-blank"
                className="hover:text-textGreen duration-300"
                ><TbBrandGithub/></a>
                <a href="https://online-explore.firebaseapp.com/"
                target="-blank"
                className="hover:text-textGreen duration-300"
                ><RxOpenInNewWindow/></a>
              </div>
          </div>
          </div>
        </div>
         {/* project two */}
         <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a href=""
            className="w-full xl:w-1/2 h-auto relative group"
            >
              <div>
                <Image 
                className="w-full h-full object-contain"
                src={ecommerce}
                alt="Ecommerce_img"
                />
              </div>
            </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-4 lgl:justify-between items-start text-right xl:-mr-16 z-10">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Featured Project</p>
              <h3 className="text-2xl font-bold">E-Commerce</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">This is E-Commerce Website. Website is Mobile responsive and web view.The website is user friendly.</p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>ReactJs</li>
                <li>NodeJs</li>
                <li>ExpressJs</li>
                <li>TailwindCss</li>
                <li>Firebase</li>
                <li>React Router</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a href="https://github.com/ibrahimsarder96/fashionova-client-side"
                target="-blank"
                className="hover:text-textGreen duration-300"
                ><TbBrandGithub/></a>
                <a href="https://bdfashonova.firebaseapp.com/"
                target="-blank"
                className="hover:text-textGreen duration-300"
                ><RxOpenInNewWindow/></a>
              </div>
          </div>
          </div>
        </div>
          {/* project three */}
          <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a href=""
            className="w-full xl:w-1/2 h-auto relative group"
            >
              <div>
                <Image 
                className="w-full h-full object-contain"
                src={weather}
                alt="Weather_img"
                />
              </div>
            </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-4 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Featured Project</p>
              <h3 className="text-2xl font-bold">Weather App</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">This is Weather App. This website is Current value Change and user friendly.</p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>ReactJs</li>
                <li>TailwindCss</li>
                <li>React Icon</li>
                <li>Deploy Netlify</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a href="https://github.com/ibrahimsarder96/weather-app"
                target="-blank"
                className="hover:text-textGreen duration-300"
                ><TbBrandGithub/></a>
                <a href="https://weatherea.netlify.app/"
                target="-blank"
                className="hover:text-textGreen duration-300"
                ><RxOpenInNewWindow/></a>
              </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;