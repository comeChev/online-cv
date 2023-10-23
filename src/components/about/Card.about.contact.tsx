import { ButtonAbout } from "../main/Card.main.button";
import infos from "../../data/infos.json";
import { FaFilePdf, FaPhoneAlt } from "react-icons/fa";
import { BsFillChatQuoteFill } from "react-icons/bs";

export default function CardAboutContact({
  visible = false,
}: {
  visible?: boolean;
}) {
  return (
    <div
      className={`${
        !visible ? "hidden lg:flex" : "flex"
      } px-6 justify-between w-full mb-4`}
    >
      <ButtonAbout
        label="Télécharger mon CV"
        direction="left"
        href="../../src/assets/CV_chevallier.pdf"
        download={true}
        Icon={FaFilePdf}
        color="red"
      />
      <ButtonAbout
        label={`Appelez-moi au ${infos.phone}`}
        direction="middle"
        href={`tel:${infos.internationalPhone}`}
        download={false}
        Icon={FaPhoneAlt}
        color="emerald"
      />
      <ButtonAbout
        label={`@${infos.mail}`}
        direction="right"
        href={`mailto:${infos.mail}`}
        download={false}
        Icon={BsFillChatQuoteFill}
        color="sky"
      />
    </div>
  );
}
