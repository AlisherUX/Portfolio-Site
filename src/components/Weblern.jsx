import Image from "next/image";
import * as styles from "../styles/Weblern.module.css";
import { Itpark } from "@/assets/images";

const Weblern = () => {
  return (
    <div className={styles.weblern_wrapper}>
        <div className={styles.right_item}></div>
        <div className={styles.left_item}></div>
      <p className={styles.weblern_title}>Weblern haqida</p>

      <div className={styles.weblern_content}>
        <p className={styles.weblern_text}>
          Weblern - bu mening navbatdagi men uchun juda muhim bo’lgan loyiha bu
          loyihaning maqsadi Frontend bilimlarini mustahkamlash va yangi bilim
          larga ega bo’lish uchun web dasturlash bilimlarini o’zida jamlagan
          sayt. Bu sayt Backend kursida Frontend sustlashmasligi uchun xizmat
          qiladigan ortiqcha elementlarsiz oddiy sayt.
        </p>
        <Image src={Itpark} width={750}/>
      </div>
    </div>
  );
};

export default Weblern;
