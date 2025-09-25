// 📱 CONFIGURACIÓN DE REELS VIRALES
// Actualiza aquí las imágenes y URLs cuando las tengas

export interface ReelData {
  views: number
  title: string
  thumbnail: string
  url: string
}

export const reelsData: ReelData[] = [
  // 🔥 CONTENIDO MÁS VIRAL (Intervenciones callejeras)
  {
    views: 3000000,
    title: 'La papa de chile',
    thumbnail: 'https://subir-imagen.com/images/2025/09/25/image.png',
    url: 'https://www.instagram.com/reel/DOuFFXBDaPQ/?igsh=MWhsc3hvN2tydTMxYQ%3D%3D'
  },
  {
    views: 1200000,
    title: 'Intervención callejera',
    thumbnail: 'https://subir-imagen.com/images/2025/09/04/7e36597b-6a4e-4922-a2ca-feecbddac201.jpg',
    url: 'https://www.instagram.com/reel/DNUKZNjtzAV/?igsh=ZWpweXQxZWUxd2lx'
  },
  {
    views: 847000,
    title: 'Intervención caritativa',
    thumbnail: 'https://subir-imagen.com/images/2025/09/04/image4b7d711eb20f4d16.png',
    url: 'https://www.instagram.com/reel/DDIVY2gySBp/?igsh=cmtzbm9iN3VocTJw'
  },

  // 🎬 CONTENIDO PROFESIONAL (Sketches y publicidad)
  {
    views: 623000,
    title: 'Publicidad sketch',
    thumbnail: 'https://subir-imagen.com/images/2025/09/04/image444606324c0c6f87.png',
    url: 'https://vm.tiktok.com/ZMAMvpJmU/'
  },
  {
    views: 456000,
    title: 'Dirección de guion Play Media',
    thumbnail: 'https://subir-imagen.com/images/2025/09/04/image.md.png',
    url: 'https://www.instagram.com/reel/DGld4WbxBrM/?igsh=MW4Z3d0b3ZudHNkZg=='
  },
  {
    views: 298000,
    title: 'Sketch profesional',
    thumbnail: 'https://subir-imagen.com/images/2025/09/04/imageac6cb9061c15216c.png',
    url: 'https://www.instagram.com/reel/C41JMhtu_ec/?igsh=bHR6emh1eGF6NDJu'
  },

  // 🎤 ENTREVISTAS Y PRESENTACIONES
  {
    views: 187000,
    title: 'Entrevista en Villarrica',
    thumbnail: 'https://subir-imagen.com/images/2025/09/04/Imagen-de-WhatsApp-2025-08-31-a-las-15.25.49_cc5b17c7.md.jpg',
    url: 'https://www.instagram.com/reel/C5zfJiPrf-u/?igsh=MTdxZGNIeGZNWxiZw=='
  },
  {
    views: 134000,
    title: 'Entrevista en bar',
    thumbnail: 'https://subir-imagen.com/images/2025/09/04/image1dc44ddfcb603c44.png',
    url: 'https://www.instagram.com/reel/Cvn1bevNlrw/?igsh=bnF3OGNua3RwdHRj'
  },
  {
    views: 89000,
    title: 'Presentación personal',
    thumbnail: 'https://subir-imagen.com/images/2025/09/04/image04520a21e2b50a35.png',
    url: 'https://www.instagram.com/reel/C9qRp2tyoRV/?igsh=MTRjb2l0ODZ1b3hyZg=='
  }
]


// 📝 INSTRUCCIONES PARA ACTUALIZAR:
// 1. Reemplaza cada 'thumbnail' con la URL de la imagen del reel
// 2. Reemplaza cada 'url' con el enlace al reel en TikTok/Instagram
// 3. Los cambios se aplicarán automáticamente en toda la app
