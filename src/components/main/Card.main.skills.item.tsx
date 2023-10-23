import { IconType } from "react-icons";
import { HashLink as Link } from "react-router-hash-link";

type CardMainSkillsItemProps = {
  Icon: IconType;
  text: string;
  color: "orange" | "yellow" | "sky" | "emerald" | "black" | "purple" | "red";
  url?: string;
};

export default function CardMainSkillsItem({
  text,
  Icon,
  color,
  url = "/",
}: CardMainSkillsItemProps) {
  const css = {
    orange: "hover:text-orange-500",
    yellow: "hover:text-yellow-500",
    sky: "hover:text-sky-500",
    emerald: "hover:text-emerald-500",
    black: "hover:text-black",
    purple: "hover:text-purple-500",
    red: "hover:text-red-500",
  };

  return (
    <Link
      to={`/${url}`}
      smooth
      className={` flex flex-col items-center space-y-2  ${css[color]} hover:scale-110 transition-all duration-300 ease-in-out`}
    >
      <Icon className="text-[260%]" />
      <span className="text-[80%]">{text}</span>
    </Link>
  );
}
