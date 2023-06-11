// import {
//   Card,
//   Button,
//   Typography,
//   CardContent,
//   CardActions,
// } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

// export default function Project(props) {
//   const { name, category, year, img, githubURL, websiteURL, description } =
//     props.data;

//   return (
//     <Grid item="true" xs={12} sm={6} md={4} lg={3}>
//       <Card>
//         <CardContent>
//           <Typography variant="h4">{name}</Typography>
//           <Typography variant="h6">{`${category} Project - ${year}`}</Typography>
//           {/* {img && <img src={img}></img>} */}
//           {/* <Typography variant="h6">Description</Typography> */}
//           <Typography variant="body1">{description}</Typography>
//         </CardContent>
//         <CardActions>
//           {websiteURL && (
//             <Button color="secondary" href={websiteURL}>
//               Open Website
//             </Button>
//           )}
//           {githubURL && (
//             <Button color="secondary" href={githubURL}>
//               Open Code On GitHub
//             </Button>
//           )}
//         </CardActions>
//       </Card>
//     </Grid>
//   );
// }

import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import WebIcon from "@mui/icons-material/Web";
import GitHubIcon from "@mui/icons-material/GitHub";
import { CardActionArea } from "@mui/material";

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

export default function Project(props) {
  const [expanded, setExpanded] = React.useState(false);
  const {
    name,
    category,
    year,
    img,
    githubURL,
    websiteURL,
    description,
    summery,
  } = props.data;

  const [imageStyle, setImageStyle] = React.useState({
    filter: "grayscale(0.7)",
  });

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleMouseOver = () => {
    setImageStyle({ filter: "grayscale(0)" });
  };

  const handleMouseLeave = () => {
    setImageStyle({ filter: "grayscale(0.7)" });
  };

  return (
    <Grid item="true" xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <CardHeader title={name} subheader={`${category} - ${year}`} />
          <CardMedia
            id="projectImage"
            component="img"
            height="194"
            image={img}
            alt="Project image"
            sx={imageStyle}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {summery}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions disableSpacing>
          <IconButton
            aria-label="Go to website"
            color="secondary"
            disabled={websiteURL ? false : true}
            href={websiteURL}
            target="_blank"
          >
            <WebIcon fontSize="large" />
          </IconButton>
          <IconButton
            aria-label="Check out on github"
            color="secondary"
            disabled={githubURL ? false : true}
            href={githubURL}
            target="_blank"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{description}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}

/* <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"> 
             <ExpandMoreIcon /> 
             </ExpandMore> */
