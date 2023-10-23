import Section from "../ui/Section";
import SectionTitle from "../ui/Section.title";
import CardRealization from "./Card.realization";
import realizations from "../../data/realizations.json";

export default function SectionRealizations() {
  return (
    <Section css="bg-slate-200 select-none" id="realizations">
      <SectionTitle>Mes réalisations</SectionTitle>
      <div className="px-6 md:px-4 mx-auto w-full container flex justify-start flex-wrap">
        {realizations.realizations.map((realization, index) => (
          <CardRealization key={index} realization={realization} />
        ))}
      </div>
    </Section>
  );
}
