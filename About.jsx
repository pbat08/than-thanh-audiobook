import React from 'react';

function About() {
  return (
    <div className="space-y-8">
      {/* Mission Statement */}
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Thân Thanh Audiobook</h1>
        <p className="text-lg text-gray-600">
          Thân Thanh Audiobook is a platform designed to make Vietnamese literature accessible to elderly users and Alzheimer's patients through voice cloning technology.
        </p>
      </section>

      {/* Features */}
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Advanced voice cloning technology</li>
          <li>Extensive Vietnamese literature library</li>
          <li>User-friendly interface for elderly users</li>
          <li>Reading progress tracking</li>
          <li>Personalized voice settings</li>
        </ul>
      </section>

      {/* Technology */}
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Technology Used</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Frontend</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>React.js</li>
              <li>Tailwind CSS</li>
              <li>Redux Toolkit</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Backend</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-gray-600">
          For any questions or suggestions, please reach out to us through our GitHub repository.
        </p>
      </section>
    </div>
  );
}

export default About; 