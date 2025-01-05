import React from 'react';
import EventCard from '../components/EventCard';
import TeamMember from '../components/TeamMember';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const events = [
    {
      title: "RC Plane Competition",
      date: "July 15, 2024",
      description: "Join our exciting RC plane competition featuring aerobatic displays and racing events.",
      image: "https://images.unsplash.com/photo-1579685055980-48dd748d862e?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Drone Racing Workshop",
      date: "August 5, 2024",
      description: "Learn FPV drone racing techniques from expert pilots in this hands-on workshop.",
      image: "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const teamMembers = [
    {
      name: "Mayank Yadav",
      role: "Club President",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Nishant Sharma",
      role: "Head Instructor",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Mike Wilson",
      role: "Technical Expert",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <>
      <section className="relative h-screen">
        <img
          src="https://images.unsplash.com/photo-1579685055980-48dd748d862e?auto=format&fit=crop&q=80&w=2070"
          alt="RC Plane"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Flying Mustangs</h1>
            <p className="text-xl md:text-2xl mb-8">Experience the thrill of RC flight</p>
            <Link to="/about" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 inline-block">
              Join Us Today
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/team" className="inline-flex items-center text-blue-600 hover:text-blue-700">
              View All Team Members <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="text-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}