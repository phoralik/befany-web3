import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShieldCheck, Heart, Users, AlertCircle, Calendar } from 'lucide-react';
import { Button } from '../components/Button';
import { RoutePath } from '../types';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center bg-slate-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/439/1920/1080" 
            alt="Modern dental office" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-white fade-in">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              Dentální péče s klidem, přehledem a lidským přístupem.
            </h1>
            <p className="text-xl text-slate-200 mb-8 font-light">
              Vaše zdraví a pohodlí jsou pro nás prioritou. Jsme dentální studio Befany v centru Slavičína.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <NavLink to={RoutePath.CONTACT}>
                <Button variant="secondary" className="w-full sm:w-auto text-lg px-8 py-4">
                  Kontakt & Konzultace
                </Button>
              </NavLink>
              <NavLink to={RoutePath.EMERGENCY}>
                <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-4 border-white text-white hover:bg-white/10 hover:text-white">
                  Akutní případ?
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <div className="bg-primary-50 border-b border-primary-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-center text-primary-800 text-sm md:text-base text-center">
          <AlertCircle className="inline-block mr-2 w-5 h-5" />
          <span>
            <strong>Aktuálně:</strong> Kapacity dentální hygieny jsou momentálně omezené. Děkujeme za pochopení.
          </span>
        </div>
      </div>

      {/* 3 Pillars */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-4 text-slate-800">Bezbolestné ošetření</h3>
              <p className="text-slate-600 leading-relaxed">
                Strach ze zubaře nechte přede dveřmi. Používáme moderní anestetika a šetrné postupy pro Váš maximální komfort.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mb-6">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-4 text-slate-800">Přátelská atmosféra</h3>
              <p className="text-slate-600 leading-relaxed">
                Věříme v lidský přístup. Vysvětlíme Vám každý krok ošetření, abyste se v křesle cítili bezpečně a uvolněně.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-slate-100 text-slate-700 rounded-full flex items-center justify-center mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-4 text-slate-800">Zdraví na prvním místě</h3>
              <p className="text-slate-600 leading-relaxed">
                Nelepíme jen "díry". Hledáme příčiny a tvoříme dlouhodobé plány péče pro trvale zdravý úsměv.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:w-1/2 md:pr-12">
            <h2 className="text-4xl font-serif font-bold text-slate-800 mb-6">Hledáte stomatologa, kterému můžete důvěřovat?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Přijďte se přesvědčit, že péče o zuby může být příjemná. Zaměřujeme se na pacienty, kteří hledají kvalitu a dlouhodobou spolupráci.
            </p>
            <NavLink to={RoutePath.ABOUT}>
              <Button variant="outline" className="mr-4">Zjistit více o nás</Button>
            </NavLink>
          </div>
          <div className="md:w-1/2">
             <img src="https://picsum.photos/id/65/800/600" alt="Consultation" className="rounded-lg shadow-2xl w-full" />
          </div>
        </div>
      </section>
    </div>
  );
};