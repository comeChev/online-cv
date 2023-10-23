import { IconType } from "react-icons";

export type SocialsItemProps = {
  label: string;
  Icon: IconType;
  url: string;
  color?: "blue" | "black" | "white" | "red" | "amber" | "emerald" | "violet";
  download?: boolean;
};

export default function SocialsItem({
  label,
  Icon,
  url,
  color = "blue",
  download = false,
}: SocialsItemProps) {
  const bgColor = {
    blue: "bg-sky-600 text-white",
    black: "bg-black text-white",
    white: "bg-white text-black",
    red: "bg-red-500 text-white",
    amber: "bg-amber-500 text-white",
    emerald: "bg-emerald-500 text-white",
    violet: "bg-violet-500 text-white",
  };
  return (
    <a
      target="_blank"
      rel="noreferrer"
      download={download}
      href={url}
      className={`p-2 mx-2 rounded-full ${bgColor[color]} hover:bg-transparent hover:scale-125 transition-all duration-500 ease-in-out cursor-pointer`}
      aria-label={label}
    >
      <Icon />
    </a>
  );
}
