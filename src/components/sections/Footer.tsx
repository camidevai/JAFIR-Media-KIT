import { motion } from 'framer-motion'
import { Instagram, Heart } from 'lucide-react'
import { Link } from 'react-scroll'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/jafirtorres',
      icon: <Instagram size={24} />,
      handle: '@jafirtorres'
    },
    {
      name: 'TikTok',
      href: 'https://tiktok.com/@jafirtorres',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      handle: '@jafirtorres'
    },
  
  ]

  const quickLinks = [
    { name: 'Inicio', to: 'hero' },
    { name: 'Servicios', to: 'services' },
    { name: 'Reels', to: 'reels' },
    { name: 'Sobre Mí', to: 'about' },
    { name: 'Contacto', to: 'contact' }
  ]

  return (
    <footer className="bg-card/50 border-t border-accent/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="text-3xl font-heading font-bold text-gradient mb-4">
                Jafir Torres
              </h3>
              <p className="text-muted max-w-md">
                Creador de contenido viral que conecta marcas con personas reales. 
                Humor auténtico, resultados medibles.
              </p>
            </motion.div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="bg-bg/50 p-3 rounded-xl text-muted hover:text-accent hover:bg-accent/10 transition-all duration-300 group"
                  title={social.handle}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-text mb-4">Enlaces rápidos</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      smooth={true}
                      duration={500}
                      className="text-muted hover:text-accent transition-colors cursor-pointer"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold text-text mb-4">Contacto</h4>
              <div className="space-y-2 text-muted">
                <p>hola@jafirtorres.com</p>
                <p>+56 9 1234 5678</p>
                <p>Santiago, Chile</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-accent/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-muted text-sm">
            © {currentYear} Jafir Torres. Todos los derechos reservados.
          </div>
          
          <div className="flex items-center gap-2 text-muted text-sm">
            <span>Desarrollado con</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={16} className="text-primary fill-current" />
            </motion.div>
            <span>por</span>
            <a
              href="https://www.camidevai.com/?i=1#/contactame"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-primary transition-colors duration-300 font-semibold"
            >
              www.camidevai.com
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
