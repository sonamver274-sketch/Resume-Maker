import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">

      {/* Glass Card */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 flex flex-col items-center gap-8 shadow-2xl w-full max-w-sm">

        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white tracking-wide">Resume Maker</h1>
          <p className="text-white/60 mt-2 text-sm">Build your professional resume</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 w-full">
          <Link href="/profile" className="w-full">
            <button className="w-full py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold text-lg hover:opacity-90 transition">
              ✦ Create Resume
            </button>
          </Link>
          <Link href="/" className="w-full">
            <button className="w-full py-3 rounded-2xl bg-white/10 border border-white/20 text-white font-semibold text-lg hover:bg-white/20 transition">
              ↓ Downloads
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
