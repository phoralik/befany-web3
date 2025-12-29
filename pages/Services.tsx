import React from 'react';
import { Sparkles, Hammer, Crown, Smile, Microscope, ScanLine } from 'lucide-react';
import { ServiceItem } from '../types';

export const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: 'prevention',
      title: 'Preventivní prohlídky',
      description: 'Základ péče. Pravidelná kontrola chrupu a dásní 2x ročně odhalí problémy v počátku, kdy je řešení snadné a levné.',
      iconName: 'Microscope'
    },
    {
      id: 'conservation',
      title: 'Konzervační stomatologie',
      description: 'Záchovná stomatologie. Estetické bílé výplně (plomby), ošetření kořenových kanálků (endodoncie) pod mikroskopem.',
      iconName: 'Hammer'
    },
    {
      id: 'prosthetics',
      title: 'Fixní a snímatelné náhrady',
      description: 'Když je zub příliš poškozen nebo chybí. Korunky, můstky, fazety a kvalitní snímatelné náhrady pro obnovu funkce.',
      iconName: 'Crown'
    },
    {
      id: 'hygiene',
      title: 'Dentální hygiena',
      description: 'Odstranění zubního kamene, pigmentací a instruktáž čištění. Klíč k prevenci parodontózy. (Kapacita aktuálně omezena)',
      iconName: 'Sparkles'
    },
    {
      id: 'whitening',
      title: 'Bělení zubů',
      description: 'Bezpečné a účinné zesvětlení odstínu zubů pro zářivý úsměv. Nabízíme domácí i kombinované bělení.',
      iconName: 'Smile'
    },
    {
      id: 'opg',
      title: 'OPG rentgen',
      description: 'Panoramatický snímek čelistí přímo u nás v ordinaci. Okamžitá diagnostika bez nutnosti dojíždět jinam.',
      iconName: 'ScanLine'
    }
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Microscope': return <Microscope size={32} />;
      case 'Hammer': return <Hammer size={32} />;
      case 'Crown': return <Crown size={32} />;
      case 'Sparkles': return <Sparkles size={32} />;
      case 'Smile': return <Smile size={32} />;
      case 'ScanLine': return <ScanLine size={32} />;
      default: return <Sparkles size={32} />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6">Služby a péče</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Poskytujeme komplexní stomatologickou péči pro celou rodinu. Používáme moderní technologie a materiály, které zaručují dlouhou životnost a estetiku.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition duration-300 border border-slate-100 flex flex-col group">
              <div className="mb-6 p-4 bg-primary-50 text-primary-700 rounded-lg inline-flex self-start group-hover:bg-primary-600 group-hover:text-white transition duration-300">
                {getIcon(service.iconName)}
              </div>
              <h3 className="text-2xl font-serif font-semibold text-slate-800 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};