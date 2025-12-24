# Portfolio Personal - Aymane Benkara El Ghani

Portfolio personal con diseño moderno, estética pixel art y colores negro, blanco y rojo oscuro.

## 🎨 Características

- **Diseño Dark Mode** con paleta de colores profesional (negro, blanco, rojo oscuro)
- **Estética Pixel Art** con elementos retro-gaming
- **Totalmente Responsive** - Optimizado para móviles, tablets y desktop
- **Animaciones Suaves** - Scroll reveal, typing effect, parallax
- **SEO Optimizado** - Meta tags y estructura semántica
- **Rendimiento Optimizado** - CSS y JS modulares

## 📁 Estructura del Proyecto

```
PortfolioV1/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos personalizados
├── js/
│   └── main.js         # JavaScript para interactividad
├── assets/             # Carpeta para imágenes y recursos (crear si necesario)
│   ├── images/
│   └── icons/
└── README.md           # Este archivo
```

## 🚀 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos con variables CSS y animaciones
- **JavaScript (Vanilla)** - Interactividad sin dependencias
- **Tailwind CSS** - Framework CSS (CDN)
- **Google Fonts** - Tipografías Press Start 2P y Space Mono

## 📋 Secciones

1. **Hero** - Presentación con avatar pixel art
2. **Skills** - Stack tecnológico organizado por categorías
3. **Proyectos** - Grid de proyectos con enlaces
4. **Contacto** - Información de contacto y redes sociales
5. **Footer** - Copyright y mensaje de consola

## 🛠️ Instalación y Uso

### Opción 1: Con XAMPP (Recomendado)

1. Asegúrate de que XAMPP esté instalado y corriendo
2. El proyecto ya está en `c:\xampp\htdocs\PortfolioV1`
3. Abre tu navegador y visita: `http://localhost/PortfolioV1`

### Opción 2: Abrir directamente

1. Navega a la carpeta del proyecto
2. Haz doble clic en `index.html`
3. Se abrirá en tu navegador predeterminado

## ✏️ Personalización

### Cambiar Información Personal

Edita `index.html` y busca las siguientes secciones:

- **Email**: Línea con `tu-email@ejemplo.com`
- **LinkedIn**: Línea con `/in/tu-perfil`
- **GitHub**: Línea con `tu-usuario`
- **Twitter**: Línea con `tu-usuario`

### Añadir Proyectos Reales

Reemplaza las tarjetas de proyecto en la sección `#projects` con tus proyectos reales:

```html
<div class="fade-in project-card pixel-corners">
  <div class="project-header">
    <span class="project-icon">🎮</span>
    <h3 class="project-title">Tu Proyecto</h3>
  </div>
  <p class="project-description">Descripción de tu proyecto...</p>
  <div class="project-links">
    <a
      href="URL_GITHUB"
      class="project-link project-link-primary pixel-corners"
    >
      Código
    </a>
    <a
      href="URL_DEMO"
      class="project-link project-link-secondary pixel-corners"
    >
      Demo
    </a>
  </div>
</div>
```

### Cambiar Colores

Edita `css/style.css` en la sección `:root` para cambiar la paleta de colores:

```css
:root {
  --color-black: #0a0a0a;
  --color-red-dark: #8b0000;
  --color-red: #cc0000;
  /* ... más colores */
}
```

### Añadir tu Foto

Reemplaza el SVG del avatar en `index.html` con una imagen real:

```html
<img
  src="assets/images/tu-foto.jpg"
  alt="Aymane Benkara El Ghani"
  class="hero-avatar"
/>
```

## 🎯 Características Técnicas

### CSS

- Variables CSS para fácil personalización
- Diseño responsive con Grid y Flexbox
- Animaciones CSS personalizadas
- Efecto scanline y glitch

### JavaScript

- Scroll reveal con Intersection Observer
- Smooth scroll para navegación
- Efecto de escritura (typing)
- Parallax en hero section
- Menú móvil responsive

## 📱 Responsive Design

El portfolio está optimizado para:

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## 🔧 Mejoras Futuras

- [ ] Añadir modo claro/oscuro toggle
- [ ] Implementar formulario de contacto funcional
- [ ] Añadir más animaciones micro-interacciones
- [ ] Integrar blog o sección de artículos
- [ ] Añadir certificaciones y educación

## 📄 Licencia

Este proyecto es de uso personal. Siéntete libre de usarlo como inspiración para tu propio portfolio.

## 👤 Autor

**Aymane Benkara El Ghani**

- Ubicación: Murcia, España
- Estudiante de Desarrollo de Aplicaciones Web

---

Desarrollado con ❤️ y mucho café ☕
