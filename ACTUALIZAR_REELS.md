# 📱 Cómo Actualizar los Reels con Imágenes y URLs Reales

## 🎯 **Archivo a Editar:**
`src/data/reels.ts`

## 📝 **Instrucciones:**

### **Para cada reel, necesitas proporcionar:**
1. **Imagen thumbnail** (URL de la imagen del reel)
2. **URL del reel** (enlace directo al video en TikTok/Instagram)

### **Formato esperado:**

```typescript
{
  views: '1.4M',
  title: 'Pregunta incómoda en el mall',
  thumbnail: 'https://tu-imagen.com/reel1.jpg', // 🔄 AQUÍ VA LA IMAGEN
  url: 'https://tiktok.com/@jafirtorres/video/123456789' // 🔄 AQUÍ VA LA URL
}
```

## 📋 **Lista de Reels a Actualizar:**

### **Reel 1: "Pregunta incómoda en el mall" (1.4M views)**
- ❌ Thumbnail: `PENDIENTE`
- ❌ URL: `PENDIENTE`

### **Reel 2: "Reto express con extraños" (794K views)**
- ❌ Thumbnail: `PENDIENTE`
- ❌ URL: `PENDIENTE`

### **Reel 3: "Broma en el transporte público" (517.8K views)**
- ❌ Thumbnail: `PENDIENTE`
- ❌ URL: `PENDIENTE`

### **Reel 4: "Interacción con vendedores" (297K views)**
- ❌ Thumbnail: `PENDIENTE`
- ❌ URL: `PENDIENTE`

### **Reel 5: "Sketch en la calle" (40K views)**
- ❌ Thumbnail: `PENDIENTE`
- ❌ URL: `PENDIENTE`

### **Reel 6: "Dinámica con público" (32K views)**
- ❌ Thumbnail: `PENDIENTE`
- ❌ URL: `PENDIENTE`

## 🚀 **Una vez que tengas las imágenes y URLs:**

1. **Edita** el archivo `src/data/reels.ts`
2. **Reemplaza** cada placeholder con los datos reales
3. **Guarda** el archivo
4. **Los cambios se aplicarán automáticamente** (hot reload)

## 💡 **Ejemplo de cómo debería quedar:**

```typescript
{
  views: '1.4M',
  title: 'Pregunta incómoda en el mall',
  thumbnail: 'https://subir-imagen.com/images/2025/09/04/reel-mall.jpg',
  url: 'https://www.tiktok.com/@jafirtorres/video/7123456789'
}
```

## ✨ **Funcionalidades que ya están listas:**
- ✅ Click en reel abre la URL en nueva pestaña
- ✅ Hover effects y animaciones
- ✅ Grid responsive (masonry layout)
- ✅ Optimización de imágenes automática
- ✅ Alt text para accesibilidad

---

**¡Pásame las 6 imágenes y 6 URLs cuando las tengas listas!** 🎬
