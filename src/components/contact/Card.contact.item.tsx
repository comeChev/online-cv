import { IconType } from "react-icons";
import { getStringPhone } from "../../lib/globals";

type CardContactItemProps = {
  label: string;
  value: string;
  Icon: IconType;
  type: "phone" | "mail" | "address";
  color?: "red" | "blue" | "emerald" | "amber" | "green" | "gray" | "pink";
};

export default function CardContactItem({
  label,
  value,
  Icon,
  type,
  color = "gray",
}: CardContactItemProps) {
  const urlType = {
    phone: `tel:${value}`,
    mail: `mailto:${value}`,
    address: `https://www.google.com/maps/place/${value}`,
  };

  const colorType = {
    red: "bg-red-200 text-red-800 hover:bg-red-300 hover:text-red-900 shadow-red-400",
    blue: "bg-blue-200 text-blue-800 hover:bg-blue-300 hover:text-blue-900 shadow-blue-400",
    emerald:
      "bg-emerald-200 text-emerald-800 hover:bg-emerald-300 hover:text-emerald-900 shadow-emerald-400",
    amber:
      "bg-amber-200 text-amber-800 hover:bg-amber-300 hover:text-amber-900 shadow-amber-400",
    green:
      "bg-green-200 text-green-800 hover:bg-green-300 hover:text-green-900 shadow-green-400",
    gray: "bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-gray-900 shadow-gray-400",
    pink: "bg-pink-200 text-pink-800 hover:bg-pink-300 hover:text-pink-900 shadow-pink-400",
  };

  return (
    <a
      href={urlType[type]}
      aria-label={label}
      className={`flex-1 flex flex-col h-full justify-center items-center p-4 ${colorType[color]} shadow-sm rounded-lg transition-all duration-300 ease-in-out mx-2 font-semibold`}
    >
      <Icon className="text-6xl my-4" />
      <p className="mb-4">{type === "phone" ? getStringPhone(value) : value}</p>
    </a>
  );
}
