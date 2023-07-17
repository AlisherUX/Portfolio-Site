import Image from "next/image";
import styles from "../styles/Banner.module.css";
import * as Img from "../assets/images/index";

export default function Banner() {
  return (
    <div className={styles.banner_wrapper}>
      <div className={styles.banner_entries__content}>
        <div className={styles.banner_texts_wrapper}>
          <p className={styles.banner_title}>
            Welcome, to my portfolio web site
          </p>
          <p className={styles.banner_subtitle}>
            I am a web developer and you can get to know me or rate my works and
            enjoy my site
          </p>
        </div>

        <Image src={Img.Egg} alt="" width={600} />
      </div>

      <div className={styles.first_bg_blur}></div>
      <div className={styles.second_bg_blur}></div>
    </div>
  );
}
