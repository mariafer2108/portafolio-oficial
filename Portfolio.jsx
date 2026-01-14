import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ChevronRight, Eye } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  const projects = [
    {
      id: 1,
      title: 'Identidad Corporativa',
      category: 'Branding',
      color: 'from-purple-500 to-pink-500',
      description: 'Rediseño completo de marca',
    },
    {
      id: 2,
      title: 'Campaña Digital',
      category: 'Marketing',
      color: 'from-blue-500 to-cyan-500',
      description: 'Estrategia visual 360°',
    },
    {
      id: 3,
      title: 'Packaging Premium',
      category: 'Producto',
      color: 'from-orange-500 to-red-500',
      description: 'Diseño de empaque lujo',
    },
    {
      id: 4,
      title: 'Editorial Moderno',
      category: 'Publicación',
      color: 'from-green-500 to-teal-500',
      description: 'Revista conceptual',
    },
    {
      id: 5,
      title: 'App Interface',
      category: 'UI/UX',
      color: 'from-indigo-500 to-purple-500',
      description: 'Diseño de experiencia',
    },
    {
      id: 6,
      title: 'Motion Graphics',
      category: 'Animación',
      color: 'from-yellow-500 to-orange-500',
      description: 'Video corporativo',
    },
  ];

  const skills = [
    { name: 'Adobe Creative Suite', level: 95 },
    { name: 'Figma y Sketch', level: 90 },
    { name: 'Branding', level: 92 },
    { name: 'UI/UX Design', level: 88 },
    { name: 'Ilustración', level: 85 },
    { name: 'Motion Design', level: 80 },
  ];

  const sections = [
    { id: 'home', label: 'Inicio' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'about', label: 'Sobre Mí' },
    { id: 'contact', label: 'Contacto' },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div
        className="fixed w-8 h-8 rounded-full border-2 border-purple-500 pointer-events-none z-50 mix-blend-difference transition-transform duration-200"
        style={{
          left: `${mousePosition.x - 16}px`,
          top: `${mousePosition.y - 16}px`,
          transform: 'scale(1)',
        }}
      />

      <nav className="fixed w-full z-40 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />

          <div className="hidden md:flex gap-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                className={`text-sm transition-colors relative group ${
                  activeSection === section.id ? 'text-purple-400' : 'hover:text-purple-400'
                }`}
              >
                {section.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black/95 border-t border-white/10 px-6 py-4 space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                className="block w-full text-left py-2 text-sm hover:text-purple-400"
              >
                {section.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/30 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          />
        </div>

        <div className="relative z-10 text-center px-6">
          <div className="mb-6 overflow-hidden">
            <h2 className="text-7xl md:text-9xl font-black mb-4 animate-fadeIn">
              DISEÑO
            </h2>
          </div>
          <div className="mb-6 overflow-hidden">
            <h2
              className="text-7xl md:text-9xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-fadeIn"
              style={{ animationDelay: '0.2s' }}
            >
              GRÁFICO
            </h2>
          </div>
          <p
            className="text-xl md:text-2xl text-gray-400 mb-8 animate-fadeIn"
            style={{ animationDelay: '0.4s' }}
          >
            Transformando ideas en experiencias visuales memorables
          </p>
          <button
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold overflow-hidden animate-fadeIn"
            style={{ animationDelay: '0.6s' }}
            onClick={() => handleNavClick('projects')}
          >
            <span className="relative z-10 flex items-center gap-2">
              Ver Proyectos
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </section>

      <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-5xl font-bold mb-12">Proyectos Destacados</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer bg-white/5"
              style={{
                animation: 'fadeIn 0.6s ease-out forwards',
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity`}
              />
              <div className="relative z-10 h-full flex flex-col justify-between p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                      {project.category}
                    </p>
                    <h4 className="text-2xl font-semibold mt-2">{project.title}</h4>
                  </div>
                  <Eye className="w-5 h-5 text-white/80 group-hover:text-white transition-transform group-hover:translate-x-1" />
                </div>
                <div className="flex justify-between items-end mt-6">
                  <p className="text-sm text-white/85 max-w-[70%]">
                    {project.description}
                  </p>
                  <span className="text-xs uppercase tracking-[0.2em]">
                    Ver más
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Sobre Mí</h3>
          <p className="text-gray-300 mb-4">
            Soy diseñadora gráfica especializada en identidad visual, dirección de arte
            y experiencias digitales. Combino creatividad y estrategia para construir
            marcas sólidas y memorables.
          </p>
          <p className="text-gray-400">
            Disfruto trabajar en proyectos donde el diseño puede generar impacto real,
            desde branding completo hasta interfaces digitales y motion graphics.
          </p>
        </div>
        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1 text-sm">
                <span>{skill.name}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-4xl md:text-5xl font-bold mb-8">Contacto</h3>
        <p className="text-gray-300 mb-8 max-w-xl">
          ¿Tienes un proyecto en mente o quieres colaborar? Estoy disponible para
          proyectos freelance, colaboraciones y nuevas oportunidades creativas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="mailto:tuemail@ejemplo.com"
            className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors"
          >
            <Mail />
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="font-semibold">tuemail@ejemplo.com</p>
            </div>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors"
          >
            <Linkedin />
            <div>
              <p className="text-sm text-gray-400">LinkedIn</p>
              <p className="font-semibold">Tu Perfil</p>
            </div>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors"
          >
            <Github />
            <div>
              <p className="text-sm text-gray-400">GitHub</p>
              <p className="font-semibold">Tu Usuario</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

