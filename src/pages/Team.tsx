import React from 'react';
import TeamMember from '../components/TeamMember';

export default function Team() {
  const teamMembers = [
    {
      name: "Mayank Yadav",
      role: "Club President",
      // image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Nishant Sharma",
      role: "Head Instructor",
      // image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Afshan Ali",
      role: "Technical Expert",
      // image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Emily Brown",
      role: "Events Coordinator",
      // image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "David Lee",
      role: "Safety Officer",
      // image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Lisa Chen",
      role: "Membership Coordinator",
      // image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="pt-16">
      <div className="relative h-96">
        <img
          src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=2070"
          alt="Team Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Team</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}