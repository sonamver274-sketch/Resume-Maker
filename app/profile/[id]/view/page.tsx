'use client'
import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { useRef } from "react"

const Page = () => {
  const params = useParams()
  const router = useRouter()
  const id = params.id
  const [data, setData] = useState<any>(null)
  const resumeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const res = localStorage.getItem("profile")
    if (res) {
      const allProfiles = JSON.parse(res)
      const current = allProfiles.find((p: any) => p.id === id)
      if (current) setData(current)
    }
  }, [id])

  if (!data) return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-white/50">Loading...</p>
    </div>
  )

  function handleDownload() {
    window.print()
  }

  return (
    <div className="min-h-screen px-4 py-8 flex flex-col items-center">

      <div className="w-full max-w-sm mb-4 flex items-center justify-between">
        <button onClick={() => router.back()} className="text-white/60 text-sm hover:text-white transition">← Back</button>
        <h1 className="text-lg font-bold text-white">View CV</h1>
        <div />
      </div>

      {/* Resume White Card */}
      <div ref={resumeRef} id="resume-card" className="w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden" style={{color: '#1f2937'}}>

        {/* Header — dark bg so text-white is fine here */}
        <div style={{background: 'linear-gradient(to right, #9333ea, #3b82f6)'}} className="px-6 py-6">
          <div className="flex items-center gap-4">
            {data.photo && (
              <img src={data.photo} alt="profile" className="w-16 h-16 rounded-full object-cover border-2 border-white/50" />
            )}
            <div>
              <h2 className="text-2xl font-bold text-white">{data.name || "Your Name"}</h2>
              <div className="mt-1 flex flex-col gap-1 text-sm text-white/80">
                {data.email && <span className="text-white/80">✉ {data.email}</span>}
                {data.phone && <span className="text-white/80">📞 {data.phone}</span>}
                {data.address && <span className="text-white/80">📍 {data.address}</span>}
                {data.linkedin && <span className="text-white/80">🔗 {data.linkedin}</span>}
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 py-5 flex flex-col gap-5 bg-white">

          {data.objective && (
            <div>
              <h3 className="text-purple-600 font-bold text-sm uppercase tracking-widest border-b border-purple-200 pb-1 mb-2">Objective</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{data.objective}</p>
            </div>
          )}

          {data.degree && (
            <div>
              <h3 className="text-purple-600 font-bold text-sm uppercase tracking-widest border-b border-purple-200 pb-1 mb-2">Education</h3>
              <p className="font-semibold text-gray-800">{data.degree}</p>
              <p className="text-gray-500 text-sm">{data.college}</p>
              <p className="text-gray-400 text-xs">{data.year} {data.marks && `| ${data.marks}`}</p>
            </div>
          )}

          {data.company && (
            <div>
              <h3 className="text-purple-600 font-bold text-sm uppercase tracking-widest border-b border-purple-200 pb-1 mb-2">Experience</h3>
              <p className="font-semibold text-gray-800">{data.role}</p>
              <p className="text-gray-500 text-sm">{data.company} | {data.duration}</p>
              {data.description && <p className="text-gray-400 text-xs mt-1">{data.description}</p>}
            </div>
          )}

          {data.skills && (
            <div>
              <h3 className="text-purple-600 font-bold text-sm uppercase tracking-widest border-b border-purple-200 pb-1 mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {data.skills.split(',').map((skill: string, i: number) => (
                  <span key={i} className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full font-medium">
                    {skill.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}

          {data.projectName && (
            <div>
              <h3 className="text-purple-600 font-bold text-sm uppercase tracking-widest border-b border-purple-200 pb-1 mb-2">Projects</h3>
              <p className="font-semibold text-gray-800">{data.projectName}</p>
              {data.description && <p className="text-gray-500 text-sm">{data.description}</p>}
              {data.link && <p className="text-blue-500 text-xs mt-1">{data.link}</p>}
            </div>
          )}

          {data.language && (
            <div>
              <h3 className="text-purple-600 font-bold text-sm uppercase tracking-widest border-b border-purple-200 pb-1 mb-2">Languages</h3>
              <p className="text-gray-600 text-sm">{data.language}</p>
            </div>
          )}

          {/* Custom Sections */}
          {data.customSections?.map((name: string) => (
            data.customContent?.[name] && (
              <div key={name}>
                <h3 className="text-purple-600 font-bold text-sm uppercase tracking-widest border-b border-purple-200 pb-1 mb-2">{name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{data.customContent[name]}</p>
              </div>
            )
          ))}

        </div>
      </div>

      <div className="w-full max-w-sm mt-6">
        <button onClick={handleDownload} className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg shadow-xl hover:opacity-90 transition">
          ↓ Download PDF
        </button>
      </div>

    </div>
  )
}

export default Page
