import { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Truck, 
  ShieldCheck, 
  MessageCircle, 
  ChevronRight, 
  Globe, 
  Package, 
  ArrowRight,
  CheckCircle2,
  Instagram,
  Menu
} from 'lucide-react';
import { motion } from 'framer-motion';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container flex justify-between items-center" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '0.5rem', borderRadius: '0.5rem' }}>
            <ShoppingBag size={24} />
          </div>
          <span style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-display)', color: isScrolled ? 'var(--primary)' : 'var(--text-main)' }}>
            Smart<span style={{ color: 'var(--secondary)' }}>Buy</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md-flex" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#como-funciona" style={{ fontWeight: 500 }}>Cómo Funciona</a>
          <a href="#tiendas" style={{ fontWeight: 500 }}>Tiendas</a>
          <a href="#beneficios" style={{ fontWeight: 500 }}>Beneficios</a>
          <a href="https://wa.me/595987294206" target="_blank" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}>
            Cotizar Ahora
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md-hidden" style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none' }} onClick={() => {}}>
          <Menu size={28} />
        </button>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          .hidden { display: none !important; }
          .md-hidden { display: block !important; }
        }
        @media (min-width: 769px) {
          .md-flex { display: flex !important; }
        }
        .fixed { position: fixed; }
        .top-0 { top: 0; }
        .left-0 { left: 0; }
        .right-0 { right: 0; }
        .z-50 { z-index: 50; }
        .bg-white { background-color: white; }
        .bg-transparent { background-color: transparent; }
        .shadow-md { box-shadow: var(--shadow-md); }
        .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
        .py-5 { padding-top: 1.25rem; padding-bottom: 1.25rem; }
      `}</style>
    </nav>
  );
};

const Hero = () => (
  <section style={{ 
    paddingTop: '8rem', 
    paddingBottom: '5rem', 
    background: 'linear-gradient(135deg, #f0f4ff 0%, #ffffff 100%)',
    position: 'relative',
    overflow: 'hidden'
  }}>
    <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span style={{ 
          backgroundColor: 'rgba(0, 71, 171, 0.1)', 
          color: 'var(--primary)', 
          padding: '0.5rem 1rem', 
          borderRadius: '2rem', 
          fontSize: '0.875rem', 
          fontWeight: 700,
          marginBottom: '1.5rem',
          display: 'inline-block'
        }}>
          COMPRAS INTERNACIONALES SIN LÍMITES
        </span>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
          Traemos tus pedidos del <span style={{ color: 'var(--primary)' }}>Mundo</span> a <span style={{ color: 'var(--secondary)' }}>Paraguay</span>
        </h1>
        <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '500px' }}>
          Comprá en Amazon, Shein, Shopee, AliExpress y eBay. Nosotros nos encargamos de la logística para que lo recibas en la puerta de tu casa.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="https://wa.me/595987294206" target="_blank" className="btn btn-primary" style={{ gap: '0.5rem', padding: '1rem 2rem' }}>
            Hacer un Pedido <ChevronRight size={20} />
          </a>
          <a href="#como-funciona" className="btn" style={{ border: '1px solid #e2e8f0', backgroundColor: 'white' }}>
            ¿Cómo funciona?
          </a>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ position: 'relative' }}
      >
        <div style={{ 
          backgroundColor: 'var(--primary)', 
          borderRadius: '2rem', 
          width: '100%', 
          aspectRatio: '1/1',
          maxHeight: '500px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0, 71, 171, 0.2)'
        }}>
           <div style={{ color: 'white', textAlign: 'center', padding: '2rem' }}>
              <Package size={120} strokeWidth={1} style={{ marginBottom: '1rem', opacity: 0.8 }} />
              <h3 style={{ fontSize: '2rem' }}>Smart Buy Logística</h3>
              <p style={{ opacity: 0.8 }}>Miami • Madrid • China</p>
           </div>
        </div>
        
        {/* Floating Badges */}
        <div style={{ 
          position: 'absolute', top: '10%', right: '-5%', 
          backgroundColor: 'white', padding: '1rem', borderRadius: '1rem', 
          boxShadow: 'var(--shadow-lg)', display: 'flex', alignItems: 'center', gap: '0.75rem'
        }}>
          <CheckCircle2 color="var(--accent)" />
          <span style={{ fontWeight: 600 }}>100% Seguro</span>
        </div>
      </motion.div>
    </div>
  </section>
);

const Steps = () => {
  const steps = [
    {
      title: "Comprás Online",
      desc: "Elegí tus productos favoritos en cualquier tienda del mundo.",
      icon: <Globe size={32} />
    },
    {
      title: "Enviás a nuestra Casilla",
      desc: "Usás nuestra dirección en Miami o España como destino.",
      icon: <Package size={32} />
    },
    {
      title: "Recibís en Paraguay",
      desc: "Nos encargamos de todo y te lo entregamos rápido y seguro.",
      icon: <Truck size={32} />
    }
  ];

  return (
    <section id="como-funciona" className="section-padding">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Proceso Simple y Transparente</h2>
          <p style={{ color: 'var(--text-muted)' }}>Traer tus compras nunca fue tan fácil</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {steps.map((step, i) => (
            <div key={i} style={{ 
              padding: '2.5rem', 
              backgroundColor: 'white', 
              borderRadius: '1.5rem', 
              boxShadow: 'var(--shadow-sm)',
              textAlign: 'center',
              border: '1px solid #f1f5f9',
              position: 'relative'
            }}>
              <div style={{ 
                width: '70px', height: '70px', backgroundColor: 'rgba(0, 71, 171, 0.05)', 
                color: 'var(--primary)', borderRadius: '1.25rem', display: 'flex', 
                alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem'
              }}>
                {step.icon}
              </div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>{step.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{step.desc}</p>
              {i < 2 && (
                <div className="hidden lg-block" style={{ position: 'absolute', top: '50%', right: '-1rem', transform: 'translateY(-50%)', color: '#cbd5e1' }}>
                  <ArrowRight size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (min-width: 1024px) {
          .lg-block { display: block !important; }
        }
      `}</style>
    </section>
  );
};

