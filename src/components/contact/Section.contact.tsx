import Section from "../ui/Section";
import SectionTitle from "../ui/Section.title";
import CardContact from "./Card.contact";

export default function SectionContact() {
  const jobs = [
    "Développeur full-stack",
    "Développeur front-end",
    "Développeur back-end",
    "Intégrateur web",
    "Développeur mobile",
  ];
  return (
    <Section id="contact" css="">
      <SectionTitle>Me contacter</SectionTitle>
      <div className="container mx-auto px-6 text-sm text-justify font-light leading-relaxed text-gray-600">
        <p className="mb-3">
          Jeune développeur passionné, je suis à la recherche d'un nouvel emploi
          en tant que <strong className="font-semibold">junior</strong>.
        </p>
        <p className="mb-1">Je suis intéressé par les postes de : </p>
        <ul className="flex flex-col md:flex-row flex-wrap mb-3">
          {jobs.map((job, index) => (
            <li key={index} className="list-disc ml-10 mr-2 font-semibold">
              {job}
            </li>
          ))}
        </ul>
        <p className="font-light">
          Disponible en <strong className="font-semibold">télétravail</strong>{" "}
          également, je suis ouvert à toute proposition et prêt à m'investir
          dans un nouveau projet et à{" "}
          <strong className="font-semibold">
            intégrer de nouvelles équipes
          </strong>{" "}
          et <strong className="font-semibold">apprendre</strong>.
        </p>
        <CardContact />
      </div>
    </Section>
  );
}
