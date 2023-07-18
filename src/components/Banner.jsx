import styles from "../styles/Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner_wrapper}>
      <div className={styles.left_item}></div>
      <div className={styles.right_item}></div>
      <p className={styles.banner_title}>
        Mening portfolio saytimga xush kelibsiz
      </p>
      <p className={styles.banner_subtitle}>
        O’ylaymanki saytim siz uchun foydali bo’ladi va siz men va mening
        ishlarim haqida batafsil malumotlarga ega bo’lasiz.
      </p>
    </div>
  );
}
