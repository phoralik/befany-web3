import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-primary-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-4">O nás & Jak fungujeme</h1>
          <p className="text-lg text-primary-700 max-w-2xl mx-auto">
            Naším cílem není jen opravovat zuby, ale naučit vás, jak o ně pečovat, aby opravy nebyly potřeba.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Mission */}
        <div className="flex flex-col lg:flex-row gap-16 mb-24">
          <div className="lg:w-1/2">
            <img 
              src="https://picsum.photos/id/338/800/1000" 
              alt="Dental tools close up" 
              className="rounded-lg shadow-xl w-full object-cover h-[500px]"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-serif font-bold text-slate-800 mb-6">Naše filozofie</h2>
            <p className="text-slate-600 mb-4 leading-relaxed text-lg">
              V Dentálním studiu Befany přistupujeme ke každému pacientovi jako k partnerovi. Věříme, že základem úspěšné léčby je vzájemná důvěra a informovanost.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              Neprovádíme pouze „hašení požárů“. Snažíme se o komplexní rehabilitaci chrupu a nastavení takové domácí péče, která zajistí stabilitu výsledku na dlouhá léta.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
              <p className="text-amber-900 italic font-medium">
                "Kvalitní péče vyžaduje čas. Raději ošetříme méně pacientů, ale s maximální pečlivostí a pozorností."
              </p>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-24">
          <h2 className="text-3xl font-serif font-bold text-slate-800 mb-12 text-center">Cesta nového pacienta</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 relative">
              <span className="absolute -top-4 -left-4 w-12 h-12 bg-primary-800 text-white rounded-full flex items-center justify-center text-xl font-bold">1</span>
              <h3 className="text-xl font-bold mb-4 text-primary-900">Vstupní vyšetření</h3>
              <p className="text-slate-600">
                Detailní prohlídka chrupu a měkkých tkání, zhotovení rentgenových snímků (OPG i detailní), fotodokumentace a analýza stavu.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 relative">
              <span className="absolute -top-4 -left-4 w-12 h-12 bg-primary-800 text-white rounded-full flex items-center justify-center text-xl font-bold">2</span>
              <h3 className="text-xl font-bold mb-4 text-primary-900">Stanovení plánu</h3>
              <p className="text-slate-600">
                Na základě vyšetření sestavíme léčebný plán a cenovou kalkulaci. Vše s vámi probereme, vysvětlíme priority a možnosti řešení.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 relative">
              <span className="absolute -top-4 -left-4 w-12 h-12 bg-primary-800 text-white rounded-full flex items-center justify-center text-xl font-bold">3</span>
              <h3 className="text-xl font-bold mb-4 text-primary-900">Hygiene & Sanace</h3>
              <p className="text-slate-600">
                Léčba začíná perfektní hygienou. Následuje samotné ošetření (výplně, kanálky, protetika) v klidném tempu a bez bolesti.
              </p>
            </div>
          </div>
        </div>

        {/* Expectations (Do's and Don'ts) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-green-50 p-8 rounded-xl">
            <h3 className="text-2xl font-serif font-bold text-green-900 mb-6">Co od vás očekáváme</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" />
                <span className="text-green-800">Dochvilnost na objednané termíny.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" />
                <span className="text-green-800">Ochotu spolupracovat na dentální hygieně.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" />
                <span className="text-green-800">Upřímnost ohledně vašeho zdravotního stavu.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" />
                <span className="text-green-800">Respektování nastaveného léčebného plánu.</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 p-8 rounded-xl">
            <h3 className="text-2xl font-serif font-bold text-red-900 mb-6">Co není naším cílem</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <XCircle className="text-red-600 flex-shrink-0 mt-1" />
                <span className="text-red-800">Pouze rychlé "látání děr" bez koncepce.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="text-red-600 flex-shrink-0 mt-1" />
                <span className="text-red-800">Ošetřování pacientů, kteří nechtějí chodit na hygienu.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="text-red-600 flex-shrink-0 mt-1" />
                <span className="text-red-800">Slibování nereálných zázraků na počkání.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="text-red-600 flex-shrink-0 mt-1" />
                <span className="text-red-800">Křičet na pacienty – u nás se bát nemusíte.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};