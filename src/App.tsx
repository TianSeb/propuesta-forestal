import { useState, useEffect } from 'react';
import { 
  Tractor, Map, Fuel, Smartphone, Laptop, 
  WifiOff, TrendingDown, Layers, CheckCircle2, 
  ShieldAlert, Cpu, Check, BarChart3, Database,
  ChevronLeft, ChevronRight, Play, TrendingUp
} from 'lucide-react';

import yoikiLogoWhite from './assets/yoiki-logo-white.png';
import yoikiLogoGreen from './assets/yoiki-logo-green.png';
import yoikiKigiLogo from './assets/YoikiKigi.jpg';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState<'mobile' | 'web'>('mobile');

  const slides = [
    { id: 'portada', title: 'Portada' },
    { id: 'diagnostico', title: 'Situación Actual' },
    { id: 'solucion', title: 'Módulo Remito Forestal' },
    { id: 'arquitectura', title: 'Arquitectura Modular' },
    { id: 'inversion', title: 'Propuesta Económica' }
  ];

  const totalSlides = slides.length;

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  // Navegación por teclado (Flechas Izquierda / Derecha)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        setCurrentSlide(prev => Math.min(prev + 1, totalSlides - 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        setCurrentSlide(prev => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalSlides]);

  return (
    <div className="h-screen w-screen bg-[#F8F9FA] text-[#1E1E1E] font-sans flex flex-col justify-between select-none overflow-hidden">
      
      {/* BARRA SUPERIOR DE PROGRESO DE DIAPOSITIVAS (FIJA, NO SE DESPLAZA) */}
      <div className="w-full bg-white border-b border-[#A4BDA7]/30 px-6 py-2.5 flex items-center justify-between z-40 flex-shrink-0">
        
        {/* Identificador sutil de propuesta */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 flex items-center justify-center">
            <img src={yoikiLogoGreen} alt="Yoiki" className="w-full h-full object-contain" />
          </div>
          <span className="font-heading font-black text-sm tracking-tight text-[#2A5A3B]">
            YOIKI
          </span>
          <span className="hidden sm:inline-block text-[11px] text-[#648A6F] border-l border-[#A4BDA7]/40 pl-3">
            Propuesta de Modernización Forestal
          </span>
        </div>

        {/* Pestañas de diapositivas interactivas */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(idx)}
              className={`text-xs px-2.5 sm:px-3 py-1 rounded-full font-medium transition-all ${
                currentSlide === idx 
                  ? 'bg-[#2A5A3B] text-white shadow-xs font-semibold' 
                  : 'text-[#648A6F] hover:bg-[#A4BDA7]/20'
              }`}
            >
              <span className="sm:hidden">{idx + 1}</span>
              <span className="hidden sm:inline">{slide.title}</span>
            </button>
          ))}
        </div>

        {/* Contador de Slide */}
        <div className="text-xs font-heading font-bold text-[#648A6F]">
          <span className="text-[#2A5A3B]">{String(currentSlide + 1).padStart(2, '0')}</span>
          <span className="text-[#A4BDA7] mx-1">/</span>
          <span>{String(totalSlides).padStart(2, '0')}</span>
        </div>
      </div>

      {/* ÁREA PRINCIPAL DE DIAPOSITIVA (CONTENIDO) */}
      <main className="flex-1 flex items-center justify-center p-3 sm:p-5 lg:p-6 overflow-y-auto">
        <div className="w-full max-w-7xl xl:max-w-[1380px] h-[75vh] min-h-[560px] max-h-[720px] mx-auto transition-all duration-300 flex items-center justify-center">
          
          {/* SLIDE 0: PORTADA MINIMALISTA */}
          {currentSlide === 0 && (
            <div className="bg-[#2A5A3B] rounded-3xl p-8 sm:p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden text-center animate-fade-in flex flex-col justify-center items-center w-full h-full">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#A4BDA7_1px,transparent_1px)] [background-size:24px_24px]"></div>
              
              <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
                
                {/* Icono de Yoiki unificado */}
                <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-2xl bg-white/10 backdrop-blur-md border border-[#A4BDA7]/40 p-3.5 mb-4 shadow-xl flex items-center justify-center hover:scale-105 transition-transform">
                  <img 
                    src={yoikiLogoWhite} 
                    alt="Yoiki Isotipo" 
                    className="w-full h-full object-contain filter drop-shadow" 
                  />
                </div>

                <span className="text-xs uppercase font-bold tracking-widest text-[#A4BDA7] mb-2 block font-heading">
                  Documento Comercial
                </span>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-3 leading-tight tracking-tight font-heading">
                  Propuesta Modernización Forestal
                </h1>

                <p className="text-sm sm:text-lg text-[#F8F9FA]/85 mb-6 leading-relaxed font-normal max-w-2xl">
                  Evolución de la operatoria en campo hacia un ecosistema digital ágil, robusto y 100% conectado con la toma de decisiones.
                </p>

                <button 
                  onClick={nextSlide}
                  className="bg-white text-[#2A5A3B] hover:bg-[#F8F9FA] px-8 py-3.5 rounded-full font-bold transition-all shadow-xl hover:shadow-2xl inline-flex items-center gap-2 text-sm sm:text-base font-heading group"
                >
                  Ver Propuesta
                  <Play className="w-4 h-4 fill-[#2A5A3B] group-hover:translate-x-1 transition-transform" />
                </button>

              </div>
            </div>
          )}

          {/* SLIDE 1: SITUACIÓN ACTUAL */}
          {currentSlide === 1 && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-[#A4BDA7]/40 animate-fade-in w-full h-full flex flex-col justify-between">
              <div className="text-center mb-4 sm:mb-6">
                <span className="text-[#648A6F] font-bold tracking-widest uppercase text-xs mb-1 block font-heading">
                  Diagnóstico Inicial
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2A5A3B] mb-1.5 font-heading">
                  Situación Actual
                </h2>
                <div className="w-16 h-1 bg-[#648A6F] mx-auto rounded-full mb-2.5"></div>
                <p className="text-[#1E1E1E]/80 max-w-3xl mx-auto text-xs sm:text-base leading-relaxed">
                  Existen limitaciones en la operatoria respecto a la carga en campo y consolidación. El sistema resulta rígido frente a la necesidad de evolución del negocio.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 flex-1">
                
                {/* Card 1: Sistemas Rígidos */}
                <div className="bg-[#F8F9FA] border border-[#A4BDA7]/30 rounded-3xl p-6 lg:p-8 shadow-xs hover:border-[#2A5A3B] hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#648A6F] bg-white border border-[#A4BDA7]/40 px-3 py-1 rounded-full shadow-xs">
                        Desafío 01
                      </span>
                      <span className="text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200/60 px-2.5 py-0.5 rounded-full">
                        Falta de Flexibilidad
                      </span>
                    </div>

                    <div className="w-16 h-16 bg-[#2A5A3B]/10 text-[#2A5A3B] rounded-2xl flex items-center justify-center mb-4 shadow-xs">
                      <Cpu className="w-8 h-8" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#1E1E1E] mb-2.5 font-heading">
                      Sistemas Rígidos
                    </h3>
                    <p className="text-[#1E1E1E]/75 text-sm sm:text-base leading-relaxed">
                      La operación diaria en monte se ve forzada a adaptarse a las limitaciones del software, y no al revés. No acompaña la dinámica cambiante del terreno.
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#A4BDA7]/30 flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#2A5A3B]">
                    <ShieldAlert className="w-4 h-4 flex-shrink-0 text-amber-600" />
                    <span>Impacto: Fricción operativa en campo</span>
                  </div>
                </div>

                {/* Card 2: Lentitud de Evolución */}
                <div className="bg-[#F8F9FA] border border-[#A4BDA7]/30 rounded-3xl p-6 lg:p-8 shadow-xs hover:border-[#648A6F] hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#648A6F] bg-white border border-[#A4BDA7]/40 px-3 py-1 rounded-full shadow-xs">
                        Desafío 02
                      </span>
                      <span className="text-[11px] font-bold text-rose-700 bg-rose-50 border border-rose-200/60 px-2.5 py-0.5 rounded-full">
                        Demoras Críticas
                      </span>
                    </div>

                    <div className="w-16 h-16 bg-[#648A6F]/15 text-[#648A6F] rounded-2xl flex items-center justify-center mb-4 shadow-xs">
                      <TrendingDown className="w-8 h-8" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#1E1E1E] mb-2.5 font-heading">
                      Lentitud de Evolución
                    </h3>
                    <p className="text-[#1E1E1E]/75 text-sm sm:text-base leading-relaxed">
                      Demoras prolongadas y costos elevados cada vez que el negocio requiere un cambio operativo, nuevos datos de control o una mejora fundamental.
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#A4BDA7]/30 flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#648A6F]">
                    <ShieldAlert className="w-4 h-4 flex-shrink-0 text-rose-600" />
                    <span>Impacto: Respuesta lenta ante nuevas demandas</span>
                  </div>
                </div>

                {/* Card 3: Consolidación Compleja */}
                <div className="bg-[#F8F9FA] border border-[#A4BDA7]/30 rounded-3xl p-6 lg:p-8 shadow-xs hover:border-[#2A5A3B] hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#648A6F] bg-white border border-[#A4BDA7]/40 px-3 py-1 rounded-full shadow-xs">
                        Desafío 03
                      </span>
                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full">
                        Riesgo de Datos
                      </span>
                    </div>

                    <div className="w-16 h-16 bg-[#A4BDA7]/30 text-[#2A5A3B] rounded-2xl flex items-center justify-center mb-4 shadow-xs">
                      <Layers className="w-8 h-8" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#1E1E1E] mb-2.5 font-heading">
                      Consolidación Compleja
                    </h3>
                    <p className="text-[#1E1E1E]/75 text-sm sm:text-base leading-relaxed">
                      Información dispersa en planillas o sistemas aislados, reportes engorrosos de armar y métricas propensas a errores manuales de carga.
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#A4BDA7]/30 flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#2A5A3B]">
                    <ShieldAlert className="w-4 h-4 flex-shrink-0 text-amber-600" />
                    <span>Impacto: Visibilidad gerencial desfasada</span>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* SLIDE 2: LA SOLUCIÓN - MÓDULO REMITO FORESTAL (APP YOIKIKIGI) */}
          {currentSlide === 2 && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-[#A4BDA7]/40 animate-fade-in w-full h-full flex flex-col justify-center overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center h-full">
                
                {/* Columna Izquierda: Marca, Título y Beneficios (ocupa 7 de 12) */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  
                  {/* Badge de Marca YoikiKigi Grande */}
                  <div className="inline-flex items-center gap-3.5 bg-[#F8F9FA] p-2 pr-5 rounded-2xl border border-[#A4BDA7]/50 mb-3 shadow-xs self-start">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white p-1.5 border border-[#A4BDA7]/40 shadow-xs flex items-center justify-center overflow-hidden flex-shrink-0">
                      <img src={yoikiKigiLogo} alt="Yoiki Kigi" className="w-full h-full object-contain rounded-lg" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 font-heading">
                        <span className="font-black text-xl sm:text-2xl text-[#2A5A3B] tracking-tight">YOIKI</span>
                        <span className="font-light text-xl sm:text-2xl text-[#648A6F] tracking-tight">KIGI</span>
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#648A6F] block mt-0.5">
                        Módulo Remito Forestal
                      </span>
                    </div>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2A5A3B] mb-2 font-heading leading-tight tracking-tight">
                    Módulo Remito Forestal
                  </h2>
                  
                  <p className="text-sm sm:text-base text-[#1E1E1E]/80 mb-5 leading-relaxed max-w-xl">
                    Digitalización integral de la carga en monte: trazabilidad inmediata, resiliencia offline y adaptación ágil a la dinámica del negocio.
                  </p>

                  <div className="space-y-3.5">
                    <div className="flex gap-3.5 items-start">
                      <div className="w-11 h-11 bg-[#2A5A3B]/10 rounded-xl flex items-center justify-center flex-shrink-0 text-[#2A5A3B] mt-0.5 shadow-xs">
                        <WifiOff className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1E1E1E] text-base font-heading">Carga Ágil en Monte y Modo Offline</h4>
                        <p className="text-[#1E1E1E]/75 text-xs sm:text-sm leading-relaxed">Emisión rápida de remitos directamente en el rodal sin señal, con sincronización automática al recuperar cobertura.</p>
                      </div>
                    </div>

                    <div className="flex gap-3.5 items-start">
                      <div className="w-11 h-11 bg-[#2A5A3B]/10 rounded-xl flex items-center justify-center flex-shrink-0 text-[#2A5A3B] mt-0.5 shadow-xs">
                        <BarChart3 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1E1E1E] text-base font-heading">Visualización de Reportes y Métricas</h4>
                        <p className="text-[#1E1E1E]/75 text-xs sm:text-sm leading-relaxed">Dashboard web en tiempo real para supervisión gerencial: volúmenes despachados, estado de camiones y trazabilidad de lotes.</p>
                      </div>
                    </div>

                    <div className="flex gap-3.5 items-start">
                      <div className="w-11 h-11 bg-[#648A6F]/15 rounded-xl flex items-center justify-center flex-shrink-0 text-[#648A6F] mt-0.5 shadow-xs">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1E1E1E] text-base font-heading">Evolución Continua y Adaptabilidad</h4>
                        <p className="text-[#1E1E1E]/75 text-xs sm:text-sm leading-relaxed">Plataforma flexible para incorporar nuevos campos, reglas y requerimientos al ritmo real de la operatoria.</p>
                      </div>
                    </div>

                    <div className="flex gap-3.5 items-start">
                      <div className="w-11 h-11 bg-[#648A6F]/15 rounded-xl flex items-center justify-center flex-shrink-0 text-[#648A6F] mt-0.5 shadow-xs">
                        <ShieldAlert className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1E1E1E] text-base font-heading">Mitigación e Integración Temporal</h4>
                        <p className="text-[#1E1E1E]/75 text-xs sm:text-sm leading-relaxed">Propuesta de integración con el proveedor Kumen para asegurar una transición fluida, segura y sin cortes de servicio.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Columna Derecha: Mockup Interactivo Grande (ocupa 5 de 12) */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center">
                  
                  {/* Selector Mobile / Web */}
                  <div className="flex items-center gap-2 mb-3 bg-[#F8F9FA] p-1.5 rounded-xl border border-[#A4BDA7]/40 shadow-xs">
                    <button 
                      onClick={() => setActiveTab('mobile')}
                      className={`px-4 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                        activeTab === 'mobile' ? 'bg-[#2A5A3B] text-white shadow-xs' : 'text-[#648A6F] hover:bg-[#A4BDA7]/15'
                      }`}
                    >
                      <Smartphone className="w-4 h-4" /> Vista App Móvil
                    </button>
                    <button 
                      onClick={() => setActiveTab('web')}
                      className={`px-4 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                        activeTab === 'web' ? 'bg-[#2A5A3B] text-white shadow-xs' : 'text-[#648A6F] hover:bg-[#A4BDA7]/15'
                      }`}
                    >
                      <Laptop className="w-4 h-4" /> Vista Dashboard Web
                    </button>
                  </div>

                  {/* Vista Mobile Grande */}
                  {activeTab === 'mobile' && (
                    <div className="w-[280px] sm:w-[310px] h-[450px] sm:h-[480px] bg-[#F8F9FA] border-[7px] border-[#1E1E1E] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col">
                      
                      {/* Barra de Estado Teléfono */}
                      <div className="bg-[#2A5A3B] pt-3 pb-1 px-4 flex items-center justify-between text-[10px] text-white/80 font-mono">
                        <span>09:41</span>
                        <div className="w-12 h-3.5 bg-black/30 rounded-full mx-auto"></div>
                        <span>100% ⚡</span>
                      </div>

                      {/* Header App */}
                      <div className="bg-[#2A5A3B] pb-3 px-4 text-white text-center">
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-1.5 bg-white/10 px-2 py-0.5 rounded-md">
                            <img src={yoikiKigiLogo} alt="Logo" className="w-4 h-4 rounded object-contain bg-white" />
                            <span className="text-[10px] font-bold tracking-tight">YOIKIKIGI</span>
                          </div>
                          <span className="text-[9px] font-bold bg-emerald-500/30 text-emerald-200 border border-emerald-400/40 px-2 py-0.5 rounded-full flex items-center gap-1">
                            ● Offline OK
                          </span>
                        </div>
                        <h4 className="text-sm font-bold font-heading">Nuevo Remito Forestal</h4>
                        <p className="text-[#A4BDA7] text-[10px]">Lote 4B • Rodal 12 • Cuadro Norte</p>
                      </div>

                      {/* Contenido Formulario Móvil */}
                      <div className="p-3 space-y-2 flex-1 overflow-y-auto text-xs">
                        <div className="bg-white p-2.5 rounded-xl border border-[#A4BDA7]/40 shadow-xs">
                          <span className="text-[9px] text-[#648A6F] block uppercase font-bold tracking-wider mb-0.5">Transportista Asignado</span>
                          <span className="font-bold text-xs text-[#1E1E1E] block">Scania R450 • Chofer R. Gómez</span>
                          <span className="text-[10px] text-[#1E1E1E]/60">Patente: AF 329 XK • Acoplado: AD 812 YU</span>
                        </div>

                        <div className="bg-white p-2.5 rounded-xl border border-[#A4BDA7]/40 shadow-xs">
                          <span className="text-[9px] text-[#648A6F] block uppercase font-bold tracking-wider mb-0.5">Detalle de Carga</span>
                          <div className="flex justify-between items-center text-xs font-bold">
                            <span className="text-[#2A5A3B]">Pino Taeda (Pulpable)</span>
                            <span className="text-[#1E1E1E]">28.40 TN</span>
                          </div>
                          <span className="text-[10px] text-[#648A6F] block mt-0.5">Destino: Planta Celulosa Puerto Piray</span>
                        </div>

                        <div className="bg-white p-2.5 rounded-xl border border-dashed border-[#2A5A3B]/40 text-center text-[10px] text-[#2A5A3B] font-semibold bg-[#2A5A3B]/5 flex items-center justify-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2A5A3B]" />
                          Firma Digital Capataz (ID #0921)
                        </div>
                      </div>

                      {/* Botón Acción Móvil */}
                      <div className="p-3 bg-white border-t border-slate-100 shadow-md">
                        <button className="w-full py-2.5 bg-[#2A5A3B] hover:bg-[#234c32] text-white rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md transition-colors">
                          <Check className="w-4 h-4" /> Emitir y Guardar Remito
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Vista Web Grande */}
                  {activeTab === 'web' && (
                    <div className="w-[440px] sm:w-[480px] max-w-full h-[320px] sm:h-[350px] bg-white border-[6px] border-[#1E1E1E] rounded-2xl shadow-2xl overflow-hidden flex flex-col text-xs">
                      <div className="h-6 bg-[#1E1E1E] flex items-center px-3 gap-1.5 flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                        <div className="w-2 h-2 rounded-full bg-[#A4BDA7]"></div>
                        <span className="text-[9px] text-white/70 ml-2 font-mono">app.yoikikigi.com/dashboard</span>
                      </div>
                      <div className="flex flex-1 overflow-hidden">
                        <div className="w-28 bg-[#2A5A3B] text-white p-3 flex flex-col justify-between text-[10px] flex-shrink-0">
                          <div className="space-y-2">
                            <span className="font-bold block mb-2 text-white text-xs tracking-tight">YOIKIKIGI</span>
                            <div className="p-1.5 rounded-lg bg-[#648A6F]/40 flex items-center gap-1.5 font-semibold">
                              <BarChart3 className="w-3.5 h-3.5" /> Remitos
                            </div>
                            <div className="p-1.5 rounded-lg text-[#A4BDA7] flex items-center gap-1.5">
                              <Map className="w-3.5 h-3.5" /> Rodales
                            </div>
                            <div className="p-1.5 rounded-lg text-[#A4BDA7] flex items-center gap-1.5">
                              <Database className="w-3.5 h-3.5" /> Sync Cloud
                            </div>
                          </div>
                          <span className="text-[8px] text-[#A4BDA7]/70">v1.2.0 • Online</span>
                        </div>
                        <div className="flex-1 p-3 bg-[#F8F9FA] flex flex-col gap-2 overflow-hidden">
                          <div className="flex justify-between items-center text-[10px]">
                            <span className="font-bold text-[#1E1E1E]">Flujo Operativo en Tiempo Real</span>
                            <span className="text-[9px] font-bold text-[#2A5A3B] bg-[#A4BDA7]/30 px-2 py-0.5 rounded-full">● Sincronizado</span>
                          </div>
                          <div className="bg-white p-2.5 rounded-xl border border-[#A4BDA7]/30 flex items-end justify-between h-20 gap-2 px-3">
                            <div className="flex-1 bg-[#A4BDA7]/40 rounded-t h-[40%] flex items-end justify-center pb-1 text-[8px] text-[#1E1E1E]/60">Lun</div>
                            <div className="flex-1 bg-[#648A6F] rounded-t h-[70%] flex items-end justify-center pb-1 text-[8px] text-white">Mar</div>
                            <div className="flex-1 bg-[#2A5A3B] rounded-t h-[95%] flex items-end justify-center pb-1 text-[8px] text-white font-bold">Mié</div>
                            <div className="flex-1 bg-[#648A6F] rounded-t h-[60%] flex items-end justify-center pb-1 text-[8px] text-white">Jue</div>
                            <div className="flex-1 bg-[#A4BDA7]/60 rounded-t h-[80%] flex items-end justify-center pb-1 text-[8px] text-[#1E1E1E]">Vie</div>
                          </div>
                          <div className="bg-white rounded-xl border border-[#A4BDA7]/30 overflow-hidden text-[9px] flex-1">
                            <div className="bg-[#2A5A3B]/10 px-3 py-1 font-bold text-[#2A5A3B] flex justify-between">
                              <span>Remito</span><span>Rodal</span><span>Chofer</span><span>Estado</span>
                            </div>
                            <div className="px-3 py-1 border-t border-slate-100 flex justify-between items-center">
                              <span className="font-semibold">#RF-4091</span><span>Lote 4B</span><span>R. Gómez</span><span className="text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">En Destino</span>
                            </div>
                            <div className="px-3 py-1 border-t border-slate-100 flex justify-between items-center">
                              <span className="font-semibold">#RF-4092</span><span>Lote 2A</span><span>M. Sosa</span><span className="text-amber-700 font-bold bg-amber-50 px-1.5 py-0.5 rounded">En Tránsito</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                </div>

              </div>
            </div>
          )}

          {/* SLIDE 3: ARQUITECTURA MODULAR */}
          {currentSlide === 3 && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-9 shadow-xl border border-[#A4BDA7]/40 animate-fade-in w-full h-full flex flex-col justify-between overflow-hidden">
              <div className="text-center mb-3 sm:mb-4 flex-shrink-0">
                <span className="text-[#648A6F] font-bold tracking-widest uppercase text-xs mb-1 block font-heading">
                  Propuesta de Escalabilidad & Futuro
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2A5A3B] mb-1 font-heading">
                  Arquitectura Modular
                </h2>
                <div className="w-14 h-1 bg-[#648A6F] mx-auto rounded-full mb-2"></div>
                <p className="text-[#1E1E1E]/80 max-w-3xl mx-auto text-xs sm:text-sm leading-relaxed">
                  Diseño moderno modular que permitirá incorporar nuevos módulos e integrarlos a futuro de forma ágil y coordinada, protegiendo la inversión y acompañando el crecimiento operativo del negocio.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 flex-1 items-stretch py-1">
                
                {/* Módulo Principal: YoikiKigi */}
                <div className="bg-[#2A5A3B]/5 border-2 border-[#2A5A3B] rounded-3xl p-5 lg:p-6 relative flex flex-col items-center text-center shadow-md justify-between hover:shadow-lg transition-all">
                  <div className="flex flex-col items-center w-full">
                    <span className="bg-[#2A5A3B] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2.5 shadow-xs">
                      Módulo Inicial (En Propuesta)
                    </span>
                    <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-white p-2 shadow-sm flex items-center justify-center my-2 overflow-hidden border border-[#A4BDA7]/40">
                      <img src={yoikiKigiLogo} alt="YoikiKigi" className="w-full h-full object-contain rounded-xl" />
                    </div>
                    <h4 className="text-lg font-bold text-[#2A5A3B] mb-1 font-heading">Remito Forestal</h4>
                    <p className="text-xs sm:text-sm text-[#1E1E1E]/75 leading-relaxed">
                      Emisión offline en monte, control de camiones, remitos digitales y consolidación inmediata.
                    </p>
                  </div>
                  
                  {/* Badges de características */}
                  <div className="flex flex-wrap gap-1.5 justify-center w-full pt-3 mt-2 border-t border-[#2A5A3B]/20">
                    <span className="text-[10px] font-bold bg-[#2A5A3B]/10 text-[#2A5A3B] px-2.5 py-0.5 rounded-md">100% Offline</span>
                    <span className="text-[10px] font-bold bg-[#2A5A3B]/10 text-[#2A5A3B] px-2.5 py-0.5 rounded-md">Firma Digital</span>
                  </div>
                </div>

                {/* Módulo Planificación */}
                <div className="bg-[#F8F9FA] border border-[#A4BDA7]/40 rounded-3xl p-5 lg:p-6 flex flex-col items-center text-center hover:border-[#648A6F] hover:shadow-md transition-all justify-between">
                  <div className="flex flex-col items-center w-full">
                    <span className="text-[#648A6F] text-[10px] font-bold uppercase tracking-wider mb-2.5 bg-white px-3 py-1 rounded-full border border-[#A4BDA7]/30 shadow-xs">
                      Módulo Integrable
                    </span>
                    <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-white border border-[#A4BDA7]/40 flex items-center justify-center my-2 text-[#2A5A3B] shadow-xs">
                      <Map className="w-8 h-8 sm:w-9 sm:h-9" />
                    </div>
                    <h4 className="text-lg font-bold text-[#1E1E1E] mb-1 font-heading">Planificación</h4>
                    <p className="text-xs sm:text-sm text-[#1E1E1E]/75 leading-relaxed">
                      Gestión de rodales, labores silvícolas, mapas SIG y asignación de tareas operativas.
                    </p>
                  </div>

                  {/* Badges de características */}
                  <div className="flex flex-wrap gap-1.5 justify-center w-full pt-3 mt-2 border-t border-[#A4BDA7]/30">
                    <span className="text-[10px] font-bold bg-white text-[#648A6F] border border-[#A4BDA7]/40 px-2.5 py-0.5 rounded-md">Rodales & Lotes</span>
                    <span className="text-[10px] font-bold bg-white text-[#648A6F] border border-[#A4BDA7]/40 px-2.5 py-0.5 rounded-md">Labores Monte</span>
                  </div>
                </div>

                {/* Módulo Maquinarias */}
                <div className="bg-[#F8F9FA] border border-[#A4BDA7]/40 rounded-3xl p-5 lg:p-6 flex flex-col items-center text-center hover:border-[#648A6F] hover:shadow-md transition-all justify-between">
                  <div className="flex flex-col items-center w-full">
                    <span className="text-[#648A6F] text-[10px] font-bold uppercase tracking-wider mb-2.5 bg-white px-3 py-1 rounded-full border border-[#A4BDA7]/30 shadow-xs">
                      Módulo Integrable
                    </span>
                    <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-white border border-[#A4BDA7]/40 flex items-center justify-center my-2 text-[#2A5A3B] shadow-xs">
                      <Tractor className="w-8 h-8 sm:w-9 sm:h-9" />
                    </div>
                    <h4 className="text-lg font-bold text-[#1E1E1E] mb-1 font-heading">Maquinarias</h4>
                    <p className="text-xs sm:text-sm text-[#1E1E1E]/75 leading-relaxed">
                      Control de flota pesada, horómetros, plan de mantenimiento preventivo y consumos.
                    </p>
                  </div>

                  {/* Badges de características */}
                  <div className="flex flex-wrap gap-1.5 justify-center w-full pt-3 mt-2 border-t border-[#A4BDA7]/30">
                    <span className="text-[10px] font-bold bg-white text-[#648A6F] border border-[#A4BDA7]/40 px-2.5 py-0.5 rounded-md">Control Combustible</span>
                    <span className="text-[10px] font-bold bg-white text-[#648A6F] border border-[#A4BDA7]/40 px-2.5 py-0.5 rounded-md">Alertas Service</span>
                  </div>
                </div>

                {/* Módulo Insumos */}
                <div className="bg-[#F8F9FA] border border-[#A4BDA7]/40 rounded-3xl p-5 lg:p-6 flex flex-col items-center text-center hover:border-[#648A6F] hover:shadow-md transition-all justify-between">
                  <div className="flex flex-col items-center w-full">
                    <span className="text-[#648A6F] text-[10px] font-bold uppercase tracking-wider mb-2.5 bg-white px-3 py-1 rounded-full border border-[#A4BDA7]/30 shadow-xs">
                      Módulo Integrable
                    </span>
                    <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-white border border-[#A4BDA7]/40 flex items-center justify-center my-2 text-[#2A5A3B] shadow-xs">
                      <Fuel className="w-8 h-8 sm:w-9 sm:h-9" />
                    </div>
                    <h4 className="text-lg font-bold text-[#1E1E1E] mb-1 font-heading">Insumos</h4>
                    <p className="text-xs sm:text-sm text-[#1E1E1E]/75 leading-relaxed">
                      Control de combustible en cisternas, registro de despachos y auditoría de inventario.
                    </p>
                  </div>

                  {/* Badges de características */}
                  <div className="flex flex-wrap gap-1.5 justify-center w-full pt-3 mt-2 border-t border-[#A4BDA7]/30">
                    <span className="text-[10px] font-bold bg-white text-[#648A6F] border border-[#A4BDA7]/40 px-2.5 py-0.5 rounded-md">Cisternas Móviles</span>
                    <span className="text-[10px] font-bold bg-white text-[#648A6F] border border-[#A4BDA7]/40 px-2.5 py-0.5 rounded-md">Control Litros</span>
                  </div>
                </div>

              </div>

              {/* Banner comercial de valor agregado */}
              <div className="mt-3.5 p-3.5 px-6 bg-[#F8F9FA] rounded-2xl border border-[#A4BDA7]/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left flex-shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#2A5A3B]/10 text-[#2A5A3B] flex items-center justify-center flex-shrink-0">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1E1E1E] text-xs sm:text-sm font-heading">Ecosistema Integrado y Escalable</h4>
                    <p className="text-[11px] sm:text-xs text-[#1E1E1E]/70">Cada nuevo módulo se acopla a la base operativa, evolucionando con la empresa.</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#2A5A3B] bg-[#A4BDA7]/25 px-3.5 py-1 rounded-full whitespace-nowrap">
                  Escalabilidad Garantizada
                </span>
              </div>
            </div>
          )}

          {/* SLIDE 4: PROPUESTA ECONÓMICA */}
          {currentSlide === 4 && (
            <div className="bg-[#1E1E1E] rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-xl relative overflow-hidden animate-fade-in w-full h-full flex flex-col justify-between">
              <div className="text-center mb-4 sm:mb-6">
                <span className="text-[#A4BDA7] font-bold tracking-widest uppercase text-xs mb-1 block font-heading">
                  Inversión & Servicio
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-1.5 font-heading">
                  Propuesta Económica
                </h2>
                <div className="w-14 h-1 bg-[#648A6F] mx-auto rounded-full mb-2"></div>
                <p className="text-[#A4BDA7] max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed">
                  Esquema diseñado para eliminar el riesgo inicial y asegurar adaptación continua.
                </p>
              </div>

              {/* Contenedor equilibrado con max-w-5xl para evitar que queden muy anchos */}
              <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 flex-1 items-stretch">
                
                {/* Card 1: 100% Bonificado */}
                <div className="bg-[#2A5A3B] border-2 border-[#648A6F] rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between hover:border-[#A4BDA7] transition-all">
                  <div>
                    <span className="inline-block bg-[#648A6F]/60 border border-[#A4BDA7]/40 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white mb-3 shadow-xs">
                      Fase 1 • Inicial
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading mb-1 text-white">
                      Desarrollo de Arquitectura
                    </h3>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#A4BDA7] font-heading mb-5 tracking-tight">
                      100% Bonificado
                    </div>

                    <ul className="space-y-3.5 text-sm text-white/95">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#A4BDA7] flex-shrink-0 mt-0.5" />
                        <span>Relevamiento detallado del flujo operativo en campo.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#A4BDA7] flex-shrink-0 mt-0.5" />
                        <span>Desarrollo de la App Móvil Offline YoikiKigi.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#A4BDA7] flex-shrink-0 mt-0.5" />
                        <span>Dashboard Web centralizado para supervisión operativa.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#A4BDA7] flex-shrink-0 mt-0.5" />
                        <span>Propuesta de integración con sistema Kumen.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/15 text-xs sm:text-sm text-[#A4BDA7] font-medium flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#A4BDA7]" />
                    <span>Sin desembolso inicial de capital para la empresa.</span>
                  </div>
                </div>

                {/* Card 2: Abono Mensual */}
                <div className="bg-white/10 border-2 border-[#A4BDA7]/40 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between hover:border-white/60 transition-all">
                  <div>
                    <span className="inline-block bg-white/15 border border-white/25 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#A4BDA7] mb-3 shadow-xs">
                      Fase 2 • Servicio Continuo
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading mb-1 text-white">
                      Servicio y Evolución
                    </h3>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading mb-5 tracking-tight">
                      Abono Mensual
                    </div>

                    <ul className="space-y-3.5 text-sm text-white/90">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#648A6F] flex-shrink-0 mt-0.5" />
                        <span className="font-semibold text-white">Desarrollo ágil y continuo.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#648A6F] flex-shrink-0 mt-0.5" />
                        <span>Mantenimiento y soporte técnico.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#648A6F] flex-shrink-0 mt-0.5" />
                        <span>Disponibilidad en la nube y resguardo seguro de datos.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#648A6F] flex-shrink-0 mt-0.5" />
                        <span>Actualizaciones continuas según la dinámica del negocio.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/15 text-xs sm:text-sm text-[#A4BDA7] font-medium flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#A4BDA7]" />
                    <span>Previsibilidad y evolución constante del producto.</span>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>
      </main>

      {/* FOOTER CON CONTROLES DE DIAPOSITIVAS Y LOGO BLANCO (FIJO, NO SE DESPLAZA) */}
      <footer className="bg-[#2A5A3B] text-white px-6 py-2.5 sm:py-3 border-t border-[#648A6F]/40 flex flex-col sm:flex-row items-center justify-between gap-3 z-40 flex-shrink-0">
        
        {/* Logo Yoiki Blanco en el footer */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center p-1.5">
            <img 
              src={yoikiLogoWhite} 
              alt="Yoiki" 
              className="w-full h-full object-contain" 
            />
          </div>
          <span className="font-heading font-black text-sm tracking-tight text-white">
            YOIKI
          </span>
          <span className="text-[11px] text-[#A4BDA7] hidden md:inline">
            • Propuesta de Modernización Forestal
          </span>
        </div>

        {/* Controles de Navegación Diapositiva (Anterior / Siguiente) */}
        <div className="flex items-center gap-3">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              currentSlide === 0 
                ? 'opacity-40 cursor-not-allowed text-white/50' 
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            <ChevronLeft className="w-4 h-4" /> Anterior
          </button>

          {/* Dots indicadores */}
          <div className="flex items-center gap-1.5 px-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === idx ? 'w-6 bg-white' : 'bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Ir a diapositiva ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              currentSlide === totalSlides - 1 
                ? 'opacity-40 cursor-not-allowed text-white/50' 
                : 'bg-white text-[#2A5A3B] hover:bg-[#F8F9FA] shadow-sm font-bold'
            }`}
          >
            Siguiente <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Atajo de teclado sutil */}
        <div className="text-[11px] text-[#A4BDA7] hidden sm:block">
          Usa <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-[10px]">←</kbd> y <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-[10px]">→</kbd> para navegar
        </div>

      </footer>

    </div>
  );
}
