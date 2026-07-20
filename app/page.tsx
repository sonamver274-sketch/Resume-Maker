'use client'
import Link from "next/link";
import { motion } from "framer-motion"
import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState("")
  const fullText = "Resume Maker"

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1))
      i++
      if (i === fullText.length) clearInterval(interval)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden relative">

      {/* Floating background blobs */}
      <motion.div
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute', width: '300px', height: '300px',
          background: 'radial-gradient(circle, rgba(139,92,246,0.35) 0%, transparent 70%)',
          borderRadius: '50%', top: '10%', left: '5%', filter: 'blur(40px)', pointerEvents: 'none'
        }}
      />
      <motion.div
        animate={{ x: [0, -50, 30, 0], y: [0, 40, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{
          position: 'absolute', width: '250px', height: '250px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)',
          borderRadius: '50%', bottom: '10%', right: '5%', filter: 'blur(40px)', pointerEvents: 'none'
        }}
      />
      <motion.div
        animate={{ x: [0, 30, -40, 0], y: [0, -20, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{
          position: 'absolute', width: '200px', height: '200px',
          background: 'radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%)',
          borderRadius: '50%', top: '50%', right: '10%', filter: 'blur(40px)', pointerEvents: 'none'
        }}
      />

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{
          background: 'rgba(255,255,255,0.08)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: '28px',
          padding: '40px 32px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '32px',
          width: '100%',
          maxWidth: '380px',
          boxShadow: '0 0 60px rgba(139,92,246,0.15), 0 25px 50px rgba(0,0,0,0.3)',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Glow ring on card */}
        <motion.div
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: 'absolute', inset: '-1px', borderRadius: '28px',
            background: 'linear-gradient(135deg, rgba(139,92,246,0.3), rgba(59,130,246,0.3), rgba(236,72,153,0.2))',
            zIndex: -1, filter: 'blur(8px)'
          }}
        />

        {/* Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 200 }}
          style={{ fontSize: '3rem' }}
        >
          📄
        </motion.div>

        {/* Title */}
        <div className="text-center">
          <h1 style={{ fontSize: '2.2rem', fontWeight: '800', color: 'white', letterSpacing: '0.02em', minHeight: '2.8rem' }}>
            {text}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              style={{ color: '#a78bfa' }}
            >|</motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            style={{ color: 'rgba(255,255,255,0.55)', marginTop: '8px', fontSize: '0.9rem' }}
          >
            Build your professional resume
          </motion.p>
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.5 }}
          >
            <Link href="/profile" style={{ width: '100%', display: 'block' }}>
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(139,92,246,0.5)' }}
                whileTap={{ scale: 0.96 }}
                style={{
                  width: '100%', padding: '14px 0', borderRadius: '16px',
                  background: 'linear-gradient(to right, #7c3aed, #2563eb)',
                  color: 'white', fontWeight: '700', fontSize: '1rem',
                  border: 'none', cursor: 'pointer', transition: 'box-shadow 0.3s'
                }}
              >
                ✦ Create Resume
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          >
            <Link href="/" style={{ width: '100%', display: 'block' }}>
              <motion.button
                whileHover={{ scale: 1.04, background: 'rgba(255,255,255,0.15)' }}
                whileTap={{ scale: 0.96 }}
                style={{
                  width: '100%', padding: '14px 0', borderRadius: '16px',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'white', fontWeight: '700', fontSize: '1rem',
                  cursor: 'pointer', transition: 'background 0.3s'
                }}
              >
                ↓ Downloads
              </motion.button>
            </Link>
          </motion.div>
        </div>

      </motion.div>
    </div>
  );
}
