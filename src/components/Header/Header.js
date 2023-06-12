import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { ThemeProvider, createTheme } from "@mui/material";
// import profile_picture from "../../resources/profile-picture.jpg";
import {
  Paper,
  Card,
  CardMedia,
  CardContent,
  Box,
  Typography,
} from "@mui/material";

const typeTheme = createTheme();

export default function Header() {
  return (
    <ThemeProvider theme={typeTheme}>
      <Grid
        container
        sx={{
          paddingTop: 5,
          paddingBottom: 5,
          margin: "0 auto",
          gap: 4,
          justifyContent: "center",
        }}
      >
        <Grid
          item="true"
          xs={12}
          sm={6}
          md={4}
          lg={3}
          component="img"
          sx={{
            width: 300,
            borderRadius: 50,
            boxShadow: 6,
            marginBottom: 1,
          }}
          // src={profile_picture}
          alt="Profile Picture"
        ></Grid>
        <Grid item="true" xs={11} sm={10} md={6} lg={5}>
          <Typography variant="h2" sx={{ marginBottom: 2 }}>
            Hi, I'm Tanya
          </Typography>
          <Typography variant="h5" color="grey">
            A Technion Computer Science graduate, passionate about front-end web
            development, and dedicated to creating a great user experince
          </Typography>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

// <header>
//   {/* <img src="../../resources/profile_picture.jpg" /> */}
//   <h1>Tanya Deveykin</h1>
//   <span>
//     A software developer passionate about making apps that are great
//     user-experince wise and always thinking about the next developer that
//     might look at the code and decide it is absolute shit.
//   </span>
// </header>
