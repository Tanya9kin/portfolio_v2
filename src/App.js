import Education from "./components/Education/Education";
import Header from "./components/Header/Header";
import Misc from "./components/Misc/Misc";
import Projects from "./components/Projects.js/Projects";
import Skills from "./components/Skills/Skills";
export default function App() {
  return (
    <div>
      <Header />
      <Projects />
      <Education />
      <Skills />
      <Misc />
    </div>
  );
}
