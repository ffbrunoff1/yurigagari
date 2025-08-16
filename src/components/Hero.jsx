import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Star, Moon, Sun } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const floatingElements = [
    { icon: Star, delay: 0, x: '10%', y: '20%' },
    { icon: Moon, delay: 1, x: '80%', y: '30%' },
    { icon: Sun, delay: 2, x: '15%', y: '70%' },
    { icon: Star, delay: 1.5, x: '85%', y: '80%' },
  ]

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 stars-bg opacity-30"></div>
      
      {floatingElements.map((Element, index) => (
        <motion.div
          key={index}
          className="absolute text-white/20"
          style={{ left: Element.x, top: Element.y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 6,
            delay: Element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Element.icon className="w-8 h-8 md:w-12 md:h-12" />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            Explore o{' '}
            <span className="bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent glow-text">
              Universo
            </span>
            <br />
            com Nossos Telescópios
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Descubra os mistérios do cosmos com equipamentos de alta precisão. 
            Da observação lunar aos confins da galáxia, nossa tecnologia te conecta às estrelas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(56, 189, 248, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('services')}
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-xl shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 text-lg"
            >
              Ver Telescópios
            </motion.button>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('about')}
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl backdrop-blur-sm hover:border-white/50 transition-all duration-300 text-lg"
            >
              Saiba Mais
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
          >
            {[
              { number: "500+", label: "Telescópios Vendidos" },
              { number: "15+", label: "Anos de Experiência" },
              { number: "99%", label: "Satisfação dos Clientes" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.8 + index * 0.2 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => scrollToSection('about')}
            className="text-white/70 hover:text-white transition-colors"
          >
            <ArrowDown className="w-8 h-8" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}