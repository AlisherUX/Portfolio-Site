import Link from "next/link";

export default function Navbar() {

  return (
    <nav className="sticky top-0 z-10 py-7 text-white drop-shadow-2xl bg-slate-900 bg-white-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-900">
      <div className="max-w-screen-2xl w-auto mx-auto flex items-center justify-between">
        <Link href="/">Alisher Abdirimov</Link>

        <div className="flex items-center gap-6">
          <Link href="/projects">My Projects</Link>
          <Link href="">My Accounts</Link>

          <div className="cursor-pointer border border-white-500 w-9 py-2 flex flex-col gap-1 justify-center items-center rounded">
            <div className=" w-4 border border-white-500"></div>
            <div className=" w-4 border border-white-500"></div>
            <div className=" w-4 border border-white-500"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
