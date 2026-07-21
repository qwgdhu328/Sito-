import React, { useState } from 'react';
import { Sparkles, Code, Layout, Send, Layers } from 'lucide-react';

export default function App() {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Ciao! Descrivi l\'applicazione o la sezione che vuoi generare.' }
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setMessages(prev => [
      ...prev,
      { sender: 'user', text: prompt },
      { sender: 'ai', text: `Ho ricevuto la richiesta: "${prompt}". In un ambiente reale come Lovable, qui l'intelligenza artificiale aggiornerebbe i componenti in tempo reale.` }
    ]);
    setPrompt('');
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-950">
      {/* Pannello di Chat (Sinistra) */}
      <div className="w-1/3 flex flex-col border-r border-slate-800 bg-slate-900/50">
        <div className="p-4 border-b border-slate-800 flex items-center gap-2">
          <Sparkles className="text-indigo-400" size={20} />
          <h1 className="font-bold text-lg bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            AI Builder Studio
          </h1>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`p-3 rounded-lg max-w-[85%] text-sm ${
                msg.sender === 'user' 
                  ? 'ml-auto bg-indigo-600 text-white' 
                  : 'mr-auto bg-slate-800 text-slate-200 border border-slate-700'
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <form onSubmit={handleSend} className="p-4 border-t border-slate-800 flex gap-2">
          <input 
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Chiedi di modificare il sito..."
            className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-indigo-500"
          />
          <button type="submit" className="bg-indigo-600 hover:bg-indigo-500 text-white p-2 rounded-lg transition">
            <Send size={18} />
          </button>
        </form>
      </div>

      {/* Anteprima del Sito (Destra) */}
      <div className="w-2/3 flex flex-col bg-slate-950">
        <div className="h-14 border-b border-slate-800 flex items-center justify-between px-6 bg-slate-900/30">
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-1.5 text-indigo-400 font-medium">
              <Layout size={16} /> Anteprima Live
            </span>
          </div>
          <button className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-3 py-1.5 rounded-md transition shadow-sm">
            Deploy Gratuito
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center p-8 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 max-w-lg w-full text-center shadow-2xl">
            <Layers className="mx-auto text-indigo-400 mb-4" size={48} />
            <h2 className="text-2xl font-bold mb-2">La tua applicazione</h2>
            <p className="text-slate-400 text-sm mb-6">
              Questo spazio simula il canvas interattivo. Una volta scritto il codice dei componenti, compariranno qui in tempo reale.
            </p>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-500 transition">
              Pulsante di Esempio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
