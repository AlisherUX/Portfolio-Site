import Image from "next/image";
import styles from "../styles/Banner.module.css";
import Egg from "../assets/images/egg.gif";
import Next from "../assets/images/nextjs.png";
import Material from "../assets/images/material-ui.png";
import Tailwind from "../assets/images/tailwind-css.png";
import Vercel from "../assets/images/vercel.png";
import GitHub from "../assets/images/github.png";
import Google from "../assets/images/google-drive.png";
import JS from "../assets/images/js.png";
import Styled from "../assets/images/styled.png";
import React from "../assets/images/react.png";

export default function Banner() {
  return (
    <div className={styles.banner_wrapper}>
      <div className={styles.banner_entries__content}>
        <div className={styles.banner_texts_wrapper}>
          <p className={styles.banner_title}>
            Welcome, to my portfolio web site
          </p>
          <p className={styles.banner_subtitle}>I am a web developer and you can get to know me or rate my works and enjoy my site</p>
        </div>

          <Image src={Egg} alt="" width={600}/>
      </div>

      <div className={styles.skills_content}>
        <div className={styles.skills_inner_wrapper}>
          <Image src={Google} alt="" width={65}/>
          <Image src={Next} alt="" width={64} />
          <Image src={Material} alt="" />
          <Image src={Tailwind} alt="" />
          <Image src={React} alt="" width={70}/>
          <Image src={Styled} alt="" width={100}/>
          <Image src={JS} alt="" width={80}/>
          <Image src={Vercel} alt="" width={140} />
          <Image src={GitHub} alt="" width={78} />
        </div>
      </div>

      <div className={styles.first_bg_blur}></div>
      <div className={styles.second_bg_blur}></div>
    </div>
  );
}
