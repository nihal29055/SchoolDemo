import React from 'react';
import { Building, Coffee, Book, Dumbbell, Home, Utensils } from 'lucide-react';

export default function Campus() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80"
          alt="Campus Life"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
              Campus Life
            </h1>
            <p className="text-white text-xl max-w-2xl">
              Experience the vibrant community and modern facilities at Saint Joseph's
            </p>
          </div>
        </div>
      </div>

      {/* Facilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Campus Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
                <img src={facility.image} alt={facility.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {facility.icon}
                    <h3 className="text-xl font-semibold ml-2">{facility.name}</h3>
                  </div>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Life */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Student Life</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studentLife.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Virtual Campus Tour</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {tourSpots.map((spot, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={spot.image}
                  alt={spot.name}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-white font-medium text-lg">{spot.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const facilities = [
  {
    name: "Modern Library",
    icon: <Book className="w-6 h-6 text-blue-600" />,
    description: "State-of-the-art library with digital resources and study spaces.",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80"
  },
  {
    name: "Sports Complex",
    icon: <Dumbbell className="w-6 h-6 text-blue-600" />,
    description: "Comprehensive sports facilities including gym, pool, and courts.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80"
  },
  {
    name: "Student Center",
    icon: <Coffee className="w-6 h-6 text-blue-600" />,
    description: "Modern spaces for relaxation, dining, and student activities.",
    image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80"
  }
];

const studentLife = [
  {
    title: "Residential Life",
    description: "Experience comfortable and inclusive on-campus living.",
    features: [
      "Modern dormitories with Wi-Fi",
      "24/7 security",
      "Common rooms and study areas",
      "Laundry facilities"
    ]
  },
  {
    title: "Dining Services",
    description: "Multiple dining options across campus.",
    features: [
      "Multiple cafeterias",
      "Healthy meal options",
      "International cuisine",
      "Dietary accommodations"
    ]
  }
];

const tourSpots = [
  {
    name: "Main Building",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80"
  },
  {
    name: "Student Commons",
    image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&q=80"
  },
  {
    name: "Research Center",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80"
  },
  {
    name: "Sports Facilities",
    image: "https://images.unsplash.com/photo-1577985051167-0d49eec21977?auto=format&fit=crop&q=80"
  }
];