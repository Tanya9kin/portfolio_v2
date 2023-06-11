import { Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2.js";

import { projects } from "../../resources/data.js";
import Project from "./Project.js";

export default function Projects() {
  return (
    <Grid container spacing={2}>
      {projects.map((project) => (
        <Project data={project} key={project.name} />
      ))}
    </Grid>
  );
}
