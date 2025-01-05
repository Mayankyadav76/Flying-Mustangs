import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

export default function TeamMember({ name, role, image }: TeamMemberProps) {
  return (
    <div className="text-center">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
}