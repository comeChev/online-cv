import { FaRegStar, FaStar } from "react-icons/fa";
import { ColorClass } from "../../lib/globals";

type CardSkillNoteProps = {
  note: number;
  color: ColorClass;
};

export default function CardSkillNote({ note, color }: CardSkillNoteProps) {
  const notes = [1, 2, 3, 4, 5];
  return (
    <div className="flex space-x-1">
      {notes.map((n) =>
        note >= n ? (
          <FaStar
            key={n}
            className={`${color[1]} text-[0.6rem] md:text-[1rem]`}
          />
        ) : (
          <FaRegStar
            key={n}
            className={`${color[2]} text-[0.6rem] md:text-[1rem]`}
          />
        )
      )}
    </div>
  );
}
