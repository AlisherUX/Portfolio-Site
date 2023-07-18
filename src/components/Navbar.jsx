import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { Box } from "@mui/material";

const Navbar = () => {
  return (
    <div className={styles.navbar_nav}>
      <div className={styles.left_item}></div>
      <div className={styles.right_item}></div>
      <div className={styles.top_item}></div>
      <Link href="/" className={styles.logo}>A.Abdirimov</Link>

      <div className={styles.actions_wrapper}>
        <Box sx={{display:{xm:"none", xm:"flex"}}} className={styles.links_wrapper}>
          <Link href="/" className={styles.nav_link}>Projects</Link>
          <Link href="/" className={styles.nav_link}>About</Link>
        </Box>

        <div className={styles.burger_btn}>
          <div className={styles.btn_item}></div>
          <div className={styles.btn_item}></div>
          <div className={styles.btn_item}></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
