"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex items-center justify-center px-6 md:px-12"
      >
        <div className="max-w-3xl text-center">
          <motion.h1 {...fadeIn} className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            Aryan Jumde
          </motion.h1>
          <motion.p
            {...fadeIn}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl text-gray-600 mb-6 font-light"
          >
            Computer Science Undergraduate | Software Developer
          </motion.p>
          <motion.p
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto"
          >
            Computer Science undergraduate building scalable backend systems and modern full-stack applications, with interests in cloud technologies, AI integration, and clean software design.
          </motion.p>
          <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="flex gap-4 justify-center flex-wrap">
            <Button asChild variant="default" size="lg">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://drive.google.com/file/d/1gb_oZYAEwpydxHPB3FByN_fvM5O-UsIp/view?usp=sharing" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="px-6 md:px-12 py-20"
      >
        <div className="max-w-3xl">
          <motion.h2 {...fadeIn} className="text-4xl md:text-5xl font-bold mb-12">
            Education
          </motion.h2>
          <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="border-l-2 border-gray-300 pl-8 py-4">
            <h3 className="text-2xl font-semibold mb-2">B.Tech in Computer Science and Engineering</h3>
            <p className="text-lg text-gray-600 mb-2">Shri Ramdeobaba College of Engineering and Management</p>
            <p className="text-gray-500">2023–2027</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="px-6 md:px-12 py-20 bg-gray-50"
      >
        <div className="max-w-4xl">
          <motion.h2 {...fadeIn} className="text-4xl md:text-5xl font-bold mb-12">
            Skills
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-4">Backend</h3>
              <div className="space-y-2 text-gray-600">
                <p>Python, Java, Node.js</p>
                <p>RESTful APIs</p>
                <p>MongoDB</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-4">Frontend</h3>
              <div className="space-y-2 text-gray-600">
                <p>React, Next.js, TypeScript</p>
                <p>Tailwind CSS, Framer Motion</p>
                <p>UI/UX Fundamentals</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-4">Cloud & DevOps</h3>
              <div className="space-y-2 text-gray-600">
                <p>Microsoft Azure</p>
                
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-4">AI & ML</h3>
              <div className="space-y-2 text-gray-600">
                <p>Python, TensorFlow</p>
                <p>LLM Integration, RAG Systems</p>
                <p>Flask, FastAPI</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-4">Tools & Platforms</h3>
              <div className="space-y-2 text-gray-600">
                <p>Git, GitHub, GitLab</p>
                <p>Vercel,Render</p>
                <p>Linux</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-4">Soft Skills</h3>
              <div className="space-y-2 text-gray-600">
                <p>Problem Solving, Communication</p>
                <p>Team Collaboration</p>
                
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="px-6 md:px-12 py-20"
      >
        <div className="max-w-4xl">
          <motion.h2 {...fadeIn} className="text-4xl md:text-5xl font-bold mb-12">
            Featured Projects
          </motion.h2>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="space-y-8">
            <motion.div
              variants={itemVariants}
              className="border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Medical Inventory Management System</h3>
                  <p className="text-gray-600">Multi-Tenant SaaS Platform</p>
                </div>
                <a 
                      href="https://github.com/Aryans-github/Medical_Inventory" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-indigo-400 transition-colors"
                      >
                      <span className="text-sm font-medium">View Code</span>
                      <ExternalLink className="h-5 w-5 text-gray-400" />
                </a>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Developed a comprehensive inventory management system for medical facilities with multi-tenant
                architecture, role-based access control, and real-time analytics dashboard. Integrated with cloud
                services for scalability and reliability.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">Next.js</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">RESTful API's</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">Oracle 11g</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">UUIDs</span>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">GyaanBot</h3>
                  <p className="text-gray-600">AI-Powered Mobile Chat Assistant</p>
                </div>
               <a 
                        href="https://github.com/Aryans-github/GyaanBot" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2  hover:text-emerald-400 transition-colors"
                  >
                        <span className="text-sm font-medium">View Code</span>
                        <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-emerald-400" />
                      </a>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Built an intelligent chat assistant leveraging LLMs and RAG systems to provide contextual responses.
                Implemented efficient vector embeddings and semantic search for knowledge retrieval from custom
                documents.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">Python</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">Gemini AI API</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">Flutter</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">Flask</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="px-6 md:px-12 py-20 bg-gray-50"
      >
        <div className="max-w-3xl">
          <motion.h2 {...fadeIn} className="text-4xl md:text-5xl font-bold mb-12">
            Certifications
          </motion.h2>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="space-y-4">
            <motion.div variants={itemVariants} className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-gray-900 mr-4"></div>
              <span className="text-lg">Microsoft Azure Cloud Services</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-gray-900 mr-4"></div>
              <span className="text-lg">Developing AI Applications with Python and Flask (IBM)</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-gray-900 mr-4"></div>
              <span className="text-lg">Foundations of Machine Learning</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer Section */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="px-6 md:px-12 py-16 border-t border-gray-200"
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Let&apos;s Connect</h3>
              <p className="text-gray-600">Feel free to reach out for opportunities or collaborations.</p>
            </div>
            <div className="flex gap-4 mt-6 md:mt-0">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:aryan@example.com"
                className="p-3 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 text-center text-gray-500">
            <p>&copy; 2025 Aryan Jumde. All rights reserved.</p>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
