# 🎬 Jafir Torres - Media Kit Landing Page

Landing page de alto impacto para creador de contenido viral chileno especializado en humor callejero y sketches para marcas.

## 🚀 Características

- **Diseño oscuro con acentos neón** - Estética urbana y cinematográfica
- **Totalmente responsive** - Optimizado para móvil y desktop
- **Animaciones fluidas** - Powered by Framer Motion
- **Formulario de contacto** - Integración con EmailJS
- **SEO optimizado** - Meta tags y Open Graph
- **Accesibilidad** - Soporte para usuarios con preferencias de movimiento reducido

## 🛠 Stack Tecnológico

- **React 18** + **TypeScript**
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS** - Styling utility-first
- **Framer Motion** - Animaciones
- **EmailJS** - Formulario de contacto
- **Lucide React** - Iconos

## 📊 Métricas Destacadas

- 976K views mensuales en Instagram
- 17.4M views en TikTok (8 semanas)
- +50 marcas trabajadas
- 95% clientes satisfechos

## 🎯 Servicios

### Sketch de humor + actuación
- **Precio:** CLP $80.000
- Guion personalizado para tu marca
- Grabación profesional + edición
- Entrega en formatos 9:16 y 1:1

### Interacción en la calle con bromas
- **Precio:** CLP $100.000
- Dinámica con público real
- Integración natural de marca
- Contenido auténtico y viral

## 🚀 Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 📧 Configuración EmailJS

Para activar el formulario de contacto, actualiza las credenciales en `src/components/sections/Contact.tsx`:

```typescript
await emailjs.send(
  'TU_SERVICE_ID',     // Reemplaza con tu Service ID
  'TU_TEMPLATE_ID',    // Reemplaza con tu Template ID
  templateParams,
  'TU_PUBLIC_KEY'      // Reemplaza con tu Public Key
)
```

## 🎨 Paleta de Colores

- **Background:** `#0B0F14` (Negro petróleo)
- **Cards:** `#111827` (Slate 900)
- **Primary:** `#E11D48` (Magenta/Rose)
- **Secondary:** `#7C3AED` (Violeta eléctrico)
- **Accent:** `#22D3EE` (Cian neón)
- **Text:** `#E5E7EB` (Slate 200)

## 📱 Despliegue en Netlify

1. Conecta este repositorio a Netlify
2. Configura el build command: `npm run build`
3. Directorio de publicación: `dist`
4. ¡Listo! Tu landing estará en vivo

## 📞 Contacto

- **Instagram:** [@jafirtorres](https://instagram.com/jafirtorres)
- **TikTok:** [@jafirtorres](https://tiktok.com/@jafirtorres)
- **Email:** hola@jafirtorres.com

---

**Desarrollado con ❤️ por [www.camidevai.com](https://www.camidevai.com/?i=1#/contactame)**
