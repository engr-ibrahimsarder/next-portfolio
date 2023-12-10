import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";

const ArchiveCard = () => {
  return (
   <a href="" target="-blank">
       <div className="w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-start gap-6 hover:-translate-y-2 transition-transform duration-300 group">
      <div className="flex justify-between items-center">
        <FaRegFolder className="text-textGreen text-4xl"/>
        <RxOpenInNewWindow className="hover:text-textGreen text-4xl"/>
      </div>
      <div>
        <h2 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen">Educare English Learning Academy</h2>
        <p className="text-sm mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit maxime dolorem ducimus corrupti quisquam eaque magni nemo numquam a doloribus, odio sunt odit eligendi accusantium fuga unde voluptates ab ipsum!</p>
      </div>
      <ul className="text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap">
        <li>React</li>
        <li>TailWind</li>
        <li>Firebase</li>
      </ul>
    </div>
   </a>
  );
};

export default ArchiveCard;