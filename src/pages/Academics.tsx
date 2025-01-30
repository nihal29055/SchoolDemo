import React from 'react';
import { BookOpen, GraduationCap, Microscope } from 'lucide-react';

export default function Academics() {
  const programs = [
    {
      name: 'Arts & Sciences',
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      description: 'Comprehensive programs in humanities and sciences.',
      majors: ['Biology', 'Chemistry', 'Physics', 'Mathematics', 'Literature']
    },
    {
      name: 'Business Studies',
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
      description: 'Professional education in business and management.',
      majors: ['Finance', 'Marketing', 'Management', 'Economics', 'Accounting']
    },
    {
      name: 'Engineering',
      icon: <Microscope className="w-6 h-6 text-blue-600" />,
      description: 'Innovative programs in various engineering disciplines.',
      majors: ['Computer Science', 'Electrical', 'Mechanical', 'Civil', 'Chemical']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
          alt="Academic Excellence"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
              Academic Programs
            </h1>
            <p className="text-white text-xl max-w-2xl">
              Excellence in education through innovative learning and research
            </p>
          </div>
        </div>
      </div>

      {/* Programs Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  {program.icon}
                  <h3 className="text-xl font-semibold ml-2">{program.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <ul className="space-y-2">
                  {program.majors.map((major, idx) => (
                    <li key={idx} className="text-gray-700">• {major}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
