import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styles from "../styles/Navbar.module.css";
import * as Img from "../assets/images/index";

const drawerWidth = 240;
const drawerColor = "#c5c4c4";

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Alisher
      </Typography>

      <Divider className=" bg-zinc-700" />
      <List>
        <ListItem>
          <ListItemButton
            sx={{ textAlign: "center" }}
            className=" rounded-md delay-50 hover:bg-zinc-900"
            >
            <Image src={Img.InfoIcon} alt="" width={20} />
            <ListItemText>About Me</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton
            sx={{ textAlign: "center" }}
            className=" rounded-md delay-50 hover:bg-zinc-900"
            >
            <Image src={Img.LayersIcon} alt="" width={20} />
            <ListItemText>
              <Link href="/projects">My Projects</Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton
            sx={{ textAlign: "center" }}
            className=" rounded-md delay-50 hover:bg-zinc-900"
            >
            <Image src={Img.UserIcon} alt="" width={20} />
            <ListItemText>My Accounts</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton
            sx={{ textAlign: "center" }}
            className=" rounded-md delay-50 hover:bg-zinc-900"
            >
            <Image src={Img.HomeIcon} alt="" width={20} />
            <ListItemText>
              <Link href="/">Home</Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  
  const container =
  window !== undefined ? () => window().document.body : undefined;
  
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar component="nav" className={styles.navbar_nav}>
        <Toolbar className={styles.navbar_inner_wrapper}>
          <Link href="/">A.Abdirimov</Link>

          <Box className={styles.actions_content}>
            <Box sx={{ display: { xs: "none", sm: "flex", gap: "20px" } }}>
              <Link className={styles.navbar_link} href="/">
                Home
              </Link>
              <Link className={styles.navbar_link} href="/">
                About Me
              </Link>
              <Link className={styles.navbar_link} href="/projects">
                Projects
              </Link>
              <Link className={styles.navbar_link} href="/">
                Accounts
              </Link>
            </Box>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: "flex", marginLeft: "0px", padding: "0px" }}
            >
              <div className={styles.burger_btn}>
                <div className={styles.burger_btn__items}></div>
                <div className={styles.burger_btn__items}></div>
                <div className={styles.burger_btn__items}></div>
              </div>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          className="drop-shadow-2xl 
          bg-slate-900 rounded-md bg-clip-padding backdrop-filter
          backdrop-blur-md bg-opacity-40"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "rgba(19, 19, 19, 0.784)",
              color: drawerColor,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Navbar;
