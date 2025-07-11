// src/App.tsx

import { useState, useEffect } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Github, Linkedin, Home, User, Folder, Send } from 'lucide-react'
import Typed from './components/TypedWrapper'

export default function PortfolioLandingPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [activeTab, setActiveTab] = useState('home')
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 7000)
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
    <div className="min-h-screen bg-gradient-to-br from-[#ffffff] via-[#edf4fb] to-[#d6f0ff] dark:from-[#0d1a2a] dark:via-[#101e2e] dark:to-[#152c47] text-gray-800 dark:text-white overflow-hidden relative">
      <AnimatePresence mode="wait">
        {showIntro && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 2 } }}
            className="fixed inset-0 z-50 bg-black text-white flex flex-col justify-center items-center text-center px-4"
          >
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-xl">
              Cognito, ergo sum
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="text-xl">
              I think, therefore I am
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }} className="mt-4 text-sm text-gray-400">
              — René Descartes
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {!showIntro && (
        <div className="relative pb-32 md:pb-16">
          {/* Icon Navigation */}
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 md:top-1/2 md:bottom-auto md:left-4 md:transform-none z-50 bg-white dark:bg-[#0d1a2a] rounded-full shadow-lg border border-gray-300 dark:border-gray-700 flex md:flex-col items-center justify-center gap-4 p-4">
            <button onClick={() => setActiveTab('home')} aria-label="Home" className={`${activeTab === 'home' ? 'text-[#3B0060] dark:text-[#91D4FC]' : 'text-gray-400'} transition duration-300`}>
              <Home className="h-6 w-6" />
            </button>
            <button onClick={() => setActiveTab('about')} aria-label="About" className={`${activeTab === 'about' ? 'text-[#3B0060] dark:text-[#91D4FC]' : 'text-gray-400'} transition duration-300`}>
              <User className="h-6 w-6" />
            </button>
            <button onClick={() => setActiveTab('portfolio')} aria-label="Portfolio" className={`${activeTab === 'portfolio' ? 'text-[#3B0060] dark:text-[#91D4FC]' : 'text-gray-400'} transition duration-300`}>
              <Folder className="h-6 w-6" />
            </button>
            <button onClick={() => setActiveTab('contact')} aria-label="Contact" className={`${activeTab === 'contact' ? 'text-[#3B0060] dark:text-[#91D4FC]' : 'text-gray-400'} transition duration-300`}>
              <Send className="h-6 w-6" />
            </button>
          </div>

          {/* Home Section */}
          {activeTab === 'home' && (
            <motion.section key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center text-center py-20 px-4">
              <img src="/avatar.png" alt="Pro Ogbole" className="w-32 h-32 rounded-full border-4 border-[#91D4FC] shadow-lg mb-6" />
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Pro Ogbole</h1>
              <Typed
                strings={[
                  "I'm a full‑stack developer",
                  "I build digital experiences",
                  "I design and code",
                  "I bring your Website dreams to life.",
                  "I am Pro Ogbole. This is what I do",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
                className="text-xl text-[#3B0060] dark:text-[#91D4FC] mt-2"
              />
            </motion.section>
          )}

          {/* About Section */}
          {activeTab === 'about' && (
            <motion.section key="about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-20 px-4 md:px-8 lg:px-16 flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="max-w-2xl text-lg text-gray-700 dark:text-gray-300 rounded-xl">
               I'm Abraham Ogbole, a Web Developer with a background in Information Technology. I'm currently focused on building and improving my skills in front-end and back-end development, while also learning best practices for responsive design, performance, and security. My IT foundation helps me approach coding with a problem-solving mindset and a passion for creating clean, user-friendly websites and applications. I’m always eager to learn more, grow as a developer, and connect with others in the tech community to share knowledge and build meaningful projects. I'm a 19‑year‑old who when I'm not coding, I create music, draw, cook, and write poetry and literature. Always eager to help with anything web‑development related. Contact me for all web related jobs.
              </p>
            </motion.section>
          )}

          {/* Portfolio Section */}
          {activeTab === 'portfolio' && (
            <motion.section key="portfolio" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-20 px-4 md:px-8 lg:px-16">
              <h2 className="text-3xl font-bold text-center mb-6">My Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <p className="font-semibold text-[#3B0060] dark:text-[#91D4FC]">Project 1</p>
                  <p className="text-gray-600 dark:text-gray-300">Working on it😅</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <p className="font-semibold text-[#3B0060] dark:text-[#91D4FC]">Project 2</p>
                  <p className="text-gray-600 dark:text-gray-300">Working on it😅</p>
                </div>
              </div>
              <div className="mt-10 text-center">
                <h3 className="text-xl font-semibold mb-4">Technologies I Use</h3>
                <div className="flex flex-wrap justify-center gap-6">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="h-10" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="h-10" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="h-10" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" className="h-10" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="h-10" />
                </div>
              </div>
            </motion.section>
          )}

          {/* Contact Section */}
          {activeTab === 'contact' && (
            <motion.section key="contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-20 px-4 md:px-8 lg:px-16">
              <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
              <div className="flex justify-center gap-4 mb-8">
                <a href="https://github.com/ProthaGOAT" target="_blank" aria-label="GitHub">
                  <Github className="h-6 w-6 text-[#3B0060] hover:text-[#2a004d] dark:text-[#6434c9] dark:hover:text-[#91D4FC] transition duration-700" />
                </a>
                <a href="mailto:abrahamogbole6@gmail.com" aria-label="Email">
                  <Mail className="h-6 w-6 text-[#3B0060] hover:text-[#2a004d] dark:text-[#6434c9] dark:hover:text-[#91D4FC] transition duration-700" />
                </a>
                <a href="https://www.linkedin.com/in/abraham-ogbole-0bb056329" target="_blank" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6 text-[#3B0060] hover:text-[#2a004d] dark:text-[#6434c9] dark:hover:text-[#91D4FC] transition duration-700" />
                </a>
              </div>
              <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto space-y-4">
                <input name="name" value={formData.name} onChange={handleInputChange} required placeholder="Your Name" className="w-full px-4 py-2 border border-gray-300 rounded-xl dark:bg-gray-800 dark:text-white" />
                <input name="email" type="email" value={formData.email} onChange={handleInputChange} required placeholder="Your Email" className="w-full px-4 py-2 border border-gray-300 rounded-xl dark:bg-gray-800 dark:text-white" />
                <textarea name="message" value={formData.message} onChange={handleInputChange} required placeholder="Your Message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-xl dark:bg-gray-800 dark:text-white" />
                <button type="submit" className="bg-gradient-to-r from-[#3B0060] to-[#6434c9] text-white px-6 py-2 rounded-xl hover:scale-105 transition duration-500">
                  Send Message
                </button>
              </form>
            </motion.section>
          )}

          {/* Floating Nav (Mobile Bottom, Desktop Side) */}
<div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 md:top-1/2 md:bottom-auto md:left-4 md:translate-x-0 md:-translate-y-1/2 z-50">
  <div className="bg-white dark:bg-[#101826] rounded-full shadow-lg flex md:flex-col items-center gap-4 p-4">
    <button onClick={() => setActiveTab('home')} aria-label="Home">
      <svg className={`w-6 h-6 ${activeTab === 'home' ? 'text-[#3B0060] dark:text-[#91D4FC]' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 2L2 9h2v9h4V13h4v5h4V9h2L10 2z" />
      </svg>
    </button>
    <button onClick={() => setActiveTab('about')} aria-label="About">
      <svg className={`w-6 h-6 ${activeTab === 'about' ? 'text-[#3B0060] dark:text-[#91D4FC]' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
      </svg>
    </button>
    <button onClick={() => setActiveTab('portfolio')} aria-label="Portfolio">
      <svg className={`w-6 h-6 ${activeTab === 'portfolio' ? 'text-[#3B0060] dark:text-[#91D4FC]' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 6h16v12H4z" />
      </svg>
    </button>
    <button onClick={() => setActiveTab('contact')} aria-label="Contact">
      <svg className={`w-6 h-6 ${activeTab === 'contact' ? 'text-[#3B0060] dark:text-[#91D4FC]' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 24 24">
        <path d="M2 4h20v16H2z" />
      </svg>
    </button>
  </div>
</div>

{/* Footer */}
<footer className="py-3 text-center text-sm bg-white dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700 z-20 mt-20">
  Made with Tailwind CSS and React by Pro Ogbole❤
</footer>