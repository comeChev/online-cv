import {
  FaCode,
  FaDatabase,
  FaPencilRuler,
  // FaHtml5,
  // FaJsSquare,
  // FaNodeJs,
} from "react-icons/fa";
import CardMainSkillsItem from "./Card.main.skills.item";
// import { TbBrandNextjs } from "react-icons/tb";
// import { BiLogoTailwindCss } from "react-icons/bi";

export default function CardMainSkills() {
  return (
    <div className="flex items-center justify-between mt-10 px-10 w-full max-w-[2000px] mx-auto  overflow-x-scroll py-4 space-x-2">
      {/* <CardMainSkillsItem Icon={FaHtml5} text="HTML5" color="orange" />
      <CardMainSkillsItem Icon={FaJsSquare} text="Javascript" color="yellow" />
      <CardMainSkillsItem Icon={FaNodeJs} text="NodeJs" color="emerald" />
      <CardMainSkillsItem Icon={TbBrandNextjs} text="NextJS" color="black" />
      <CardMainSkillsItem
        Icon={BiLogoTailwindCss}
        text="tailwindcss"
        color="sky"
      /> */}
      <CardMainSkillsItem
        Icon={FaCode}
        text="frontend"
        color="sky"
        url="#frontend"
      />
      <CardMainSkillsItem
        Icon={FaDatabase}
        text="backend"
        color="red"
        url="#backend"
      />
      <CardMainSkillsItem
        Icon={FaPencilRuler}
        text="design"
        color="purple"
        url="#design"
      />
    </div>
  );
}
