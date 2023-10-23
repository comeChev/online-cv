import React from "react";

type SectionTitleProps = {
  children: React.ReactNode;
};
export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h3 className="text-center text-4xl font-semibold font-coiny mb-10 mt-4 text-gray-800">
      {children}
    </h3>
  );
}
