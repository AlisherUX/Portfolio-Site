import Image from "next/image";
import * as styles from "../styles/Skills.module.css"
import * as Img from "../assets/images/index";

export default function Skills() {
  return (
      <div className={styles.skills_content}>
        <div className={styles.skills_text}>SKILLS</div>
        <div className={styles.skills_first_bg}></div>
        <div className={styles.skills_second_bg}></div>
      <div className={styles.skills_right_wrapper}>
        <Image src={Img.Google} alt="" width={65} />
        <Image src={Img.MaterialUi} alt="" />
        <Image src={Img.Tailwind} alt="" />
        <Image src={Img.React} alt="" width={70} />
        <Image src={Img.Styled} alt="" width={100} />
        <Image src={Img.Js} alt="" width={80} />
        <Image src={Img.Vercel} alt="" width={140} />
        <Image src={Img.GitHub} alt="" width={78} />
      </div>
      <div className={styles.skills_left_wrapper}>
        <Image src={Img.Google} alt="" width={65} />
        <Image src={Img.MaterialUi} alt="" />
        <Image src={Img.Tailwind} alt="" />
        <Image src={Img.React} alt="" width={70} />
        <Image src={Img.Styled} alt="" width={100} />
        <Image src={Img.Js} alt="" width={80} />
        <Image src={Img.Vercel} alt="" width={140} />
        <Image src={Img.GitHub} alt="" width={78} />
      </div>
      <div className={styles.skills_right_wrapper}>
        <Image src={Img.Google} alt="" width={65} />
        <Image src={Img.MaterialUi} alt="" />
        <Image src={Img.Tailwind} alt="" />
        <Image src={Img.React} alt="" width={70} />
        <Image src={Img.Styled} alt="" width={100} />
        <Image src={Img.Js} alt="" width={80} />
        <Image src={Img.Vercel} alt="" width={140} />
        <Image src={Img.GitHub} alt="" width={78} />
      </div>
      <div className={styles.skills_left_wrapper}>
        <Image src={Img.Google} alt="" width={65} />
        <Image src={Img.MaterialUi} alt="" />
        <Image src={Img.Tailwind} alt="" />
        <Image src={Img.React} alt="" width={70} />
        <Image src={Img.Styled} alt="" width={100} />
        <Image src={Img.Js} alt="" width={80} />
        <Image src={Img.Vercel} alt="" width={140} />
        <Image src={Img.GitHub} alt="" width={78} />
      </div>
    </div>
  );
}
