'use client'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

const page = () => {
  const params = useParams()
  const id = params.id
  const router = useRouter()
  const [customSections, setCustomSections] = useState<string[]>([])
  const [showInput, setShowInput] = useState(false)
  const [newSection, setNewSection] = useState("")

  const sections = [
    { label: "Personal Details", path: "personal-detail", icon: "👤" },
    { label: "Objective", path: "objective", icon: "🎯" },
    { label: "Education", path: "education", icon: "🎓" },
    { label: "Experience", path: "experience", icon: "💼" },
    { label: "Skills", path: "skill", icon: "⚡" },
    { label: "Projects", path: "project", icon: "🚀" },
    { label: "Languages", path: "language", icon: "🌐" },
  ]

  useEffect(() => {
    const res = localStorage.getItem("profile")
    if (res) {
      const allProfiles = JSON.parse(res)
      const current = allProfiles.find((p: any) => p.id === id)
      if (current?.customSections) setCustomSections(current.customSections)
    }
  }, [id])

  function handleAddSection() {
    if (!newSection.trim()) return
    const res = localStorage.getItem("profile")
    const allProfiles = res ? JSON.parse(res) : []
    const updated = allProfiles.map((p: any) =>
      p.id === id ? { ...p, customSections: [...(p.customSections || []), newSection.trim()] } : p
    )
    localStorage.setItem("profile", JSON.stringify(updated))
    setCustomSections(prev => [...prev, newSection.trim()])
    setNewSection("")
    setShowInput(false)
  }

  return (
    <div className="min-h-screen px-4 py-8 flex flex-col items-center pb-28">

      <h1 className="text-2xl font-bold text-white mb-6 tracking-wide">My Profile</h1>

      <div className="w-full max-w-sm flex flex-col gap-3">
        <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Sections</p>

        {sections.map((section) => (
          <Link key={section.path} href={`/profile/${id}/${section.path}`}>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 flex items-center gap-4 hover:bg-white/20 transition shadow">
              <span className="text-2xl">{section.icon}</span>
              <span className="text-white font-medium">{section.label}</span>
              <span className="ml-auto text-white/40 text-lg">›</span>
            </div>
          </Link>
        ))}

        {/* Custom Sections */}
        {customSections.map((name) => (
          <Link key={name} href={`/profile/${id}/custom/${encodeURIComponent(name)}`}>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 flex items-center gap-4 hover:bg-white/20 transition shadow">
              <span className="text-2xl">📌</span>
              <span className="text-white font-medium">{name}</span>
              <span className="ml-auto text-white/40 text-lg">›</span>
            </div>
          </Link>
        ))}

        {/* Add Custom Section */}
        {showInput ? (
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 flex flex-col gap-3">
            <input
              autoFocus
              type="text"
              value={newSection}
              onChange={(e) => setNewSection(e.target.value)}
              placeholder="Section name likho..."
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white placeholder-white/30 focus:outline-none focus:border-purple-400"
            />
            <div className="flex gap-2">
              <button onClick={handleAddSection} className="flex-1 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-sm">
                Add
              </button>
              <button onClick={() => { setShowInput(false); setNewSection("") }} className="flex-1 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-sm">
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowInput(true)}
            className="bg-white/5 border border-dashed border-white/30 rounded-2xl px-5 py-4 flex items-center gap-4 hover:bg-white/10 transition w-full"
          >
            <span className="text-2xl">➕</span>
            <span className="text-white/60 font-medium">Add Custom Section</span>
          </button>
        )}
      </div>

      <div className="fixed bottom-6 w-full max-w-sm px-4">
        <button
          onClick={() => router.push(`/profile/${id}/view`)}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg shadow-xl hover:opacity-90 transition"
        >
          👁️ View CV
        </button>
      </div>

    </div>
  )
}

export default page
