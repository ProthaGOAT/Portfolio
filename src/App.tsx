// Final version with animation, scroll snapping, email form, enhanced visuals, profile section, and slower transitions

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from "lucide-react"

export default function PortfolioLandingPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          service_id: "service_z7estsx",
          template_id: "template_99q2v1y",
          user_id: "feg2gHUNCOecUamYI",
          template_params: formData
        })
      })

      if (res.ok) {
        alert("Message sent successfully!")
        setFormData({ name: '', email: '', message: '' })
      } else {
        alert("Failed to send message.")
      }
    } catch (err) {
      alert("Error occurred while sending message.")
    }
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.6 } }
  }

  return (
    <div className="snap-y snap-mandatory h-screen overflow-scroll scroll-smooth bg-gradient-to-b from-white to-[#edf4fb] dark:from-[#0d1a2a] dark:to-[#152c47]">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="snap-start py-20 px-4 md:px-8 lg:px-16 h-screen flex flex-col justify-center items-center"
      >
        <img src="/avatar.png" alt="Pro Ogbole" className="w-32 h-32 rounded-full mb-6 border-4 border-[#91D4FC] shadow-lg" />
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
          Hi, I'm <span className="text-[#91D4FC]">Pro Ogbole</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#3B0060] dark:text-[#6434c9]"> Full Stack Developer
        </h2>
        <p className="text-lg md:text-xl mb-8 text-[#3A5A7A] dark:text-gray-300 max-w-2xl text-center">
        I'm a 19 year old Website Developer whose passion is to create beautiful and functional websites.
         When I'm not coding, I do often find myself listening to music or even creating music.
         I draw, I cook and I write poems and literature.
         I'm always ready to help you out to the best of my abilities in whatever has to do with Website Development.
        </p>
        <div className="flex justify-center gap-4">
          <button
            className="border-2 border-[#3B0060] text-[#3B0060] hover:bg-[#3B0060]/10 dark:border-[#6434c9] dark:text-[#6434c9] dark:hover:bg-[#3B0060]/20 px-6 py-2 rounded-lg transition duration-1000"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
          </button>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.6 }}
          className="flex justify-center gap-4 mt-8"
        >
          <a href="https://github.com/ProthaGOAT" target="_blank" aria-label="GitHub">
            <Github className="h-6 w-6 text-[#3B0060] hover:text-[#2a004d] dark:text-[#6434c9] dark:hover:text-[#91D4FC] transition duration-700" />
          </a>
          <a href="https://www.linkedin.com/in/abraham-ogbole-0bb056329" target="_blank" aria-label="LinkedIn">
            <Linkedin className="h-6 w-6 text-[#3B0060] hover:text-[#2a004d] dark:text-[#6434c9] dark:hover:text-[#91D4FC] transition duration-700" />
          </a>
          <a href="mailto:abrahamogbole6@gmail.com" aria-label="Email">
            <Mail className="h-6 w-6 text-[#3B0060] hover:text-[#2a004d] dark:text-[#6434c9] dark:hover:text-[#91D4FC] transition duration-700" />
          </a>
        </motion.div>
      </motion.section>

      {/* Art Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="snap-start py-16 px-4 md:px-8 lg:px-16 h-screen bg-gradient-to-b from-[#f0f7fd] to-[#cdddf1] dark:from-[#0f1d33] dark:to-[#112c50] text-center flex flex-col justify-center"
      >
        <h3 className="text-3xl font-semibold text-[#3B0060] dark:text-[#91D4FC] mb-6">Works of Art</h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Photography, drawings, and digital creations.</p>
        <a
          href="https://photos.app.goo.gl/bCFoCbv6rLxahibw8"
          target="_blank"
          className="inline-block bg-gradient-to-r from-[#3B0060] to-[#6434c9] text-white px-6 py-3 rounded-lg shadow hover:scale-105 transform transition duration-1000"
        >
          View Gallery
        </a>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="snap-start py-16 px-4 md:px-8 lg:px-16 h-screen bg-white dark:bg-gray-900 flex flex-col justify-center"
      >
        <h3 className="text-3xl font-semibold text-center text-[#3B0060] dark:text-[#91D4FC] mb-8">Contact Me</h3>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white transition duration-500"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white transition duration-500"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            rows={4}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white transition duration-500"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-[#3B0060] to-[#6434c9] text-white px-6 py-2 rounded hover:scale-105 transform transition duration-1000"
          >
            Send Message
          </button>
        </form>
      </motion.section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        Made with Tailwind CSS and React by Pro Ogbole
      </footer>
    </div>
  )
}
