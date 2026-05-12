import './App.css'

type MediaCard = {
  title: string
  image: string
}

type ProjectCard = {
  title: string
  embed: string
}

type EquipmentCategory = {
  name: string
  image: string
  items: string[]
}

const galleryImages: MediaCard[] = [
  { title: 'Producción en set 01', image: '/source-assets/imgs/chuparmito_producciones/chupamirto_producciones_1.JPG' },
  { title: 'Producción en set 02', image: '/source-assets/imgs/chuparmito_producciones/chupamirto_producciones_5.JPG' },
  { title: 'Producción en set 03', image: '/source-assets/imgs/chuparmito_producciones/chupamirto_producciones_9.JPG' },
  { title: 'Producción en set 04', image: '/source-assets/imgs/chuparmito_producciones/chupamirto_producciones_14.JPG' },
  { title: 'Producción en set 05', image: '/source-assets/imgs/chuparmito_producciones/chupamirto_producciones_20.JPG' },
  { title: 'Producción en set 06', image: '/source-assets/imgs/chuparmito_producciones/chupamirto_producciones_28.JPG' },
]

const projects: ProjectCard[] = [
  { title: 'Proyecto destacado 01', embed: 'https://www.youtube.com/embed/3zdaFzkmrzc' },
  { title: 'Proyecto destacado 02', embed: 'https://www.youtube.com/embed/RKMEpDfYJ2s' },
  { title: 'Proyecto destacado 03', embed: 'https://www.youtube.com/embed/5kxSmTzanPo' },
  { title: 'Proyecto destacado 04', embed: 'https://www.youtube.com/embed/Wq2-3vMk550' },
  { title: 'Proyecto destacado 05', embed: 'https://www.youtube.com/embed/UWOQoR6PNSg' },
  { title: 'Proyecto destacado 06', embed: 'https://www.youtube.com/embed/we9GpyVn8RY' },
]

const equipmentCategories: EquipmentCategory[] = [
  {
    name: 'Cámara RED SCARLET W',
    image: '/source-assets/imgs/RED_GEMINI_Y_SCARLETT_W_CHUPAMIRTO_PRODUCCIONES.JPG',
    items: [
      'RED SCARLET W 5K Sensor Dragon',
      'RED V-Lock Expander',
      'RED Monitor 4.5 Touch Monitor',
      'Video Assist',
      'Montura EF y Montura PL',
      'Lentes Rokinon Cinema montura EF (24mm, 50mm, 85mm, 135mm)',
      'Lente zoom 25-250mm Angenieux montura PL',
      'Follow Focus, Matte Box 4x4 Clip On y 2 tarjetas RED Mini Mag 128 GB',
    ],
  },
  {
    name: 'Cámara RED GEMINI',
    image: '/source-assets/imgs/RED_GEMINI_Y_SCARLETT W_2_CHUPAMIRTO_PRODUCCIONES.JPG',
    items: [
      'Cámara RED GEMINI 5K S35',
      'RED V-Lock Expander',
      'RED Monitor 7 Touch',
      'Montura EF y PL',
      'Tarjetas RED Mini Mag 960 GB y 480 GB',
      'Lentes Sony CineAlta (25mm, 35mm, 50mm, 85mm, 135mm, 300mm)',
      'Tripié estándar con cabeza Manfrotto',
      'Video Assist inalámbrico Teradek Bolt 500 SDI',
    ],
  },
  {
    name: 'Cámara URSA MINI 4K',
    image: '/source-assets/imgs/BLACKMAGIG_URSA_MINI_4K_CHUPAMIRTO_PRODUCCIONES.jpg',
    items: [
      'Cámara URSA MINI 4K',
      'Lentes Rokinon Cinema montura EF (24mm, 50mm, 85mm, 135mm, 75-300mm Canon)',
      'Matte Box 4x4 Clip On y Follow Focus',
      'Tarjeta CFast 128 GB y SSD 500 GB',
      'Adaptador SSD a CFast Drive y cable SSD para descarga',
      'Tripié estándar con cabeza Cartonni',
      'Monitor 5 y grabador on board Blackmagic',
      'Follow Focus inalámbrico (Nucleus-M)',
    ],
  },
  {
    name: 'Video Assist',
    image: '/source-assets/imgs/TERADEK_BOLT_500_SET.jpg',
    items: [
      'Set para 1 cámara con Teradek Bolt 500 SDI (250 mts de alcance)',
      'Monitor de 24 pulgadas',
      'Cables SDI y HDMI de 10 a 20 mts',
      'Convertidor SDI a HDMI',
      'Monitor 5 grabador y tripié de monitor',
      'Versión para 2 cámaras con monitor adicional de 32 pulgadas y dos convertidores',
    ],
  },
  {
    name: 'Estabilización y movimiento',
    image: '/source-assets/imgs/STEADY_CAM_CHUPAMIRTO_PRODUCCIONES.jpg',
    items: [
      'Steadycam Bumblebee Basson Steady System',
      'Tilta Armor Man',
      'Zhiyun Crane 3S',
      'DJI Ronin',
      'Operador, asistente, video assist inalámbrico y follow focus inalámbrico disponibles como extra',
    ],
  },
  {
    name: 'Postproducción e iluminación',
    image: '/source-assets/imgs/SALA_DE_POST_PRODUCCION.png',
    items: [
      'Atomos Sumo 19 monitor grabador 4K HDR',
      'Equipo de Asteras',
      'Equipo de Skypanels',
      'Lista de iluminación y tramoya',
      'Sala de postproducción',
      'Drone, mobile kit y extra equipo disponibles',
    ],
  },
]

