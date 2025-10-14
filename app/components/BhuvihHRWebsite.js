"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function BhuvihHRWebsite() {
  const [activeModal, setActiveModal] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowBackToTop(window.scrollY > 500);
      
      // Scroll reveal animation
      const reveals = document.querySelectorAll('.scroll-reveal');
      reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('revealed');
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Testimonial auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    
    if (!email) {
      setEmailError("Email is required");
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    
    // Simulate submission
    setNewsletterSuccess(true);
    setEmail("");
    setTimeout(() => setNewsletterSuccess(false), 3000);
  };

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "HR Manager, Tech Corp",
      image: "👨‍💼",
      text: "Bhuvih HR Solutions transformed our recruitment process. Their AI-powered platform helped us find the perfect candidates in record time!"
    },
    {
      name: "Priya Sharma",
      role: "CEO, StartUp India",
      image: "👩‍💼",
      text: "Outstanding service! The team at Bhuvih is professional, responsive, and truly understands our hiring needs. Highly recommended!"
    },
    {
      name: "Amit Patel",
      role: "Operations Head, Manufacturing Co",
      image: "👨‍💻",
      text: "We've been working with Bhuvih for over a year now. Their pan-India presence and expertise have been invaluable to our growth."
    }
  ];

  const LegalModal = ({ isOpen, onClose, title, content }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
        <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden w-full shadow-2xl animate-scaleIn">
          <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-red-50">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-red-600 text-3xl font-light transition-colors duration-200 hover:rotate-90 transform transition-transform"
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
    <div className="font-sans text-gray-800 min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50">
      {/* Header */}
      <header className={`bg-gradient-to-r from-[#FF9933] via-[#FF7F11] to-[#FF4500] text-white shadow-2xl sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 shadow-xl' : 'py-4 lg:py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center group cursor-pointer">
              <img
                src="/images/logo.jpg"
                alt="Bhuvih HR Solutions logo"
                className="w-14 h-14 rounded-full object-cover border-2 border-white/70 shadow-xl mr-3 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                loading="lazy"
              />
              <h1 className="text-xl lg:text-2xl font-bold tracking-tight text-white">Bhuvih HR Solutions Pvt Ltd</h1>
            </div>
            <nav className="hidden md:flex space-x-1 lg:space-x-2">
              <a href="#about" className="px-4 py-2 rounded-lg text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-medium transform hover:scale-105">About Us</a>
              <a href="#business" className="px-4 py-2 rounded-lg text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-medium transform hover:scale-105">Our Business</a>
              <a href="#career" className="px-4 py-2 rounded-lg text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-medium transform hover:scale-105">Career</a>
              <a href="#events" className="px-4 py-2 rounded-lg text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-medium transform hover:scale-105">Events</a>
              <a href="#contact" className="px-4 py-2 rounded-lg text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-medium transform hover:scale-105">Contact</a>
            </nav>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2 animate-fadeInDown">
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-lg text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-medium">About Us</a>
              <a href="#business" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-lg text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-medium">Our Business</a>
              <a href="#career" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-lg text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-medium">Career</a>
              <a href="#events" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-lg text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-medium">Events</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-lg text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-medium">Contact</a>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 py-20 lg:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-left">
              <div className="animate-fadeInDown">
                <h2 className="text-4xl lg:text-6xl font-extrabold leading-tight">
                  <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                    Bridging Talent
                  </span>
                  <br />
                  <span className="text-gray-900">with Opportunity</span>
                </h2>
              </div>
              
              <p className="text-lg lg:text-2xl text-gray-700 leading-relaxed animate-fadeInUp font-light max-w-3xl">
                Dynamic HR solutions powered by <span className="font-semibold text-orange-600">AI technology</span>, connecting the right talent with the right opportunities across India
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                <div className="group cursor-pointer text-left">
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">500+</div>
                  <div className="text-gray-600 font-medium">Companies Served</div>
                </div>
                <div className="group cursor-pointer text-left">
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">10K+</div>
                  <div className="text-gray-600 font-medium">Placements</div>
                </div>
                <div className="group cursor-pointer text-left">
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">50+</div>
                  <div className="text-gray-600 font-medium">Cities</div>
                </div>
                <div className="group cursor-pointer text-left">
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">98%</div>
                  <div className="text-gray-600 font-medium">Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-orange-200 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
              <video
                className="w-full h-full object-cover"
                src="/videos/future tech.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-orange-200 lg:order-1 lg:mr-auto">
              <video
                className="w-full h-full object-cover"
                src="/videos/group.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
            </div>
            
            <div className="space-y-6 text-left lg:order-2 lg:pl-8">
              <div className="mb-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">About Us</h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-full"></div>
              </div>
              <p className="text-gray-600 text-lg">Transforming the future of HR with innovation and excellence</p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Bhuvih HR Solutions</span> Private Limited is a dynamic and fast-growing Human Resources company based in Hyderabad, Telangana.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We specialize in talent acquisition, staffing solutions, and AI-powered recruitment technology, helping bridge the gap between talent and opportunity across India.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8 pt-6 border-t-2 border-gray-200">
                <div className="group text-left p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">500+</div>
                  <div className="text-gray-700 font-semibold">Companies Served</div>
                </div>
                <div className="group text-left p-6 rounded-2xl bg-gradient-to-br from-red-50 to-pink-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                  <div className="text-4xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">10K+</div>
                  <div className="text-gray-700 font-semibold">Placements</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Business */}
      <section id="business" className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-orange-50/30 to-pink-50/30 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full filter blur-3xl opacity-20 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-red-200 to-purple-200 rounded-full filter blur-3xl opacity-20 -ml-48 -mb-48"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Business</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive HR solutions designed to transform how businesses connect with talent
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Koluvu */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-orange-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400 to-red-400 rounded-full filter blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <span className="text-white font-bold text-2xl">K</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">Koluvu - AI-Powered Job Portal</h3>
                <p className="text-gray-600 leading-relaxed">
                  Intelligent job matching, ATS, resume parsing, and interview tools powered by advanced AI algorithms.
                </p>
                <div className="mt-6 flex items-center text-orange-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More 
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* LEKO */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-green-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full filter blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <span className="text-white font-bold text-2xl">L</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">LEKO - HRMS</h3>
                <p className="text-gray-600 leading-relaxed">
                  A comprehensive cloud-based HR management system streamlining payroll, appraisals, and employee data.
                </p>
                <div className="mt-6 flex items-center text-green-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More 
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Kolink */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-teal-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full filter blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <span className="text-white font-bold text-2xl">KL</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors duration-300">Kolink - Talent Engagement Suite</h3>
                <p className="text-gray-600 leading-relaxed">
                  Collaborative platform connecting clients, talent, and recruiters with unified communication and analytics.
                </p>
                <div className="mt-6 flex items-center text-teal-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More 
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Koluvu Kendralaya */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-purple-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full filter blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <span className="text-white font-bold text-2xl">KK</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">Koluvu Kendralaya</h3>
                <p className="text-gray-600 leading-relaxed">
                  Employment centers connecting rural and urban job seekers to verified opportunities nationwide.
                </p>
                <div className="mt-6 flex items-center text-purple-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More 
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* School of HR Excellence */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-blue-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full filter blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <span className="text-white font-bold text-2xl">S</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">School of HR Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive HR training & certification programs for professionals and freshers.
                </p>
                <div className="mt-6 flex items-center text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More 
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Koluvu Immigrations */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-red-100 overflow-hidden md:col-span-2 lg:col-span-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-400 to-rose-400 rounded-full filter blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <span className="text-white font-bold text-2xl">KI</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">Koluvu Immigrations</h3>
                <p className="text-gray-600 leading-relaxed">
                  Expert assistance with study and work opportunities abroad, making global dreams achievable.
                </p>
                <div className="mt-6 flex items-center text-red-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More 
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section id="career" className="py-20 lg:py-28 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-orange-300 to-pink-300 rounded-full filter blur-3xl opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Join Our Team</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Be part of a company shaping the future of HR. Explore exciting roles in HR operations, technology, sales, and training.
            </p>
          </div>

          <div className="relative bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-3xl p-1 shadow-2xl">
            <div className="bg-white rounded-3xl p-8 lg:p-12 text-center">
              <div className="inline-block p-4 bg-gradient-to-br from-orange-100 to-pink-100 rounded-2xl mb-6">
                <svg className="w-16 h-16 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Ready to Make an Impact?
              </h3>
              <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                Send your resume to <span className="font-semibold text-orange-600">careers@bhuvihhr.com</span> and join our dynamic team
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:careers@bhuvihhr.com"
                  className="group relative bg-gradient-to-r from-orange-600 to-red-600 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 inline-block overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    careers@bhuvihhr.com
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <button className="group relative border-2 border-orange-600 text-orange-600 px-10 py-4 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center group-hover:text-white transition-colors duration-300">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    Send Your Resume
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
              
              {/* Career Benefits */}
              <div className="grid md:grid-cols-3 gap-6 mt-12 pt-12 border-t-2 border-gray-100">
                <div className="text-center group cursor-pointer">
                  <div className="inline-block p-3 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Fast Growth</h4>
                  <p className="text-gray-600 text-sm">Rapid career advancement opportunities</p>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="inline-block p-3 bg-gradient-to-br from-red-100 to-pink-100 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Great Benefits</h4>
                  <p className="text-gray-600 text-sm">Competitive salary and perks</p>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="inline-block p-3 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Amazing Team</h4>
                  <p className="text-gray-600 text-sm">Work with talented professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="events" className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay connected with our latest events and opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Campus Interviews */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-orange-500 cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">Campus Interviews</h3>
              <p className="text-gray-600 leading-relaxed">
                Regular placement drives with top colleges and universities.
              </p>
            </div>

            {/* HR Workshops */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-green-500 cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">HR Workshops</h3>
              <p className="text-gray-600 leading-relaxed">
                Exclusive training sessions for aspiring and current HR professionals.
              </p>
            </div>

            {/* Job Fairs */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-purple-500 cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">Job Fairs</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect directly with companies hiring for various roles.
              </p>
            </div>

            {/* Webinars & Talks */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-blue-500 cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">Webinars & Talks</h3>
              <p className="text-gray-600 leading-relaxed">
                Stay updated with industry trends and expert guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-300 to-pink-300 rounded-full filter blur-3xl opacity-20 -mr-48 -mt-48 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-300 to-red-300 rounded-full filter blur-3xl opacity-20 -ml-48 -mb-48 animate-float" style={{animationDelay: '1s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted by hundreds of companies across India
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-purple-100 scroll-reveal">
              {/* Testimonial Content */}
              <div className="text-center">
                <div className="text-6xl mb-6 animate-bounce-subtle">{testimonials[activeTestimonial].image}</div>
                <p className="text-xl text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonials[activeTestimonial].text}"
                </p>
                <div className="border-t-2 border-gray-200 pt-6">
                  <h4 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-gray-600 mt-2">{testimonials[activeTestimonial].role}</p>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-3 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeTestimonial 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              {/* Quote Icon */}
              <div className="absolute top-8 left-8 text-purple-200 opacity-50">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full opacity-10 animate-float"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full opacity-10 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 scroll-reveal">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Stay Updated with Our Newsletter</h2>
          <p className="text-white/90 text-lg mb-8">Get the latest HR insights, job opportunities, and industry trends delivered to your inbox</p>
          
          <form onSubmit={handleNewsletterSubmit} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all duration-300 shadow-lg"
                />
                {emailError && (
                  <p className="text-white text-sm mt-2 text-left bg-red-500/20 px-4 py-2 rounded-lg backdrop-blur-sm">{emailError}</p>
                )}
              </div>
              <button
                type="submit"
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ripple-effect whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </div>
          </form>

          {newsletterSuccess && (
            <div className="mt-6 bg-green-500 text-white px-6 py-3 rounded-xl inline-block animate-fadeInDown shadow-lg">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold">Successfully subscribed! Check your inbox.</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Get In Touch */}
      <section id="contact" className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-300 to-red-300 rounded-full filter blur-3xl opacity-10 -ml-48 -mt-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-pink-300 to-purple-300 rounded-full filter blur-3xl opacity-10 -mr-48 -mb-48"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ready to transform your HR operations? Contact us today
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-orange-100">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-8">Contact Information</h3>
                
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="group flex items-start p-4 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300 cursor-pointer">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">Phone</h4>
                      <p className="text-gray-600 font-medium">+91 9866875709</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group flex items-start p-4 rounded-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-300 cursor-pointer">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">Email</h4>
                      <p className="text-gray-600 font-medium">bhuvihhr@outlook.com</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="group flex items-start p-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300 cursor-pointer">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">Address</h4>
                      <p className="text-gray-600 font-medium leading-relaxed">
                        H-no 8-3-230/1/a/b, V Giri,<br />
                        Safi Residency, 2nd Floor,<br />
                        Yousufguda, Hyderabad,<br />
                        Telangana - 500045
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-orange-100">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-8">Send us a Message</h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 hover:border-orange-300"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 hover:border-orange-300"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 resize-none hover:border-orange-300"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group relative w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Send Message
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-r from-[#0B6623] via-[#1F8F3F] to-[#34A853] text-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#0B6623] via-[#1F8F3F] to-[#34A853] rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#0B6623] via-[#1F8F3F] to-[#34A853] rounded-full filter blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            <div>
              <div className="flex items-center mb-6 group cursor-pointer">
                <div className="w-16 h-16 bg-white/90 rounded-2xl flex items-center justify-center mr-4 shadow-xl overflow-hidden">
                  <Image
                    src="/images/logo.jpg"
                    alt="Bhuvih HR Solutions Logo"
                    width={64}
                    height={64}
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white leading-tight">Bhuvih HR Solutions</span>
                  <span className="text-white/70 text-sm">Connecting Talent with Possibilities</span>
                </div>
              </div>
              <p className="text-white/80 max-w-xs text-base leading-relaxed">
                Bridging talent with opportunity through innovative HR solutions and AI-powered recruitment technology.
              </p>
            </div>

            <div className="lg:pl-4">
              <h3 className="font-bold mb-6 text-xl bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">Registered & Corporate Office</h3>
              <div className="space-y-2 text-white/80 text-sm leading-relaxed">
                <p>H-no 8-3-230/1/a/b, V Giri,</p>
                <p>Safi Residency, 2nd Floor,</p>
                <p>Yousufguda, Hyderabad,</p>
                <p>Telangana - 500045</p>
              </div>
            </div>
            
            <div className="lg:pl-4">
              <h3 className="font-bold mb-6 text-xl bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">Legal Documents</h3>
              <ul className="space-y-4 text-white/80">
                <li>
                  <button 
                    onClick={() => openModal('privacy')}
                    className="group flex items-center hover:text-white transition-all duration-300 cursor-pointer text-left"
                  >
                    <svg className="w-4 h-4 mr-2 text-white group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => openModal('terms')}
                    className="group flex items-center hover:text-white transition-all duration-300 cursor-pointer text-left"
                  >
                    <svg className="w-4 h-4 mr-2 text-white group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Terms & Conditions
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => openModal('disclaimer')}
                    className="group flex items-center hover:text-white transition-all duration-300 cursor-pointer text-left"
                  >
                    <svg className="w-4 h-4 mr-2 text-white group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Disclaimer
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => openModal('nda')}
                    className="group flex items-center hover:text-white transition-all duration-300 cursor-pointer text-left"
                  >
                    <svg className="w-4 h-4 mr-2 text-white group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Non-Disclosure Agreement
                  </button>
                </li>
              </ul>
            </div>
            
            <div className="lg:pl-4">
              <h3 className="font-bold mb-6 text-xl bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">Our Platforms</h3>
              <ul className="space-y-4 text-white/80">
                <li className="group cursor-pointer">
                  <span className="font-semibold text-white group-hover:text-green-200 transition-colors duration-300">Koluvu</span>
                  <div className="text-sm text-white/70">AI-Powered Job Matching</div>
                </li>
                <li className="group cursor-pointer">
                  <span className="font-semibold text-white group-hover:text-green-200 transition-colors duration-300">Leko-HRMS</span>
                  <div className="text-sm text-white/70">HR Management System</div>
                </li>
                <li className="group cursor-pointer">
                  <span className="font-semibold text-white group-hover:text-green-200 transition-colors duration-300">Koluvu Technology</span>
                  <div className="text-sm text-white/70">Tech Solutions</div>
                </li>
                <li className="group cursor-pointer">
                  <span className="font-semibold text-white group-hover:text-green-200 transition-colors duration-300">School of HR Excellence</span>
                  <div className="text-sm text-white/70">Training & Certifications</div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/30 mt-16 pt-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              <p className="text-white/80 text-sm md:text-base text-center lg:text-left">
                © 2025 <span className="text-white font-semibold">Bhuvih HR Solutions Pvt Ltd</span>. All rights reserved.
              </p>
              <p className="text-white/70 text-sm text-center lg:text-center">
                Made with <span className="text-green-200 animate-pulse-slow">❤</span> in Hyderabad
              </p>
              <p className="text-white/70 text-sm md:text-base text-center lg:text-right">
                Governed by Indian Contract Act, 1872 | Jurisdiction: Hyderabad Courts
              </p>
            </div>
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
