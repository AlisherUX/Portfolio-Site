import Image from "next/image";
import Life from "../../assets/images/life.jpg";
import Next from "../../assets/images/nextjs.png";
import Material from "../../assets/images/material-ui.png";
import Tailwind from "../../assets/images/tailwind-css.png";
import Vercel from "../../assets/images/vercel.png";
import GitHub from "../../assets/images/github.png";
import Google from "../../assets/images/google-drive.png";

export default function Banner() {
  return (
    <div className="text-white w-auto flex flex-col py-16 gap-32">
      <div className="flex items-center justify-around">
        <div className=" text-8xl w-1/3 font-mono">Im a web programmer</div>

        <div className=" p-16 bg-slate-800 bg-white-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-slate-800">
          <Image src={Life} alt="" />
        </div>
      </div>

      <div className="flex items-center justify-center gap-72 overflow-hidden p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500">
        <Image src={Next} alt="" width={64} />
        <Image src={Material} alt="" />
        <Image src={Tailwind} alt="" />
        <Image src={Vercel} alt="" width={140}/>
        <Image src={GitHub} alt="" width={78}/>
        <Image src={Google} alt=""/>
      </div>

      <div className="animate-[wiggle_16s_ease-in-out_infinite] absolute opacity-20 rotate-45 right-5 bottom-7 w-1/2 blur-3xl h-48 rounded-3xl bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
      <div className="animate-[wiggle_16s_ease-in-out_infinite] absolute opacity-30 rotate-45 left-28 bottom-48 w-96 blur-3xl h-4/5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
    </div>
  );
}