const Stores = () => {
  const stores = ["Amazon", "Shein", "AliExpress", "Shopee", "eBay", "Zara", "Apple", "Walmart"];
  
  return (
    <section id="tiendas" style={{ backgroundColor: 'var(--primary)', padding: '4rem 0', overflow: 'hidden' }}>
      <div className="container">
        <p style={{ color: 'white', textAlign: 'center', marginBottom: '2rem', opacity: 0.8, fontWeight: 600, letterSpacing: '0.1em' }}>
          COMPRÁ EN TUS TIENDAS FAVORITAS
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', opacity: 0.9 }}>
          {stores.map(store => (
            <span key={store} style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-display)' }}>
              {store}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => (
  <section id="beneficios" className="section-padding" style={{ backgroundColor: 'white' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>¿Por qué elegir <span style={{ color: 'var(--primary)' }}>Smart Buy</span>?</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              { title: "Seguridad Garantizada", desc: "Tus paquetes están asegurados desde que llegan a nuestra casilla hasta tu casa." },
              { title: "Rapidez en Entregas", desc: "Vuelos semanales para que no tengas que esperar meses por tus compras." },
              { title: "Atención Personalizada", desc: "Te asesoramos en cada paso de tu compra para que no tengas dudas." },
              { title: "Consolidación de Paquetes", desc: "Agrupamos tus compras para que ahorres en costos de envío." }
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ color: 'var(--secondary)', flexShrink: 0, marginTop: '0.2rem' }}>
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{item.title}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ backgroundColor: '#f8fafc', padding: '3rem', borderRadius: '2rem', border: '1px solid #e2e8f0' }}>
          <ShieldCheck size={60} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Garantía de Satisfacción</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Nos enorgullecemos de ofrecer el mejor servicio de Courier en Paraguay. Miles de clientes ya confían en nosotros para sus importações.
          </p>
          <a href="https://www.instagram.com/smartbuypy/" target="_blank" className="btn" style={{ backgroundColor: 'var(--text-main)', color: 'white', gap: '0.5rem' }}>
            <Instagram size={20} /> Ver nuestro Instagram
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer style={{ backgroundColor: '#0f172a', color: 'white', padding: '4rem 0 2rem' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <div style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '0.4rem', borderRadius: '0.4rem' }}>
              <ShoppingBag size={20} />
            </div>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, fontFamily: 'var(--font-display)' }}>
              Smart<span style={{ color: 'var(--secondary)' }}>Buy</span>
            </span>
          </div>
          <p style={{ opacity: 0.6, fontSize: '0.9rem', lineHeight: 1.6 }}>
            Tu aliado estratégico para traer tus compras del exterior a Paraguay de forma rápida y segura.
          </p>
        </div>
        
        <div>
          <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Enlaces Rápidos</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', opacity: 0.7, fontSize: '0.9rem' }}>
            <li><a href="#como-funciona">Cómo Funciona</a></li>
            <li><a href="#tiendas">Tiendas Populares</a></li>
            <li><a href="#beneficios">Nuestros Beneficios</a></li>
            <li><a href="https://wa.me/595987294206">Contacto</a></li>
          </ul>
        </div>
        
        <div>
          <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Contacto</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', opacity: 0.7, fontSize: '0.9rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MessageCircle size={18} /> +595 987 294206
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Instagram size={18} /> @smartbuypy
            </li>
          </ul>
        </div>
      </div>
      
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', opacity: 0.5, fontSize: '0.8rem' }}>
        <p>© {new Date().getFullYear()} Smart Buy Paraguay. Todos los derechos reservados.</p>
        <p style={{ marginTop: '0.5rem' }}>Desarrollado por AXIS - Soluciones Digitales</p>
      </div>
    </div>
  </footer>
);

const WhatsAppFloat = () => (
  <a 
    href="https://wa.me/595987294206" 
    target="_blank" 
    style={{ 
      position: 'fixed', 
      bottom: '2rem', 
      right: '2rem', 
      backgroundColor: '#25D366', 
      color: 'white', 
      width: '60px', 
      height: '60px', 
      borderRadius: '50%', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
      zIndex: 100,
      transition: 'transform 0.3s'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
  >
    <MessageCircle size={32} fill="white" />
  </a>
);

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stores />
        <Steps />
        <Benefits />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;
