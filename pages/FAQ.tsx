import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FaqItem } from '../types';

export const FAQ: React.FC = () => {
  const faqs: FaqItem[] = [
    {
      question: 'Přijímáte nové pacienty?',
      answer: 'Aktuální stav příjmu nových pacientů se mění. Prosím, sledujte sekci Provoz & Aktuality nebo nás kontaktujte telefonicky pro ověření kapacity.'
    },
    {
      question: 'Co dělat, když se nemohu dovolat?',
      answer: 'Během ošetřování pacientů nemůžeme vždy zvedat telefon. Prosím, vyčkejte nebo nám napište e-mail na info@befany.cz. Ozveme se Vám zpět, jakmile to bude možné.'
    },
    {
      question: 'Jak zrušit termín?',
      answer: 'Pokud se nemůžete dostavit, dejte nám prosím vědět alespoň 24 hodin předem telefonicky nebo SMS. Uvolníte tak místo pro akutní pacienty.'
    },
    {
      question: 'Jak dlouho trvá první návštěva?',
      answer: 'Vstupní vyšetření obvykle trvá 45-60 minut. Zahrnuje anamnézu, RTG snímky, prohlídku a konzultaci plánu.'
    },
    {
      question: 'Ošetřujete i děti?',
      answer: 'Ano, ošetřujeme i dětské pacienty. Doporučujeme první návštěvu již po prořezání prvních zoubků, aby si dítě zvyklo na prostředí ordinace hrou.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <div className="text-center mb-12">
        <HelpCircle className="mx-auto text-primary-500 w-12 h-12 mb-4" />
        <h1 className="text-4xl font-serif font-bold text-slate-800 mb-4">Časté otázky</h1>
        <p className="text-slate-600">Odpovědi na to, co vás nejčastěji zajímá.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} item={faq} />
        ))}
      </div>
    </div>
  );
};

const AccordionItem: React.FC<{ item: FaqItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-lg bg-white overflow-hidden">
      <button
        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none bg-slate-50 hover:bg-slate-100 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-slate-800 text-lg">{item.question}</span>
        {isOpen ? <ChevronUp className="text-slate-500" /> : <ChevronDown className="text-slate-500" />}
      </button>
      <div
        className={`px-6 text-slate-600 bg-white transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 py-5 opacity-100' : 'max-h-0 py-0 opacity-0'
        }`}
      >
        {item.answer}
      </div>
    </div>
  );
};