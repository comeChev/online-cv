import { RefObject } from "react";
import { Color, getColor } from "../../lib/globals";
import CardSkillNote from "./Card.skill.note";
import { IconType } from "react-icons";
import useElementOnScreen from "../../hooks/useElements";

type CardSkillProps = {
  color: Color;
  Icon: IconType;
  position?: "left" | "right";
  value: {
    title: string;
    description: string;
    skills: {
      label: string;
      note: number;
    }[];
  };
  css?: string;
  id: string;
};

export default function CardSkill({
  color,
  Icon,
  position = "right",
  value,
  css = "",
  id,
}: CardSkillProps) {
  const textColor = getColor(color);

  const [containerRef, visible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });

  return (
    <>
      <div
        ref={containerRef as RefObject<HTMLDivElement>}
        className="overflow-hidden"
        id={id}
      >
        <div
          className={`mx-auto container flex ${
            position === "right"
              ? `flex-row-reverse ${
                  visible ? "translate-x-0" : "-translate-x-[100%]"
                } `
              : `flew-row ${visible ? "translate-x-0" : "translate-x-[100%]"}`
          } items-center py-5 px-5 justify-center transform transition-all duration-[2s] ease-in-out ${css}`}
        >
          <div className="px-8 py-6 shadow-rl bg-white rounded-xl shadow-gray-300 flex flex-col items-start md:max-w-[700px]">
            <h3 className={`text-xl font-medium my-2 ${textColor[0]}`}>
              {value.title}
            </h3>
            <p className="text-sm text-start text-gray-700 py-2">
              {value.description}
            </p>
            <div className="flex flex-wrap flex-1 py-5">
              {value.skills.map((skill, index) => (
                <div
                  key={index}
                  className="w-[50%] flex items-center justify-between py-1 pr-4 md:pr-10"
                >
                  <span className="font-semibold text-xs">{skill.label}</span>
                  <CardSkillNote note={skill.note} color={textColor} />
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:flex text-[8rem] items-center h-full w-[200px] justify-center mx-12">
            <Icon className={`${textColor[0]} hover:animate-bouncing`} />
          </div>
        </div>
      </div>
    </>
  );
}
