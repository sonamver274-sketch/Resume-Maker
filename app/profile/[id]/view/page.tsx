'use client'
import { useState, useEffect, useRef } from "react"
import { useParams, useRouter } from "next/navigation"

function ClassicTemplate({ data }: { data: any }) {
  return (
    <div id="resume-card" className="w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden" style={{color: '#1f2937'}}>
      <div style={{background: 'linear-gradient(to right, #1f2937, #374151)', WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact'}} className="px-6 py-6">
        <div className="flex items-center gap-4">
          {data.photo && (
            <img src={data.photo} alt="profile" className="w-16 h-16 rounded-full object-cover" style={{border: '2px solid white'}} />
          )}
          <div>
            <h2 style={{fontSize: '1.6rem', fontWeight: '800', color: 'white', letterSpacing: '0.02em'}}>{data.name || "Your Name"}</h2>
            <div className="mt-1 flex flex-col gap-1" style={{fontSize: '0.75rem', color: 'rgba(255,255,255,0.9)'}}>
              {data.email && <span>✉ {data.email}</span>}
              {data.phone && <span>📞 {data.phone}</span>}
              {data.address && <span>📍 {data.address}</span>}
              {data.linkedin && <span>🔗 {data.linkedin}</span>}
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 py-5 flex flex-col gap-5 bg-white">
        {data.objective && (
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest border-b pb-1 mb-2" style={{color: '#374151', borderColor: '#e5e7eb'}}>Objective</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{data.objective}</p>
          </div>
        )}
        {data.educations?.length > 0 && (
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest border-b pb-1 mb-2" style={{color: '#374151', borderColor: '#e5e7eb'}}>Education</h3>
            <div className="flex flex-col gap-3">
              {data.educations.map((edu: any, i: number) => (
                <div key={i}>
                  <p className="font-semibold text-gray-800">{edu.degree}</p>
                  <p className="text-gray-500 text-sm">{edu.college}</p>
                  <p className="text-gray-400 text-xs">{edu.year} {edu.marks && `| ${edu.marks}`}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {data.experiences?.length > 0 && (
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest border-b pb-1 mb-2" style={{color: '#374151', borderColor: '#e5e7eb'}}>Experience</h3>
            <div className="flex flex-col gap-3">
              {data.experiences.map((exp: any, i: number) => (
                <div key={i}>
                  <p className="font-semibold text-gray-800">{exp.role}</p>
                  <p className="text-gray-500 text-sm">{exp.company} | {exp.duration}</p>
                  {exp.description && <p className="text-gray-400 text-xs mt-1">{exp.description}</p>}
                </div>
              ))}
            </div>
          </div>
        )}
        {data.skills && (
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest border-b pb-1 mb-2" style={{color: '#374151', borderColor: '#e5e7eb'}}>Skills</h3>
            <div className="flex flex-wrap gap-2">
              {data.skills.split(',').map((skill: string, i: number) => (
                <span key={i} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium">{skill.trim()}</span>
              ))}
            </div>
          </div>
        )}
        {data.projects?.length > 0 && (
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest border-b pb-1 mb-2" style={{color: '#374151', borderColor: '#e5e7eb'}}>Projects</h3>
            <div className="flex flex-col gap-3">
              {data.projects.map((proj: any, i: number) => (
                <div key={i}>
                  <p className="font-semibold text-gray-800">{proj.projectName}</p>
                  {proj.description && <p className="text-gray-500 text-sm">{proj.description}</p>}
                  {proj.link && <p className="text-blue-500 text-xs mt-1">{proj.link}</p>}
                </div>
              ))}
            </div>
          </div>
        )}
        {data.language && (
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest border-b pb-1 mb-2" style={{color: '#374151', borderColor: '#e5e7eb'}}>Languages</h3>
            <p className="text-gray-600 text-sm">{data.language}</p>
          </div>
        )}
        {data.customSections?.map((name: string) => (
          data.customContent?.[name] && (
            <div key={name}>
              <h3 className="font-bold text-sm uppercase tracking-widest border-b pb-1 mb-2" style={{color: '#374151', borderColor: '#e5e7eb'}}>{name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{data.customContent[name]}</p>
            </div>
          )
        ))}
      </div>
    </div>
  )
}

function ModernTemplate({ data }: { data: any }) {
  return (
    <div id="resume-card" className="w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden" style={{color: '#1f2937'}}>
      <div style={{display: 'flex'}}>
        <div style={{width: '38%', background: 'linear-gradient(to bottom, #1e40af, #1d4ed8)', padding: '24px 14px', WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact', flexShrink: 0}}>
          {data.photo && (
            <img src={data.photo} alt="profile" style={{width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.4)', display: 'block', margin: '0 auto 12px'}} />
          )}
          <h2 style={{fontSize: '0.85rem', fontWeight: '800', color: 'white', textAlign: 'center', marginBottom: '14px', lineHeight: 1.3}}>{data.name || "Your Name"}</h2>
          <div style={{fontSize: '0.62rem', color: 'rgba(255,255,255,0.85)', display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '16px', wordBreak: 'break-all'}}>
            {data.email && <span>✉ {data.email}</span>}
            {data.phone && <span>📞 {data.phone}</span>}
            {data.address && <span>📍 {data.address}</span>}
            {data.linkedin && <span>🔗 {data.linkedin}</span>}
          </div>
          {data.skills && (
            <div>
              <p style={{color: 'rgba(255,255,255,0.55)', fontSize: '0.58rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px', fontWeight: 'bold'}}>Skills</p>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: '4px'}}>
                {data.skills.split(',').map((skill: string, i: number) => (
                  <span key={i} style={{background: 'rgba(255,255,255,0.18)', color: 'white', fontSize: '0.58rem', padding: '2px 6px', borderRadius: '999px'}}>{skill.trim()}</span>
                ))}
              </div>
            </div>
          )}
          {data.language && (
            <div style={{marginTop: '14px'}}>
              <p style={{color: 'rgba(255,255,255,0.55)', fontSize: '0.58rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '5px', fontWeight: 'bold'}}>Languages</p>
              <p style={{color: 'rgba(255,255,255,0.9)', fontSize: '0.62rem'}}>{data.language}</p>
            </div>
          )}
        </div>
        <div style={{flex: 1, padding: '20px 14px', display: 'flex', flexDirection: 'column', gap: '14px', background: 'white', overflow: 'hidden'}}>
          {data.objective && (
            <div>
              <p style={{fontWeight: 'bold', fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1d4ed8', borderBottom: '2px solid #1d4ed8', paddingBottom: '3px', marginBottom: '5px'}}>Objective</p>
              <p style={{color: '#4b5563', fontSize: '0.68rem', lineHeight: 1.5}}>{data.objective}</p>
            </div>
          )}
          {data.educations?.length > 0 && (
            <div>
              <p style={{fontWeight: 'bold', fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1d4ed8', borderBottom: '2px solid #1d4ed8', paddingBottom: '3px', marginBottom: '5px'}}>Education</p>
              {data.educations.map((edu: any, i: number) => (
                <div key={i} style={{marginBottom: '7px'}}>
                  <p style={{fontWeight: '600', fontSize: '0.72rem', color: '#1f2937'}}>{edu.degree}</p>
                  <p style={{color: '#6b7280', fontSize: '0.66rem'}}>{edu.college}</p>
                  <p style={{color: '#9ca3af', fontSize: '0.62rem'}}>{edu.year} {edu.marks && `| ${edu.marks}`}</p>
                </div>
              ))}
            </div>
          )}
          {data.experiences?.length > 0 && (
            <div>
              <p style={{fontWeight: 'bold', fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1d4ed8', borderBottom: '2px solid #1d4ed8', paddingBottom: '3px', marginBottom: '5px'}}>Experience</p>
              {data.experiences.map((exp: any, i: number) => (
                <div key={i} style={{marginBottom: '7px'}}>
                  <p style={{fontWeight: '600', fontSize: '0.72rem', color: '#1f2937'}}>{exp.role}</p>
                  <p style={{color: '#6b7280', fontSize: '0.66rem'}}>{exp.company} | {exp.duration}</p>
                  {exp.description && <p style={{color: '#9ca3af', fontSize: '0.62rem', marginTop: '2px'}}>{exp.description}</p>}
                </div>
              ))}
            </div>
          )}
          {data.projects?.length > 0 && (
            <div>
              <p style={{fontWeight: 'bold', fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1d4ed8', borderBottom: '2px solid #1d4ed8', paddingBottom: '3px', marginBottom: '5px'}}>Projects</p>
              {data.projects.map((proj: any, i: number) => (
                <div key={i} style={{marginBottom: '7px'}}>
                  <p style={{fontWeight: '600', fontSize: '0.72rem', color: '#1f2937'}}>{proj.projectName}</p>
                  {proj.description && <p style={{color: '#6b7280', fontSize: '0.66rem'}}>{proj.description}</p>}
                  {proj.link && <p style={{color: '#3b82f6', fontSize: '0.62rem', marginTop: '2px'}}>{proj.link}</p>}
                </div>
              ))}
            </div>
          )}
          {data.customSections?.map((name: string) => (
            data.customContent?.[name] && (
              <div key={name}>
                <p style={{fontWeight: 'bold', fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1d4ed8', borderBottom: '2px solid #1d4ed8', paddingBottom: '3px', marginBottom: '5px'}}>{name}</p>
                <p style={{color: '#4b5563', fontSize: '0.68rem', lineHeight: 1.5}}>{data.customContent[name]}</p>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  )
}

function MinimalTemplate({ data }: { data: any }) {
  return (
    <div id="resume-card" className="w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden" style={{color: '#1f2937'}}>
      <div style={{padding: '28px 24px 18px', borderBottom: '3px solid #10b981', background: 'white'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '14px'}}>
          {data.photo && (
            <img src={data.photo} alt="profile" style={{width: '60px', height: '60px', borderRadius: '12px', objectFit: 'cover', flexShrink: 0}} />
          )}
          <div>
            <h2 style={{fontSize: '1.4rem', fontWeight: '800', color: '#111827', letterSpacing: '0.01em'}}>{data.name || "Your Name"}</h2>
            <div style={{marginTop: '5px', display: 'flex', flexDirection: 'column', gap: '2px', fontSize: '0.7rem', color: '#6b7280'}}>
              {data.email && <span>{data.email}</span>}
              {data.phone && <span>{data.phone}</span>}
              {data.address && <span>{data.address}</span>}
              {data.linkedin && <span>{data.linkedin}</span>}
            </div>
          </div>
        </div>
      </div>
      <div style={{padding: '18px 24px', display: 'flex', flexDirection: 'column', gap: '14px', background: 'white'}}>
        {data.objective && (
          <div>
            <p style={{fontWeight: '700', fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#10b981', marginBottom: '5px'}}>Objective</p>
            <p style={{color: '#4b5563', fontSize: '0.76rem', lineHeight: 1.6}}>{data.objective}</p>
          </div>
        )}
        {data.educations?.length > 0 && (
          <div>
            <p style={{fontWeight: '700', fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#10b981', marginBottom: '5px'}}>Education</p>
            {data.educations.map((edu: any, i: number) => (
              <div key={i} style={{marginBottom: '8px', paddingLeft: '10px', borderLeft: '2px solid #d1fae5'}}>
                <p style={{fontWeight: '600', fontSize: '0.8rem', color: '#111827'}}>{edu.degree}</p>
                <p style={{color: '#6b7280', fontSize: '0.72rem'}}>{edu.college}</p>
                <p style={{color: '#9ca3af', fontSize: '0.65rem'}}>{edu.year} {edu.marks && `| ${edu.marks}`}</p>
              </div>
            ))}
          </div>
        )}
        {data.experiences?.length > 0 && (
          <div>
            <p style={{fontWeight: '700', fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#10b981', marginBottom: '5px'}}>Experience</p>
            {data.experiences.map((exp: any, i: number) => (
              <div key={i} style={{marginBottom: '8px', paddingLeft: '10px', borderLeft: '2px solid #d1fae5'}}>
                <p style={{fontWeight: '600', fontSize: '0.8rem', color: '#111827'}}>{exp.role}</p>
                <p style={{color: '#6b7280', fontSize: '0.72rem'}}>{exp.company} | {exp.duration}</p>
                {exp.description && <p style={{color: '#9ca3af', fontSize: '0.65rem', marginTop: '2px'}}>{exp.description}</p>}
              </div>
            ))}
          </div>
        )}
        {data.skills && (
          <div>
            <p style={{fontWeight: '700', fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#10b981', marginBottom: '5px'}}>Skills</p>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
              {data.skills.split(',').map((skill: string, i: number) => (
                <span key={i} style={{background: '#ecfdf5', color: '#065f46', fontSize: '0.65rem', padding: '3px 10px', borderRadius: '999px', fontWeight: '500'}}>{skill.trim()}</span>
              ))}
            </div>
          </div>
        )}
        {data.projects?.length > 0 && (
          <div>
            <p style={{fontWeight: '700', fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#10b981', marginBottom: '5px'}}>Projects</p>
            {data.projects.map((proj: any, i: number) => (
              <div key={i} style={{marginBottom: '8px', paddingLeft: '10px', borderLeft: '2px solid #d1fae5'}}>
                <p style={{fontWeight: '600', fontSize: '0.8rem', color: '#111827'}}>{proj.projectName}</p>
                {proj.description && <p style={{color: '#6b7280', fontSize: '0.72rem'}}>{proj.description}</p>}
                {proj.link && <p style={{color: '#10b981', fontSize: '0.65rem', marginTop: '2px'}}>{proj.link}</p>}
              </div>
            ))}
          </div>
        )}
        {data.language && (
          <div>
            <p style={{fontWeight: '700', fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#10b981', marginBottom: '5px'}}>Languages</p>
            <p style={{color: '#4b5563', fontSize: '0.76rem'}}>{data.language}</p>
          </div>
        )}
        {data.customSections?.map((name: string) => (
          data.customContent?.[name] && (
            <div key={name}>
              <p style={{fontWeight: '700', fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#10b981', marginBottom: '5px'}}>{name}</p>
              <p style={{color: '#4b5563', fontSize: '0.76rem', lineHeight: 1.6}}>{data.customContent[name]}</p>
            </div>
          )
        ))}
      </div>
    </div>
  )
}

const Page = () => {
  const params = useParams()
  const router = useRouter()
  const id = params.id
  const [data, setData] = useState<any>(null)
  const [template, setTemplate] = useState("classic")
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

  const templates = [
    { id: "classic", label: "Classic", color: "#374151" },
    { id: "modern", label: "Modern", color: "#1d4ed8" },
    { id: "minimal", label: "Minimal", color: "#10b981" },
  ]

  return (
    <div className="min-h-screen px-4 py-8 flex flex-col items-center">

      <div className="w-full max-w-sm mb-4 flex items-center justify-between">
        <button onClick={() => router.back()} className="text-white/60 text-sm hover:text-white transition">← Back</button>
        <h1 className="text-lg font-bold text-white">View CV</h1>
        <div />
      </div>

      {/* Template Chooser */}
      <div className="w-full max-w-sm mb-5">
        <p className="text-white/50 text-xs uppercase tracking-widest mb-3">Choose Template</p>
        <div className="flex gap-3">
          {templates.map((t) => (
            <button
              key={t.id}
              onClick={() => setTemplate(t.id)}
              style={{
                flex: 1,
                padding: '10px 0',
                borderRadius: '12px',
                border: template === t.id ? `2px solid ${t.color}` : '2px solid rgba(255,255,255,0.15)',
                background: template === t.id ? `${t.color}33` : 'rgba(255,255,255,0.07)',
                color: template === t.id ? 'white' : 'rgba(255,255,255,0.45)',
                fontSize: '0.75rem',
                fontWeight: template === t.id ? '700' : '500',
                transition: 'all 0.2s',
                cursor: 'pointer',
              }}
            >
              <div style={{width: '20px', height: '12px', background: t.color, borderRadius: '3px', margin: '0 auto 5px', opacity: template === t.id ? 1 : 0.35}} />
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div ref={resumeRef}>
        {template === "classic" && <ClassicTemplate data={data} />}
        {template === "modern" && <ModernTemplate data={data} />}
        {template === "minimal" && <MinimalTemplate data={data} />}
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
