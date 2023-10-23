import "./App.css";
import SectionAbout from "./components/about/Section.about";
import SectionContact from "./components/contact/Section.contact";
import SectionExperiences from "./components/experiences/Section.experiences";
import CardMainSkills from "./components/main/Card.main.skills";
import SectionMain from "./components/main/Section.main";
import SectionRealizations from "./components/realizations/Section.realizations";
import SectionSkills from "./components/skills/Section.skills";
import Footer from "./components/ui/footer/Footer";
import Menu from "./components/ui/menu/Menu";

function App() {
  return (
    <>
      <Menu />
      <main className="w-full min-h-screen scroll-smooth">
        <div className="h-full w-full">
          {/* Main */}
          <SectionMain />

          {/* Main skills */}
          <CardMainSkills />

          {/* About */}
          <SectionAbout />

          {/* Skills */}
          <SectionSkills />

          {/* Experiences */}
          <SectionExperiences />

          {/* Realizations */}
          <SectionRealizations />

          {/* Contact */}
          <SectionContact />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
