import { Roboto } from "next/font/google";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={roboto.className}>
      <Navbar />
      <div className="max-w-screen-2xl w-auto mx-auto">
        <Banner />
        <Footer />
      </div>
    </main>
  );
}
