import React from 'react';
import { GraduationCap, Calendar, DollarSign, FileText } from 'lucide-react';

export default function Admissions() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80"
          alt="Admissions"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
              Join Our Community
            </h1>
            <p className="text-white text-xl max-w-2xl">
              Begin your journey at Saint Joseph's College
            </p>
          </div>
        </div>
      </div>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Admission Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {requirements.map((req, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{req.title}</h3>
                <ul className="space-y-3">
                  {req.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Aid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Financial Aid & Scholarships</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scholarships.map((scholarship, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{scholarship.name}</h3>
                <p className="text-gray-600 mb-4">{scholarship.description}</p>
                <div className="text-blue-600 font-semibold">{scholarship.award}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Now CTA */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Apply?</h2>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition duration-300">
            Start Your Application
          </button>
        </div>
      </section>
    </div>
  );
}

const steps = [
  {
    icon: <FileText className="w-6 h-6 text-blue-600" />,
    title: "Submit Application",
    description: "Complete the online application form with your personal information and academic history."
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
    title: "Academic Records",
    description: "Send your transcripts and standardized test scores."
  },
  {
    icon: <Calendar className="w-6 h-6 text-blue-600" />,
    title: "Interview",
    description: "Schedule and complete your admissions interview."
  },
  {
    icon: <DollarSign className="w-6 h-6 text-blue-600" />,
    title: "Financial Aid",
    description: "Apply for scholarships and financial assistance."
  }
];

const requirements = [
  {
    title: "Academic Requirements",
    items: [
      "High School Diploma or equivalent",
      "Minimum GPA of 3.0",
      "SAT/ACT scores",
      "Letters of recommendation",
      "Personal statement"
    ]
  },
  {
    title: "Additional Materials",
    items: [
      "Completed application form",
      "Application fee",
      "Official transcripts",
      "Extracurricular activities record",
      "Portfolio (for specific programs)"
    ]
  }
];

const scholarships = [
  {
    name: "Academic Excellence Scholarship",
    description: "For students with outstanding academic achievements.",
    award: "Up to $25,000 per year"
  },
  {
    name: "Leadership Scholarship",
    description: "For students demonstrating exceptional leadership qualities.",
    award: "Up to $15,000 per year"
  },
  {
    name: "Community Service Award",
    description: "For students with significant community service contributions.",
    award: "Up to $10,000 per year"
  }
];