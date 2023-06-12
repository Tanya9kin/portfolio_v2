import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Header from "./components/Header/Header";
import Projects from "./components/Projects.js/Projects";
import Navigation from "./components/Navigation.js";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Misc from "./components/Misc/Misc";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0b3f35",
    },
    secondary: {
      main: "#de0c57",
    },
    background: {
      default: "#edffef",
      paper: "#ffffff",
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl">
        {/* <Navigation /> */}
        <Header />
        <Projects />
        {/* <Education /> */}
      </Container>
    </ThemeProvider>
  );
}
