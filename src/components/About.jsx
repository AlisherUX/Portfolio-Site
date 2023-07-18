import Image from "next/image";
import * as styles from "../styles/About.module.css";
import { Itpark } from "@/assets/images";

export default function About() {
  return (
    <div className={styles.about_wrapper}>
      <div className={styles.left_item}></div>
      <div className={styles.right_item}></div>
      <div className={styles.entries_wrapper}>
        <p className={styles.about_title}>Men haqimda</p>
        <p className={styles.about_text}>
          Salom, mening ismim Alisher Abdirimov va men hozirda IT parkda web
          dasturlash yani fullstack yo’nalishi bo’yicha darslarga qatnashaman.
          FullStack yo’nalishi o’z ichiga Backend va Frontend qurslarini oladi
          bundan tashqari men 1 oy Figma web dizayn chizish qursida ham taqsil
          olganman shuningdek men Frontend bo’yicha ko’plab dasturlash tillarini
          bilaman va mening bular bo’yicha ko’plab loyihalarim mavjud siz bular
          haqida keyingi bo’limlarda batafsil ma’lumot olishingiz mumkin.{" "}
        </p>
      </div>

      <div className={styles.about_img_wrapper}>
        <Image src={Itpark} width={1300} />
      </div>
    </div>
  );
}
