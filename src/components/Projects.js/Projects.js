import { projects } from "../../resources/data.js";
import Project from "./Project.js";

export default function Projects() {
  return (
    <div>
      {projects.map((project) => (
        <Project data={project} key={project.name} />
      ))}
    </div>
  );
}
