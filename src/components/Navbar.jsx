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
import Layer from "../assets/images/layers.png";
import Home from "../assets/images/home.png";
import User from "../assets/images/user.png";
import Info from "../assets/images/info.png";

const drawerWidth = 240;
const drawerColor = "#c5c4c4";

function DrawerAppBar(props) {
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

      <Divider />
      <List>
        <ListItem>
          <ListItemButton
            sx={{ textAlign: "center" }}
            className=" rounded-md delay-50 hover:bg-zinc-900"
          >
            <Image src={Info} alt="" width={20} />
            <ListItemText>About Me</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton
            sx={{ textAlign: "center" }}
            className=" rounded-md delay-50 hover:bg-zinc-900"
          >
            <Image src={Layer} alt="" width={20} />
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
            <Image src={User} alt="" width={20} />
            <ListItemText>My Accounts</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton
            sx={{ textAlign: "center" }}
            className=" rounded-md delay-50 hover:bg-zinc-900"
          >
            <Image src={Home} alt="" width={20} />
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
    <Box sx={{ display: "flex" }} className={styles.navbar_wrapper}>
      <CssBaseline />

      <AppBar component="nav" className={styles.navbar_nav}>
        <Toolbar className={styles.navbar_actions__wrapper}>
          <p className={styles.navbar_logo}>Alisher Abdirimov</p>

          <div className={styles.links_content}>
            <Link href="/">Home</Link>
            <Link href="/projects">About Me</Link>
            <Link href="/projects">My Projects</Link>
            <Link href="/projects">My Accounts</Link>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: "flex" }}
            >
              <div className={styles.burger_btn}>
                <div className={styles.burger_btn__items}></div>
                <div className={styles.burger_btn__items}></div>
                <div className={styles.burger_btn__items}></div>
              </div>
            </IconButton>
          </div>
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

export default DrawerAppBar;
