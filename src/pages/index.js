import { Roboto } from "next/font/google";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={roboto.className}>
      <Navbar />
      <div className="max-w-screen-2xl w-auto mx-auto  pt-36">
        <Banner />
      </div>
      <Skills />
      <div className="max-w-screen-2xl w-auto mx-auto">
        <About />
        <Footer />
      </div>
    </main>
  );
}
