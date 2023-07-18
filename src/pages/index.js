import { Roboto } from "next/font/google";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Weblern from "@/components/Weblern";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={roboto.className}>
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Weblern />
    </main>
  );
}
