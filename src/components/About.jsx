import React from 'react'
import { motion } from 'framer-motion'
import { Target, Users, Award, Telescope, Star, Globe } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Target,
      title: "Precisão Astronômica",
      description: "Equipamentos com precisão óptica excepcional para observações detalhadas do cosmos."
    },
    {
      icon: Users,
      title: "Comunidade Astronômica",
      description: "Conectamos entusiastas da astronomia com equipamentos e conhecimento especializados."
    },
    {
      icon: Award,
      title: "Qualidade Reconhecida",
      description: "Produtos certificados e testados por astrônomos profissionais e amadores experientes."
    }
  ]

  const achievements = [
    { icon: Telescope, value: "500+", label: "Telescópios Entregues" },
    { icon: Star, value: "15+", label: "Anos no Mercado" },
    { icon: Globe, value: "50+", label: "Cidades Atendidas" },
    { icon: Users, value: "1000+", label: "Clientes Satisfeitos" }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-secondary-900 to-secondary-800 relative overflow-hidden">
      <div className="absolute inset-0 stars-bg opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sobre a{' '}
            <span className="bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">
              Yuri Gagari
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Inspirados pelo pioneiro da exploração espacial, somos uma empresa dedicada a democratizar 
            o acesso à astronomia através de telescópios de alta qualidade e tecnologia avançada.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Nossa Missão Cósmica
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Assim como Yuri Gagarin abriu as portas para a exploração espacial humana, 
              nossa missão é abrir as portas do universo para cada pessoa curiosa sobre 
              os mistérios que habitam além da atmosfera terrestre.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Oferecemos telescópios que combinam tecnologia de ponta com facilidade de uso, 
              permitindo que desde iniciantes até observadores experientes possam explorar 
              planetas, nebulosas, galáxias e muito mais.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
            >
              <h4 className="text-xl font-semibold text-white mb-3">Nossa Visão</h4>
              <p className="text-gray-300">
                Tornar a astronomia acessível a todos, inspirando uma nova geração de 
                exploradores do cosmos através da tecnologia e educação.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-primary-400/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 p-3 rounded-lg">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600/20 to-accent-500/20 rounded-2xl p-8 backdrop-blur-md border border-white/20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Nossos Números
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <div className="bg-white/10 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <achievement.icon className="w-8 h-8 text-primary-400" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {achievement.value}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}