"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function TermsConditions() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-orange-50">
      {/* Header */}
      <header
        className={`bg-gradient-to-r from-[#FF9933] via-[#FF7F11] to-[#FF4500] text-white shadow-2xl sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-2 shadow-xl" : "py-3 lg:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center group cursor-pointer">
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
            </Link>
            <nav className="hidden md:flex space-x-1 lg:space-x-2">
              <Link
                href="/#about"
                className="px-3 py-2 rounded-lg text-white text-sm hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-medium transform hover:scale-105"
              >
                About Us
              </Link>
              <Link
                href="/#business"
                className="px-3 py-2 rounded-lg text-white text-sm hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-medium transform hover:scale-105"
              >
                Our Business
              </Link>
              <Link
                href="/#career"
                className="px-3 py-2 rounded-lg text-white text-sm hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-medium transform hover:scale-105"
              >
                Career
              </Link>
              <Link
                href="/#contact"
                className="px-3 py-2 rounded-lg text-white text-sm hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-medium transform hover:scale-105"
              >
                Contact
              </Link>
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
              <Link
                href="/#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-medium"
              >
                About Us
              </Link>
              <Link
                href="/#business"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-medium"
              >
                Our Business
              </Link>
              <Link
                href="/#career"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-medium"
              >
                Career
              </Link>
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-medium"
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold mb-4 transition-colors duration-300"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Home
            </Link>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Terms & Conditions
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 mx-auto rounded-full"></div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12 mb-8">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Eligibility
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Candidates must be 18 years or older to register.</li>
                    <li>Employers must be legally registered businesses.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    User Conduct
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Service Commitments
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Intellectual Property
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    All logos, code, training materials, AI models, and content
                    belong to Bhuvih HR Solutions Pvt Ltd. Unauthorized reproduction
                    or use is prohibited.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Limitation of Liability
                  </h2>
                  <p className="text-gray-700 mb-2">
                    Bhuvih HR is not responsible for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Employer-candidate disputes.</li>
                    <li>Financial losses due to reliance on AI recommendations.</li>
                    <li>
                      Service downtime due to technical or natural disruptions.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Governing Law and Jurisdiction
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    These Terms & Conditions are governed by and construed in
                    accordance with the laws of India. Any disputes shall be subject
                    to the exclusive jurisdiction of the courts in Hyderabad,
                    Telangana.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Contact Information
                  </h2>
                  <div className="text-gray-700 ml-4">
                    <p className="font-semibold">Bhuvih HR Solutions Pvt Ltd</p>
                    <p>H.No 8-3-230/1/A/B, Safi Residency, 2nd Floor,</p>
                    <p>V Giri, Yousufguda, Khairatabad,</p>
                    <p>Hyderabad, Telangana, India – 500045</p>
                    <p className="mt-2">📞 +91 9866875709</p>
                    <p>📧 bhuvihhr@zohomail.in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </main>

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
                  <Link
                    href="/privacy-policy"
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
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-conditions"
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
                  </Link>
                </li>
                <li>
                  <Link
                    href="/disclaimer"
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
                  </Link>
                </li>
                <li>
                  <Link
                    href="/non-disclosure-agreement"
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
                  </Link>
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
                    Kolink - Talent Engagement Suite
                  </span>
                  <div className="text-sm text-white/70">
                    Connecting Talent, Clients & Recruiters
                  </div>
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
    </div>
  );
}