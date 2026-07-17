"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

const page = () => {
  const params = useParams();
  const router = useRouter();
  const id = params.id;

  const [experiences, setExperiences] = useState([{ company: "", role: "", duration: "", description: "" }]);

  useEffect(() => {
    const res = localStorage.getItem("profile");
    if (res) {
      const allProfiles = JSON.parse(res);
      const current = allProfiles.find((p: any) => p.id === id);
      if (current?.experiences) setExperiences(current.experiences);
    }
  }, [id]);

  function handleChange(index: number, key: string, value: string) {
    setExperiences(prev => prev.map((item, i) => i === index ? { ...item, [key]: value } : item));
  }

  function handleSave() {
    const res = localStorage.getItem("profile");
    const allProfiles = res ? JSON.parse(res) : [];
    const updated = allProfiles.map((p: any) => p.id === id ? { ...p, experiences } : p);
    localStorage.setItem("profile", JSON.stringify(updated));
    router.push(`/profile/${id}`);
  }

  return (
    <div className="min-h-screen px-4 py-8 flex flex-col items-center">
      <div className="w-full max-w-sm">
        <button onClick={() => router.back()} className="text-white/60 mb-4 text-sm hover:text-white transition">← Back</button>
        <h1 className="text-2xl font-bold text-white mb-6">💼 Experience</h1>

        <div className="flex flex-col gap-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-white/60 text-xs uppercase tracking-widest">Experience {index + 1}</span>
                {experiences.length > 1 && (
                  <button onClick={() => setExperiences(prev => prev.filter((_, i) => i !== index))} className="text-red-400 text-xs">✕ Remove</button>
                )}
              </div>
              {[{ label: "Company", key: "company" }, { label: "Role", key: "role" }, { label: "Duration", key: "duration" }].map((field) => (
                <div key={field.key}>
                  <label className="text-white/70 text-sm mb-1 block">{field.label}</label>
                  <input type="text" value={(exp as any)[field.key]} onChange={(e) => handleChange(index, field.key, e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-purple-400 transition" placeholder={field.label} />
                </div>
              ))}
              <div>
                <label className="text-white/70 text-sm mb-1 block">Description</label>
                <textarea value={exp.description} onChange={(e) => handleChange(index, "description", e.target.value)} rows={3}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-purple-400 transition resize-none" placeholder="Kaam ka description..." />
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3 mt-6">
          <button onClick={() => setExperiences(prev => [...prev, { company: "", role: "", duration: "", description: "" }])}
            className="flex-1 py-4 rounded-2xl bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition">
            + Add
          </button>
          <button onClick={handleSave} className="flex-1 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold shadow-xl hover:opacity-90 transition">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
