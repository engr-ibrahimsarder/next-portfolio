import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import profileImage from '@/public/assets/profileImage.png';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about"
    className='max-w-containerSmall mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4'
    >
      <SectionTitle title="About Me"></SectionTitle>
      <div className="flex flex-col lgl:flex-row gap-16">
      <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
    <p>
      Hello! My name is Ibrahim Sarder and I enjoy creating things that live on the interne. My interest in web development started back in 2021 when I decided to try editing custom Tumblr themes - turns out hacking together a custom reblog button taught me a log about HTML & CSS!
    </p>
    <p>Here are a few technologies I have been working with recently:</p>
    <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
      <li className="flex items-center gap-2">
        <span className="text-textGreen"><AiFillThunderbolt/></span> JavaScript (Es6)
      </li>
      <li className="flex items-center gap-2">
        <span className="text-textGreen"><AiFillThunderbolt/></span> Node.Js
      </li>
      <li className="flex items-center gap-2">
        <span className="text-textGreen"><AiFillThunderbolt/></span> React
      </li>
      <li className="flex items-center gap-2">
        <span className="text-textGreen"><AiFillThunderbolt/></span> Express.Js
      </li>
      <li className="flex items-center gap-2">
        <span className="text-textGreen"><AiFillThunderbolt/></span> Next.js
      </li>
      <li className="flex items-center gap-2">
        <span className="text-textGreen"><AiFillThunderbolt/></span> MongoDB
      </li>
      <li className="flex items-center gap-2">
        <span className="text-textGreen"><AiFillThunderbolt/></span> TypeScript
      </li>
      <li className="flex items-center gap-2">
        <span className="text-textGreen"><AiFillThunderbolt/></span> TailwindCss
      </li>
      <li className="flex items-center gap-2">
        <span className="text-textGreen"><AiFillThunderbolt/></span> Bootstrap5
      </li>
    </ul>
      </div>
      <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
              <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
                <Image
                className="rounded-lg h-full w-full object-cover"
                 src={profileImage}
                 alt="ProfileImage"/>
                 <div className="hidden lgl:inline-block w-full absolute h-80 bg-textGreen/20 rounded-md top-0 left-0 right-0 group-hover:bg-transparent duration-300"></div>
              </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
      </div>
      </div>
    </section>
  );
};

export default About;