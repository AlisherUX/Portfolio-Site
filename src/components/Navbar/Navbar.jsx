import Link from "next/link";
import { Button } from "@mui/material";

export default function Navbar() {
  return (
    <div className="py-7 text-cyan-100 bg-teal-600 drop-shadow-2xl">
      <div className="max-w-screen-2xl w-auto mx-auto flex justify-between">
        <Link href="/">Alisher Abdirimov</Link>

        <div className="flex gap-6">
          <Link href="/projects">My Projects</Link>
          <Link href="">My Accounts</Link>
        </div>
      </div>
    </div>
  );
}
