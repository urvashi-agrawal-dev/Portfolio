import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center py-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Hi, I'm Urvashi Agrawal
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 mb-8"
        >
          I build web apps that solve real problems
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          <a href="#" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            View My Work
          </a>
          <a href="#" className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
            Contact Me
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div 
          className="flex justify-center gap-4 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a href="#"><FiGithub className="text-2xl text-gray-500 hover:text-black" /></a>
          <a href="#"><FiLinkedin className="text-2xl text-gray-500 hover:text-blue-700" /></a>
          <a href="#"><FiMail className="text-2xl text-gray-500 hover:text-red-500" /></a>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto py-20 px-8">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="E-Commerce Platform"
            description="Built with Next.js and Stripe payments"
            tags={["Next.js", "Tailwind", "Stripe"]}
            link="#"
          />
          <ProjectCard
            title="AI Chat Assistant"
            description="NLP-powered chatbot using OpenAI"
            tags={["React", "Node.js", "OpenAI"]}
            link="#"
          />
        </div>
      </section>

      <Skills />
      <Contact />
    </main>
  );
}