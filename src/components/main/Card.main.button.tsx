import { FaFilePdf } from "react-icons/fa";
import Helper from "../ui/Helper";
import { IconType } from "react-icons";

export function CardMainDownload() {
  return (
    <a
      className="hidden md:flex lg:items-center border-2 border-sky-300 rounded-lg px-4 py-2 mt-4 hover:bg-sky-300 hover:scale-110 hover:text-gray-800 hover:border-gray-800 transition duration-500 ease-in-out"
      type="button"
      href="../src/assets/CV_chevallier.pdf"
      download={true}
      target="_blank"
    >
      <span className="flex items-center">
        <FaFilePdf className="text-xl mr-2" /> Télécharger mon CV
      </span>
    </a>
  );
}

type ButtonAboutProps = {
  label: string;
  direction: "right" | "left" | "middle";
  href: string;
  download?: boolean;
  Icon: IconType;
  color?: "sky" | "amber" | "red" | "emerald" | "black";
};

export const ButtonAbout = ({
  label,
  direction,
  href,
  download = false,
  Icon,
  color = "sky",
}: ButtonAboutProps) => {
  let mainColor;
  switch (color) {
    case "sky":
      mainColor = "bg-sky-500";
      break;
    case "amber":
      mainColor = "bg-amber-500";
      break;
    case "red":
      mainColor = "bg-red-500 ";
      break;
    case "emerald":
      mainColor = "bg-emerald-500";
      break;
    case "black":
      mainColor = "bg-black";
      break;
    default:
      mainColor = "bg-sky-500 hover:bg-gray-800 hover:text-sky-300 ";
  }

  return (
    <Helper label={label} direction={direction} color={color}>
      <a
        className={`peer flex items-center p-4 bg-black rounded-full text-white ${mainColor} transition duration-300 ease-in-out text-2xl hover:scale-110`}
        href={href}
        download={download}
        aria-label={label}
      >
        <Icon className="" />
      </a>
    </Helper>
  );
};
