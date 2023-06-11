import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

const drawerWidth = 240;
const navItems = ["About", "Projects", "Education", "Contact"];

function Navigation(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  //   const drawer = (
  //     <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
  //       <Typography variant="h6" sx={{ my: 2 }}>
  //         Tanya Deveykin
  //       </Typography>
  //       <Divider />
  //       <List>
  //         {navItems.map((item) => (
  //           <ListItem key={item} disablePadding>
  //             <ListItemButton sx={{ textAlign: "center" }}>
  //               <ListItemText primary={item} />
  //             </ListItemButton>
  //           </ListItem>
  //         ))}
  //       </List>
  //     </Box>
  //   );

  //   <Box component="nav">
  //         <Drawer
  //           container={container}
  //           variant="temporary"
  //           open={mobileOpen}
  //           onClose={handleDrawerToggle}
  //           ModalProps={{
  //             keepMounted: true, // Better open performance on mobile.
  //           }}
  //           sx={{
  //             display: { xs: "block", sm: "none" },
  //             "& .MuiDrawer-paper": {
  //               boxSizing: "border-box",
  //               width: drawerWidth,
  //             },
  //           }}
  //         >
  //           {drawer}
  //         </Drawer>
  //       </Box>

  //   const container =
  //     window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar component="nav">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Tanya Deveykin
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "#fff" }}>
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </Box>
  );
}

export default Navigation;
