import React from 'react'
import { motion } from 'framer-motion'
import { Eye, Zap, Settings, Shield, Star, ArrowRight } from 'lucide-react'

export default function Services() {
  const telescopes = [
    {
      name: "Explorador Lunar",
      category: "Iniciante",
      price: "R$ 899",
      image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=400&h=300&fit=crop",
      features: [
        "Abertura: 70mm",
        "Distância focal: 700mm",
        "Ampliação máxima: 165x",
        "Tripé ajustável incluído"
      ],
      highlights: ["Ideal para iniciantes", "Fácil montagem", "Observação lunar detalhada"]
    },
    {
      name: "Caçador de Planetas",
      category: "Intermediário",
      price: "R$ 2.499",
      image: "https://images.unsplash.com/photo-1583055505276-de3b3a42bf60?w=400&h=300&fit=crop",
      features: [
        "Abertura: 130mm",
        "Distância focal: 900mm",
        "Ampliação máxima: 260x",
        "Sistema GoTo automatizado"
      ],
      highlights: ["Rastreamento automático", "Observação planetária", "Banco de 40.000 objetos"]
    },
    {
      name: "Explorador Galáctico",
      category: "Avançado",
      price: "R$ 5.999",
      image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=300&fit=crop",
      features: [
        "Abertura: 200mm",
        "Distância focal: 1200mm",
        "Ampliação máxima: 480x",
        "Sistema computerizado avançado"
      ],
      highlights: ["Imagens de alta resolução", "Astrofotografia", "Controle via smartphone"]
    }
  ]

  const services = [
    {
      icon: Eye,
      title: "Consultoria Especializada",
      description: "Nossa equipe de especialistas te ajuda a escolher o telescópio ideal para suas necessidades e orçamento."
    },
    {
      icon: Settings,
      title: "Suporte Técnico",
      description: "Assistência completa para montagem, calibração e manutenção do seu equipamento astronômico."
    },
    {
      icon: Zap,
      title: "Treinamento Prático",
      description: "Workshops e cursos para maximizar o uso do seu telescópio e descobrir os segredos do universo."
    },
    {
      icon: Shield,
      title: "Garantia Estendida",
      description: "Proteção completa com garantia estendida e suporte técnico especializado por 2 anos."
    }
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-secondary-800 to-secondary-900 relative overflow-hidden">
      <div className="absolute inset-0 stars-bg opacity-15"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossos{' '}
            <span className="bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">
              Telescópios
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Equipamentos de alta precisão para todos os níveis de observação astronômica
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {zap.map((zap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:border-primary-400/50 transition-all duration-300"
            >
              <div className="relative">
                <img 
                  src={zap.image} 
                  alt={zap.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {zap.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {telescope.name}
                </h3>
                
                <div className="text-3xl font-bold text-primary-400 mb-4">
                  {telescope.price}
                </div>
                
                <div className="space-y-2 mb-6">
                  {telescope.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-300">
                      <Star className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-2 mb-6">
                  {telescope.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="bg-primary-600/20 text-primary-300 px-3 py-1 rounded-full text-sm inline-block mr-2 mb-2">
                      {highlight}
                    </div>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToContact}
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 flex items-center justify-center"
                >
                  Solicitar Orçamento
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Serviços Especializados
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-primary-400/50 transition-all duration-300 text-center"
              >
                <div className="bg-primary-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-300">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600/20 to-accent-500/20 rounded-2xl p-8 backdrop-blur-md border border-white/20 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Pronto para Explorar o Universo?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra qual telescópio é perfeito para sua jornada astronômica
          </p>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(56, 189, 248, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-xl shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 text-lg"
          >
            Falar com Especialista
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}