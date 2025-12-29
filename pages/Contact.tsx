import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../components/Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
    file: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation of form submission
    alert('Děkujeme za zprávu. Toto je demo formulář, data nebyla odeslána.');
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-primary-900 py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold mb-4">Kontaktujte nás</h1>
          <p className="text-primary-100 text-lg">Jsme tu pro Vás. Objednejte se nebo se zeptejte.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 -mt-10">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          
          {/* Contact Info */}
          <div className="p-8 md:p-12 bg-primary-800 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-serif font-bold mb-8">Kontaktní údaje</h2>
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <div className="bg-primary-700 p-3 rounded-full">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Adresa</h3>
                    <p className="text-primary-100">Komenského 10 (4. patro)<br />763 21 Slavičín</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-primary-700 p-3 rounded-full">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Telefon</h3>
                    <a href="tel:+420771167069" className="text-primary-100 hover:text-white transition block text-xl">+420 771 167 069</a>
                    <p className="text-sm text-primary-300 mt-1">Po-Čt 7-15, Pá 7-12</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-primary-700 p-3 rounded-full">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">E-mail</h3>
                    <a href="mailto:info@befany.cz" className="text-primary-100 hover:text-white transition">info@befany.cz</a>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="mt-12 pt-8 border-t border-primary-700">
               <p className="text-sm text-primary-300">
                 Parkování je možné v okolí polikliniky nebo na náměstí (cca 3 minuty chůze).
               </p>
            </div>
          </div>

          {/* Form */}
          <div className="p-8 md:p-12">
            <h2 className="text-2xl font-serif font-bold text-slate-800 mb-6">Napište nám</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Jméno a příjmení</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                  placeholder="Jan Novák"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Telefon nebo E-mail</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                  placeholder="+420 777 000 000"
                  value={formData.contact}
                  onChange={e => setFormData({...formData, contact: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Stručný popis</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                  placeholder="Rád bych se objednal na preventivní prohlídku..."
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <div>
                 <label className="block text-sm font-medium text-slate-700 mb-1">Nahrát RTG (volitelné)</label>
                 <input 
                   type="file" 
                   accept="image/*,.pdf"
                   className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
                   onChange={e => setFormData({...formData, file: e.target.files ? e.target.files[0] : null})}
                 />
              </div>

              <Button type="submit" fullWidth className="flex items-center gap-2">
                <Send size={18} />
                Odeslat poptávku
              </Button>
              <p className="text-xs text-slate-500 text-center mt-2">
                Odesláním souhlasíte se zpracováním osobních údajů. Neptáte se na pohotovost.
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};