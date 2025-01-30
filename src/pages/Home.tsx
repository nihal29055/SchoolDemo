import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80"
          alt="College Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
              Welcome to Saint Joseph's College
            </h1>
            <p className="text-white text-xl mb-8 max-w-2xl">
              Discover a world of opportunities at one of the nation's leading educational institutions.
            </p>
            <Link
              to="/admissions"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition duration-300 inline-flex items-center"
            >
              Apply Now <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* News & Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Latest News & Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="text-sm text-blue-600 mb-2">{item.date}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <a href="#" className="text-blue-600 font-medium hover:text-blue-700">
                    Read more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Saint Joseph's</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Life Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Experience Campus Life</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {campusImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-white font-medium text-lg">{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const news = [
  {
    title: "Annual Science Fair 2024",
    date: "March 15, 2024",
    description: "Join us for our annual science fair showcasing innovative projects from our talented students.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80"
  },
  {
    title: "New Research Center Opening",
    date: "March 20, 2024",
    description: "State-of-the-art research facility opening ceremony with distinguished guests and alumni.",
    image: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&q=80"
  },
  {
    title: "International Culture Week",
    date: "March 25, 2024",
    description: "Celebrate diversity with a week-long festival featuring cultural performances and exhibitions.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
  }
];

const features = [
  {
    title: "Academic Excellence",
    description: "Ranked among the top institutions with distinguished faculty and cutting-edge research opportunities."
  },
  {
    title: "Global Perspective",
    description: "International partnerships and exchange programs with leading universities worldwide."
  },
  {
    title: "Career Success",
    description: "95% of our graduates secure employment or continue to graduate studies within six months."
  }
];

const campusImages = [
  {
    url: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80",
    alt: "Main Campus"
  },
  {
    url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80",
    alt: "Library"
  },
  {
    url: "https://images.unsplash.com/photo-1577985051167-0d49eec21977?auto=format&fit=crop&q=80",
    alt: "Sports Complex"
  },
  {
    url: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&q=80",
    alt: "Student Center"
  }
];