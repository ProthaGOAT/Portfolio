// Updated version with corrected type-only imports and react-typed dependency fix

import { useState, useEffect } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'

import TypedWrapper from './components/TypedWrapper'




export default function PortfolioLandingPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 6000)
    return () => clearTimeout(timer)
  }, [])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: "service_z7estsx",
          template_id: "template_99q2v1y",
          user_id: "feg2gHUNCOecUamYI",
          template_params: formData
        })
      })
      res.ok ? alert("Message sent successfully!") : alert("Failed to send message.")
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      alert("Error occurred while sending message.")
    }
  }

  return (
    <div className="relative bg-gradient-to-b from-white to-[#edf4fb] dark:from-[#0d1a2a] dark:to-[#152c47]">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 2 } }}
            className="fixed inset-0 z-50 bg-black text-white flex flex-col justify-center items-center text-center px-4"
          >
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-lg md:text-xl">
              The heights by great men reached and kept,
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="text-lg md:text-xl">
              were not attained by sudden flight,
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="text-lg md:text-xl">
              but they, while their companions slept,
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }} className="text-lg md:text-xl">
              were toiling upward in the night. — Henry Wadsworth Longfellow
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="snap-y snap-mandatory h-screen overflow-scroll scroll-smooth"
          >
            {/* Hero Section */}
            <section className="snap-start py-20 px-4 md:px-8 lg:px-16 h-screen flex flex-col justify-center items-center">
             <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
  <TypedWrapper strings={["Pro Ogbole"]} typeSpeed={100} showCursor={false} />
</h1>

              <h2 className="text-2xl text-[#3B0060] dark:text-[#6434c9] mb-4">Full Stack Developer</h2>
              <p className="text-center text-lg text-[#3A5A7A] dark:text-gray-300 max-w-xl">
                I'm a 19 year old Website Developer whose passion is to create beautiful and functional websites.
                When I'm not coding, I do often find myself listening to music or even creating music.
                I draw, I cook and I write poems and literature.
              </p>
            </section>

            {/* About Me */}
            <section className="snap-start py-20 px-4 md:px-8 lg:px-16 h-screen flex flex-col justify-center items-center bg-[#f5faff] dark:bg-[#112c50]">
              <h2 className="text-3xl font-bold text-[#3B0060] dark:text-[#91D4FC] mb-4">About Me</h2>
              <p className="text-lg text-center text-gray-700 dark:text-gray-300 max-w-2xl">
                I'm a curious and passionate developer with experience building digital tools for the modern web.
                I believe in building clean, performant, and accessible websites.
              </p>
            </section>

            {/* Portfolio */}
            <section className="snap-start py-20 px-4 md:px-8 lg:px-16 h-screen bg-[#eef4f9] dark:bg-[#0f1d33] flex flex-col items-center">
              <h2 className="text-3xl font-bold text-[#3B0060] dark:text-[#91D4FC] mb-6">My Portfolio</h2>
              <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-8">Here are some of the projects I've worked on:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-md">
                  <p className="font-semibold text-[#3B0060] dark:text-[#91D4FC]">Project 1</p>
                  <p className="text-gray-600 dark:text-gray-300">Description of project.</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-md">
                  <p className="font-semibold text-[#3B0060] dark:text-[#91D4FC]">Project 2</p>
                  <p className="text-gray-600 dark:text-gray-300">Description of project.</p>
                </div>
              </div>
            </section>

            {/* Contact Me */}
            <section id="contact" className="snap-start py-20 px-4 md:px-8 lg:px-16 h-screen bg-white dark:bg-gray-900 flex flex-col justify-center items-center">
              <h2 className="text-3xl font-bold text-[#3B0060] dark:text-[#91D4FC] mb-6">Contact Me</h2>
              <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-4">
                <input name="name" value={formData.name} onChange={handleInputChange} required placeholder="Your Name" className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white" />
                <input name="email" type="email" value={formData.email} onChange={handleInputChange} required placeholder="Your Email" className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white" />
                <textarea name="message" value={formData.message} onChange={handleInputChange} required placeholder="Your Message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white" />
                <button type="submit" className="bg-gradient-to-r from-[#3B0060] to-[#6434c9] text-white px-6 py-2 rounded hover:scale-105 transition duration-500">
                  Send Message
                </button>
              </form>
            </section>

            {/* Footer */}
            <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
              Made with Tailwind CSS and React by Pro Ogbole
              <div className="mt-2 flex justify-center gap-4">
                <a href="https://github.com/ProthaGOAT" target="_blank"><Github className="h-5 w-5" /></a>
                <a href="https://www.linkedin.com/in/abraham-ogbole-0bb056329" target="_blank"><Linkedin className="h-5 w-5" /></a>
                <a href="mailto:abrahamogbole6@gmail.com"><Mail className="h-5 w-5" /></a>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
