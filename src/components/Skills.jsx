import * as styles from "../styles/Skills.module.css";

export default function Skills() {
  return <div className={styles.skills_wrapper}>
    <div className={styles.left_item}></div>
    <div className={styles.right_item}></div>
    <p className={styles.skills_title}>Mening mahoratlarim</p>

    <div className={styles.boxes_wrapper}>

      <div className={styles.box_outline}>
        <div className={styles.box}>Javascript</div>
      </div>

      <div className={styles.box_outline}>
        <div className={styles.box}>Typescript</div>
      </div>

      <div className={styles.box_outline}>
        <div className={styles.box}>React.js</div>
      </div>

      <div className={styles.box_outline}>
        <div className={styles.box}>Next.js</div>
      </div>

      <div className={styles.box_outline}>
        <div className={styles.box}>Tailwind.css</div>
      </div>

      <div className={styles.box_outline}>
        <div className={styles.box}>Bootstrap</div>
      </div>

      <div className={styles.box_outline}>
        <div className={styles.box}>CSS</div>
      </div>

      <div className={styles.box_outline}>
        <div className={styles.box}>HTML</div>
      </div>

      <div className={styles.box_outline}>
        <div className={styles.box}>SCSS</div>
      </div>

      <div className={styles.box_outline}>
        <div className={styles.box}>Node.js</div>
      </div>

    </div>
  </div>;
}
