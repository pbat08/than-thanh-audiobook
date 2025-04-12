import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center py-12 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Thân Thanh Audiobook
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Experience Vietnamese literature through voice cloning technology
        </p>
        <Link 
          to="/library" 
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
        >
          Explore Library
        </Link>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Voice Cloning</h2>
          <p className="text-gray-600">
            Create your own voice for audiobooks using advanced AI technology
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Vietnamese Library</h2>
          <p className="text-gray-600">
            Access a wide range of Vietnamese literature and audiobooks
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">User-Friendly</h2>
          <p className="text-gray-600">
            Simple interface designed for elderly users and Alzheimer's patients
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 bg-blue-50 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Ready to Get Started?
        </h2>
        <Link 
          to="/voice-cloning" 
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
        >
          Try Voice Cloning
        </Link>
      </section>
    </div>
  );
}

export default Home; 