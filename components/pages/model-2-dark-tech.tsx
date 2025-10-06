/**
 * MODELO 2: MODERNO E TECNOLÓGICO (DARK MODE)
 *
 * Paleta de Cores:
 * - Background: #0A0A0A (Near Black)
 * - Surface: #1A1A1A (Dark Gray)
 * - Primary: #00F0FF (Cyan Neon)
 * - Secondary: #8B5CF6 (Purple 500)
 * - Accent: #F59E0B (Amber 500)
 * - Text Primary: #FFFFFF
 * - Text Secondary: #A1A1AA (Gray 400)
 *
 * Fontes:
 * - Headings: Space Grotesk (Bold, 700)
 * - Body: Inter (Regular, 400-500)
 */

"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Smartphone, Globe, Zap, Database, ArrowRight, Mail } from "lucide-react"
import { useState } from "react"
import Header from "@/components/header"
import { sendMessage } from "@/app/actions/send-message"

export default function Model2DarkTech() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    project: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const features = [
    {
      icon: Smartphone,
      title: "Apps Mobile",
      description: "Experiências nativas que seus usuários vão amar",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Globe,
      title: "Web Apps",
      description: "Plataformas web modernas e responsivas",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Automação",
      description: "Workflows inteligentes que economizam horas",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Database,
      title: "Backend",
      description: "APIs robustas e escaláveis",
      color: "from-green-500 to-emerald-500",
    },
  ]

  const technologies = ["React", "Next.js", "TypeScript", "Node.js", "Python", "AWS", "Docker", "PostgreSQL"]

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      const result = await sendMessage(formData)

      setSubmitMessage(result.message)

      if (result.success) {
        setFormData({ name: "", phone: "", project: "" })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitMessage("Erro ao enviar mensagem. Tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      <Header />

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-block mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
              <span className="text-cyan-400 text-sm font-medium">🚀 Tecnologia de Ponta</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Construímos o
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                futuro digital
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Desenvolvemos soluções tecnológicas que transformam negócios e criam experiências inesquecíveis para seus
              usuários.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow"
              >
                Começar Agora
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-gray-700 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
              >
                Ver Projetos
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">O que fazemos de melhor</h2>
            <p className="text-xl text-gray-400">Expertise em desenvolvimento full-stack</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative group"
              >
                <div className="h-full p-6 bg-[#1A1A1A] border border-gray-800 rounded-xl hover:border-gray-700 transition-all">
                  <motion.div
                    animate={{
                      scale: hoveredCard === index ? 1.1 : 1,
                      rotate: hoveredCard === index ? 5 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4`}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1A1A]/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Stack Tecnológico</h2>
            <p className="text-xl text-gray-400">Trabalhamos com as melhores ferramentas do mercado</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-8 py-4 bg-[#1A1A1A] border border-gray-800 rounded-lg hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
              >
                <span className="text-lg font-semibold">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Vamos conversar?</h2>
            <p className="text-xl text-gray-400">Conte-nos sobre seu projeto</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <input
                type="text"
                placeholder="Seu nome"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-6 py-4 bg-[#1A1A1A] border border-gray-800 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors text-white placeholder-gray-500"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Seu número celular para contato"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="w-full px-6 py-4 bg-[#1A1A1A] border border-gray-800 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors text-white placeholder-gray-500"
              />
            </div>
            <div>
              <textarea
                rows={5}
                placeholder="Conte-nos sobre seu projeto"
                value={formData.project}
                onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                required
                className="w-full px-6 py-4 bg-[#1A1A1A] border border-gray-800 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors text-white placeholder-gray-500 resize-none"
              />
            </div>
            {submitMessage && (
              <div
                className={`p-4 rounded-lg ${
                  submitMessage.includes("sucesso")
                    ? "bg-green-500/10 border border-green-500/20 text-green-400"
                    : "bg-red-500/10 border border-red-500/20 text-red-400"
                }`}
              >
                {submitMessage}
              </div>
            )}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Mail className="w-5 h-5" />
              {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">TVR</span>
            </div>
            <span className="text-2xl font-bold">TVR WEB</span>
          </div>
          <p className="text-gray-400 mb-4">Construindo o futuro, um código por vez.</p>
          <p className="text-gray-600 text-sm">&copy; 2025 TVR WEB. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
