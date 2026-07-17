"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

const page = () => {
  const params = useParams();
  const router = useRouter();
  const id = params.id;

  const [form, setForm] = useState({ name: "", address: "", email: "", phone: "", linkedin: "", photo: "" });

  useEffect(() => {
    const res = localStorage.getItem("profile");
    if (res) {
      const allProfiles = JSON.parse(res);
      const current = allProfiles.find((p: any) => p.id === id);
      if (current) setForm(prev => ({ ...prev, ...current }));
    }
  }, [id]);

  function handlePhoto(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onloadend = () => {
      setForm(prev => ({ ...prev, photo: reader.result as string }))
    }
    reader.readAsDataURL(file)
  }

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
        <h1 className="text-2xl font-bold text-white mb-6">👤 Personal Details</h1>

        <div className="flex flex-col gap-4">
          {[
            { label: "Name", key: "name", type: "text" },
            { label: "Email", key: "email", type: "email" },
            { label: "Phone", key: "phone", type: "tel" },
            { label: "LinkedIn", key: "linkedin", type: "text" },
          ].map((field) => (
            <div key={field.key}>
              <label className="text-white/70 text-sm mb-1 block">{field.label}</label>
              <input
                type={field.type}
                value={(form as any)[field.key]}
                onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-purple-400 transition"
                placeholder={field.label}
              />
            </div>
          ))}

          <div>
            <label className="text-white/70 text-sm mb-1 block">Address</label>
            <textarea
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              rows={3}
              className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-purple-400 transition resize-none"
              placeholder="Address"
            />
          </div>

          <div>
            <label className="text-white/70 text-sm mb-1 block">Photo (Optional)</label>
            {form.photo && (
              <img src={form.photo} alt="profile" className="w-20 h-20 rounded-full object-cover mb-2 border-2 border-purple-400" />
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handlePhoto}
              className="w-full text-white/60 text-sm file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-purple-600 file:text-white file:text-sm cursor-pointer"
            />
          </div>
        </div>

        <button
          onClick={handleSaveButton}
          className="w-full mt-6 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg shadow-xl hover:opacity-90 transition"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default page;
