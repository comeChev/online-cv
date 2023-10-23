import { FaCode, FaDatabase, FaPencilRuler, FaTable } from "react-icons/fa";
import CardSkill from "./Card.skill";
import skills from "../../data/skills.json";
import SectionTitle from "../ui/Section.title";
import Section from "../ui/Section";

export default function SectionSkills() {
  return (
    <Section css="bg-slate-200" id="skills">
      <SectionTitle>Mes compétences</SectionTitle>
      <div className={`mt-10 container mx-auto`}>
        <CardSkill
          color="blue"
          Icon={FaCode}
          value={skills.front}
          id="frontend"
        />
        <CardSkill
          color="red"
          Icon={FaDatabase}
          position="left"
          value={skills.back}
          id="backend"
        />

        <CardSkill color="green" Icon={FaTable} value={skills.cms} id="cms" />
        <CardSkill
          color="pink"
          Icon={FaPencilRuler}
          value={skills.design}
          position="left"
          id="design"
        />
      </div>
    </Section>
  );
}
