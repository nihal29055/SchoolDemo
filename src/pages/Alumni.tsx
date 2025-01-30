import React from 'react';
import { Award, Users, Globe } from 'lucide-react';

export default function Alumni() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80"
          alt="Alumni Gathering"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
              Alumni Network
            </h1>
            <p className="text-white text-xl max-w-2xl">
              Stay connected with your alma mater and fellow graduates
            </p>
          </div>
        </div>
      </div>

      {/* Notable Alumni */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Notable Alumni</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {notableAlumni.map((alumni, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
                <img src={alumni.image} alt={alumni.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{alumni.name}</h3>
                  <p className="text-blue-600 mb-2">{alumni.class}</p>
                  <p className="text-gray-600 mb-4">{alumni.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Alumni Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Get Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {opportunities.map((opportunity, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">{opportunity.title}</h3>
                <p className="text-gray-600 mb-6">{opportunity.description}</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const notableAlumni = [
  {
    name: "Dr. Sarah Johnson",
    class: "Class of 2000",
    achievement: "Nobel Prize Winner in Physics",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
  },
  {
    name: "Michael Chen",
    class: "Class of 2005",
    achievement: "CEO of Tech Innovations Inc.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  },
  {
    name: "Dr. Emily Rodriguez",
    class: "Class of 1995",
    achievement: "Leading Medical Researcher",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
  }
];

const benefits = [
  {
    icon: <Award className="w-6 h-6 text-blue-600" />,
    title: "Lifetime Learning",
    description: "Access to continuing education programs, workshops, and professional development opportunities."
  },
  {
    icon: <Users className="w-6 h-6 text-blue-600" />,
    title: "Networking Events",
    description: "Regular meetups, reunions, and professional networking events with fellow alumni."
  },
  {
    icon: <Globe className="w-6 h-6 text-blue-600" />,
    title: "Global Community",
    description: "Connect with alumni chapters worldwide and access our global professional network."
  }
];

const opportunities = [
  {
    title: "Mentor a Student",
    description: "Share your experience and guide current students in their academic and professional journey."
  },
  {
    title: "Support Scholarships",
    description: "Contribute to our scholarship fund and help make education accessible to deserving students."
  }
];