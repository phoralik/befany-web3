import React from 'react';
import { PriceItem } from '../types';

export const Pricing: React.FC = () => {
  const prices: PriceItem[] = [
    { service: 'Vstupní komplexní vyšetření (vč. OPG a plánu)', price: '1 500 - 2 000 Kč' },
    { service: 'Dentální hygiena (vstupní / recall)', price: '1 800 / 1 400 Kč' },
    { service: 'Fotokompozitní výplň (bílá) - dle rozsahu', price: '2 200 - 4 500 Kč' },
    { service: 'Endodontické ošetření (1 kanálek pod mikroskopem)', price: 'od 4 000 Kč' },
    { service: 'Celokeramická korunka', price: 'od 11 000 Kč' },
    { service: 'Extrakce zubu (jednoduchá / chirurgická)', price: '1 500 / 3 500 Kč' },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-serif font-bold text-slate-800 mb-8 text-center">Ceník výkonů</h1>
        
        <div className="bg-primary-50 p-6 rounded-xl border border-primary-100 mb-12">
          <h2 className="text-xl font-bold text-primary-900 mb-3">Filozofie cenotvorby</h2>
          <p className="text-primary-800 leading-relaxed mb-4">
            V naší ordinaci sázíme na kvalitu a trvanlivost. Používáme špičkové materiály a moderní technologie (mikroskop, strojová endodoncie), což se odráží v ceně ošetření.
          </p>
          <p className="text-primary-800 font-medium">
            Každý pacient obdrží před zahájením léčby individuální cenový plán. Ceny se mohou lišit dle časové a technologické náročnosti konkrétního zákroku.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-slate-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600 uppercase tracking-wider">Výkon</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-slate-600 uppercase tracking-wider">Orientační cena</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {prices.map((item, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4 text-slate-800 font-medium">{item.service}</td>
                    <td className="px-6 py-4 text-right text-slate-600 whitespace-nowrap">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-slate-50 text-xs text-slate-500 text-center">
            * Ceny jsou pouze orientační a mohou se měnit. Kompletní ceník je k nahlédnutí v ordinaci.
          </div>
        </div>
      </div>
    </div>
  );
};