import { IconType } from "react-icons";
import { HashLink as Link } from "react-router-hash-link";

type MenuContactItemProps = {
  href: string;
  Icon: IconType;
  label: string;
  css?: string;
};
export default function MenuContactItem({
  href,
  Icon,
  label,
  css = "",
}: MenuContactItemProps) {
  return (
    <Link
      aria-label={label}
      to={href}
      target="_blank"
      className={`${css} text-xl md:text-2xl hover:scale-[120%] hover:translate-x-[0.1rem] hover:-translate-y-[0.2rem] transition-all duration-500 ease-in-out`}
    >
      <Icon />
    </Link>
  );
}
