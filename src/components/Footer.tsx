import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center"><Phone className="h-5 w-5 mr-2" /> +91 7891957210</p>
              <p className="flex items-center"><Mail className="h-5 w-5 mr-2" /> flyingmustangs01@gmail.com</p>
              <p className="flex items-center"><MapPin className="h-5 w-5 mr-2" /> FM Space, RTU, Kota, 324010</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-blue-300">About Us</a></li>
              <li><a href="/team" className="hover:text-blue-300">Our Team</a></li>
              <li><a href="/gallery" className="hover:text-blue-300">Gallery</a></li>
              <li><a href="/login" className="hover:text-blue-300">Member Login</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for updates</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-md text-gray-900 w-full"
              />
              <button className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800 text-center">
          <p>&copy; 2024 Flying Mustangs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}