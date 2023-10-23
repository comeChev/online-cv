import infos from "../../data/infos.json";
import InfoItem from "./Card.about.info.item";
import CardAboutProfile from "./Card.about.profile";

import Section from "../ui/Section";
import SectionTitle from "../ui/Section.title";
import CardAboutContact from "./Card.about.contact";

export default function SectionAbout() {
  return (
    <Section id="about">
      <SectionTitle>A propos de moi</SectionTitle>
      <div className="mx-4 lg:mx-auto max-w-[1000px] min-h-[600px] lg:flex lg:flex-row">
        <div className="lg:mr-6 lg:flex-col lg:flex lg:w-[30%] lg:bg-slate-50 lg:shadow-rl lg:shadow-slate-300  pb-2 lg:rounded-lg lg:border lg:border-slate-200">
          <CardAboutProfile />
          <div className="hidden lg:block mt-3 px-2 flex-1">
            {infos.infos.map((info, index) => (
              <InfoItem
                key={index}
                label={info.label}
                content={info.content}
                isDate={info.label === "Âge" ? true : false}
              />
            ))}
            <InfoItem label="téléphone" content={infos.phone} isDate={false} />
          </div>
          {/* buttons contact */}
          <CardAboutContact />

          {/* about infos */}
          <div className="lg:hidden">
            <div className="mb-8">
              {infos.infos.map((info, index) => (
                <InfoItem
                  key={index}
                  label={info.label}
                  content={info.content}
                  isDate={info.label === "Âge" ? true : false}
                />
              ))}
            </div>
            {infos.about.map((paragraph, index) => (
              <p
                key={index}
                className="mb-6 font-light leading-relaxed text-justify"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-col flex-1">
          {infos.about.map((paragraph, index) => (
            <p
              key={index}
              className="mb-3 text-justify leading-relaxed font-light"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
