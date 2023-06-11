import Education from "./components/Education/Education";
import Header from "./components/Header/Header";
import Misc from "./components/Misc/Misc";
import Navigation from "./components/Navigation.js";
import Projects from "./components/Projects.js/Projects";
import Skills from "./components/Skills/Skills";
import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import { createTheme, ThemeProvider } from "@mui/material/styles";

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
