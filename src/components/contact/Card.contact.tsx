import { FaEnvelope, FaMobileAlt } from "react-icons/fa";
import CardContactItem from "./Card.contact.item";
import infos from "../../../src/data/infos.json";
import { MdAssuredWorkload } from "react-icons/md";

export default function CardContact() {
  return (
    <div className="flex flex-col lg:flex-row mt-10 space-y-4 lg:space-y-0">
      <div className="flex flex-1 flex-col md:flex-row space-y-4 md:space-y-0 flex-grow">
        <CardContactItem
          label="Téléphone"
          value={infos.internationalPhone}
          Icon={FaMobileAlt}
          type="phone"
          color="emerald"
        />
        <CardContactItem
          label="Mail"
          value={infos.mail}
          Icon={FaEnvelope}
          type="mail"
          color="blue"
        />
      </div>
      <div
        className={`lg:w-1/3 flex flex-col justify-center items-center p-4 bg-amber-200 text-amber-800 hover:bg-amber-300 hover:text-amber-900 shadow-amber-400 shadow-sm rounded-lg transition-all duration-300 ease-in-out mx-2 font-semibold`}
      >
        <MdAssuredWorkload className="text-6xl my-4" />
        <p className="">Vous souhaitez me rencontrer ?</p>
        <p className="mb-4 mt-1 font-extralight text-center">
          Je suis disponible à Montpellier et ses alentours
        </p>
      </div>
    </div>
  );
}
