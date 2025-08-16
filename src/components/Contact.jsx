import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Telescope, Star, MessageCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  })
  const [status, setStatus] = useState({ message: '', isError: false })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ message: 'Enviando mensagem...', isError: false })
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setStatus({ message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.', isError: false })
      setFormData({ name: '', email: '', phone: '', interest: '', message: '' })
    } catch (error) {
      setStatus({ message: 'Erro ao enviar mensagem. Tente novamente.', isError: true })
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "contato@yurigagari.com.br",
      description: "Resposta em até 24 horas"
    },
    {
      icon: Phone,
      title: "Telefone",
      info: "(11) 9999-9999",
      description: "Seg à Sex, 9h às 18h"
    },
    {
      icon: MapPin,
      title: "Localização",
      info: "São Paulo, SP",
      description: "Atendemos todo o Brasil"
    }
  ]

  const telescopeTypes = [
    "Telescópio para Iniciantes",
    "Telescópio Intermediário", 
    "Telescópio Avançado",
    "Consultoria Especializada",
    "Outros"
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-secondary-900 to-black relative overflow-hidden">
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
            Entre em{' '}
            <span className="bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">
              Contato
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pronto para iniciar sua jornada astronômica? Nossa equipe está aqui para te ajudar a escolher o telescópio perfeito.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MessageCircle className="w-6 h-6 mr-3 text-primary-400" />
                Fale Conosco
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="bg-primary-600 p-3 rounded-lg">
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {contact.title}
                      </h4>
                      <p className="text-primary-400 font-medium mb-1">
                        {contact.info}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {contact.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-600/20 to-accent-500/20 rounded-2xl p-6 backdrop-blur-md border border-white/20"
            >
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Telescope className="w-5 h-5 mr-2 text-primary-400" />
                Por que Escolher a Yuri Gagari?
              </h4>
              <ul className="space-y-3 text-gray-300">
                {[
                  "Equipamentos de alta qualidade testados por especialistas",
                  "Suporte técnico especializado e treinamento incluído",
                  "Garantia estendida e assistência pós-venda",
                  "Experiência de 15+ anos no mercado astronômico"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <Star className="w-4 h-4 text-accent-500 mr-3 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Solicite seu Orçamento
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all duration-300"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all duration-300"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all duration-300"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">
                  Interesse em
                </label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all duration-300"
                >
                  <option value="" className="bg-secondary-800 text-white">Selecione uma opção</option>
                  {telescopeTypes.map((type, index) => (
                    <option key={index} value={type} className="bg-secondary-800 text-white">
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">
                  Mensagem *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all duration-300 resize-none"
                  placeholder="Conte-nos sobre seu interesse em astronomia e que tipo de observações gostaria de fazer..."
                />
              </div>
              
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg ${
                    status.isError 
                      ? 'bg-red-500/20 border border-red-500/50 text-red-300' 
                      : 'bg-green-500/20 border border-green-500/50 text-green-300'
                  }`}
                >
                  {status.message}
                </motion.div>
              )}
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold py-4 rounded-lg hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}