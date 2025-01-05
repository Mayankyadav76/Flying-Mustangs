import React from 'react';
import { Plane, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Plane className="h-8 w-8 mr-2" />
            <span className="font-bold text-xl">Flying Mustangs</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="hover:bg-blue-800 px-3 py-2 rounded-md">Home</a>
              <a href="/about" className="hover:bg-blue-800 px-3 py-2 rounded-md">About</a>
              <a href="/team" className="hover:bg-blue-800 px-3 py-2 rounded-md">Our Team</a>
              <a href="/gallery" className="hover:bg-blue-800 px-3 py-2 rounded-md">Gallery</a>
              <a href="/login" className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-md">Login</a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block hover:bg-blue-800 px-3 py-2 rounded-md">Home</a>
            <a href="/about" className="block hover:bg-blue-800 px-3 py-2 rounded-md">About</a>
            <a href="/team" className="block hover:bg-blue-800 px-3 py-2 rounded-md">Our Team</a>
            <a href="/gallery" className="block hover:bg-blue-800 px-3 py-2 rounded-md">Gallery</a>
            <a href="/login" className="block bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-md">Login</a>
          </div>
        </div>
      )}
    </nav>
  );
}