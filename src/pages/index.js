import { Roboto } from "next/font/google";
import Banner from "@/components/Banner";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={roboto.className}>
      <div className="max-w-screen-2xl w-auto mx-auto">
        <Banner />
      </div>
    </main>
  );
}
