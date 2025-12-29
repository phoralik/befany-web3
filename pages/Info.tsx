import React from 'react';
import { Clock, CalendarOff, Info as InfoIcon } from 'lucide-react';

export const Info: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif font-bold text-slate-800 mb-12 text-center">Provoz & Aktuality</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Opening Hours */}
        <div className="bg-white p-8 rounded-xl shadow-md border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="text-primary-700 w-8 h-8" />
            <h2 className="text-2xl font-serif font-bold text-primary-900">Ordinační hodiny</h2>
          </div>
          
          <div className="space-y-4 text-lg">
            <div className="flex justify-between border-b border-slate-100 pb-2">
              <span className="font-medium text-slate-700">Pondělí</span>
              <span className="text-slate-900 font-bold">7:00 – 15:00</span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-2">
              <span className="font-medium text-slate-700">Úterý</span>
              <span className="text-slate-900 font-bold">7:00 – 15:00</span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-2">
              <span className="font-medium text-slate-700">Středa</span>
              <span className="text-slate-900 font-bold">7:00 – 15:00</span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-2">
              <span className="font-medium text-slate-700">Čtvrtek</span>
              <span className="text-slate-900 font-bold">7:00 – 15:00</span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-2">
              <span className="font-medium text-slate-700">Pátek</span>
              <span className="text-slate-900 font-bold">7:00 – 12:00</span>
            </div>
            <div className="flex justify-between pt-2 text-slate-400 italic">
              <span>Víkendy a svátky</span>
              <span>Zavřeno</span>
            </div>
          </div>
          <div className="mt-8 p-4 bg-slate-50 rounded text-sm text-slate-600">
            Poslední pacient je ošetřen 30 minut před koncem pracovní doby. Objednání je nutné.
          </div>
        </div>

        {/* Announcements / CMS Area */}
        <div className="space-y-6">
          <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
            <div className="flex items-center gap-3 mb-4">
              <InfoIcon className="text-amber-600 w-6 h-6" />
              <h3 className="text-xl font-bold text-amber-900">Aktuální oznámení</h3>
            </div>
            <div className="prose prose-amber text-amber-800">
              <p className="mb-2 font-medium">Kapacita dentální hygieny</p>
              <p className="mb-4 text-sm">
                Vážení pacienti, z důvodu naplněné kapacity přijímáme na dentální hygienu primárně pacienty registrované v naší ordinaci. Děkujeme za pochopení.
              </p>
              <p className="text-xs text-amber-600/70">Aktualizováno: 25. 10. 2023</p>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <CalendarOff className="text-blue-600 w-6 h-6" />
              <h3 className="text-xl font-bold text-blue-900">Plánovaná dovolená</h3>
            </div>
             <div className="prose prose-blue text-blue-800">
              <p className="mb-2">
                V termínu <strong>24. 12. – 1. 1.</strong> ordinace neordinuje.
              </p>
              <p className="text-sm">
                V akutních případech se obraťte na krajskou pohotovost ve Zlíně. Přejeme klidné svátky.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};