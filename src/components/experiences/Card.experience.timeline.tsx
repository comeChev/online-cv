type CardExperienceTimelineProps = {
  isExtreme?: "top" | "bottom" | "none";
};

export default function CardExperienceTimeline({
  isExtreme = "none",
}: CardExperienceTimelineProps) {
  return (
    <div
      className={`h-auto w-[10px] bg-slate-200 opacity-40 ${
        isExtreme === "top"
          ? "rounded-t-lg"
          : isExtreme === "bottom"
          ? "rounded-b-lg"
          : ""
      } mr-16 relative hidden lg:block `}
    >
      <div className="w-6 h-6 rounded-full bg-slate-200 absolute top-[50%] right-[50%] translate-x-[50%]" />
    </div>
  );
}
