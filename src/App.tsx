import { useEffect, useMemo, useRef, useState } from 'react'
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
  { title: 'Producción en set 07', image: '/source-assets/imgs/chuparmito_producciones/chupamirto_producciones_34.JPG' },
  { title: 'Producción en set 08', image: '/source-assets/imgs/chuparmito_producciones/chupamirto_producciones_37.JPG' },
]

const projects: ProjectCard[] = [
  { title: 'Demo Reel', embed: 'https://www.youtube.com/embed/I3k-HH7Iac0' },
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

const quickQuestions = [
  'Quiero cotizar una producción',
  'Necesito renta de equipo',
  'Busco postproducción',
]

const whatsappBaseUrl = 'https://wa.me/5215561117954'
const defaultWhatsappMessage = 'Hola, me gustaría pedir informes sobre Chupamirto Producciones.'

function HummingbirdLogo({ alt, className = '' }: { alt: string; className?: string }) {
  return (
    <div className={`hummingbird-logo ${className}`.trim()}>
      <img className="hummingbird-logo__image" src="/source-assets/images/chupamirto_logo_transparent.png" alt={alt} />
    </div>
  )
}

type ScrollCarouselProps<T> = {
  items: T[]
  className: string
  trackClassName: string
  renderItem: (item: T, index: number) => React.ReactNode
  ariaLabel: string
}

function ScrollCarousel<T>({ items, className, trackClassName, renderItem, ariaLabel }: ScrollCarouselProps<T>) {
  const trackRef = useRef<HTMLDivElement | null>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  useEffect(() => {
    const element = trackRef.current
    if (!element) return

    const updateScrollState = () => {
      const maxScrollLeft = element.scrollWidth - element.clientWidth
      setCanScrollLeft(element.scrollLeft > 8)
      setCanScrollRight(maxScrollLeft - element.scrollLeft > 8)
    }

    updateScrollState()
    element.addEventListener('scroll', updateScrollState, { passive: true })

    const resizeObserver = new ResizeObserver(updateScrollState)
    resizeObserver.observe(element)
    Array.from(element.children).forEach((child) => resizeObserver.observe(child))
    window.addEventListener('resize', updateScrollState)

    return () => {
      element.removeEventListener('scroll', updateScrollState)
      resizeObserver.disconnect()
      window.removeEventListener('resize', updateScrollState)
    }
  }, [items])

  const scrollByViewport = (direction: 'left' | 'right') => {
    const element = trackRef.current
    if (!element) return

    const delta = Math.max(element.clientWidth * 0.82, 280) * (direction === 'left' ? -1 : 1)
    element.scrollBy({ left: delta, behavior: 'smooth' })
  }

  return (
    <div className={className}>
      <button
        type="button"
        className="carousel-control carousel-control--left"
        onClick={() => scrollByViewport('left')}
        aria-label={`Desplazar ${ariaLabel} hacia la izquierda`}
        disabled={!canScrollLeft}
      >
        ‹
      </button>
      <div ref={trackRef} className={trackClassName} tabIndex={0} aria-label={ariaLabel} style={{ touchAction: 'pan-x' }}>
        {items.map((item, index) => renderItem(item, index))}
      </div>
      <button
        type="button"
        className="carousel-control carousel-control--right"
        onClick={() => scrollByViewport('right')}
        aria-label={`Desplazar ${ariaLabel} hacia la derecha`}
        disabled={!canScrollRight}
      >
        ›
      </button>
    </div>
  )
}

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isEquipmentOpen, setIsEquipmentOpen] = useState(false)
  const [chatMessage, setChatMessage] = useState(defaultWhatsappMessage)

  const whatsappHref = useMemo(
    () => `${whatsappBaseUrl}?text=${encodeURIComponent(chatMessage || defaultWhatsappMessage)}`,
    [chatMessage],
  )

  const openChatWithPrompt = (message: string) => {
    setChatMessage(`Hola, ${message.toLowerCase()}. ¿Me comparten información, por favor?`)
    setIsChatOpen(true)
  }

  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Ir al inicio de Chupamirto Producciones">
          <HummingbirdLogo alt="Chupamirto Producciones" />
        </a>

        <nav className="nav">
          <a href="#quienes">¿Quiénes somos?</a>
          <a href="#galeria">Galería</a>
          <a href="#servicios">Proyectos</a>
          <a href="#equipo">Equipo</a>
          <a href="#adicionales">Servicios adicionales</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="inicio">
          <video
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/source-assets/imgs/chuparmito_producciones/chupamirto_producciones_34.JPG"
          >
            <source src="/source-assets/video/chupamirto_producciones_demoreel_2018.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" />

          <div className="hero-copy reveal">
            <p className="eyebrow">Productora audiovisual mexicana</p>
            <h1>Chupamirto Producciones</h1>
            <p className="lead">
              Producción, filmación y postproducción de audiovisuales con una línea artística-técnica sofisticada,
              pensada para cine, televisión, videoclips, campañas publicitarias y piezas especiales.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="https://www.youtube.com/watch?v=I3k-HH7Iac0" target="_blank" rel="noreferrer">
                Ver Demo Reel
              </a>
              <button className="button secondary" type="button" onClick={() => setIsChatOpen((value) => !value)}>
                Pedir informes
              </button>
            </div>
          </div>

          <div className="hero-badge reveal delay-2">
            <HummingbirdLogo alt="Logotipo Chupamirto Producciones" className="hero-mark" />
            <p>Inspirado en la identidad visual original: azul profundo, amarillo vibrante, acentos magenta y el colibrí animado en portada.</p>
          </div>
        </section>

        <section className="info-grid section section-blue" id="quienes">
          <div className="section-heading reveal">
            <p className="eyebrow">¿Quiénes somos?</p>
            <h2>Creatividad potente y vanguardista con altos estándares de calidad</h2>
          </div>

          <div className="text-card reveal delay-1">
            <p>
              Somos una empresa mexicana de producción audiovisual con una década de trayectoria en el negocio del cine y la televisión.
              Hemos adquirido amplia experiencia y alta eficiencia en producción, filmación, postproducción de audiovisuales,
              películas, videoclips musicales, campañas de posicionamiento y piezas especiales.
            </p>
          </div>

          <div className="text-card reveal delay-2">
            <h3>Misión</h3>
            <p>
              Nuestro interés como cineastas y creativos mexicanos es seguir creciendo, aportando valor y fortaleciendo el resurgimiento del cine mexicano de calidad,
              situando lo cualitativo y lo artístico como vanguardia de cada proyecto.
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

        <section className="gallery-section section" id="galeria">
          <div className="section-heading reveal">
            <p className="eyebrow">Galería</p>
            <h2>Imágenes reales del sitio y de sus producciones, en un carrusel horizontal</h2>
          </div>
          <ScrollCarousel
            items={galleryImages}
            className="carousel-shell"
            trackClassName="gallery-scroller"
            ariaLabel="galería de imágenes"
            renderItem={(item, index) => (
              <article className={`gallery-card reveal delay-${(index % 3) + 1}`} key={item.image}>
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="gallery-card__caption">
                  <span>{item.title}</span>
                </div>
              </article>
            )}
          />
        </section>

        <section className="projects-section section section-pink" id="servicios">
          <div className="section-heading reveal">
            <p className="eyebrow">Proyectos y colaboraciones</p>
            <h2>Videos desplazables, tomados de sus piezas publicadas</h2>
          </div>
          <ScrollCarousel
            items={projects}
            className="carousel-shell"
            trackClassName="projects-scroller"
            ariaLabel="galería de videos"
            renderItem={(project, index) => (
              <article className={`project-card glass-card reveal delay-${(index % 3) + 1}`} key={project.embed}>
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
            )}
          />
        </section>

        <section className="equipment-section section section-green" id="equipo">
          <div className="section-heading reveal equipment-section__header">
            <div>
              <p className="eyebrow">Equipo</p>
              <h2>Contamos con el equipo más reciente y de mejor calidad. ¡Al mejor precio!</h2>
              <p className="section-copy">
                Ver lista de equipo y categorías principales tal como aparecen en el sitio original, reorganizadas en una presentación más clara.
              </p>
            </div>
            <button
              type="button"
              className="equipment-section__toggle"
              onClick={() => setIsEquipmentOpen((value) => !value)}
              aria-expanded={isEquipmentOpen}
            >
              <span>{isEquipmentOpen ? 'Ocultar equipo' : 'Ver equipo'}</span>
              <strong>{isEquipmentOpen ? '−' : '+'}</strong>
            </button>
          </div>

          {isEquipmentOpen && (
            <div className="equipment-grid">
              {equipmentCategories.map((category, index) => (
                <article className={`equipment-card glass-card reveal delay-${(index % 3) + 1}`} key={category.name}>
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
          )}
        </section>

        <section className="services-section section section-purple" id="adicionales">
          <div className="section-heading reveal">
            <p className="eyebrow">Servicios adicionales</p>
            <h2>Todo el soporte creativo y técnico que comunica su marca original</h2>
          </div>
          <div className="services-cloud reveal delay-1">
            {additionalServices.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </section>

        <section className="contact-section section section-yellow" id="contacto">
          <div className="contact-card reveal">
            <p className="eyebrow">Contacto</p>
            <h2>Hablemos de tu próximo proyecto audiovisual</h2>
            <div className="contact-links">
              <a href="tel:+521****7954">Tel &amp; WA: +52 1 55 6111 7954</a>
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

      <div className={`floating-chat ${isChatOpen ? 'floating-chat--open' : ''}`}>
        <div className={`floating-chat__panel ${isChatOpen ? 'floating-chat__panel--visible' : ''}`} aria-hidden={!isChatOpen}>
          <p className="floating-chat__eyebrow">WhatsApp</p>
          <h3>Cuéntanos qué necesitas</h3>
          <p>Abre una conversación rápida y te llevamos directo a WhatsApp.</p>
          <div className="floating-chat__chips">
            {quickQuestions.map((question) => (
              <button key={question} type="button" onClick={() => openChatWithPrompt(question)}>
                {question}
              </button>
            ))}
          </div>
          <label className="floating-chat__field">
            <span>Mensaje</span>
            <textarea value={chatMessage} onChange={(event) => setChatMessage(event.target.value)} rows={4} />
          </label>
          <div className="floating-chat__actions">
            <button type="button" className="button ghost" onClick={() => setIsChatOpen(false)}>
              Cerrar
            </button>
            <a className="button primary" href={whatsappHref} target="_blank" rel="noreferrer">
              Ir a WhatsApp
            </a>
          </div>
        </div>

        <button
          type="button"
          className="floating-chat__toggle"
          onClick={() => setIsChatOpen((value) => !value)}
          aria-expanded={isChatOpen}
          aria-label="Abrir chat de WhatsApp"
        >
          <span className="floating-chat__toggle-badge" aria-hidden="true">
            WA
          </span>
          <span className="floating-chat__toggle-label">{isChatOpen ? 'Cerrar' : 'WhatsApp'}</span>
        </button>
      </div>
    </div>
  )
}

export default App
