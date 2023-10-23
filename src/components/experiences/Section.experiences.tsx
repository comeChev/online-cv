import CardExperience from "./Card.experience";
import infos from "../../data/infos.json";
import SectionTitle from "../ui/Section.title";
import Section from "../ui/Section";

export default function SectionExperiences() {
  return (
    <Section id="experiences">
      <SectionTitle>Mon Parcours</SectionTitle>
      <div className="container mx-auto md:pr-4">
        {infos.experiences.map((experience, index) => (
          <CardExperience
            key={index}
            experience={experience}
            isExtreme={
              index === 0
                ? "top"
                : index === infos.experiences.length - 1
                ? "bottom"
                : "none"
            }
          />
        ))}
      </div>
    </Section>
  );
}
