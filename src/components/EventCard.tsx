import React from 'react';
import { Calendar } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  image: string;
}

export default function EventCard({ title, date, description, image }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="flex items-center text-gray-600 mb-4">
          <Calendar className="h-5 w-5 mr-2" />
          {date}
        </p>
        <p className="text-gray-700">{description}</p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Learn More
        </button>
      </div>
    </div>
  );
}