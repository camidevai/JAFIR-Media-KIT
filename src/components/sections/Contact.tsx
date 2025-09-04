import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Send, CheckCircle, AlertCircle, Mail, Phone, MapPin } from 'lucide-react'
import Button from '../ui/Button'
import RiseIn from '../motion/RiseIn'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brand: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Replace with your EmailJS configuration
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your service ID
        'YOUR_TEMPLATE_ID', // Replace with your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          brand: formData.brand,
          message: formData.message,
          to_name: 'Jafir Torres'
        },
        'YOUR_PUBLIC_KEY' // Replace with your public key
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', brand: '', message: '' })
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'hola@jafirtorres.com',
      href: 'mailto:hola@jafirtorres.com'
    },
    {
      icon: <Phone size={24} />,
      label: 'WhatsApp',
      value: '+56 9 1234 5678',
      href: 'https://wa.me/56912345678'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Ubicación',
      value: 'Santiago, Chile',
      href: null
    }
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 right-20 w-40 h-40 border-2 border-accent/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-20 left-20 w-32 h-32 border-2 border-primary/10 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RiseIn className="text-center mb-16">
          <h2 className="heading-lg mb-6">
            Hablemos de tu <span className="text-gradient">Proyecto</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            ¿Listo para crear contenido que genere conversación y ventas? 
            Cuéntame sobre tu marca y hagamos algo increíble juntos.
          </p>
        </RiseIn>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <RiseIn delay={0.2}>
            <div className="card-glass p-8">
              <h3 className="text-2xl font-bold text-text mb-6">Envíame un mensaje</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-bg border border-accent/30 rounded-xl text-text placeholder-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-bg border border-accent/30 rounded-xl text-text placeholder-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="brand" className="block text-sm font-medium text-text mb-2">
                    Marca/Empresa
                  </label>
                  <input
                    type="text"
                    id="brand"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-bg border border-accent/30 rounded-xl text-text placeholder-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="Nombre de tu marca"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-bg border border-accent/30 rounded-xl text-text placeholder-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                    placeholder="Cuéntame sobre tu proyecto, objetivos y presupuesto..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    >
                      <Send size={20} />
                    </motion.div>
                  ) : (
                    <>
                      <Send size={20} />
                      Enviar Mensaje
                    </>
                  )}
                </Button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-400 bg-green-400/10 p-3 rounded-xl"
                  >
                    <CheckCircle size={20} />
                    <span>¡Mensaje enviado! Te responderé en 24h.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-xl"
                  >
                    <AlertCircle size={20} />
                    <span>Error al enviar. Inténtalo de nuevo.</span>
                  </motion.div>
                )}
              </form>
            </div>
          </RiseIn>

          {/* Contact Info */}
          <RiseIn delay={0.4}>
            <div className="space-y-8">
              <div className="card-glass p-8">
                <h3 className="text-2xl font-bold text-text mb-6">Información de contacto</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="text-accent">{info.icon}</div>
                      <div>
                        <div className="text-sm text-muted">{info.label}</div>
                        {info.href ? (
                          <a
                            href={info.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text hover:text-accent transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-text">{info.value}</div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="card-glass p-8">
                <h4 className="text-xl font-bold text-text mb-4">Tiempo de respuesta</h4>
                <p className="text-muted mb-4">
                  Respondo todos los mensajes en menos de 24 horas. 
                  Para proyectos urgentes, contáctame por WhatsApp.
                </p>
                <div className="flex items-center gap-2 text-accent">
                  <CheckCircle size={20} />
                  <span className="font-semibold">Respuesta garantizada en 24h</span>
                </div>
              </div>
            </div>
          </RiseIn>
        </div>
      </div>
    </section>
  )
}

export default Contact
