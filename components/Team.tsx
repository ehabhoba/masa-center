import React from 'react';
import { teamMembers } from '../constants';
import { TeamMember } from '../types';

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="text-center bg-gray-900/50 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden p-6 card-glow-effect border border-gray-700/50 flex flex-col items-center">
    <img
      src={member.imageUrl}
      alt={`صورة ${member.name}`}
      className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-amber-500/30 transition-transform duration-300 group-hover:scale-105"
      loading="lazy"
    />
    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
    <p className="text-amber-400 text-sm mb-3">{member.title}</p>
    <p className="text-gray-400 text-sm leading-relaxed flex-grow">{member.bio}</p>
  </div>
);

const Team: React.FC = () => {
  return (
    <section id="team" className="py-16 sm:py-20 bg-black section-animate">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">تعرف على فريقنا المحترف</h2>
          <p className="mt-4 text-lg text-gray-300">الأيدي الخبيرة التي ستضمن لك تجربة لا تُنسى.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Team);