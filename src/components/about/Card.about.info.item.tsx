import { getAge } from "../../lib/globals";

type InfoItemProps = {
  label: string;
  content: string | JSX.Element;
  isDate: boolean;
  css?: string;
};

export default function InfoItem({
  label,
  content,
  isDate,
  css = "",
}: InfoItemProps) {
  return (
    <p className={`my-1.5 ${css} font-light text-sm leading-relaxed`}>
      <span className="font-semibold">{label}</span> :{" "}
      {isDate ? `${getAge(content as string)} ans` : `${content}`}
    </p>
  );
}
