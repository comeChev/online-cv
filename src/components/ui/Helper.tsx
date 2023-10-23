/**
 *  Add helper on hover
 *  @description Just add "peer" class to the children.
 *
 */

import { FaCaretDown } from "react-icons/fa";

export default function Helper({
  children,
  label,
  direction = "right",
  color = "black",
}: {
  children: React.ReactNode;
  label: string;
  direction?: "right" | "left" | "middle";
  color?: "sky" | "amber" | "red" | "emerald" | "black";
}) {
  const position =
    direction === "right"
      ? "right-[0.3rem]"
      : direction === "left"
      ? "left-[0.3rem]"
      : "left-[50%] -translate-x-1/2";

  const textColor = {
    sky: "text-sky-500",
    amber: "text-amber-500",
    red: "text-red-500",
    emerald: "text-emerald-500",
    black: "text-black",
  };
  const bgColor = {
    sky: "bg-sky-500",
    amber: "bg-amber-500",
    red: "bg-red-500",
    emerald: "bg-emerald-500",
    black: "bg-black",
  };

  return (
    <div className="relative helper">
      <div
        className={`helper-overlay opacity-0 -top-[44px] ${position} absolute transition-all duration-700 min-w-max`}
      >
        <p
          className={`${bgColor[color]} z-30 px-2 py-1 rounded-md overflow-hidden text-sm text-white `}
        >
          {label}
        </p>
        <FaCaretDown
          className={`text-4xl absolute top-[13px] ${textColor[color]} ${position}`}
        />
      </div>
      {children}
    </div>
  );
}
