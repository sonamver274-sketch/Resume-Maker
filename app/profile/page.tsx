"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const [profile, setProfile] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const res = localStorage.getItem("profile");
    if (res) {
      setProfile(JSON.parse(res));
    }
  }, []);

  function handleCreateProfile() {
    const newId = Date.now().toString();
    const newProfile = { id: newId, name: "", email: "", createdAt: new Date().toLocaleString() };
    const updated = [...profile, newProfile];
    localStorage.setItem("profile", JSON.stringify(updated));
    setProfile(updated);
    router.push(`/profile/${newId}`);
  }

  return (
    <div className="min-h-screen px-4 py-8 flex flex-col items-center pb-28">

      <h1 className="text-2xl font-bold text-white mb-6 tracking-wide">Choose Profile</h1>

      <div className="w-full max-w-sm flex flex-col gap-4">

        {profile.length === 0 && (
          <p className="text-white/50 text-center mt-10">Koi profile nahi — naya banao!</p>
        )}

        {profile
          .filter((p: any) => p.name)
          .map((p: any, index: number) => (
            <div key={p.id} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-purple-500/50 flex items-center justify-center text-white font-bold">
                   {index + 1}
                </div>
                <div>
                  <h2 className="text-white font-semibold">{p.name}</h2>
                  <p className="text-white/50 text-xs">{p.email}</p>
                </div>
              </div>
              <p className="text-white/40 text-xs mb-3">🕐 {p.createdAt}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => router.push(`/profile/${p.id}`)}
                  className="flex-1 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-semibold hover:opacity-90 transition"
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => router.push(`/profile/${p.id}/view`)}
                  className="flex-1 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-semibold hover:bg-white/20 transition"
                >
                  👁️ View CV
                </button>
              </div>
            </div>
          ))}
      </div>

      <div className="fixed bottom-6 w-full max-w-sm px-4">
        <button
          onClick={handleCreateProfile}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg shadow-xl hover:opacity-90 transition"
        >
          + Create New Profile
        </button>
      </div>

    </div>
  );
};

export default page;
