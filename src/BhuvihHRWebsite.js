import React, { useState } from "react";

export default function BhuvihHRWebsite() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const LegalModal = ({ isOpen, onClose, title, content }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-hidden w-full">
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
            <div className="prose prose-sm max-w-none">{content}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="font-sans text-gray-800 min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-orange-500 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 lg:py-6">
            <div className="flex items-center">
              <img
                src="/images/logo.jpg"
                alt="Bhuvih HR Solutions logo"
                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md mr-3"
                loading="lazy"
              />
              <h1 className="text-xl lg:text-2xl font-bold">Bhuvih HR Solutions Pvt Ltd</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-orange-500 transition-colors duration-200 font-medium">About Us</a>
              <a href="#business" className="hover:text-orange-500 transition-colors duration-200 font-medium">Our Business</a>
              <a href="#career" className="hover:text-orange-500 transition-colors duration-200 font-medium">Career</a>
              <a href="#events" className="hover:text-orange-500 transition-colors duration-200 font-medium">Events</a>
              <a href="#contact" className="hover:text-orange-500 transition-colors duration-200 font-medium">Contact</a>
            </nav>
            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Bridging Talent with Opportunity
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Dynamic HR solutions powered by AI technology, connecting the right talent with the right opportunities across India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-md">
              Explore Opportunities
            </button>
            <button className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
            <div className="w-20 h-1 bg-orange-600 mx-auto mb-8"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Bhuvih HR Solutions Private Limited is a dynamic and fast-growing Human
                Resources company based in Hyderabad, Telangana. We specialize in talent
                acquisition, staffing solutions, and AI-powered recruitment technology,
                helping bridge the gap between talent and opportunity across India.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">500+</div>
                  <div className="text-gray-600">Companies Served</div>
              </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">10K+</div>
                  <div className="text-gray-600">Placements</div>
              </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-8 rounded-2xl">
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">AI-Powered Recruitment</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Pan-India Presence</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Industry Expertise</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Technology-Driven Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Business */}
      <section id="business" className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Business</h2>
            <div className="w-20 h-1 bg-orange-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive HR solutions designed to transform how businesses connect with talent
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Koluvu */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Koluvu - AI-Powered Job Portal</h3>
              <p className="text-gray-600 leading-relaxed">
                Intelligent job matching, ATS, resume parsing, and interview tools powered by advanced AI algorithms.
              </p>
            </div>

            {/* LEKO */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">LEKO - HRMS</h3>
              <p className="text-gray-600 leading-relaxed">
                A comprehensive cloud-based HR management system streamlining payroll, appraisals, and employee data.
              </p>
            </div>

            {/* Koluvu Kendralaya */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">KK</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Koluvu Kendralaya</h3>
              <p className="text-gray-600 leading-relaxed">
                Employment centers connecting rural and urban job seekers to verified opportunities nationwide.
              </p>
            </div>

            {/* School of HR Excellence */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">School of HR Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive HR training & certification programs for professionals and freshers.
              </p>
            </div>

            {/* Koluvu Immigrations */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">KI</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Koluvu Immigrations</h3>
              <p className="text-gray-600 leading-relaxed">
                Expert assistance with study and work opportunities abroad, making global dreams achievable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section id="career" className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Join Our Team</h2>
            <div className="w-20 h-1 bg-orange-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Be part of a company shaping the future of HR. Explore exciting roles in HR operations, technology, sales, and training.
            </p>
          </div>

          <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 lg:p-12 text-white text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Make an Impact?</h3>
            <p className="text-lg mb-8 text-orange-100">
              Send your resume to careers@bhuvihhr.com and join our dynamic team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:careers@bhuvihhr.com"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200 inline-block"
              >
                careers@bhuvihhr.com
              </a>
              <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
                Send Your Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="events" className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <div className="w-20 h-1 bg-orange-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay connected with our latest events and opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Campus Interviews */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Campus Interviews</h3>
              <p className="text-gray-600 text-sm">
                Regular placement drives with top colleges and universities.
              </p>
            </div>

            {/* HR Workshops */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">HR Workshops</h3>
              <p className="text-gray-600 text-sm">
                Exclusive training sessions for aspiring and current HR professionals.
              </p>
            </div>

            {/* Job Fairs */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Job Fairs</h3>
              <p className="text-gray-600 text-sm">
                Connect directly with companies hiring for various roles.
              </p>
            </div>

            {/* Webinars & Talks */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Webinars & Talks</h3>
              <p className="text-gray-600 text-sm">
                Stay updated with industry trends and expert guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch */}
      <section id="contact" className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-orange-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ready to transform your HR operations? Contact us today
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+91 9866875709</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">bhuvihhr@outlook.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">
                      H-no 8-3-230/1/a/b, V Giri,<br />
                      Safi Residency, 2nd Floor,<br />
                      Yousufguda, Hyderabad,<br />
                      Telangana - 500045
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-md"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">B</span>
                </div>
                <span className="text-xl font-bold">Bhuvih HR Solutions</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Bridging talent with opportunity through innovative HR solutions and AI-powered recruitment technology.
              </p>
              <div className="text-gray-400 text-sm">
                <div className="font-medium text-white mb-2">Registered & Corporate Office:</div>
                <div>H-no 8-3-230/1/a/b, V Giri,</div>
                <div>Safi Residency, 2nd Floor,</div>
                <div>Yousufguda, Hyderabad,</div>
                <div>Telangana - 500045</div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-lg">Legal Documents</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <button 
                    onClick={() => openModal('privacy')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => openModal('terms')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Terms & Conditions
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => openModal('disclaimer')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Disclaimer
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => openModal('nda')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Non-Disclosure Agreement
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-lg">Our Platforms</h3>
              <ul className="space-y-3 text-gray-400">
                <li><span className="text-white">Koluvu</span> - AI-Powered Job Matching</li>
                <li><span className="text-white">Leko-HRMS</span> - HR Management System</li>
                <li><span className="text-white">Koluvu Technology</span> - Tech Solutions</li>
                <li><span className="text-white">School of HR Excellence</span> - Training & Certifications</li>
                  </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2025 Bhuvih HR Solutions Pvt Ltd. All rights reserved.</p>
            <p className="text-gray-500 text-sm mt-2">
              Governed by Indian Contract Act, 1872 | Jurisdiction: Hyderabad Courts
            </p>
          </div>
        </div>
      </footer>

      {/* Legal Document Modals */}
      <LegalModal
        isOpen={activeModal === 'privacy'}
        onClose={closeModal}
        title="Privacy Policy"
        content={
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Overview</h3>
              <p className="text-gray-700 leading-relaxed">
                Bhuvih HR Solutions Pvt Ltd ("Company," "we," "our," or "us") is committed to protecting the privacy and confidentiality of users who access our platforms including Koluvu, Leko-HRMS, Koluvu Technology, and School of HR Excellence.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                This Privacy Policy outlines how we collect, process, use, store, and safeguard personal and organizational data.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Information We Collect</h3>
              
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Personal Data (Candidates):</h4>
                <p className="text-gray-700">Full name, contact number, email, resume, employment history, education, job preferences.</p>
              </div>

              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Employer Data:</h4>
                <p className="text-gray-700">Organization name, HR contact details, job postings, salary structures, employee performance records.</p>
              </div>

              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Usage & Technical Data:</h4>
                <p className="text-gray-700">Browser type, IP address, device information, and cookies for improving user experience.</p>
              </div>

              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Sensitive Information:</h4>
                <p className="text-gray-700">Government IDs, salary data, and performance reviews (collected only with explicit consent).</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Purpose of Collection</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Enable resume parsing, AI scoring, and job recommendations.</li>
                <li>Facilitate employer-candidate connections.</li>
                <li>Ensure legal and compliance reporting.</li>
                <li>Improve product features, AI accuracy, and customer support.</li>
                <li>Provide personalized communication, job alerts, and notifications.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Storage & Security</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Stored securely on AWS/GCP servers and MongoDB Atlas.</li>
                <li>Encryption in transit and at rest (SSL/TLS).</li>
                <li>Restricted access with multi-factor authentication for staff.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">User Rights</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Access & Correction:</strong> View or update personal details.</li>
                <li><strong>Data Portability:</strong> Request transfer of your data.</li>
                <li><strong>Right to Erasure:</strong> Request account deletion.</li>
                <li><strong>Opt-out:</strong> Disable marketing and promotional communications.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Third-Party Sharing</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Shared only with verified employers, recruiters, and training partners.</li>
                <li>Never sold to unauthorized entities.</li>
              </ul>
            </div>
          </div>
        }
      />

      <LegalModal
        isOpen={activeModal === 'terms'}
        onClose={closeModal}
        title="Terms & Conditions"
        content={
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Eligibility</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Candidates must be 18 years or older to register.</li>
                <li>Employers must be legally registered businesses.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">User Conduct</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Users must not upload false, misleading, or plagiarized resumes.</li>
                <li>Employers must not post fake, discriminatory, or fraudulent job listings.</li>
                <li>Prohibited actions include spamming, hacking, scraping, or exploiting system vulnerabilities.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Commitments</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Koluvu</strong> ensures AI-powered recommendations but does not guarantee job placement.</li>
                <li><strong>Leko-HRMS</strong> provides HR and payroll automation but requires correct data entry by employers.</li>
                <li><strong>School of HR Excellence</strong> provides training and certifications, outcomes depend on candidate performance.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Intellectual Property</h3>
              <p className="text-gray-700 leading-relaxed">
                All logos, code, training materials, AI models, and content belong to Bhuvih HR Solutions Pvt Ltd. Unauthorized reproduction or use is prohibited.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Limitation of Liability</h3>
              <p className="text-gray-700 mb-2">Bhuvih HR is not responsible for:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Employer-candidate disputes.</li>
                <li>Financial losses due to reliance on AI recommendations.</li>
                <li>Service downtime due to technical or natural disruptions.</li>
              </ul>
            </div>
          </div>
        }
      />

      <LegalModal
        isOpen={activeModal === 'disclaimer'}
        onClose={closeModal}
        title="Disclaimer"
        content={
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">No Employment Guarantee</h3>
              <p className="text-gray-700 leading-relaxed">
                Koluvu connects job seekers and employers but does not guarantee placements.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Limitations</h3>
              <p className="text-gray-700 leading-relaxed">
                Resume parsing, scoring, and job recommendations are algorithm-driven and should be treated as guidance.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Third-Party Employers</h3>
              <p className="text-gray-700 leading-relaxed">
                Bhuvih HR is not liable for fraudulent or misleading employer behavior. Candidates should verify employers independently.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Training Programs</h3>
              <p className="text-gray-700 leading-relaxed">
                Certifications from the School of HR Excellence do not ensure employment; they are skill-enhancement initiatives.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Platform Availability</h3>
              <p className="text-gray-700 leading-relaxed">
                Services may experience temporary interruptions for upgrades, technical failures, or maintenance.
              </p>
            </div>
          </div>
        }
      />

      <LegalModal
        isOpen={activeModal === 'nda'}
        onClose={closeModal}
        title="Non-Disclosure Agreement (NDA)"
        content={
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Definition of Confidential Information</h3>
              <p className="text-gray-700 mb-3">Includes but is not limited to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Product roadmaps, AI algorithms, source code.</li>
                <li>Employee & candidate data, salary structures.</li>
                <li>Strategic partnerships, financial records.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Obligations</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Recipient must not disclose, copy, or distribute information without written consent.</li>
                <li>Information to be used only for intended collaboration or employment purposes.</li>
                <li>On termination, all documents must be returned or destroyed.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Exclusions</h3>
              <p className="text-gray-700 mb-3">Information is not confidential if:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>It becomes publicly available without breach.</li>
                <li>It is already known to the recipient.</li>
                <li>It is required by law to be disclosed.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Legal Framework</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Governed by Indian Contract Act, 1872.</li>
                <li>Disputes subject to jurisdiction of Hyderabad courts.</li>
              </ul>
            </div>
          </div>
        }
      />
    </div>
  );
}
