import React from "react";

export function MainTextHigh({ text }: { text: string }) {
  return (
    <h1 className="leading-relaxed text-end lg:text-start w-full text-clamp font-bold">
      {text}
    </h1>
  );
}
export function MainTextMedium({ text }: { text: string }) {
  return (
    <h2 className="leading-relaxed text-end lg:text-start w-full text-clampMd font-thin italic">
      {text}
    </h2>
  );
}
export function MainTextSm({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-3 text-end lg:text-start w-full text-clampSm font-mono font-light">
      {children}
    </h3>
  );
}