const additionalServices = [
  'Servicios de Producción',
  'Data Manager',
  'Video Assist',
  'Steadycam',
  'Sonido Directo',
  'Personal',
  'Dirección',
  'Fotografía',
  'Guionismo',
  'Casting',
  'Locaciones',
  'Edición',
  'Dirección de Arte',
  'Corrección de Color',
  'Postproducción',
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Ir al inicio de Chupamirto Producciones">
          <img src="/source-assets/images/chupamirto_producciones_logo_cuerpo.svg" alt="Chupamirto Producciones" />
        </a>

        <nav className="nav">
          <a href="#quienes">¿Quiénes somos?</a>
          <a href="#servicios">Proyectos</a>
          <a href="#equipo">Equipo</a>
          <a href="#adicionales">Servicios Adicionales</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="inicio">
          <div className="hero-copy reveal">
            <p className="eyebrow">Productora audiovisual mexicana</p>
            <h1>Chupamirto Producciones</h1>
            <p className="lead">
              Somos una empresa mexicana de producción audiovisual con una década de trayectoria en el negocio del cine y la televisión.
              Hemos adquirido amplia experiencia y alta eficiencia en producción, filmación, post-producción de audiovisuales,
              películas, videoclips musicales, campañas de posicionamiento y piezas especiales.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="https://www.youtube.com/watch?v=I3k-HH7Iac0" target="_blank" rel="noreferrer">
                Ver Demo Reel
              </a>
              <a className="button secondary" href="https://wa.me/5215561117954?text=Me%20gustar%C3%ADa%20pedir%20informes" target="_blank" rel="noreferrer">
                Pedir informes
              </a>
            </div>
          </div>

          <div className="hero-visual reveal delay-1">
            <div className="floating-card main-shot">
              <img src="/source-assets/imgs/chuparmito_producciones/chupamirto_producciones_34.JPG" alt="Rodaje de Chupamirto Producciones" />
            </div>
            <div className="floating-card accent-shot top">
              <img src="/source-assets/imgs/chuparmito_producciones/chupamirto_producciones_12.JPG" alt="Behind the scenes" />
            </div>
            <div className="floating-card accent-shot bottom">
              <img src="/source-assets/imgs/chuparmito_producciones/chupamirto_producciones_25.JPG" alt="Equipo técnico en producción" />
            </div>
          </div>
        </section>

        <section className="info-grid section" id="quienes">
          <div className="section-heading reveal">
            <p className="eyebrow">¿Quiénes somos?</p>
            <h2>Creatividad potente y vanguardista con altos estándares de calidad</h2>
          </div>

          <div className="text-card reveal delay-1">
            <p>
              Lo anterior siempre con los más altos estándares de calidad y profesionalismo, teniendo como prioridad un desarrollo
              creativo potente y vanguardista, acompañado de una línea artística-técnica sofisticada y adecuada al objetivo de cada proyecto.
            </p>
          </div>

          <div className="text-card reveal delay-2">
            <h3>Misión</h3>
            <p>
              Nuestro interés como cineastas y creativos mexicanos es seguir creciendo, aportando valor y fortaleciendo el resurgimiento del Cine Mexicano de calidad,
              en el que se vuelva a situar lo cualitativo y lo artístico como vanguardia de lo superfluo.
            </p>
            <p>
              Motivados por esta convicción, también brindamos a nuestros clientes y socios comerciales servicios de alta calidad para la creación de proyectos audiovisuales
              que generen un gran impacto en sus consumidores finales de una forma eficiente, eficaz, creativa y artística.
            </p>
          </div>

          <div className="text-card reveal delay-3">
            <h3>Visión</h3>
            <p>
              Mediante la sinergia de profesionales con muchos años de experiencia y jóvenes con ideas innovadoras buscamos obtener un producto de excelente calidad
              que cumpla con las necesidades del mundo actual y de nuestros clientes.
            </p>
          </div>
        </section>

        <section className="gallery-section section">
          <div className="section-heading reveal">
            <p className="eyebrow">Galería</p>
            <h2>La misma esencia visual, ahora en una experiencia más cinematográfica</h2>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((item, index) => (
              <article className={`gallery-card reveal delay-${(index % 3) + 1}`} key={item.image}>
                <img src={item.image} alt={item.title} loading="lazy" />
              </article>
            ))}
          </div>
        </section>

        <section className="projects-section section" id="servicios">
          <div className="section-heading reveal">
            <p className="eyebrow">Proyectos y Colaboraciones</p>
            <h2>Selección de piezas audiovisuales publicadas en su sitio actual</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className={`project-card reveal delay-${(index % 3) + 1}`} key={project.embed}>
                <div className="video-frame">
                  <iframe
                    src={project.embed}
                    title={project.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <h3>{project.title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="equipment-section section" id="equipo">
          <div className="section-heading reveal">
            <p className="eyebrow">Equipo</p>
            <h2>Contamos con el equipo más reciente y de mejor calidad. ¡Al mejor precio!</h2>
            <p className="section-copy">
              Ver lista de equipo y categorías principales tal como aparecen en el sitio original, reorganizadas en una presentación más clara y moderna.
            </p>
          </div>

          <div className="equipment-grid">
            {equipmentCategories.map((category, index) => (
              <article className={`equipment-card reveal delay-${(index % 3) + 1}`} key={category.name}>
                <img src={category.image} alt={category.name} loading="lazy" />
                <div className="equipment-content">
                  <h3>{category.name}</h3>
                  <ul>
                    {category.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="services-section section" id="adicionales">
          <div className="section-heading reveal">
            <p className="eyebrow">Servicios Adicionales</p>
            <h2>Todo el soporte creativo y técnico que el sitio actual comunica</h2>
          </div>
          <div className="services-cloud reveal delay-1">
            {additionalServices.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </section>

        <section className="contact-section section" id="contacto">
          <div className="contact-card reveal">
            <p className="eyebrow">Contacto</p>
            <h2>Hablemos de tu próximo proyecto audiovisual</h2>
            <div className="contact-links">
              <a href="tel:+5215561117954">Tel &amp; WA: +52 1 55 6111 7954</a>
              <a href="mailto:contacto@chupamirtoproducciones.com">contacto@chupamirtoproducciones.com</a>
            </div>
            <div className="social-links">
              <a href="https://www.facebook.com/chupamirtoproducciones" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://instagram.com/chupamirtoproducciones" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.youtube.com/channel/UCplahpUDk8Fs2PwBRE60HCw" target="_blank" rel="noreferrer">YouTube</a>
              <a href="https://vimeo.com/chupamirtoproducciones" target="_blank" rel="noreferrer">Vimeo</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
