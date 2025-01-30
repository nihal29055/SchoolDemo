import React from 'react';
import { Music, Palette, Code, Globe, Activity, BookOpen } from 'lucide-react';

export default function ClubsActivities() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80"
          alt="Student Activities"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
              Clubs & Activities
            </h1>
            <p className="text-white text-xl max-w-2xl">
              Discover your passion and connect with like-minded peers
            </p>
          </div>
        </div>
      </div>

      {/* Featured Clubs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Clubs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clubs.map((club, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
                <img src={club.image} alt={club.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {club.icon}
                    <h3 className="text-xl font-semibold ml-2">{club.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{club.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-600">{club.members} members</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                      Join Club
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-lg p-4 text-center min-w-[100px]">
                    <div className="text-2xl font-bold text-blue-600">{event.date.day}</div>
                    <div className="text-sm text-blue-600">{event.date.month}</div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="flex items-center text-gray-500">
                      <span>{event.time}</span>
                      <span className="mx-2">•</span>
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Club Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="text-center p-4">
                    <h3 className="text-white font-semibold mb-2">{achievement.title}</h3>
                    <p className="text-gray-200 text-sm">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const clubs = [
  {
    name: "Music Society",
    icon: <Music className="w-6 h-6 text-blue-600" />,
    description: "Express yourself through music with performances, workshops, and collaborations.",
    members: 120,
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80"
  },
  {
    name: "Art Club",
    icon: <Palette className="w-6 h-6 text-blue-600" />,
    description: "Explore various art forms and showcase your creativity through exhibitions.",
    members: 85,
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80"
  },
  {
    name: "Coding Club",
    icon: <Code className="w-6 h-6 text-blue-600" />,
    description: "Learn programming, build projects, and participate in hackathons.",
    members: 150,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80"
  }
];

const events = [
  {
    title: "Annual Music Festival",
    description: "A celebration of musical talent featuring performances from various genres.",
    date: { day: "25", month: "MAR" },
    time: "6:00 PM",
    location: "Main Auditorium"
  },
  {
    title: "Art Exhibition",
    description: "Showcase of student artwork and installations from the Art Club.",
    date: { day: "28", month: "MAR" },
    time: "3:00 PM",
    location: "Art Gallery"
  },
  {
    title: "Hackathon 2024",
    description: "24-hour coding competition to solve real-world problems.",
    date: { day: "30", month: "MAR" },
    time: "9:00 AM",
    location: "Tech Center"
  },
  {
    title: "Cultural Dance Show",
    description: "Traditional and modern dance performances by the Dance Club.",
    date: { day: "02", month: "APR" },
    time: "7:00 PM",
    location: "Performance Hall"
  }
];

const achievements = [
  {
    title: "National Debate Champions",
    description: "First place in the National Collegiate Debate Championship",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80"
  },
  {
    title: "Music Competition Winners",
    description: "Gold medal at the State Music Festival",
    image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&q=80"
  },
  {
    title: "Robotics Excellence",
    description: "Winners of the International Robotics Competition",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80"
  },
  {
    title: "Art Exhibition Success",
    description: "Best College Art Show Award 2024",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80"
  }
];