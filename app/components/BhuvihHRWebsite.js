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
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Contact form states
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [contactFormError, setContactFormError] = useState("");
  const [contactFormSuccess, setContactFormSuccess] = useState(false);
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);

  // Resume upload states
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeError, setResumeError] = useState("");
  const [resumeSuccess, setResumeSuccess] = useState(false);
  const [isUploadingResume, setIsUploadingResume] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowBackToTop(window.scrollY > 500);

      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight;
      const scrolled = (window.scrollY / documentHeight) * 100;
      setScrollProgress(scrolled);

      // Enhanced 3D Scroll reveal animation
      const reveals = document.querySelectorAll(".scroll-reveal");
      reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        const scrollPercent = Math.max(
          0,
          Math.min(1, (window.innerHeight - elementTop) / window.innerHeight)
        );

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("revealed");
        }

        // Apply dynamic 3D transform based on scroll position
        if (element.classList.contains("revealed")) {
          const rotateX = (1 - scrollPercent) * 15;
          const translateY = (1 - scrollPercent) * 50;
          element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) translateY(${translateY}px)`;
          element.style.opacity = scrollPercent;
        }
      });

      // Enhanced parallax effect with 3D depth
      const parallaxElements = document.querySelectorAll(".parallax-element");
      parallaxElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const scrollPosition = window.scrollY;
        const elementOffset = rect.top + scrollPosition;
        const speed = parseFloat(element.dataset.speed) || 0.5;
        const depth = parseFloat(element.dataset.depth) || 50;

        const yPos = (scrollPosition - elementOffset) * speed;
        const scale = 1 + (scrollPosition - elementOffset) * 0.0001;

        element.style.transform = `translate3d(0, ${yPos}px, ${depth}px) scale(${scale})`;
      });

      // 3D Card tilt effect on scroll
      const tiltElements = document.querySelectorAll(".scroll-tilt");
      tiltElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const screenCenter = window.innerHeight / 2;
        const distance = elementCenter - screenCenter;
        const maxTilt = 15;
        const tiltX = (distance / screenCenter) * maxTilt;

        if (rect.top < window.innerHeight && rect.bottom > 0) {
          element.style.transform = `perspective(1500px) rotateX(${-tiltX}deg) translateZ(20px)`;
        }
      });

      // Zoom effect on scroll with rotation
      const zoomElements = document.querySelectorAll(".zoom-on-scroll");
      zoomElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const scrollPercent = Math.max(
          0,
          Math.min(1, (window.innerHeight - elementTop) / window.innerHeight)
        );

        if (elementTop < window.innerHeight && elementBottom > 0) {
          element.classList.add("zoomed");
          const scale = 1 + scrollPercent * 0.1;
          const rotate = scrollPercent * 2;
          element.style.transform = `scale(${scale}) rotate(${rotate}deg)`;
        } else {
          element.classList.remove("zoomed");
        }
      });

      // Floating elements with depth
      const floatElements = document.querySelectorAll(".scroll-float");
      floatElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const scrollPercent = (window.scrollY - rect.top) / window.innerHeight;
        const amplitude = 20 + index * 5;
        const frequency = 0.5 + index * 0.2;
        const yFloat = Math.sin(scrollPercent * frequency) * amplitude;
        const zFloat = Math.cos(scrollPercent * frequency) * 10;

        element.style.transform = `translate3d(0, ${yFloat}px, ${zFloat}px)`;
      });

      // Fade slide elements
      const fadeSlideElements = document.querySelectorAll(".scroll-fade-slide");
      fadeSlideElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const scrollPercent = Math.max(
          0,
          Math.min(
            1,
            (window.innerHeight - elementTop) /
              (window.innerHeight + elementHeight)
          )
        );

        const translateX = (1 - scrollPercent) * 100;
        const opacity = scrollPercent;
        const rotateY = (1 - scrollPercent) * 20;

        element.style.transform = `perspective(1000px) translateX(${translateX}px) rotateY(${rotateY}deg)`;
        element.style.opacity = opacity;
      });
    };

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });

      // Mouse-parallax for specific elements
      const parallaxMouseElements =
        document.querySelectorAll(".mouse-parallax");
      parallaxMouseElements.forEach((element) => {
        const speed = parseFloat(element.dataset.speed) || 0.05;
        const x = (e.clientX - window.innerWidth / 2) * speed;
        const y = (e.clientY - window.innerHeight / 2) * speed;

        element.style.transform = `translate3d(${x}px, ${y}px, 0) rotateX(${
          y * 0.02
        }deg) rotateY(${x * 0.02}deg)`;
      });
    };

    // Smooth scroll animation frame
    let ticking = false;
    const optimizedScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", optimizedScroll);
    window.addEventListener("mousemove", handleMouseMove);
    handleScroll(); // Initial check
    return () => {
      window.removeEventListener("scroll", optimizedScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
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
    window.scrollTo({ top: 0, behavior: "smooth" });
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

  const handleContactFormChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContactFormSubmit = async (e) => {
    e.preventDefault();
    setContactFormError("");
    setContactFormSuccess(false);

    // Validation
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      setContactFormError("All fields are required");
      return;
    }

    if (!validateEmail(contactForm.email)) {
      setContactFormError("Please enter a valid email address");
      return;
    }

    setIsSubmittingContact(true);

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(
        `Contact Form: Message from ${contactForm.name}`
      );
      const body = encodeURIComponent(
        `Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`
      );

      // Open default email client
      window.location.href = `mailto:bhuvihhr@zohomail.in?subject=${subject}&body=${body}`;

      setContactFormSuccess(true);
      setContactForm({ name: "", email: "", message: "" });

      setTimeout(() => setContactFormSuccess(false), 5000);
    } catch (error) {
      setContactFormError("Failed to send message. Please try again.");
    } finally {
      setIsSubmittingContact(false);
    }
  };

  const handleResumeFileChange = (e) => {
    const file = e.target.files[0];
    setResumeError("");

    if (!file) return;

    // Validate file type
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      setResumeError("Please upload a PDF or Word document");
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setResumeError("File size must be less than 5MB");
      return;
    }

    setResumeFile(file);
  };

  const handleResumeUpload = async () => {
    if (!resumeFile) {
      setResumeError("Please select a resume file");
      return;
    }

    setIsUploadingResume(true);
    setResumeError("");

    try {
      // Create mailto link with attachment note
      const subject = encodeURIComponent("Job Application - Resume Submission");
      const body = encodeURIComponent(
        `Please find my resume attached.\n\nFile: ${resumeFile.name}\n\nNote: Due to browser limitations, please manually attach the resume file to this email.`
      );

      window.location.href = `mailto:careers@bhuvihhr.com?subject=${subject}&body=${body}`;

      setResumeSuccess(true);
      setResumeFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      setTimeout(() => setResumeSuccess(false), 5000);
    } catch (error) {
      setResumeError("Failed to process resume. Please try again.");
    } finally {
      setIsUploadingResume(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "HR Manager, Tech Corp",
      image: "👨‍💼",
      text: "Bhuvih HR Solutions transformed our recruitment process. Their AI-powered platform helped us find the perfect candidates in record time!",
    },
    {
      name: "Priya Sharma",
      role: "CEO, StartUp India",
      image: "👩‍💼",
      text: "Outstanding service! The team at Bhuvih is professional, responsive, and truly understands our hiring needs. Highly recommended!",
    },
    {
      name: "Amit Patel",
      role: "Operations Head, Manufacturing Co",
      image: "👨‍💻",
      text: "We've been working with Bhuvih for over a year now. Their pan-India presence and expertise have been invaluable to our growth.",
    },
  ];

  const LegalModal = ({ isOpen, onClose, title, content }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
        <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden w-full shadow-2xl animate-scaleIn">
          <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-red-50">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-red-600 text-3xl font-light transition-all duration-200 hover:rotate-90 transform"
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
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-[60]">
        <div
          className="h-full bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Header */}
      <header
        className={`bg-gradient-to-r from-[#FF9933] via-[#FF7F11] to-[#FF4500] text-white shadow-2xl sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-2 shadow-xl" : "py-3 lg:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center group cursor-pointer">
              <Image
                src="/images/logo.jpg"
                alt="Bhuvih HR Solutions logo"
                width={48}
                height={48}
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full object-cover border-2 border-white/70 shadow-xl mr-2 lg:mr-3 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                priority
              />
              <h1 className="text-xs sm:text-sm md:text-base lg:text-xl font-bold tracking-tight text-white leading-tight">
                Bhuvih HR Solutions
                <span className="hidden sm:inline"> Pvt Ltd</span>
              </h1>
            </div>
            <nav className="hidden md:flex space-x-1 lg:space-x-2">
              <a
                href="#about"
                className="px-3 py-2 rounded-lg text-white text-sm hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-medium transform hover:scale-105"
              >
                About Us
              </a>
              <a
                href="#business"
                className="px-3 py-2 rounded-lg text-white text-sm hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-medium transform hover:scale-105"
              >
                Our Business
              </a>
              <a
                href="#career"
                className="px-3 py-2 rounded-lg text-white text-sm hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-medium transform hover:scale-105"
              >
                Career
              </a>
              <a
                href="#events"
                className="px-3 py-2 rounded-lg text-white text-sm hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-medium transform hover:scale-105"
              >
                Events
              </a>
              <a
                href="#contact"
                className="px-3 py-2 rounded-lg text-white text-sm hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-medium transform hover:scale-105"
              >
                Contact
              </a>
            </nav>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    mobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2 animate-fadeInDown">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-medium"
              >
                About Us
              </a>
              <a
                href="#business"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-medium"
              >
                Our Business
              </a>
              <a
                href="#career"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-medium"
              >
                Career
              </a>
              <a
                href="#events"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-medium"
              >
                Events
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-medium"
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 py-12 sm:py-16 lg:py-32 overflow-hidden perspective-container">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-3d"
            style={{
              transform: `translate3d(${mousePosition.x * 0.02}px, ${
                mousePosition.y * 0.02
              }px, 0)`,
            }}
          ></div>
          <div
            className="absolute top-40 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-3d"
            style={{
              animationDelay: "1s",
              transform: `translate3d(${-mousePosition.x * 0.03}px, ${
                mousePosition.y * 0.03
              }px, 0)`,
            }}
          ></div>
          <div
            className="absolute -bottom-20 left-1/2 w-48 sm:w-72 h-48 sm:h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-3d"
            style={{
              animationDelay: "2s",
              transform: `translate3d(${mousePosition.x * 0.015}px, ${
                -mousePosition.y * 0.015
              }px, 0)`,
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 text-left scroll-reveal">
              <div className="animate-fadeInDown">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                  <span className="text-gradient-animate">Bridging Talent</span>
                  <br />
                  <span className="text-gray-900">with Opportunity</span>
                </h2>
              </div>

              <p className="text-base sm:text-lg lg:text-2xl text-gray-700 leading-relaxed animate-fadeInUp font-light">
                Dynamic HR solutions powered by{" "}
                <span className="font-semibold text-orange-600 animate-text-shimmer">
                  AI technology
                </span>
                , connecting the right talent with the right opportunities
                across India
              </p>

              <div
                className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 animate-fadeInUp"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="group cursor-pointer text-left card-3d scroll-tilt mouse-parallax animate-depth-float">
                  <div className="text-2xl sm:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                    500+
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">
                    Companies Served
                  </div>
                </div>
                <div
                  className="group cursor-pointer text-left card-3d scroll-tilt mouse-parallax animate-depth-float"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="text-2xl sm:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                    10K+
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">
                    Placements
                  </div>
                </div>
                <div
                  className="group cursor-pointer text-left card-3d scroll-tilt mouse-parallax animate-depth-float"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="text-2xl sm:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                    50+
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">
                    Cities
                  </div>
                </div>
                <div
                  className="group cursor-pointer text-left card-3d scroll-tilt mouse-parallax animate-depth-float"
                  style={{ animationDelay: "1.5s" }}
                >
                  <div className="text-2xl sm:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                    98%
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">
                    Satisfaction
                  </div>
                </div>
              </div>
            </div>
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-orange-200 animate-fadeInUp depth-shadow zoom-on-scroll mt-8 lg:mt-0"
              style={{
                animationDelay: "0.3s",
                transform: `perspective(1000px) rotateY(${
                  (mousePosition.x - 50) * 0.02
                }deg) rotateX(${(50 - mousePosition.y) * 0.02}deg)`,
              }}
            >
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
      <section id="about" className="py-12 sm:py-16 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-orange-200 lg:order-1 lg:mr-auto scroll-reveal depth-shadow zoom-on-scroll parallax-element"
              data-speed="0.3"
            >
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

            <div className="space-y-4 sm:space-y-6 text-left lg:order-2 lg:pl-8 scroll-reveal">
              <div className="mb-4 sm:mb-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                  About Us
                </h2>
                <div className="w-20 sm:w-24 h-1.5 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-full animate-glow-pulse"></div>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                Transforming the future of HR with innovation and excellence
              </p>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Bhuvih HR Solutions
                </span>{" "}
                Private Limited is a dynamic and fast-growing Human Resources
                company based in Hyderabad, Telangana.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                We specialize in talent acquisition, staffing solutions, and
                AI-powered recruitment technology, helping bridge the gap
                between talent and opportunity across India.
              </p>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t-2 border-gray-200">
                <div className="group text-left p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer card-3d animate-levitate">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                    500+
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base text-gray-700 font-semibold">
                    Companies Served
                  </div>
                </div>
                <div
                  className="group text-left p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-red-50 to-pink-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer card-3d animate-levitate"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                    10K+
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base text-gray-700 font-semibold">
                    Placements
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Business */}
      <section
        id="business"
        className="py-12 sm:py-16 lg:py-28 bg-gradient-to-br from-gray-50 via-orange-50/30 to-pink-50/30 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full filter blur-3xl opacity-20 -mr-32 sm:-mr-48 -mt-32 sm:-mt-48"></div>
        <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tr from-red-200 to-purple-200 rounded-full filter blur-3xl opacity-20 -ml-32 sm:-ml-48 -mb-32 sm:-mb-48"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Business
            </h2>
            <div className="w-20 sm:w-24 h-1.5 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 mx-auto mb-4 sm:mb-6 rounded-full"></div>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Comprehensive HR solutions designed to transform how businesses
              connect with talent
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Koluvu */}
            <div className="group relative bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-orange-100 overflow-hidden hover-lift scroll-reveal stagger-1">
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-orange-400 to-red-400 rounded-full filter blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -mr-12 sm:-mr-16 -mt-12 sm:-mt-16"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 animate-pulse-glow">
                  <span className="text-white font-bold text-xl sm:text-2xl">
                    K
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  Koluvu - AI-Powered Job Portal
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Intelligent job matching, ATS, resume parsing, and interview
                  tools powered by advanced AI algorithms.
                </p>
                <div className="mt-4 sm:mt-6 flex items-center text-orange-600 text-sm sm:text-base font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* LEKO */}
            <div className="group relative bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-green-100 overflow-hidden hover-lift scroll-reveal stagger-2">
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full filter blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -mr-12 sm:-mr-16 -mt-12 sm:-mt-16"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 animate-pulse-glow">
                  <span className="text-white font-bold text-xl sm:text-2xl">
                    L
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-green-600 transition-colors duration-300">
                  LEKO - HRMS
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  A comprehensive cloud-based HR management system streamlining
                  payroll, appraisals, and employee data.
                </p>
                <div className="mt-4 sm:mt-6 flex items-center text-green-600 text-sm sm:text-base font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Kolink */}
            <div className="group relative bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-teal-100 overflow-hidden hover-lift scroll-reveal stagger-3 scroll-tilt">
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full filter blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -mr-12 sm:-mr-16 -mt-12 sm:-mt-16"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 animate-pulse-glow">
                  <span className="text-white font-bold text-xl sm:text-2xl">
                    KL
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-teal-600 transition-colors duration-300">
                  Kolink - Talent Engagement Suite
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Collaborative platform connecting clients, talent, and
                  recruiters with unified communication and analytics.
                </p>
                <div className="mt-4 sm:mt-6 flex items-center text-teal-600 text-sm sm:text-base font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Koluvu Kendralaya */}
            <div className="group relative bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-purple-100 overflow-hidden scroll-tilt mouse-parallax stagger-4">
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full filter blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -mr-12 sm:-mr-16 -mt-12 sm:-mt-16"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 animate-heartbeat">
                  <span className="text-white font-bold text-xl sm:text-2xl">
                    KK
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  Koluvu Kendralaya
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Employment centers connecting rural and urban job seekers to
                  verified opportunities nationwide.
                </p>
                <div className="mt-4 sm:mt-6 flex items-center text-purple-600 text-sm sm:text-base font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* School of HR Excellence */}
            <div className="group relative bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-blue-100 overflow-hidden scroll-float mouse-parallax stagger-5">
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full filter blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -mr-12 sm:-mr-16 -mt-12 sm:-mt-16"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 animate-wiggle">
                  <span className="text-white font-bold text-xl sm:text-2xl">
                    S
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  School of HR Excellence
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Comprehensive HR training & certification programs for
                  professionals and freshers.
                </p>
                <div className="mt-4 sm:mt-6 flex items-center text-blue-600 text-sm sm:text-base font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Koluvu Immigrations */}
            <div className="group relative bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-red-100 overflow-hidden sm:col-span-2 lg:col-span-1 scroll-fade-slide mouse-parallax stagger-6">
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-red-400 to-rose-400 rounded-full filter blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -mr-12 sm:-mr-16 -mt-12 sm:-mt-16"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500 to-rose-500 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 animate-tada">
                  <span className="text-white font-bold text-xl sm:text-2xl">
                    KI
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-red-600 transition-colors duration-300">
                  Koluvu Immigrations
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Expert assistance with study and work opportunities abroad,
                  making global dreams achievable.
                </p>
                <div className="mt-4 sm:mt-6 flex items-center text-red-600 text-sm sm:text-base font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section
        id="career"
        className="py-12 sm:py-16 lg:py-28 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] bg-gradient-to-br from-orange-300 to-pink-300 rounded-full filter blur-3xl opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Join Our Team
            </h2>
            <div className="w-20 sm:w-24 h-1.5 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 mx-auto mb-4 sm:mb-6 rounded-full"></div>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Be part of a company shaping the future of HR. Explore exciting
              roles in HR operations, technology, sales, and training.
            </p>
          </div>

          <div className="relative bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-2xl sm:rounded-3xl p-1 shadow-2xl">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
              <div className="inline-block p-3 sm:p-4 bg-gradient-to-br from-orange-100 to-pink-100 rounded-2xl mb-4 sm:mb-6">
                <svg
                  className="w-12 h-12 sm:w-16 sm:h-16 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent mb-3 sm:mb-4">
                Ready to Make an Impact?
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-10 max-w-2xl mx-auto px-4">
                Send your resume to{" "}
                <span className="font-semibold text-orange-600">
                  careers@bhuvihhr.com
                </span>{" "}
                and join our dynamic team
              </p>

              <div className="flex flex-col gap-3 sm:gap-4 justify-center max-w-2xl mx-auto px-4">
                <a
                  href="mailto:careers@bhuvihhr.com"
                  className="group relative bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 inline-block overflow-hidden text-sm sm:text-base"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    careers@bhuvihhr.com
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>

                <div className="relative">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleResumeFileChange}
                    className="hidden"
                  />
                  <button
                    onClick={triggerFileInput}
                    disabled={isUploadingResume}
                    className="w-full group relative border-2 border-orange-600 text-orange-600 px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  >
                    <span className="relative z-10 flex items-center justify-center group-hover:text-white transition-colors duration-300">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      {isUploadingResume ? "Uploading..." : "Send Your Resume"}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                </div>
              </div>

              {/* Resume upload feedback */}
              {resumeFile && !resumeSuccess && (
                <div className="mt-4 sm:mt-6 bg-blue-50 border-2 border-blue-200 text-blue-700 px-4 sm:px-6 py-3 sm:py-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 animate-fadeInDown">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span className="font-semibold text-sm sm:text-base break-all">
                      {resumeFile.name}
                    </span>
                  </div>
                  <button
                    onClick={handleResumeUpload}
                    className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm sm:text-base"
                  >
                    Upload
                  </button>
                </div>
              )}

              {resumeError && (
                <div className="mt-4 sm:mt-6 bg-red-50 border-2 border-red-200 text-red-700 px-4 sm:px-6 py-3 sm:py-4 rounded-xl animate-fadeInDown">
                  <div className="flex items-center gap-2 justify-center">
                    <svg
                      className="w-5 h-5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="font-semibold text-sm sm:text-base">
                      {resumeError}
                    </span>
                  </div>
                </div>
              )}

              {resumeSuccess && (
                <div className="mt-4 sm:mt-6 bg-green-50 border-2 border-green-200 text-green-700 px-4 sm:px-6 py-3 sm:py-4 rounded-xl animate-fadeInDown">
                  <div className="flex items-center gap-2 justify-center">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="font-semibold text-sm sm:text-base">
                      Email client opened! Please attach your resume and send.
                    </span>
                  </div>
                </div>
              )}

              {/* Career Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 pt-8 sm:pt-12 border-t-2 border-gray-100">
                <div className="text-center group cursor-pointer">
                  <div className="inline-block p-3 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">
                    Fast Growth
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Rapid career advancement opportunities
                  </p>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="inline-block p-3 bg-gradient-to-br from-red-100 to-pink-100 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">
                    Great Benefits
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Competitive salary and perks
                  </p>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="inline-block p-3 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 text-pink-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">
                    Amazing Team
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Work with talented professionals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section
        id="events"
        className="py-12 sm:py-16 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Upcoming Events
            </h2>
            <div className="w-20 sm:w-24 h-1.5 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 mx-auto mb-4 sm:mb-6 rounded-full"></div>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Stay connected with our latest events and opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Campus Interviews */}
            <div className="group bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-orange-500 cursor-pointer scroll-reveal scroll-float mouse-parallax stagger-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-rotate-3d">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-orange-600 transition-colors duration-300">
                Campus Interviews
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Regular placement drives with top colleges and universities.
              </p>
            </div>

            {/* HR Workshops */}
            <div className="group bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-green-500 cursor-pointer scroll-reveal scroll-tilt mouse-parallax stagger-2">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-slide-3d">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-green-600 transition-colors duration-300">
                HR Workshops
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Exclusive training sessions for aspiring and current HR
                professionals.
              </p>
            </div>

            {/* Job Fairs */}
            <div className="group bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-purple-500 cursor-pointer scroll-reveal scroll-fade-slide mouse-parallax stagger-3">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-bounce-3d">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-purple-600 transition-colors duration-300">
                Job Fairs
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Connect directly with companies hiring for various roles.
              </p>
            </div>

            {/* Webinars & Talks */}
            <div className="group bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-blue-500 cursor-pointer scroll-reveal scroll-float mouse-parallax stagger-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-depth-float">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300">
                Webinars & Talks
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Stay updated with industry trends and expert guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-28 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-bl from-purple-300 to-pink-300 rounded-full filter blur-3xl opacity-20 -mr-24 -mt-24 sm:-mr-32 sm:-mt-32 lg:-mr-48 lg:-mt-48 animate-float"></div>
        <div
          className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-tr from-orange-300 to-red-300 rounded-full filter blur-3xl opacity-20 -ml-24 -mb-24 sm:-ml-32 sm:-mb-32 lg:-ml-48 lg:-mb-48 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16 scroll-reveal">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              What Our Clients Say
            </h2>
            <div className="w-16 sm:w-20 lg:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 mx-auto mb-4 sm:mb-6 rounded-full"></div>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Trusted by hundreds of companies across India
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 border border-purple-100 scroll-reveal scroll-tilt mouse-parallax card-3d">
              {/* Testimonial Content */}
              <div className="text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6 animate-bounce-subtle scroll-float">
                  {testimonials[activeTestimonial].image}
                </div>
                <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 italic px-2">
                  "{testimonials[activeTestimonial].text}"
                </p>
                <div className="border-t-2 border-gray-200 pt-4 sm:pt-6">
                  <h4 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">
                    {testimonials[activeTestimonial].role}
                  </p>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      index === activeTestimonial
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 w-6 sm:w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              {/* Quote Icon */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8 text-purple-200 opacity-50">
                <svg
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-24 sm:w-32 h-24 sm:h-32 bg-white rounded-full opacity-10 animate-float"></div>
          <div
            className="absolute bottom-10 right-10 w-32 sm:w-40 h-32 sm:h-40 bg-white rounded-full opacity-10 animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/3 w-20 sm:w-24 h-20 sm:h-24 bg-white rounded-full opacity-10 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 scroll-reveal">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-white/90 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 px-4">
            Get the latest HR insights, job opportunities, and industry trends
            delivered to your inbox
          </p>

          <form
            onSubmit={handleNewsletterSubmit}
            className="max-w-xl mx-auto px-4"
          >
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all duration-300 shadow-lg text-sm sm:text-base"
                />
                {emailError && (
                  <p className="text-white text-xs sm:text-sm mt-2 text-left bg-red-500/20 px-4 py-2 rounded-lg backdrop-blur-sm">
                    {emailError}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="bg-white text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ripple-effect text-sm sm:text-base"
              >
                Subscribe Now
              </button>
            </div>
          </form>

          {newsletterSuccess && (
            <div className="mt-4 sm:mt-6 bg-green-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl inline-block animate-fadeInDown shadow-lg">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-semibold text-xs sm:text-base">
                  Successfully subscribed! Check your inbox.
                </span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Get In Touch */}
      <section
        id="contact"
        className="py-12 sm:py-16 lg:py-28 relative overflow-hidden bg-gradient-to-br from-orange-50 via-red-50 to-pink-50"
      >
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-orange-300 to-red-300 rounded-full filter blur-3xl opacity-10 -ml-32 sm:-ml-48 -mt-32 sm:-mt-48"></div>
        <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tl from-pink-300 to-purple-300 rounded-full filter blur-3xl opacity-10 -mr-32 sm:-mr-48 -mb-32 sm:-mb-48"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Get In Touch
            </h2>
            <div className="w-20 sm:w-24 h-1.5 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 mx-auto mb-4 sm:mb-6 rounded-full"></div>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Ready to transform your HR operations? Contact us today
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-orange-100">
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6 sm:mb-8">
                  Contact Information
                </h3>

                <div className="space-y-4 sm:space-y-6">
                  {/* Phone */}
                  <div className="group flex items-start p-3 sm:p-4 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300 cursor-pointer">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <svg
                        className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg">
                        Phone
                      </h4>
                      <p className="text-gray-600 font-medium text-sm sm:text-base">
                        +91 9866875709
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group flex items-start p-3 sm:p-4 rounded-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-300 cursor-pointer">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <svg
                        className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg">
                        Email
                      </h4>
                      <p className="text-gray-600 font-medium text-sm sm:text-base break-all">
                        bhuvihhr@zohomail.in
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="group flex items-start p-3 sm:p-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300 cursor-pointer">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <svg
                        className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg">
                        Address
                      </h4>
                      <p className="text-gray-600 font-medium leading-relaxed text-sm sm:text-base">
                        H-no 8-3-230/1/a/b, V Giri,
                        <br />
                        Safi Residency, 2nd Floor,
                        <br />
                        Yousufguda, Hyderabad,
                        <br />
                        Telangana - 500045
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-orange-100">
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6 sm:mb-8">
                Send us a Message
              </h3>

              <form
                onSubmit={handleContactFormSubmit}
                className="space-y-4 sm:space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactFormChange}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 hover:border-orange-300 text-sm sm:text-base"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactFormChange}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 hover:border-orange-300 text-sm sm:text-base"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={contactForm.message}
                    onChange={handleContactFormChange}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 resize-none hover:border-orange-300 text-sm sm:text-base"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>

                {contactFormError && (
                  <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 sm:px-6 py-3 sm:py-4 rounded-xl animate-fadeInDown">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="font-semibold text-xs sm:text-base">
                        {contactFormError}
                      </span>
                    </div>
                  </div>
                )}

                {contactFormSuccess && (
                  <div className="bg-green-50 border-2 border-green-200 text-green-700 px-4 sm:px-6 py-3 sm:py-4 rounded-xl animate-fadeInDown">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="font-semibold text-xs sm:text-base">
                        Email client opened! Please send your message.
                      </span>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmittingContact}
                  className="group relative w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmittingContact ? "Sending..." : "Send Message"}
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
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
        <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-br from-[#0B6623] via-[#1F8F3F] to-[#34A853] rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-tr from-[#0B6623] via-[#1F8F3F] to-[#34A853] rounded-full filter blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-start">
            <div>
              <div className="flex items-center mb-4 sm:mb-6 group cursor-pointer">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/90 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 shadow-xl overflow-hidden flex-shrink-0">
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
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white leading-tight">
                    Bhuvih HR Solutions
                  </span>
                  <span className="text-white/70 text-xs sm:text-sm">
                    Connecting Talent with Possibilities
                  </span>
                </div>
              </div>
              <p className="text-white/80 max-w-xs text-sm sm:text-base leading-relaxed">
                Bridging talent with opportunity through innovative HR solutions
                and AI-powered recruitment technology.
              </p>
            </div>

            <div className="lg:pl-4">
              <h3 className="font-bold mb-4 sm:mb-6 text-lg sm:text-xl bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
                Registered & Corporate Office
              </h3>
              <div className="space-y-1 sm:space-y-2 text-white/80 text-xs sm:text-sm leading-relaxed">
                <p>H-no 8-3-230/1/a/b, V Giri,</p>
                <p>Safi Residency, 2nd Floor,</p>
                <p>Yousufguda, Hyderabad,</p>
                <p>Telangana - 500045</p>
              </div>
            </div>

            <div className="lg:pl-4">
              <h3 className="font-bold mb-4 sm:mb-6 text-lg sm:text-xl bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
                Legal Documents
              </h3>
              <ul className="space-y-3 sm:space-y-4 text-white/80 text-xs sm:text-sm">
                <li>
                  <button
                    onClick={() => openModal("privacy")}
                    className="group flex items-center hover:text-white transition-all duration-300 cursor-pointer text-left"
                  >
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-white group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openModal("terms")}
                    className="group flex items-center hover:text-white transition-all duration-300 cursor-pointer text-left"
                  >
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-white group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    Terms & Conditions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openModal("disclaimer")}
                    className="group flex items-center hover:text-white transition-all duration-300 cursor-pointer text-left"
                  >
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-white group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    Disclaimer
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openModal("nda")}
                    className="group flex items-center hover:text-white transition-all duration-300 cursor-pointer text-left"
                  >
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-white group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    Non-Disclosure Agreement
                  </button>
                </li>
              </ul>
            </div>

            <div className="lg:pl-4">
              <h3 className="font-bold mb-4 sm:mb-6 text-lg sm:text-xl bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
                Our Platforms
              </h3>
              <ul className="space-y-3 sm:space-y-4 text-white/80 text-xs sm:text-sm">
                <li className="group cursor-pointer">
                  <a
                    href="https://koluvu-job-portal.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors duration-300"
                  >
                    <span className="font-semibold text-white group-hover:text-green-200 transition-colors duration-300">
                      Koluvu
                    </span>
                    <svg
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  <div className="text-sm text-white/70">
                    AI-Powered Job Matching
                  </div>
                </li>
                <li className="group cursor-pointer">
                  <span className="font-semibold text-white group-hover:text-green-200 transition-colors duration-300">
                    Leko-HRMS
                  </span>
                  <div className="text-sm text-white/70">
                    HR Management System
                  </div>
                </li>
                <li className="group cursor-pointer">
                  <span className="font-semibold text-white group-hover:text-green-200 transition-colors duration-300">
                    Koluvu Technology
                  </span>
                  <div className="text-sm text-white/70">Tech Solutions</div>
                </li>
                <li className="group cursor-pointer">
                  <span className="font-semibold text-white group-hover:text-green-200 transition-colors duration-300">
                    Koluvu Kendralaya
                  </span>
                  <div className="text-sm text-white/70">
                    Training & Certifications
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/30 mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-4">
              <p className="text-white/80 text-xs sm:text-sm md:text-base text-center lg:text-left">
                © 2025{" "}
                <span className="text-white font-semibold">
                  Bhuvih HR Solutions Pvt Ltd
                </span>
                . All rights reserved.
              </p>
              <p className="text-white/70 text-xs sm:text-sm text-center lg:text-center">
                Made with{" "}
                <span className="text-green-200 animate-pulse-slow">❤</span> in
                Hyderabad
              </p>
              <p className="text-white/70 text-xs sm:text-sm md:text-base text-center lg:text-right">
                Governed by Indian Contract Act, 1872 | Jurisdiction: Hyderabad
                Courts
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Document Modals */}
      <LegalModal
        isOpen={activeModal === "privacy"}
        onClose={closeModal}
        title="Privacy Policy"
        content={
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Overview
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Bhuvih HR Solutions Pvt Ltd ("Company," "we," "our," or "us") is
                committed to maintaining the privacy, security, and
                confidentiality of all individuals and organizations that
                interact with our platforms — Koluvu, Leko-HRMS, Koluvu
                Technology, and Koluvu Kendralaya Solutions.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                This Privacy Policy explains how we collect, use, store, share,
                and protect your personal and organizational information when
                you access or use our websites, applications, and related
                digital services.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                By accessing or using our platforms, you acknowledge that you
                have read, understood, and agreed to the terms of this Privacy
                Policy.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Information We Collect
              </h3>

              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">
                  1. Personal Data (Candidates)
                </h4>
                <p className="text-gray-700 mb-2">
                  We collect the following types of personal information from
                  job seekers or users:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Full name, contact number, and email address</li>
                  <li>Resume/CV, cover letter, and uploaded documents</li>
                  <li>
                    Employment history, educational qualifications, and
                    certifications
                  </li>
                  <li>Skills, job preferences, and salary expectations</li>
                  <li>Profile photo or video introductions (optional)</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">
                  2. Employer / Client Data
                </h4>
                <p className="text-gray-700 mb-2">
                  We collect information related to employers, recruiters, and
                  organizational representatives:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Company name and registration details</li>
                  <li>
                    HR contact details, email addresses, and phone numbers
                  </li>
                  <li>Job postings, descriptions, and requirements</li>
                  <li>
                    Salary structures, employment offers, and performance data
                    (for HRMS users)
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">
                  3. Usage & Technical Data
                </h4>
                <p className="text-gray-700 mb-2">
                  We automatically collect certain information when you interact
                  with our platforms:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Browser type, operating system, and device details</li>
                  <li>IP address, geolocation, and access timestamps</li>
                  <li>Session duration and clickstream data</li>
                  <li>Cookies, tracking pixels, and analytics identifiers</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">
                  4. Sensitive Information
                </h4>
                <p className="text-gray-700 mb-2">
                  Certain information is considered sensitive and is collected
                  only with your explicit consent:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>
                    Government identification (PAN, Aadhaar, SSN for US clients)
                  </li>
                  <li>Bank account or payroll-related data</li>
                  <li>Salary slips, appraisal data, or performance reviews</li>
                  <li>
                    Biometric or facial data (only if required for specific HRMS
                    verification modules)
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Purpose of Collection
              </h3>
              <p className="text-gray-700 mb-3">
                We collect and process data for the following legitimate
                business and operational purposes:
              </p>

              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    Recruitment & Matching Services
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>
                      Enable resume parsing, AI scoring, and candidate-job
                      matching.
                    </li>
                    <li>
                      Facilitate communication between employers and candidates.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    Operational & Legal Compliance
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>
                      Maintain accurate employment, payroll, and compliance
                      records.
                    </li>
                    <li>
                      Support legal, audit, and tax reporting obligations.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    Platform Improvement
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>
                      Analyze usage data to enhance platform performance and AI
                      models.
                    </li>
                    <li>
                      Improve search results, job recommendations, and HR
                      analytics accuracy.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    Personalized Experience
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>
                      Send tailored job alerts, training recommendations, and
                      notifications.
                    </li>
                    <li>
                      Offer career insights, interview preparation tools, and AI
                      resume feedback.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    Customer Support
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>
                      Provide technical assistance, account recovery, and query
                      resolution.
                    </li>
                    <li>
                      Communicate important updates, policy changes, or service
                      disruptions.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Data Storage & Security
              </h3>
              <p className="text-gray-700 mb-3">
                We employ industry-standard security protocols and cloud
                infrastructure to ensure your data remains safe, confidential,
                and accessible only to authorized personnel.
              </p>

              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    1. Data Storage
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>
                      All data is securely stored on encrypted cloud databases
                      such as AWS, Google Cloud Platform, or MongoDB Atlas with
                      multi-layer access controls.
                    </li>
                    <li>
                      Backup copies are maintained for disaster recovery, using
                      secure offsite servers.
                    </li>
                    <li>
                      Data retention periods are defined based on operational,
                      legal, and compliance needs, after which data is safely
                      anonymized or deleted.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    2. Data Security Measures
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>
                      <strong>Encryption:</strong> All sensitive data is
                      encrypted in transit (SSL/TLS) and at rest (AES-256).
                    </li>
                    <li>
                      <strong>Access Control:</strong> Role-based authentication
                      ensures only authorized personnel can access specific
                      data.
                    </li>
                    <li>
                      <strong>Firewall & Monitoring:</strong> Advanced intrusion
                      detection systems monitor and prevent unauthorized access.
                    </li>
                    <li>
                      <strong>Regular Security Audits:</strong> Periodic
                      vulnerability assessments and compliance audits are
                      conducted.
                    </li>
                    <li>
                      <strong>Secure Development Practices:</strong> Our
                      applications follow OWASP and ISO 27001 security
                      standards.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    3. Data Sharing & Disclosure
                  </h4>
                  <p className="text-gray-700 mb-2">
                    We do not sell or rent user data to third parties. Data may
                    only be shared under the following conditions:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>
                      With employers or recruiters (for candidate matching and
                      communication).
                    </li>
                    <li>
                      With technology partners or service providers who assist
                      in operating our platforms (under strict confidentiality
                      agreements).
                    </li>
                    <li>When required by law, regulation, or legal process.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    4. International Data Transfers
                  </h4>
                  <p className="text-gray-700">
                    For users outside India, data may be processed on servers
                    located in India or other jurisdictions. We ensure such
                    transfers comply with GDPR, DPDP Act (India), and other
                    applicable data protection laws.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                User Rights
              </h3>
              <p className="text-gray-700 mb-3">
                You have full control over your personal information and can:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  Access, review, or update your profile and resume information.
                </li>
                <li>Withdraw consent or request deletion of your account.</li>
                <li>
                  Request data export or portability (in structured formats).
                </li>
                <li>
                  Opt out of marketing or promotional communications anytime.
                </li>
              </ul>
              <p className="text-gray-700 mt-3">
                To exercise these rights, you may contact us at{" "}
                <strong>privacy@bhuvihhr.com</strong>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Cookies & Tracking
              </h3>
              <p className="text-gray-700 mb-2">
                Our platforms use cookies and analytics tools (like Google
                Analytics) to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Recognize returning users</li>
                <li>Personalize recommendations</li>
                <li>Measure website traffic and performance</li>
              </ul>
              <p className="text-gray-700 mt-2">
                You can modify your browser settings to disable cookies;
                however, some features may not function properly without them.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Third-Party Integrations
              </h3>
              <p className="text-gray-700">
                Certain features (e.g., payment gateways, AI integrations, or
                email services) may rely on third-party platforms. These
                services follow their own privacy policies, and we encourage you
                to review them before using those features.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Data Retention Policy
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  Candidate and employer data are retained as long as the
                  account is active or necessary to provide services.
                </li>
                <li>
                  Inactive accounts may be archived or deleted after 24 months
                  of non-use.
                </li>
                <li>
                  Financial and compliance records are retained as per statutory
                  requirements.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Changes to This Policy
              </h3>
              <p className="text-gray-700">
                We may update this Privacy Policy periodically to reflect
                operational, legal, or regulatory changes. Updates will be
                posted on our website with a "Last Updated" date.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Contact Information
              </h3>
              <p className="text-gray-700 mb-2">
                For questions or concerns regarding this Privacy Policy, please
                contact:
              </p>
              <div className="text-gray-700 ml-4 mt-2">
                <p className="font-semibold">Bhuvih HR Solutions Pvt Ltd</p>
                <p>H.No 8-3-230/1/A/B, Safi Residency, 2nd Floor,</p>
                <p>V Giri, Yousufguda, Khairatabad,</p>
                <p>Hyderabad, Telangana, India – 500045</p>
                <p className="mt-2">📞 +91 9866875709</p>
                <p>📧 bhuvihhr@zohomail.in</p>
              </div>
            </div>
          </div>
        }
      />

      <LegalModal
        isOpen={activeModal === "terms"}
        onClose={closeModal}
        title="Terms & Conditions"
        content={
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Eligibility
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Candidates must be 18 years or older to register.</li>
                <li>Employers must be legally registered businesses.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                User Conduct
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  Users must not upload false, misleading, or plagiarized
                  resumes.
                </li>
                <li>
                  Employers must not post fake, discriminatory, or fraudulent
                  job listings.
                </li>
                <li>
                  Prohibited actions include spamming, hacking, scraping, or
                  exploiting system vulnerabilities.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Service Commitments
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong>Koluvu</strong> ensures AI-powered recommendations but
                  does not guarantee job placement.
                </li>
                <li>
                  <strong>Leko-HRMS</strong> provides HR and payroll automation
                  but requires correct data entry by employers.
                </li>
                <li>
                  <strong>School of HR Excellence</strong> provides training and
                  certifications, outcomes depend on candidate performance.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Intellectual Property
              </h3>
              <p className="text-gray-700 leading-relaxed">
                All logos, code, training materials, AI models, and content
                belong to Bhuvih HR Solutions Pvt Ltd. Unauthorized reproduction
                or use is prohibited.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Limitation of Liability
              </h3>
              <p className="text-gray-700 mb-2">
                Bhuvih HR is not responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Employer-candidate disputes.</li>
                <li>Financial losses due to reliance on AI recommendations.</li>
                <li>
                  Service downtime due to technical or natural disruptions.
                </li>
              </ul>
            </div>
          </div>
        }
      />

      <LegalModal
        isOpen={activeModal === "disclaimer"}
        onClose={closeModal}
        title="Disclaimer"
        content={
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                No Employment Guarantee
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Koluvu functions as a professional platform to connect job
                seekers with potential employers and facilitate recruitment
                opportunities. However, Koluvu or its parent company, Bhuvih HR
                Solutions Pvt. Ltd., does not provide or imply any assurance of
                employment, interview calls, or job placement. The hiring
                decision rests entirely with the respective employer, and job
                seekers are encouraged to actively explore multiple
                opportunities beyond the platform.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                AI Limitations
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Koluvu utilizes advanced AI-driven systems for resume parsing,
                scoring, and personalized job recommendations. While these tools
                are designed to improve the matching process between candidates
                and job postings, the outputs are generated algorithmically and
                may not always reflect complete accuracy. Users are advised to
                treat AI-based insights as advisory guidance, not definitive
                decisions. Continuous updates and data improvements are
                implemented to enhance precision and fairness.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Third-Party Employers
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Koluvu hosts job postings from various third-party employers and
                recruitment agencies. Bhuvih HR Solutions Pvt. Ltd. is not
                responsible for the authenticity, legitimacy, or conduct of
                these employers. Users are strongly advised to verify company
                details, job offers, and interview processes before sharing
                personal or financial information. Koluvu does not engage in any
                monetary transactions between job seekers and employers for
                employment purposes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Training Programs
              </h3>
              <p className="text-gray-700 leading-relaxed">
                All training programs, workshops, and certifications offered
                through the Koluvu Kendralaya Solutions are designed for skill
                development, industry exposure, and professional enhancement.
                These programs do not constitute a job placement service and
                should not be interpreted as a guarantee of employment. The
                completion of training or certification merely validates
                participation and learning outcomes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Platform Availability
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Koluvu strives to provide uninterrupted access to its services
                and features. However, there may be temporary interruptions or
                delays due to system upgrades, technical issues, maintenance, or
                unforeseen events. The platform reserves the right to modify,
                suspend, or discontinue any part of the service without prior
                notice. Users are encouraged to check for official updates
                during such instances.
              </p>
            </div>
          </div>
        }
      />

      <LegalModal
        isOpen={activeModal === "nda"}
        onClose={closeModal}
        title="Non-Disclosure Agreement (NDA)"
        content={
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                1. Definition of Confidential Information
              </h3>
              <p className="text-gray-700 mb-3">
                For the purposes of this Agreement, "Confidential Information"
                refers to any and all information disclosed by the Disclosing
                Party to the Recipient, whether written, oral, electronic, or in
                any other form, that is intended to be confidential.
                Confidential Information includes, but is not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  <strong>Technical Information:</strong> Product roadmaps,
                  research and development plans, AI algorithms, software code,
                  system designs, technical specifications, databases, and
                  prototypes.
                </li>
                <li>
                  <strong>Business Information:</strong> Strategic plans,
                  marketing strategies, customer and vendor lists, financial
                  records, pricing policies, and business forecasts.
                </li>
                <li>
                  <strong>Human Resources Information:</strong> Employee and
                  candidate personal data, salary structures, performance
                  evaluations, organizational hierarchy, and recruitment plans.
                </li>
                <li>
                  <strong>Partnerships & Collaborations:</strong> Agreements,
                  contracts, joint ventures, and any other strategic
                  partnerships.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                2. Obligations of the Recipient
              </h3>
              <p className="text-gray-700 mb-3">The Recipient agrees to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  Maintain strict confidentiality of all Confidential
                  Information and not disclose it to any third party without
                  prior written consent from the Disclosing Party.
                </li>
                <li>
                  Use Confidential Information solely for the purpose of the
                  intended collaboration, project, or employment engagement.
                </li>
                <li>
                  Take reasonable measures to prevent unauthorized access,
                  copying, or distribution of the Confidential Information.
                </li>
                <li>
                  Upon termination of the collaboration or employment,
                  immediately return or destroy all materials containing
                  Confidential Information, including digital copies, and
                  certify such destruction if requested.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                3. Exclusions from Confidential Information
              </h3>
              <p className="text-gray-700 mb-3">
                Confidential Information does not include information that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  Is already publicly available or becomes publicly available
                  through no fault of the Recipient.
                </li>
                <li>
                  Is lawfully received from a third party without restriction on
                  disclosure.
                </li>
                <li>
                  Is independently developed by the Recipient without reference
                  to the Disclosing Party's Confidential Information.
                </li>
                <li>
                  Is required to be disclosed pursuant to applicable law,
                  regulation, or court order, provided the Recipient gives
                  prompt notice to the Disclosing Party to seek protective
                  measures or limits on disclosure.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                4. Term
              </h3>
              <p className="text-gray-700">
                This NDA shall remain in effect during the period of
                collaboration or employment and for a period of 2–5 years
                thereafter, unless otherwise mutually agreed in writing.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                5. Legal Framework
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  This Agreement shall be governed by and construed in
                  accordance with the <strong>Indian Contract Act, 1872</strong>
                  .
                </li>
                <li>
                  Any disputes arising out of or in connection with this NDA
                  shall be subject to the exclusive jurisdiction of the courts
                  in <strong>Hyderabad, Telangana, India</strong>.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                6. Remedies
              </h3>
              <p className="text-gray-700">
                The Recipient acknowledges that breach of this Agreement may
                cause irreparable harm to the Disclosing Party. In the event of
                a breach, the Disclosing Party shall be entitled to seek
                injunctive relief, specific performance, or any other equitable
                remedy in addition to any other legal remedies available under
                law.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                7. Miscellaneous
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  No waiver of any provision of this Agreement shall constitute
                  a waiver of any other provision.
                </li>
                <li>
                  If any provision of this NDA is held to be invalid or
                  unenforceable, the remaining provisions shall remain in full
                  force and effect.
                </li>
                <li>
                  This NDA constitutes the entire agreement between the parties
                  concerning Confidential Information and supersedes any prior
                  agreements or understandings.
                </li>
              </ul>
            </div>
          </div>
        }
      />

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-50 bg-gradient-to-r from-orange-600 to-red-600 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 animate-bounce-subtle group"
          aria-label="Back to top"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-y-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
