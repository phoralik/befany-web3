import React from 'react';
import { Phone, AlertTriangle, ThermometerSnowflake, Pill, Clock } from 'lucide-react';
import { Button } from '../components/Button';
import { RoutePath } from '../types';
import { NavLink } from 'react-router-dom';

export const Emergency: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="bg-red-50 border-b border-red-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <AlertTriangle className="mx-auto text-red-600 w-16 h-16 mb-4" />
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-red-900 mb-4">Akutní situace & Pohotovost</h1>
          <p className="text-lg text-red-800 max-w-2xl mx-auto">
            Bolí to? Víme, že bolest zubů je nepříjemná. Přečtěte si, jak postupovat, abychom Vám mohli co nejrychleji pomoci.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        
        {/* Step 1: When to call */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-slate-800 mb-6 border-b pb-2">Kdy se jedná o akutní stav?</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-700 text-lg">
            <li>Silná bolest, která neustupuje ani po lécích.</li>
            <li>Otok tváře, dásně nebo kolem zubu.</li>
            <li>Úraz zubu (vyražení, zlomení).</li>
            <li>Krvácení po trhání zubu, které nelze zastavit.</li>
          </ul>
          <div className="mt-6 bg-slate-100 p-4 rounded-lg text-slate-600 text-sm italic">
            Poznámka: Vypadlá výplň nebo uvolněná korunka bez bolesti obvykle snese odklad o pár dní, ale přesto nás kontaktujte co nejdříve.
          </div>
        </div>

        {/* Step 2: During working hours */}
        <div className="bg-white border-2 border-primary-100 rounded-2xl p-8 mb-12 shadow-lg">
          <div className="flex items-start gap-4">
            <Clock className="text-primary-700 w-8 h-8 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-primary-900 mb-2">Volejte během ordinační doby</h3>
              <p className="text-slate-600 mb-4">
                Pokud máte akutní potíže v pracovní dny, volejte prosím hned ráno mezi <strong>7:00 a 8:00</strong>. Pokusíme se Vás zařadit do programu.
              </p>
              <a href="tel:+420771167069" className="text-2xl font-bold text-primary-700 hover:text-primary-900 block mb-4">
                +420 771 167 069
              </a>
              <p className="text-sm text-slate-500">
                Prosíme, nechoďte bez objednání ("na blind"). Můžeme mít plno a nebudeme se Vám moci věnovat.
              </p>
            </div>
          </div>
        </div>

        {/* Step 3: Outside working hours */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-slate-800 mb-6 border-b pb-2">Mimo ordinační dobu a o víkendech</h2>
          <p className="text-slate-700 mb-4">
            Pokud nás nezastihnete, využijte zubní pohotovost ve Zlínském kraji.
          </p>
          <div className="bg-slate-50 p-6 rounded-xl">
             <h4 className="font-bold text-slate-900 mb-2">Pohotovost Zlín (Baťova nemocnice)</h4>
             <p className="text-slate-600 mb-2">Havlíčkovo nábřeží 600, Zlín</p>
             <p className="text-slate-600 mb-4 font-medium">So, Ne, Svátky: 8:00 – 12:00</p>
             <p className="text-sm text-slate-500">Před návštěvou doporučujeme ověřit aktuální rozpis na webu krajské nemocnice.</p>
          </div>
        </div>

        {/* Step 4: First Aid Advice */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-slate-800 mb-6 border-b pb-2">První pomoc doma</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4 p-4 border rounded-lg">
              <Pill className="text-blue-500 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Analgetika</h4>
                <p className="text-sm text-slate-600">Užijte běžně dostupná analgetika (Ibalgin, Paralen) dle příbalového letáku. Nekombinujte bezhlavě.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 border rounded-lg">
              <ThermometerSnowflake className="text-blue-500 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Chlazení</h4>
                <p className="text-sm text-slate-600">Při otoku chlaďte tvář zvenčí (led v utěrce). Nikdy neteplujte!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
            <p className="mb-4 text-slate-600">Není to akutní? Objednejte se standardní cestou.</p>
            <NavLink to={RoutePath.CONTACT}>
                <Button>Kontaktní formulář</Button>
            </NavLink>
        </div>

      </div>
    </div>
  );
};