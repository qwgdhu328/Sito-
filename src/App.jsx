import React, { useState } from 'react';
import { Code, Globe, Shield, Zap, Menu, X, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="text-indigo-500" size={24} />
            <span className="font-bold text-lg tracking-tight">NexusWeb</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-indigo-400 transition">Caratteristiche</a>
            <a href="#services" className="hover:text-indigo-400 transition">Servizi</a>
            <a href="#contact" className="hover:text-indigo-400 transition">Contatti</a>
          </nav>

          <div className="hidden md:block">
            <a href="#contact" className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition shadow-lg shadow-indigo-600/20">
              Inizia Ora
            </a>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-4 space-y-3">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-indigo-400">Caratteristiche</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-indigo-400">Servizi</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-indigo-400">Contatti</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-6">
            <Zap size={14} /> Sviluppo Web di Nuova Generazione
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Crea il tuo sito web <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">veloce e moderno</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Realizziamo esperienze digitali straordinarie ottimizzate per le performance, il design e la conversione.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30">
              Richiedi Preventivo <ArrowRight size={18} />
            </a>
            <a href="#services" className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium px-6 py-3 rounded-xl transition border border-slate-700">
              Scopri i servizi
            </a>
          </div>
        </div>
      </section>

      {/* Caratteristiche */}
      <section id="features" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Perché scegliere la nostra piattaforma</h2>
            <p className="text-slate-400">Tutto ciò di cui hai bisogno per dominare il web con strumenti all'avanguardia.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance Estreme</h3>
              <p className="text-slate-400 text-sm">Caricamento fulmineo grazie a tecnologie ottimizzate e codice pulito senza fronzoli inutili.</p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Massima Sicurezza</h3>
              <p className="text-slate-400 text-sm">Protezione avanzata integrata e standard di sicurezza conformi alle normative più rigide.</p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Design Scalabile</h3>
              <p className="text-slate-400 text-sm">Architettura flessibile pronta a crescere insieme al tuo business, perfetta per qualsiasi dispositivo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione Servizi */}
      <section id="services" className="py-20 bg-slate-900/30 border-t border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">I Nostri Servizi</h2>
            <p className="text-slate-400">Soluzioni su misura per ogni esigenza digitale.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">Siti Vetrina & Landing Page</h3>
                <p className="text-slate-400 mb-6">Ideali per liberi professionisti, PMI e startup che vogliono presentarsi online con un impatto visivo straordinario.</p>
                <ul className="space-y-3 mb-8 text-sm text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-indigo-400" size={16} /> Design personalizzato</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-indigo-400" size={16} /> Ottimizzazione SEO base</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-indigo-400" size={16} /> Responsive Mobile & Tablet</li>
                </ul>
              </div>
              <a href="#contact" className="text-indigo-400 font-semibold text-sm hover:underline flex items-center gap-1">Scopri di più &rarr;</a>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">Web Application & E-commerce</h3>
                <p className="text-slate-400 mb-6">Piattaforme interattive avanzate, gestionali o negozi online complessi con integrazioni di pagamento sicure.</p>
                <ul className="space-y-3 mb-8 text-sm text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-cyan-400" size={16} /> Pannello di controllo dedicato</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-cyan-400" size={16} /> Integrazione gateway di pagamento</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-cyan-400" size={16} /> Scalabilità cloud illimitata</li>
                </ul>
              </div>
              <a href="#contact" className="text-cyan-400 font-semibold text-sm hover:underline flex items-center gap-1">Scopri di più &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contatti / Form */}
      <section id="contact" className="py-20 bg-slate-950">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Parla con noi</h2>
            <p className="text-slate-400">Compila il modulo per ricevere un preventivo gratuito o maggiori informazioni.</p>
          </div>

          {formSubmitted ? (
            <div className="bg-emerald-950/40 border border-emerald-800 p-8 rounded-2xl text-center">
              <h3 className="text-xl font-bold text-emerald-400 mb-2">Messaggio Inviato!</h3>
              <p className="text-slate-300 text-sm">Grazie per averci contattato. Ti risponderemo nel giro di poche ore.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Il tuo Nome</label>
                <input required type="text" placeholder="Mario Rossi" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Indirizzo Email</label>
                <input required type="email" placeholder="mario@esempio.it" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Messaggio</label>
                <textarea required rows={4} placeholder="Descrivi il tuo progetto..." className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition"></textarea>
              </div>
              <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 rounded-xl transition shadow-lg shadow-indigo-600/30">
                Invia Richiesta
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 text-center text-sm text-slate-500">
        <p>&copy; 2026 NexusWeb. Tutti i diritti riservati. Sviluppato con React e Tailwind CSS.</p>
      </footer>
    </div>
  );
}
