import { IconType } from "react-icons";

type TagsItemProps = {
  tag: string;
  Icon?: IconType;
  color?: "yellow" | "red" | "green" | "blue";
};

export default function TagsItem({ tag, Icon, color }: TagsItemProps) {
  const colorText = {
    yellow: "text-yellow-400",
    red: "text-red-400",
    green: "text-green-400",
    blue: "text-blue-400",
  };

  return (
    <li className="m-1 px-2 py-1 rounded-lg bg-amber-100 uppercase text-[0.5rem] md:text-xs font-fira flex items-center border border-amber-600 cursor-default">
      {Icon && (
        <Icon className={`inline-block mr-1 ${color && colorText[color]}`} />
      )}
      <span>{tag}</span>
    </li>
  );
}
