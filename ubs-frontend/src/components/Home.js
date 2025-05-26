import React, { useState } from 'react';
import { Link } from "react-router-dom";

const HomePage = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      id: 'profile',
      title: 'Smart Profile Creation',
      description: 'Tell us about your career stage, current skills, learning goals, and time availability',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      gradient: 'from-pink-500 to-rose-500',
      details: ['Career stage assessment', 'Skills inventory', 'Goal-oriented planning', 'Time-based scheduling']
    },
    {
      id: 'learning',
      title: 'AI-Powered Learning Paths',
      description: 'Get personalized course recommendations based on your profile and career objectives',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: 'from-violet-500 to-purple-500',
      details: ['Rule-based recommendations', 'Beginner to advanced paths', 'Industry-relevant courses', 'PostgreSQL-powered content']
    },
    {
      id: 'progress',
      title: 'Progress Tracking',
      description: 'Visual progress bars and completion tracking for all your courses and challenges',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z" />
        </svg>
      ),
      gradient: 'from-blue-500 to-cyan-500',
      details: ['Completion percentages', 'Visual progress bars', 'Achievement tracking', 'Performance analytics']
    },
    {
      id: 'coding',
      title: 'Interactive Coding Challenges',
      description: 'Practice with live coding exercises using embedded CodePen and Replit environments',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      gradient: 'from-emerald-500 to-teal-500',
      details: ['Live coding exercises', 'Instant validation', 'Multiple languages', 'Real-time feedback']
    },
    {
      id: 'ai-guidance',
      title: 'AI-Assisted Guidance',
      description: 'Get personalized study tips and motivational messages powered by OpenAI',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: 'from-orange-500 to-red-500',
      details: ['Personalized tips', 'Motivational messages', 'Learning optimization', 'Progress-based guidance']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 relative z-10">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xl">T</span>
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            TechRise
          </h2>
        </div>
        <div className="flex space-x-6">
          <a href="/signup" className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg text-white no-underline inline-block">
            Sign Up
          </a>
          <a href="/login" className="px-8 py-3 border-2 border-white/20 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-white no-underline inline-block">
            Login
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
            <span className="text-sm font-medium">Personalized Learning Platform for Women in Tech</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Master Tech Skills with
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI-Powered Learning
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Create your profile, get personalized learning paths, track progress, and practice with interactive coding challenges—all powered by AI guidance.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-semibold hover:scale-105 transform transition-all duration-300 shadow-xl">
              Create Your Profile
            </button>
            <button className="px-10 py-4 border-2 border-white/30 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              View Sample Path
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Platform Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to accelerate your tech career in one comprehensive platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 group cursor-pointer"
                onClick={() => setSelectedFeature(selectedFeature === feature.id ? null : feature.id)}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-4">{feature.description}</p>
                
                {selectedFeature === feature.id && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="mt-4 text-purple-400 text-sm font-medium">
                  Click to {selectedFeature === feature.id ? 'hide' : 'view'} details
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-8 py-16 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            How TechRise Works
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Create Profile', desc: 'Share your career stage, skills, and goals' },
              { step: '02', title: 'Get Learning Path', desc: 'AI recommends personalized courses' },
              { step: '03', title: 'Practice Coding', desc: 'Complete interactive challenges' },
              { step: '04', title: 'Track Progress', desc: 'Monitor your advancement' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Learning Path Preview */}
      <section className="px-8 py-16 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Sample Learning Path
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Frontend Development Path</h3>
              <p className="text-gray-400">For: Beginner • Duration: 12 weeks • 3-5 hours/week</p>
            </div>
            
            <div className="space-y-4">
              {[
                { title: 'HTML & CSS Fundamentals', progress: 100, status: 'completed' },
                { title: 'JavaScript Basics', progress: 75, status: 'in-progress' },
                { title: 'React Introduction', progress: 0, status: 'locked' },
                { title: 'Build Your First App', progress: 0, status: 'locked' }
              ].map((course, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    course.status === 'completed' ? 'bg-green-500' :
                    course.status === 'in-progress' ? 'bg-blue-500' : 'bg-gray-600'
                  }`}>
                    {course.status === 'completed' ? '✓' : 
                     course.status === 'in-progress' ? '▶' : '🔒'}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{course.title}</span>
                      <span className="text-sm text-gray-400">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-500 ${
                          course.status === 'completed' ? 'bg-green-500' :
                          course.status === 'in-progress' ? 'bg-blue-500' : 'bg-gray-600'
                        }`}
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Join thousands of women advancing their tech careers with personalized, AI-powered learning.
          </p>
          <button className="px-12 py-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xl font-semibold hover:scale-105 transform transition-all duration-300 shadow-2xl">
            Get Started Free
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;