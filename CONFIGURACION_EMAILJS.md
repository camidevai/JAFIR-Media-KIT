# 📧 **Configuración Completa de EmailJS - Jafir Torres**

## 🎯 **Estado Actual:**
✅ EmailJS instalado y configurado  
✅ Credenciales integradas en el código  
✅ Template HTML creado  
⏳ **PENDIENTE:** Crear template en EmailJS Dashboard  

---

## 🚀 **PASOS PARA COMPLETAR LA CONFIGURACIÓN:**

### **Paso 1: Acceder a EmailJS Dashboard**
1. Ve a: https://dashboard.emailjs.com/admin/templates
2. Inicia sesión con tu cuenta de EmailJS

### **Paso 2: Crear Nuevo Template**
1. Click en **"Create New Template"**
2. Selecciona **"Blank Template"**
3. Asigna un nombre: **"Jafir Torres - Contacto Landing"**

### **Paso 3: Configurar el Template**
1. **Subject:** `🎬 Nuevo contacto de {{from_name}} - {{brand}}`
2. **Content:** Copia y pega todo el contenido del archivo `emailjs-template.html`
3. **From Name:** `Landing Page Jafir Torres`
4. **Reply To:** `{{from_email}}`

### **Paso 4: Obtener Template ID**
1. Guarda el template
2. **Copia el Template ID** que aparece en la URL o en la lista
3. Ejemplo: `template_abc123xyz`

### **Paso 5: Actualizar el Código**
1. Abre el archivo: `src/config/emailjs.ts`
2. Reemplaza `'TEMPLATE_ID_PENDIENTE'` con tu Template ID real
3. Ejemplo:
```typescript
TEMPLATE_ID: 'template_abc123xyz', // ← Tu Template ID aquí
```

---

## 🔧 **Credenciales Configuradas:**

```typescript
SERVICE_ID: 'service_7wdt1jc'
PUBLIC_KEY: 'fjPw97MD8wIWWL6ew'
TEMPLATE_ID: 'PENDIENTE' // ← Actualizar después del Paso 4
```

---

## 📝 **Variables del Template:**

El template está configurado para recibir estos datos del formulario:

| Variable EmailJS | Campo del Formulario | Descripción |
|------------------|---------------------|-------------|
| `{{from_name}}`  | name               | Nombre del contacto |
| `{{from_email}}` | email              | Email del contacto |
| `{{brand}}`      | brand              | Marca/Empresa |
| `{{message}}`    | message            | Mensaje completo |
| `{{to_name}}`    | -                  | "Jafir Torres" (fijo) |

---

## ✅ **Verificación Final:**

Una vez completados todos los pasos:

1. **Prueba el formulario** en tu landing page
2. **Verifica que llegue el email** con el formato correcto
3. **Confirma que el reply-to** funcione correctamente

---

## 🎨 **Características del Template:**

- ✅ **Diseño responsive** (móvil y desktop)
- ✅ **Colores de marca** (magenta, violeta, cyan)
- ✅ **Información de contacto** incluida
- ✅ **Formato profesional** con campos organizados
- ✅ **Branding de Jafir Torres** integrado

---

## 🚨 **¿Problemas?**

Si el formulario no funciona:

1. **Verifica el Template ID** en `src/config/emailjs.ts`
2. **Revisa la consola** del navegador para errores
3. **Confirma las credenciales** en EmailJS Dashboard
4. **Prueba con un email de prueba** primero

---

**¡Una vez que tengas el Template ID, actualízalo en el código y el formulario estará 100% funcional!** 🚀
