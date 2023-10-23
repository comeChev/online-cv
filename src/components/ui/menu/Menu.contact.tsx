import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import infos from "../../../data/infos.json";
import { FaXTwitter } from "react-icons/fa6";
import MenuContactItem from "./Menu.contact.item";
import { BsFillEnvelopeAtFill } from "react-icons/bs";

export default function MenuContact() {
  return (
    <div className="px-2 py-4 md:px-4 flex bg-slate-200  rounded-2xl mx-auto  mb-10 shadow-md shadow-slate-800">
      <div className="px-2 md:px-4 flex items-center space-x-2 border-r border-black">
        <MenuContactItem
          href=""
          Icon={FaFacebook}
          label="Facebook"
          css="text-sky-600"
        />
        <MenuContactItem href="" Icon={FaXTwitter} label="Twitter" />
        <MenuContactItem
          href=""
          Icon={FaLinkedin}
          label="Linkedin"
          css="text-blue-600"
        />
        <MenuContactItem href="" Icon={FaGithub} label="GitHub" />
        <MenuContactItem
          href=""
          Icon={FaDiscord}
          label="Discord"
          css="text-violet-600"
        />
      </div>
      <div className="px-2 md:px-4 flex space-x-3 items-center">
        <MenuContactItem
          href={`tel:${infos.internationalPhone}`}
          Icon={FaPhoneAlt}
          label="Téléphone"
          css="text-green-600 text-xl"
        />
        <MenuContactItem
          href={`mailto:${infos.mail}`}
          Icon={BsFillEnvelopeAtFill}
          label="Courriel"
          css="text-blue-600"
        />
      </div>
    </div>
  );
}
