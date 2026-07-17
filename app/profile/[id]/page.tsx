'use client'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'

const page = () => {
  const params = useParams()
  const id = params.id
  const router = useRouter()

  const sections = [
    { label: "Personal Details", path: "personal-detail", icon: "👤" },
    { label: "Objective", path: "objective", icon: "🎯" },
    { label: "Education", path: "education", icon: "🎓" },
    { label: "Experience", path: "experience", icon: "💼" },
    { label: "Skills", path: "skill", icon: "⚡" },
    { label: "Projects", path: "project", icon: "🚀" },
    { label: "Languages", path: "language", icon: "🌐" },
  ]

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
