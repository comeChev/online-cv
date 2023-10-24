import profilePic from "../../assets/profilePic.png";
import portraitPic from "../../assets/portraitPic.jpeg";

export default function CardAboutProfile({ css = "" }: { css?: string }) {
  return (
    <div
      className={`float-left rounded-text relative w-[30%] mr-4 mb-1 lg:mr-0 lg:mb-0 lg:w-auto  ${css} rounded-2xl`}
    >
      <img
        src={profilePic}
        className="w-full h-full object-cover rounded-t-2xl"
        alt="avatar Côme Chevallier"
      />
      <img
        src={portraitPic}
        alt="portrait Côme Chevallier"
        className="absolute w-full h-full top-0 object-cover opacity-0 hover:opacity-100 transition-all duration-[1s] ease-in-out lg:rounded-2xl"
      />
    </div>
  );
}
