"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

const page = () => {
  const params = useParams();
  const router = useRouter();
  const id = params.id;

  const [form, setForm] = useState({ skills: "" });

  useEffect(() => {
    const res = localStorage.getItem("profile");
    if (res) {
      const allProfiles = JSON.parse(res);
      const current = allProfiles.find((p: any) => p.id === id);
      if (current) setForm(prev => ({ ...prev, ...current }));
    }
  }, [id]);

  function handleSaveButton() {
    const res = localStorage.getItem("profile");
    const allProfiles = res ? JSON.parse(res) : [];
    const updated = allProfiles.map((p: any) => p.id === id ? { ...p, ...form } : p);
    localStorage.setItem("profile", JSON.stringify(updated));
    router.push(`/profile/${id}`);
  }

  return (
    <div className="min-h-screen px-4 py-8 flex flex-col items-center">
      <div className="w-full max-w-sm">
        <button onClick={() => router.back()} className="text-white/60 mb-4 text-sm hover:text-white transition">← Back</button>
        <h1 className="text-2xl font-bold text-white mb-2">⚡ Skills</h1>
        <p className="text-white/50 text-sm mb-6">Comma se alag karo — e.g. React, Node.js, MongoDB</p>

        <div>
          <label className="text-white/70 text-sm mb-1 block">Skills</label>
          <textarea
            value={form.skills}
            onChange={(e) => setForm({ ...form, skills: e.target.value })}
            rows={4}
            className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-purple-400 transition resize-none"
            placeholder="JavaScript, React, Node.js, MongoDB..."
          />
        </div>

        <button onClick={handleSaveButton} className="w-full mt-6 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg shadow-xl hover:opacity-90 transition">
          Save
        </button>
      </div>
    </div>
  );
};

export default page;
