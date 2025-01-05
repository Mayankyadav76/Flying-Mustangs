import React from 'react';

export default function About() {
  return (
    <div className="pt-16">
      <div className="relative h-96">
        <img
          src="https://images.unsplash.com/photo-1452859030917-45a996f147b4?auto=format&fit=crop&q=80&w=2070"
          alt="RC Planes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Us</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010, Flying Mustangs has been a hub for RC aviation enthusiasts at RTU, Kota. 
              We provide a supportive community where beginners and experts alike can pursue their passion 
              for aeromodelling.
            </p>
            <p className="text-gray-600 mb-4">
              Our club features state-of-the-art facilities including a dedicated flying field, 
              workshop area, and training simulators. We regularly organize competitions, workshops, 
              and social events for our members.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1579685055980-48dd748d862e?auto=format&fit=crop&q=80&w=800"
              alt="Club Activities"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Training Programs</h3>
              <p className="text-gray-600">
                Comprehensive training for beginners, covering basics to advanced techniques in RC flying.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Flying Field</h3>
              <p className="text-gray-600">
                Access to our maintained flying field with safety measures and equipment storage.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Events</h3>
              <p className="text-gray-600">
                Regular competitions, workshops, and social gatherings for the RC community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}