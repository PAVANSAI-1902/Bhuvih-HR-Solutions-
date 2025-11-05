"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
            <Link href="/#about" className="px-3 py-2 rounded-lg text-white text-sm hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-medium transform hover:scale-105">
              About Us
            </Link>
            <Link href="/#business" className="px-3 py-2 rounded-lg text-white text-sm hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-medium transform hover:scale-105">
              Our Business
            </Link>
            <Link href="/#career" className="px-3 py-2 rounded-lg text-white text-sm hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-medium transform hover:scale-105">
              Career
            </Link>
            <Link href="/#contact" className="px-3 py-2 rounded-lg text-white text-sm hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-medium transform hover:scale-105">
              Contact
            </Link>
          </nav>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/20 transition-all duration-300"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 animate-fadeInDown">
            <Link href="/#about" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-lg text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-medium">About Us</Link>
            <Link href="/#business" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-lg text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-medium">Our Business</Link>
            <Link href="/#career" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-lg text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-medium">Career</Link>
            <Link href="/#contact" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-lg text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-medium">Contact</Link>
          </div>
        )}
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-[#0B6623] via-[#1F8F3F] to-[#34A853] text-white overflow-hidden">
      <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-br from-[#0B6623] via-[#1F8F3F] to-[#34A853] rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-tr from-[#0B6623] via-[#1F8F3F] to-[#34A853] rounded-full filter blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-start">
          <div>
            <div className="flex items-center mb-4 sm:mb-6 group cursor-pointer">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/90 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 shadow-xl overflow-hidden flex-shrink-0">
                <img src="/images/logo.jpg" alt="logo" className="object-cover w-full h-full" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white leading-tight">Bhuvih HR Solutions</span>
                <span className="text-white/70 text-xs sm:text-sm">Connecting Talent with Possibilities</span>
              </div>
            </div>
            <p className="text-white/80 max-w-xs text-sm sm:text-base leading-relaxed">
              Bridging talent with opportunity through innovative HR solutions and AI-powered recruitment technology.
            </p>
          </div>

          <div className="lg:pl-4">
            <h3 className="font-bold mb-4 sm:mb-6 text-lg sm:text-xl bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">Registered & Corporate Office</h3>
            <div className="space-y-1 sm:space-y-2 text-white/80 text-xs sm:text-sm leading-relaxed">
              <p>H-no 8-3-230/1/a/b, V Giri,</p>
              <p>Safi Residency, 2nd Floor,</p>
              <p>Yousufguda, Hyderabad,</p>
              <p>Telangana - 500045</p>
            </div>
          </div>

          <div className="lg:pl-4">
            <h3 className="font-bold mb-4 sm:mb-6 text-lg sm:text-xl bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">Legal Documents</h3>
            <ul className="space-y-3 sm:space-y-4 text-white/80 text-xs sm:text-sm">
              <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms-and-conditions" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="/disclaimer" className="hover:text-white">Disclaimer</a></li>
              <li><a href="/non-disclosure-agreement" className="hover:text-white">Non-Disclosure Agreement</a></li>
              <li><a href="/shipping-policy" className="hover:text-white">Shipping Policy</a></li>
              <li><a href="/cancellation-policy" className="hover:text-white">Cancellation Policy</a></li>
            </ul>
          </div>

          <div className="lg:pl-4">
            <h3 className="font-bold mb-4 sm:mb-6 text-lg sm:text-xl bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">Our Platforms</h3>
            <ul className="space-y-3 sm:space-y-4 text-white/80 text-xs sm:text-sm">
              <li>Koluvu - AI-Powered Job Portal</li>
              <li>Leko-HRMS</li>
              <li>Kolink - Talent Engagement Suite</li>
              <li>Koluvu Kendralaya</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/30 mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-white/80 text-xs sm:text-sm md:text-base text-center lg:text-left">© 2025 <span className="text-white font-semibold">Bhuvih HR Solutions Pvt Ltd</span>. All rights reserved.</p>
            <p className="text-white/70 text-xs sm:text-sm text-center lg:text-center">Made with <span className="text-green-200 animate-pulse-slow">❤</span> in Hyderabad</p>
            <p className="text-white/70 text-xs sm:text-sm md:text-base text-center lg:text-right">Governed by Indian Contract Act, 1872 | Jurisdiction: Hyderabad Courts</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function SiteShell({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
