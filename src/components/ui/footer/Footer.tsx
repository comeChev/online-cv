/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FaFacebookF, FaFilePdf, FaLinkedinIn } from "react-icons/fa";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import SocialsItem, { SocialsItemProps } from "./Footer.socials.item";
import infos from "../../../data/infos.json";

export default function Footer() {
  const IconVar = {
    Facebook: FaFacebookF,
    Twitter: FaXTwitter,
    Linkedin: FaLinkedinIn,
    Github: FaGithub,
  };

  return (
    <footer className="w-screen bg-slate-800 text-white">
      <div className="w-full flex items-center justify-center pt-6 pb-2">
        {infos.socials.map((item, index) => (
          <SocialsItem
            url={item.url}
            key={index}
            label={item.name}
            // @ts-ignore
            Icon={IconVar[item.name]}
            color={item.mainColor as SocialsItemProps["color"]}
          />
        ))}
        <SocialsItem
          url={"/CV_chevallier.pdf"}
          download={true}
          label="Télécharger mon CV"
          Icon={FaFilePdf}
          color="red"
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center text-slate-300 text-xs text-light pt-2 pb-6">
        <p>Côme Chevallier © 2023</p>
        <p>Tous droits réservés</p>
      </div>
    </footer>
  );
}
