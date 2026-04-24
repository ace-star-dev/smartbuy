import { useState, useEffect } from 'react';
import { 
  Truck, 
  ShieldCheck, 
  MessageCircle, 
  Globe, 
  Package, 
  CheckCircle2,
  Camera,
  Menu,
  X,
  Clock,
  MapPin,
  Zap,
  ShoppingBag
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Types ---
interface Step {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface Benefit {
  title: string;
  desc: string;
}

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Cómo Funciona", href: "#como-funciona" },
    { name: "Tiendas", href: "#tiendas" },
    { name: "Beneficios", href: "#beneficios" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img 
            src="/logo.png" 
            alt="Smart Buy Logo" 
            style={{ height: isScrolled ? '45px' : '55px', width: 'auto', objectFit: 'contain', transition: 'all 0.5s ease' }} 
          />
          <span style={{ 
            fontSize: '1.25rem', 
            fontWeight: 800, 
            fontFamily: 'var(--font-display)', 
            color: isScrolled ? 'var(--primary)' : 'var(--text-main)',
            letterSpacing: '-0.02em'
          }}>
            Smart<span style={{ color: 'var(--secondary)' }}>Buy</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md-flex" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="nav-link-hover" style={{ fontWeight: 500, color: 'var(--text-main)', fontSize: '0.9375rem' }}>
              {link.name}
            </a>
          ))}
          <a href="https://wa.me/595987294206" target="_blank" className="btn btn-primary" style={{ boxShadow: '0 10px 20px -5px rgba(0, 71, 171, 0.3)' }}>
            Cotizar Ahora
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md-hidden" 
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-main)' }} 
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{ 
              position: 'fixed', inset: 0, background: 'white', zIndex: 100, 
              display: 'flex', flexDirection: 'column', padding: '2rem' 
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <img src="/logo.png" alt="Smart Buy" style={{ height: '40px' }} />
                <span style={{ fontWeight: 800, fontSize: '1.25rem' }}>Smart<span style={{ color: 'var(--secondary)' }}>Buy</span></span>
              </div>
              <button style={{ background: 'none', border: 'none' }} onClick={() => setIsMobileMenuOpen(false)}>
                <X size={32} />
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'center' }}>
              {navLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  style={{ fontSize: '1.5rem', fontWeight: 600 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://wa.me/595987294206" 
                target="_blank" 
                className="btn btn-primary" 
                style={{ padding: '1rem', fontSize: '1.125rem' }}
              >
                Cotizar Ahora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <style>{`
        .nav-link-hover { position: relative; }
        .nav-link-hover::after {
          content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 2px;
          background: var(--primary); transition: width 0.3s ease;
        }
        .nav-link-hover:hover::after { width: 100%; }
        @media (max-width: 768px) {
          .hidden { display: none !important; }
          .md-hidden { display: block !important; }
        }
        @media (min-width: 769px) {
          .md-flex { display: flex !important; }
          .md-hidden { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

const Hero = () => (
  <section style={{ 
    paddingTop: '10rem', 
    paddingBottom: '6rem', 
    background: 'radial-gradient(circle at top right, #f0f7ff 0%, #ffffff 100%)',
    position: 'relative',
    overflow: 'hidden'
  }}>
    {/* Abstract Background Shapes */}
    <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '40%', aspectRatio: '1/1', background: 'rgba(0, 71, 171, 0.03)', borderRadius: '50%', zIndex: 0 }}></div>
    <div style={{ position: 'absolute', bottom: '10%', left: '-5%', width: '20%', aspectRatio: '1/1', background: 'rgba(255, 140, 0, 0.03)', borderRadius: '50%', zIndex: 0 }}></div>

    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'white', padding: '0.5rem 1.25rem', borderRadius: '2rem', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', marginBottom: '1.5rem', border: '1px solid #f1f5f9' }}>
            <span style={{ width: '8px', height: '8px', background: 'var(--accent)', borderRadius: '50%' }}></span>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.05em' }}>PERSONAL SHOPPER & LOGÍSTICA</span>
          </div>
          
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: 1.1, color: 'var(--text-main)', letterSpacing: '-0.03em' }}>
            Compramos en el <span style={{ color: 'var(--primary)', position: 'relative' }}>Mundo<svg style={{ position: 'absolute', bottom: '-8px', left: 0, width: '100%' }} viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="var(--primary)" strokeWidth="2" opacity="0.3"/></svg></span> y enviamos a <span style={{ color: 'var(--secondary)' }}>Paraguay</span>
          </h1>
          
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '540px', lineHeight: 1.6 }}>
            Olvidate de las complicaciones. Envianos los links de lo que querés y nosotros nos encargamos de la compra, el flete y la entrega en tu puerta.
          </p>
          
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
            <a href="https://wa.me/595987294206" target="_blank" className="btn btn-primary" style={{ gap: '0.75rem', padding: '1.125rem 2.5rem', fontSize: '1rem', borderRadius: '1rem' }}>
              Cotizar por WhatsApp <MessageCircle size={20} fill="white" />
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ display: 'flex', marginLeft: '0.5rem' }}>
                {[1,2,3].map(i => (
                  <div key={i} style={{ width: '35px', height: '35px', borderRadius: '50%', border: '2px solid white', background: '#e2e8f0', marginLeft: '-12px', overflow: 'hidden' }}>
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
                  </div>
                ))}
              </div>
              <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)' }}>+2,000 clientes felices</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ position: 'relative' }}
        >
          {/* Main Visual Card */}
          <div style={{ 
            backgroundColor: 'var(--primary)', 
            borderRadius: '3rem', 
            width: '100%', 
            aspectRatio: '0.9/1',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            boxShadow: '0 30px 60px -15px rgba(0, 71, 171, 0.4)',
            overflow: 'hidden'
          }}>
             <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%)' }}></div>
             <motion.img 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                src="/logo.png" 
                alt="Smart Buy Logo Large" 
                style={{ width: '60%', height: 'auto', objectFit: 'contain', marginBottom: '2.5rem', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.2))' }} 
              />
             <div style={{ color: 'white', textAlign: 'center', position: 'relative' }}>
                <h3 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Smart Buy</h3>
                <p style={{ opacity: 0.9, fontSize: '1.1rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500 }}>Tu Shopper Global</p>
             </div>
          </div>
          
          {/* Floating Floating Elements */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ 
              position: 'absolute', top: '10%', right: '-8%', 
              backgroundColor: 'white', padding: '1.25rem', borderRadius: '1.25rem', 
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '1rem',
              zIndex: 10, border: '1px solid #f1f5f9'
            }}
          >
            <div style={{ background: 'rgba(0, 200, 83, 0.1)', padding: '0.5rem', borderRadius: '0.75rem' }}>
              <CheckCircle2 color="var(--accent)" size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>SERVICIO</div>
              <div style={{ fontWeight: 700, color: 'var(--text-main)' }}>Todo Incluido</div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            style={{ 
              position: 'absolute', bottom: '15%', left: '-8%', 
              backgroundColor: 'white', padding: '1.25rem', borderRadius: '1.25rem', 
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '1rem',
              zIndex: 10, border: '1px solid #f1f5f9'
            }}
          >
            <div style={{ background: 'rgba(255, 140, 0, 0.1)', padding: '0.5rem', borderRadius: '0.75rem' }}>
              <Zap color="var(--secondary)" size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>ENTREGA</div>
              <div style={{ fontWeight: 700, color: 'var(--text-main)' }}>Express</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Stores = () => {
  const stores = ["Amazon", "Shein", "AliExpress", "Shopee", "eBay", "Zara", "Apple", "Walmart", "H&M", "Nike", "Best Buy"];
  
  return (
    <section id="tiendas" style={{ backgroundColor: 'var(--primary)', padding: '3rem 0', overflow: 'hidden', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '150px', background: 'linear-gradient(to right, var(--primary), transparent)', zIndex: 2 }}></div>
      <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '150px', background: 'linear-gradient(to left, var(--primary), transparent)', zIndex: 2 }}></div>
      
      <div className="container">
        <p style={{ color: 'white', textAlign: 'center', marginBottom: '2.5rem', opacity: 0.7, fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          COMPRÁ EN LAS MEJORES TIENDAS DEL MUNDO
        </p>
        
        <div className="marquee">
          <div className="marquee-content">
            {[...stores, ...stores].map((store, i) => (
              <span key={i} style={{ color: 'white', fontSize: '1.75rem', fontWeight: 800, fontFamily: 'var(--font-display)', margin: '0 2rem', whiteSpace: 'nowrap' }}>
                {store}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        .marquee { overflow: hidden; display: flex; width: 100%; }
        .marquee-content {
          display: flex;
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

const Steps = () => {
  const steps: Step[] = [
    {
      title: "Envianos tus links",
      desc: "Elegí tus productos favoritos y compartinos los links directamente por WhatsApp.",
      icon: <Globe size={32} />
    },
    {
      title: "Recibí tu cotización",
      desc: "Te enviamos el costo final todo incluido (producto + flete + gestión) en minutos.",
      icon: <Clock size={32} />
    },
    {
      title: "Compra & Seguimiento",
      desc: "Realizamos la compra y te mantenemos al tanto del estado de tu paquete en todo momento.",
      icon: <Package size={32} />
    },
    {
      title: "Entrega en Paraguay",
      desc: "Recibí tu compra rápido y seguro en la comodidad de tu casa o donde prefieras.",
      icon: <Truck size={32} />
    }
  ];

  return (
    <section id="como-funciona" className="section-padding" style={{ background: '#fcfcfd' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>Proceso Simple y <span style={{ color: 'var(--primary)' }}>Transparente</span></h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--secondary)', margin: '0 auto 1.5rem', borderRadius: '2px' }}></div>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem' }}>Traer tus compras nunca fue tan fácil. Nosotros hacemos el trabajo pesado.</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2.5rem' }}>
          {steps.map((step, i) => (
            <motion.div 
              whileHover={{ y: -10 }}
              key={i} 
              style={{ 
                padding: '3rem 2rem', 
                backgroundColor: 'white', 
                borderRadius: '2rem', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                textAlign: 'center',
                border: '1px solid #f1f5f9',
                position: 'relative'
              }}
            >
              <div style={{ 
                width: '80px', height: '80px', backgroundColor: 'rgba(0, 71, 171, 0.05)', 
                color: 'var(--primary)', borderRadius: '1.5rem', display: 'flex', 
                alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem'
              }}>
                {step.icon}
              </div>
              <div style={{ position: 'absolute', top: '1.5rem', right: '2rem', fontSize: '3rem', fontWeight: 900, color: '#f1f5f9', zIndex: 0 }}>0{i+1}</div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.35rem', position: 'relative', zIndex: 1 }}>{step.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6, position: 'relative', zIndex: 1 }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits: Benefit[] = [
    { title: "Seguridad Garantizada", desc: "Tus paquetes están asegurados desde que llegan a nuestra casilla hasta tu casa." },
    { title: "Rapidez en Entregas", desc: "Vuelos semanales para que no tengas que esperar meses por tus compras." },
    { title: "Atención Personalizada", desc: "Te asesoramos en cada paso de tu compra para que no tengas dudas." },
    { title: "Consolidación de Paquetes", desc: "Agrupamos tus compras para que ahorres en costos de envío." }
  ];

  return (
    <section id="beneficios" className="section-padding" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '2rem', letterSpacing: '-0.02em' }}>¿Por qué elegir <span style={{ color: 'var(--primary)' }}>Smart Buy</span>?</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {benefits.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '1.25rem' }}>
                  <div style={{ backgroundColor: 'rgba(255, 140, 0, 0.1)', color: 'var(--secondary)', width: '48px', height: '48px', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 700 }}>{item.title}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div style={{ position: 'relative' }}>
            <div style={{ backgroundColor: '#0f172a', padding: '4rem 3rem', borderRadius: '3rem', color: 'white', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-20%', right: '-20%', width: '60%', aspectRatio: '1/1', background: 'var(--primary)', borderRadius: '50%', opacity: 0.1, filter: 'blur(50px)' }}></div>
              
              <ShieldCheck size={64} color="var(--primary)" style={{ marginBottom: '2rem' }} />
              <h3 style={{ fontSize: '2rem', marginBottom: '1.25rem', fontFamily: 'var(--font-display)' }}>Tu confianza es nuestra prioridad</h3>
              <p style={{ opacity: 0.7, marginBottom: '2.5rem', fontSize: '1.1rem', lineHeight: 1.7 }}>
                Somos líderes en servicios de Courier y Personal Shopper en Paraguay. Miles de clientes importan con nosotros cada mes de forma segura.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a href="https://www.instagram.com/smartbuypy/" target="_blank" className="btn" style={{ backgroundColor: 'white', color: '#0f172a', width: '100%', gap: '0.75rem', padding: '1rem' }}>
                  <Camera size={20} /> Ver nuestro Instagram
                </a>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.875rem', opacity: 0.6 }}>
                  <Clock size={14} /> Atención de Lun a Vie: 08:00 - 18:00
                </div>
              </div>
            </div>
            
            {/* Trust badge */}
            <div style={{ position: 'absolute', top: '-2rem', right: '2rem', background: 'var(--secondary)', color: 'white', padding: '1rem 2rem', borderRadius: '1rem', fontWeight: 800, transform: 'rotate(5deg)', boxShadow: '0 10px 20px rgba(255, 140, 0, 0.3)' }}>
              100% SEGURO
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => (
  <section style={{ padding: '6rem 0' }}>
    <div className="container">
      <div style={{ 
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)', 
        borderRadius: '3rem', 
        padding: '5rem 2rem', 
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 30px 60px -15px rgba(0, 71, 171, 0.4)'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.05) 0%, transparent 50%)' }}></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ShoppingBag size={48} style={{ margin: '0 auto 2rem', opacity: 0.9 }} />
          <h2 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>¿Listo para comprar lo que amás?</h2>
          <p style={{ fontSize: '1.25rem', opacity: 0.8, maxWidth: '600px', margin: '0 auto 3rem' }}>
            No pierdas más tiempo. Envianos el link de ese producto que tanto querés y te pasamos el presupuesto hoy mismo.
          </p>
          <a href="https://wa.me/595987294206" target="_blank" className="btn" style={{ backgroundColor: 'white', color: 'var(--primary)', padding: '1.25rem 3rem', fontSize: '1.125rem', borderRadius: '1rem', fontWeight: 800, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
            Cotizar por WhatsApp Ahora
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer style={{ backgroundColor: '#080c17', color: 'white', padding: '5rem 0 3rem' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <img src="/logo.png" alt="Smart Buy" style={{ height: '45px' }} />
            <span style={{ fontWeight: 800, fontSize: '1.5rem' }}>Smart<span style={{ color: 'var(--secondary)' }}>Buy</span></span>
          </div>
          <p style={{ opacity: 0.6, lineHeight: 1.7 }}>
            Tu aliado estratégico para compras internacionales. Calidad, rapidez y seguridad en cada envío a Paraguay.
          </p>
        </div>
        
        <div>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>Contacto</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', opacity: 0.7 }}>
            <li style={{ display: 'flex', gap: '0.75rem' }}><MapPin size={18} className="text-secondary" /> Katueté, Paraguay</li>
            <li style={{ display: 'flex', gap: '0.75rem' }}><Phone size={18} className="text-secondary" /> +595 987 294206</li>
            <li style={{ display: 'flex', gap: '0.75rem' }}><Camera size={18} className="text-secondary" /> @smartbuypy</li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>Horarios</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', opacity: 0.7 }}>
            <li>Lunes a Viernes: 08:00 — 18:00</li>
            <li>Sábados: 08:00 — 12:00</li>
            <li>Domingos: Cerrado</li>
          </ul>
        </div>
      </div>
      
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2.5rem', textAlign: 'center', opacity: 0.5, fontSize: '0.875rem' }}>
        <p>© {new Date().getFullYear()} AXIS - Soluciones Digitales. Todos los derechos reservados.</p>
      </div>
    </div>
    <style>{`
      .text-secondary { color: var(--secondary); }
    `}</style>
  </footer>
);

const Phone = ({ size, className }: { size?: number, className?: string }) => (
  <svg 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.79 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const WhatsAppFloat = () => (
  <motion.a 
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    href="https://wa.me/595987294206" 
    target="_blank" 
    style={{ 
      position: 'fixed', 
      bottom: '2.5rem', 
      right: '2.5rem', 
      backgroundColor: '#25D366', 
      color: 'white', 
      width: '65px', 
      height: '65px', 
      borderRadius: '50%', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      boxShadow: '0 10px 30px rgba(37, 211, 102, 0.4)',
      zIndex: 100
    }}
  >
    <MessageCircle size={36} fill="white" />
    <span style={{ position: 'absolute', top: '-5px', right: '-5px', width: '15px', height: '15px', background: 'red', borderRadius: '50%', border: '2px solid white' }}></span>
  </motion.a>
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
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;
