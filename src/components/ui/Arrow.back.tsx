import { HashLink as Link } from "react-router-hash-link";
import { BsArrowUpCircleFill } from "react-icons/bs";

export default function ArrowBack({ visible }: { visible: boolean }) {
  return (
    <div
      className={`${
        visible ? "fixed bottom-5 right-5 z-30" : "hidden"
      } bg-white rounded-full border border-white`}
    >
      <Link
        to="/#top"
        smooth
        className="text-[260%] bg-white text-sky-800 rounded-full hover:text-sky-500 hover:scale-110 transition-all duration-300 ease-in-out"
        aria-label="Retourner en haut de la page"
      >
        <BsArrowUpCircleFill />
      </Link>
    </div>
  );
}
