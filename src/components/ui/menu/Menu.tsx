import { useState } from "react";
import {
  FaArrowRight,
  FaBars,
  FaEnvelope,
  FaFacebookF,
  FaFilePdf,
  FaGithub,
  FaLinkedinIn,
  FaMobileAlt,
} from "react-icons/fa";
import { FaXTwitter, FaXmark } from "react-icons/fa6";
import MenuSide from "./Menu.side";
import { HashLink as Link } from "react-router-hash-link";
import infos from "../../../data/infos.json";
import SocialsItem, { SocialsItemProps } from "../footer/Footer.socials.item";

export default function Menu() {
  const [open, setIsOpen] = useState(false);
  function handleOpen() {
    setIsOpen(!open);
  }

  const menu = [
    {
      title: "Accueil",
      link: "/#top",
    },
    {
      title: "A propos de moi",
      link: "/#about",
    },
    {
      title: "Mes compétences",
      link: "/#skills",
    },
    {
      title: "Mon parcours",
      link: "/#experiences",
    },
    {
      title: "Mes réalisations",
      link: "/#realizations",
    },
    {
      title: "Contact",
      link: "/#contact",
    },
  ];

  const IconVar = {
    Facebook: FaFacebookF,
    Twitter: FaXTwitter,
    Linkedin: FaLinkedinIn,
    Github: FaGithub,
  };

  return (
    <header className="select-none">
      <MenuSide open={open} paddingTop="pt-[20px]">
        <ul className="mx-6 space-y-4 mt-12 flex-1">
          {menu.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b-2 border-white text-slate-50 text-lg md:text-xl font-coiny hover:bg-white hover:text-black transition-all duration-500 ease-in-out"
            >
              <Link
                smooth
                to={item.link}
                onClick={handleOpen}
                className="flex-1 peer py-3 px-4"
              >
                {item.title}
              </Link>
              <FaArrowRight className="inline-block ml-2 opacity-0 hover:opacity-80 peer-hover:opacity-80 text-black mr-4 transition-all duration-500 ease-in-out" />
            </li>
          ))}
        </ul>
        {/* socials */}
        <div className="mb-16 lg:mb-6">
          <div className="flex items-center justify-center mb-1 py-2 rounded-md">
            {infos.socials.map((item, index) => (
              <SocialsItem
                url={item.url}
                key={index}
                label={item.name}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                Icon={IconVar[item.name]}
                color={item.mainColor as SocialsItemProps["color"]}
              />
            ))}
          </div>
          <div className="flex items-center justify-center mb-1 py-2 rounded-md">
            <SocialsItem
              url={`tel:${infos.internationalPhone}`}
              label="Appelez-moi"
              Icon={FaMobileAlt}
              color="emerald"
            />
            <SocialsItem
              url={`mailto:${infos.mail}`}
              label="Envoyez-moi un email"
              Icon={FaEnvelope}
              color="violet"
            />
            <SocialsItem
              url={"/src/assets/CV_chevallier.pdf"}
              download={true}
              label="Télécharger mon CV"
              Icon={FaFilePdf}
              color="red"
            />
          </div>
        </div>
      </MenuSide>
      <div className="w-full min-h-[40px] bg-slate-800 opacity-90 text-white text-2xl flex items-center justify-between p-2 fixed top-0 z-50">
        <p className="text-sm md:text-lg lg:text-xl font-coiny">
          Côme Chevallier - Développeur web
        </p>
        {open ? (
          <FaXmark className="text-4xl cursor-pointer" onClick={handleOpen} />
        ) : (
          <FaBars className="text-4xl cursor-pointer" onClick={handleOpen} />
        )}
      </div>
    </header>
  );
}
