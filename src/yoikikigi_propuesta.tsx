import React, { useState } from 'react';
import { 
  TreePine, Tractor, Map, Fuel, Smartphone, Laptop, 
  WifiOff, Zap, TrendingDown, Layers, CheckCircle2, 
  ArrowRight, ShieldAlert, Cpu, ChevronRight
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('mobile');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-emerald-200">
      
      {/* HEADER / NAVBAR */}
      <header className="fixed w-full top-0 z-50 bg-emerald-950 text-white shadow-lg backdrop-blur-sm bg-opacity-95">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-800 p-2 rounded-lg">
              <TreePine className="text-amber-500 w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-wider">Yoiki Kigi</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-emerald-100">
            <a href="#situacion" className="hover:text-amber-400 transition-colors">Situación Actual</a>
            <a href="#solucion" className="hover:text-amber-400 transition-colors">La Solución</a>
            <a href="#arquitectura" className="hover:text-amber-400 transition-colors">Arquitectura</a>
            <a href="#inversion" className="hover:text-amber-400 transition-colors">Propuesta Económica</a>
          </nav>
          <a href="#inversion" className="bg-amber-600 hover:bg-amber-500 text-white px-5 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-amber-600/30 text-sm hidden sm:block">
            Ver Propuesta
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-emerald-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <span className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-4 bg-emerald-900/50 px-4 py-1.5 rounded-full border border-emerald-800">
            Propuesta de Valor
          </span>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight max-w-4xl">
            Proyecto de <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300">
              Modernización Forestal
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-emerald-100/80 max-w-2xl mb-10 leading-relaxed">
            Evolucionamos la operatoria en campo hacia un ecosistema digital ágil, robusto y 100% conectado con la toma de decisiones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#solucion" className="bg-emerald-600 hover:bg-emerald-500 px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-emerald-900/50 flex items-center justify-center gap-2">
              Descubrir Solución <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* SITUACIÓN ACTUAL */}
      <section id="situacion" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-emerald-950 mb-4">Situación Actual</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Actualmente, existen limitaciones en la operatoria respecto a la carga en campo y consolidación. El sistema resulta rígido frente a la necesidad de evolución del negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-xl shadow-slate-200/50">
              <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                <Cpu className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Sistemas Rígidos</h3>
              <p className="text-slate-600 leading-relaxed">
                La operación diaria se ve forzada a adaptarse a las limitaciones del software, y no al revés. Falta de flexibilidad estructural.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-xl shadow-slate-200/50">
              <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                <TrendingDown className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Lentitud de Evolución</h3>
              <p className="text-slate-600 leading-relaxed">
                Demoras constantes cada vez que el negocio requiere un cambio operativo o una mejora fundamental para la competitividad.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-xl shadow-slate-200/50">
              <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Layers className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Consolidación Compleja</h3>
              <p className="text-slate-600 leading-relaxed">
                Reportes engorrosos de armar y métricas propensas a errores manuales que dificultan drásticamente la gestión gerencial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROPUESTA SOLUCIÓN (MOCKUPS) */}
      <section id="solucion" className="py-24 bg-emerald-50 relative overflow-hidden">
        <div className="absolute -right-40 -top-40 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl"></div>
        <div className="absolute -left-40 -bottom-40 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Texto de Solución */}
            <div className="lg:w-1/2">
              <span className="text-emerald-700 font-bold tracking-widest uppercase text-sm mb-2 block">El Enfoque Superador</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-emerald-950 mb-6">Desarrollo Módulo Remito Forestal</h2>
              <p className="text-slate-700 mb-8 text-lg">
                Interfaz dedicada exclusivamente al circuito de remito forestal, integrando a todos los actores: <strong className="text-emerald-800">Campo (Mobile) &rarr; Transporte (Camión) &rarr; Industria/Oficina (Web).</strong>
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0 text-emerald-600">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg">Carga Ágil Pre-Parametrizada</h4>
                    <p className="text-slate-600">Interfaz amigable que facilita la selección rápida de recursos y tareas, minimizando el error humano en el monte.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0 text-emerald-600">
                    <WifiOff className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg">Modo Offline / Online</h4>
                    <p className="text-slate-600">El operario sigue trabajando sin señal. El sistema sincroniza automáticamente al recuperar la conexión 4G/Wifi.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0 text-amber-600">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg">Mitigación Operativa (Integración)</h4>
                    <p className="text-slate-600">Para no cortar el circuito actual, importamos nuestros remitos al sistema actual (Kumen) temporalmente para la facturación.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mockup Interactivo */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                {/* Selector Web/Mobile */}
                <div className="absolute -left-12 top-20 flex flex-col gap-4 z-20">
                  <button 
                    onClick={() => setActiveTab('mobile')}
                    className={`p-3 rounded-full shadow-lg transition-all ${activeTab === 'mobile' ? 'bg-emerald-800 text-white scale-110' : 'bg-white text-slate-400 hover:text-emerald-600'}`}
                    title="Vista Mobile (Campo)"
                  >
                    <Smartphone className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={() => setActiveTab('web')}
                    className={`p-3 rounded-full shadow-lg transition-all ${activeTab === 'web' ? 'bg-emerald-800 text-white scale-110' : 'bg-white text-slate-400 hover:text-emerald-600'}`}
                    title="Vista Web (Administración)"
                  >
                    <Laptop className="w-6 h-6" />
                  </button>
                </div>

                {/* CONTENEDOR MOCKUP */}
                <div className="relative transition-all duration-500 ease-in-out">
                  
                  {/* MOBILE MOCKUP */}
                  <div className={`transition-all duration-500 absolute top-0 left-0 origin-center ${activeTab === 'mobile' ? 'opacity-100 scale-100 relative' : 'opacity-0 scale-90 pointer-events-none'}`}>
                    <div className="w-[300px] h-[600px] bg-slate-100 border-[14px] border-emerald-950 rounded-[3rem] shadow-2xl relative overflow-hidden ring-4 ring-emerald-900/20">
                      {/* Notch */}
                      <div className="absolute top-0 inset-x-0 h-6 w-32 mx-auto bg-emerald-950 rounded-b-2xl z-20"></div>
                      
                      {/* App Header */}
                      <div className="bg-emerald-800 pt-12 pb-6 px-5 rounded-b-3xl shadow-md relative z-10">
                        <h3 className="text-white font-bold text-lg">Nuevo Remito</h3>
                        <p className="text-emerald-200 text-xs">Modo Offline - Lote 4B</p>
                      </div>

                      {/* App Content */}
                      <div className="p-5 space-y-4 relative z-0">
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                          <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Transportista</label>
                          <div className="h-6 w-3/4 bg-slate-100 rounded mt-1"></div>
                        </div>
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                          <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Producto Forestal</label>
                          <div className="flex gap-2 mt-2">
                            <div className="h-8 flex-1 bg-emerald-50 border border-emerald-200 rounded-lg"></div>
                            <div className="h-8 w-12 bg-slate-100 rounded-lg"></div>
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                           <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Destino</label>
                           <div className="h-6 w-full bg-slate-100 rounded mt-1"></div>
                        </div>
                      </div>

                      {/* FAB */}
                      <div className="absolute bottom-6 right-6 w-14 h-14 bg-amber-500 rounded-full shadow-lg flex items-center justify-center text-white cursor-pointer hover:bg-amber-400 transition-colors animate-bounce">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                    </div>
                  </div>

                  {/* WEB MOCKUP */}
                  <div className={`transition-all duration-500 origin-center ${activeTab === 'web' ? 'opacity-100 scale-100 relative' : 'opacity-0 scale-90 absolute top-0 left-0 pointer-events-none'}`}>
                    <div className="w-[500px] h-[340px] bg-slate-100 border-[8px] border-emerald-950 rounded-2xl shadow-2xl relative overflow-hidden flex flex-col">
                      {/* Browser Header */}
                      <div className="h-6 bg-emerald-950 flex items-center px-3 gap-1.5 w-full">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                      </div>
                      
                      {/* Dashboard Layout */}
                      <div className="flex flex-1">
                        {/* Sidebar */}
                        <div className="w-20 bg-emerald-900 flex flex-col items-center py-6 gap-4">
                          <div className="w-8 h-8 rounded-lg bg-emerald-800/50"></div>
                          <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/50"></div>
                          <div className="w-8 h-8 rounded-lg bg-emerald-800/50"></div>
                        </div>
                        {/* Main Content */}
                        <div className="flex-1 p-6 bg-slate-50 flex flex-col gap-4">
                           <div className="flex justify-between items-center">
                             <div className="h-5 w-32 bg-slate-200 rounded"></div>
                             <div className="h-6 w-24 bg-emerald-100 rounded-full"></div>
                           </div>
                           {/* Chart placeholder */}
                           <div className="h-32 bg-white rounded-xl border border-slate-100 shadow-sm flex items-end justify-around p-4 gap-2">
                             <div className="w-full bg-amber-200 rounded-t-sm" style={{height: '40%'}}></div>
                             <div className="w-full bg-emerald-400 rounded-t-sm" style={{height: '70%'}}></div>
                             <div className="w-full bg-amber-300 rounded-t-sm" style={{height: '50%'}}></div>
                             <div className="w-full bg-emerald-500 rounded-t-sm" style={{height: '90%'}}></div>
                           </div>
                           {/* Table placeholder */}
                           <div className="flex-1 bg-white rounded-xl border border-slate-100 shadow-sm p-4 space-y-3">
                             <div className="h-3 w-full bg-slate-100 rounded"></div>
                             <div className="h-3 w-5/6 bg-slate-100 rounded"></div>
                             <div className="h-3 w-4/6 bg-slate-100 rounded"></div>
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARQUITECTURA EXTENDIBLE */}
      <section id="arquitectura" className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-emerald-950 mb-4">Arquitectura Extendible</h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Diseño modular que permite sumar funcionalidades de forma nativa a medida que el negocio lo demanda, evitando parches y sistemas desconectados.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 relative">
            {/* Conector Línea (solo desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-emerald-100 via-amber-200 to-emerald-100 -z-10 -translate-y-1/2"></div>

            {/* Módulos */}
            {[
              { id: 1, title: 'Remito Forestal', icon: <TreePine className="w-10 h-10" />, status: 'active', color: 'emerald' },
              { id: 2, title: 'Planeamiento', icon: <Map className="w-10 h-10" />, status: 'future', color: 'slate' },
              { id: 3, title: 'Maquinarias', icon: <Tractor className="w-10 h-10" />, status: 'future', color: 'slate' },
              { id: 4, title: 'Insumos', icon: <Fuel className="w-10 h-10" />, status: 'future', color: 'slate' },
            ].map((mod, index) => (
              <React.Fragment key={mod.id}>
                <div className={`
                  w-full lg:w-64 aspect-square rounded-3xl flex flex-col items-center justify-center p-6 text-center transition-all duration-300
                  ${mod.status === 'active' 
                    ? 'bg-emerald-50 border-2 border-emerald-500 shadow-xl shadow-emerald-100 scale-105 z-10' 
                    : 'bg-white border-2 border-slate-100 hover:border-amber-200 hover:shadow-lg'
                  }
                `}>
                  <div className={`mb-4 ${mod.status === 'active' ? 'text-emerald-600' : 'text-slate-400'}`}>
                    {mod.icon}
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-widest mb-2 ${mod.status === 'active' ? 'text-emerald-700' : 'text-slate-400'}`}>
                    Módulo {mod.id}
                  </span>
                  <h4 className={`text-lg font-bold ${mod.status === 'active' ? 'text-emerald-950' : 'text-slate-700'}`}>
                    {mod.title}
                  </h4>
                </div>
                {/* Flecha Mobile */}
                {index < 3 && (
                  <ArrowRight className="text-slate-300 lg:hidden w-8 h-8 rotate-90 my-2" />
                )}
                {/* Flecha Desktop */}
                {index < 3 && (
                  <div className="hidden lg:flex items-center justify-center bg-white p-2 rounded-full border border-slate-100 z-10">
                    <ArrowRight className="text-slate-300 w-6 h-6" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* PROPUESTA ECONÓMICA */}
      <section id="inversion" className="py-24 bg-slate-900 text-white relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Propuesta Económica</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg">
              Roadmap de implementación y estructuración de costos diseñado para minimizar el riesgo y el impacto en el capital inicial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Card 1 */}
            <div className="bg-emerald-900 border border-emerald-700 rounded-3xl p-8 relative overflow-hidden transform hover:-translate-y-2 transition-transform shadow-2xl">
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-emerald-600 rounded-full blur-3xl opacity-30"></div>
              
              <div className="bg-emerald-500 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full inline-block mb-6">
                Fase 1
              </div>
              <h3 className="text-2xl font-bold mb-2">Desarrollo de Arquitectura</h3>
              <div className="text-4xl font-extrabold text-amber-400 mb-6">
                100% Bonificado
              </div>
              
              <p className="text-emerald-100 mb-8 leading-relaxed">
                Diseño y desarrollo de la arquitectura y módulos <strong>sin costo de inversión de capital inicial</strong> para la empresa.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm text-slate-200">Relevamiento y diseño UX/UI.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm text-slate-200">Desarrollo App Mobile Offline.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm text-slate-200">Desarrollo Web Dashboard.</span>
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 relative transform hover:-translate-y-2 transition-transform shadow-2xl">
              <div className="bg-slate-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full inline-block mb-6">
                Fase 2
              </div>
              <h3 className="text-2xl font-bold mb-2">Transición y Licencia</h3>
              <div className="text-4xl font-extrabold text-white mb-6">
                <span className="text-2xl font-normal text-slate-400">Absorbido en</span> OPEX
              </div>
              
              <p className="text-slate-300 mb-8 leading-relaxed">
                Entrega del módulo y cobro de licencia de uso mensual. Se financia absorbiendo el desarrollo dentro del presupuesto operativo actual.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-slate-400 flex-shrink-0" />
                  <span className="text-sm text-slate-300">Licenciamiento mensual predecible.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-slate-400 flex-shrink-0" />
                  <span className="text-sm text-slate-300">Mantenimiento y soporte técnico incluido.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-slate-400 flex-shrink-0" />
                  <span className="text-sm text-slate-300">Hosting y disponibilidad en la nube.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-emerald-950 border-t border-emerald-900 py-12 text-center text-emerald-400/60">
        <div className="flex justify-center items-center gap-2 mb-4 opacity-50">
          <TreePine className="w-6 h-6" />
          <span className="font-bold tracking-widest">YOIKI KIGI</span>
        </div>
        <p className="text-sm">Proyecto de Modernización Forestal &copy; {new Date().getFullYear()}</p>
      </footer>

    </div>
  );
}