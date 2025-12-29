import React from 'react';
import { TeamMember } from '../types';

export const Team: React.FC = () => {
  const team: TeamMember[] = [
    {
      id: '1',
      name: 'MDDr. František Berčík',
      role: 'Zubní lékař',
      bio: 'Specializace na záchovnou stomatologii a protetiku. Klade důraz na preciznost a bezbolestnost zákroků.',
      imageUrl: 'https://picsum.photos/id/1005/400/500' // Placeholder
    },
    {
      id: '2',
      name: 'MDDr. Jana Berčíková',
      role: 'Zubní lékařka',
      bio: 'Věnuje se komplexní péči o dospělé i dětské pacienty. Její doménou je empatický přístup.',
      imageUrl: 'https://picsum.photos/id/338/400/500' // Placeholder
    },
    {
      id: '3',
      name: 'MDDr. Magdalena Pinďáková',
      role: 'Zubní lékařka',
      bio: 'Zaměřuje se na estetickou stomatologii a endodoncii. Neustále se vzdělává v nových postupech.',
      imageUrl: 'https://picsum.photos/id/64/400/500' // Placeholder
    },
    {
      id: '4',
      name: 'Ing. Eliška Bolcková',
      role: 'Dentální hygienistka',
      bio: 'Profesionálka, která Vám pomůže udržet zuby čisté a zdravé. Naučí Vás správnou techniku čištění.',
      imageUrl: 'https://picsum.photos/id/447/400/500' // Placeholder
    },
    {
      id: '5',
      name: 'Tým asistentek',
      role: 'Zdravotní sestry',
      bio: 'Usměvavé a šikovné asistentky, které se starají o Váš komfort a hladký průběh ošetření.',
      imageUrl: 'https://picsum.photos/id/531/400/500' // Placeholder
    },
    {
      id: '6',
      name: 'Recepce',
      role: 'Administrativa',
      bio: 'První kontakt s ordinací. Postarají se o Vaše termíny a zodpoví Vaše dotazy.',
      imageUrl: 'https://picsum.photos/id/106/400/500' // Placeholder
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6">Náš tým</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Jsme tým profesionálů, kteří svou práci dělají s láskou. Seznamte se s lidmi, kteří se starají o Váš úsměv.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group">
              <div className="h-80 overflow-hidden">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-primary-600 font-medium text-sm uppercase tracking-wider mb-1">{member.role}</p>
                <h3 className="text-2xl font-serif font-bold text-slate-800 mb-3">{member.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};