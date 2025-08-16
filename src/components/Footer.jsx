import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Star, Heart } from 'lucide-react'

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const footerLinks = {
    company: [
      { label: 'Sobre Nós', href: 'about' },
      { label: 'Nossos Telescópios', href: 'services' },
      { label: 'Contato', href: 'contact' }
    ],
    products: [
      { label: 'Telescópios Iniciantes', href: 'services' },
      { label: 'Telescópios Intermediários', href: 'services' },
      { label: 'Telescópios Avançados', href: 'services' },
      { label: 'Acessórios', href: 'services' }
    ],
    support: [
      { label: 'Consultoria Especializada', href: 'contact' },
      { label: 'Suporte Técnico', href: 'contact' },
      { label: 'Treinamento', href: 'contact' },
      { label: 'Garantia', href: 'contact' }
    ]
  }

  const contactInfo = [
    { icon: Mail, text: 'contato@yurigagari.com.br' },
    { icon: Phone, text: '(11) 9999-9999' },
    { icon: MapPin, text: 'São Paulo, SP - Brasil' }
  ]

  return (
    <footer className="bg-black text-white relative overflow-hidden pb-20">
      <div className="absolute inset-0 stars-bg opacity-10"></div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 mb-6 cursor-pointer"
                onClick={() => scrollToSection('hero')}
              >
                <div className="bg-primary-600 p-2 rounded-full">
                  <Telescope className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Yuri Gagari</span>
              </motion.div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Inspirados pelo pioneiro da exploração espacial, democratizamos o acesso à astronomia 
                através de telescópios de alta qualidade e tecnologia avançada.
              </p>
              
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    <contact.icon className="w-4 h-4" />
                    <span className="text-sm">{contact.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-primary-400">Empresa</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-primary-400">Produtos</h4>
              <ul className="space-y-3">
                {footerLinks.products.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-primary-400">Suporte</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 text-gray-400 text-sm mb-4 md:mb-0">
                <span>© 2024 Yuri Gagari. Todos os direitos reservados.</span>
                <Heart className="w-4 h-4 text-red-500" />
              </div>
              
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <span>Criado com</span>
                <a 
                  href="https://papum.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="italic text-primary-400 hover:text-primary-300 transition-colors"
                >
                  Papum
                </a>
                <Star className="w-4 h-4 text-accent-500" />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 right-10 text-white/10"
        >
          <Telescope className="w-16 h-16" />
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 left-10 text-white/10"
        >
          <Star className="w-8 h-8" />
        </motion.div>
      </div>
    </footer>
  )
}