import { IconType } from "react-icons";
import { FaBriefcase, FaBuilding, FaGraduationCap } from "react-icons/fa";
import { getDateBetween } from "../../lib/globals";
import CardExperienceTimeline from "./Card.experience.timeline";
import CardExperiencePolygone from "./Card.experience.polygone";

type CardExperienceProps = {
  isExtreme?: "top" | "bottom" | "none";
  experience: Experience;
};

type Experience = {
  from: string;
  to: string;
  title: string;
  type: string;
  company: string;
  description: string[];
};

export default function CardExperience({
  isExtreme = "none",
  experience,
}: CardExperienceProps) {
  const IconWork: IconType =
    experience.type === "work"
      ? FaBriefcase
      : experience.type === "study"
      ? FaGraduationCap
      : FaBuilding;

  const cssWork =
    experience.type === "work"
      ? "text-blue-500"
      : experience.type === "study"
      ? "text-green-500"
      : "text-red-500";

  return (
    <div className="flex items-center justify-between ">
      {/* work date */}
      <div className="hidden lg:block mx-4 w-[200px]">
        <p className="text-gray-600">
          {getDateBetween(experience.from, experience.to)}
        </p>
      </div>

      {/* card explanation */}
      <div className="flex flex-row flex-1 relative">
        {/* timeline */}
        <CardExperienceTimeline isExtreme={isExtreme} />
        <div className="bg-slate-100 border border-slate-200 rounded-xl shadow-rl shadow-slate-400 min-h-[200px] flex-1 transition-all duration-[2s] ease-in-out mx-10 md:mx-4 lg:mx-auto my-4 px-10 py-6">
          {/* work title */}
          <div className="flex space-x-3 items-center text-xl lg:text-2xl">
            <IconWork className={`${cssWork}`} />
            <h3 className={`${cssWork} font-medium  uppercase`}>
              {experience.title}
            </h3>
          </div>
          {/* work place */}
          <p className="mt-2 text-md text-gray-700 font-semibold">
            {experience.company}
          </p>
          <p className="text-sm text-gray-600 mt-1 lg:hidden">
            {getDateBetween(experience.from, experience.to)}
          </p>

          {/* work date */}

          {/* work explanations */}

          <ul className="mt-4">
            {experience.description.map((item, index) => (
              <li
                key={index}
                className="list-disc ml-4 leading-relaxed mb-2.5 text-sm text-gray-700"
              >
                {/* <FaCircle className="mr-4 text-xs" /> */}
                {item}
              </li>
            ))}
          </ul>

          {/* work polygone */}
          <CardExperiencePolygone />
        </div>
      </div>
    </div>
  );
}
