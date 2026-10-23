import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  Menu,
  X,
  Star,
  ShieldCheck,
  Wrench,
  Hammer,
  Home,
  Flame,
  Sparkles,
  ChevronRight,
  Send,
  Check,
  AlertCircle
} from 'lucide-react';
import heroBg from './assets/images/hero_roofing_home_1792784797744.jpg';

// SVG silhouette of New Jersey for the brand logo
function NewJerseySilhouette({ className = 'w-7 h-10' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 160"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M 52,4 C 58,14 62,20 66,28 C 68,32 67,38 65,42 C 63,46 66,49 74,52 C 78,53 79,56 75,60 C 72,64 70,72 70,82 C 70,92 68,105 65,116 C 62,126 56,142 52,154 C 50,157 47,156 46,150 C 44,142 38,132 35,124 C 32,116 28,110 30,102 C 32,96 36,88 38,82 C 40,76 38,70 35,64 C 32,58 31,50 33,42 C 35,34 38,26 42,16 C 46,8 48,3 52,4 Z" />
    </svg>
  );
}

// Service list data
const SERVICES = [
  {
    id: 'roof-repair',
    title: 'Roof Repair',
    description: 'Fast, dependable fixes for wind damage, missing shingles, leaks, and storm wear.',
    icon: Wrench,
  },
  {
    id: 'roof-replacement',
    title: 'Roof Replacement',
    description: 'Complete tear-off and architectural shingle installation with lifetime warranty options.',
    icon: Hammer,
  },
  {
    id: 'new-roof-installation',
    title: 'New Roof Installation',
    description: 'Premium residential roofing tailored for new construction and home additions.',
    icon: Home,
  },
  {
    id: 'chimney-repair',
    title: 'Chimney Repair & Rebuilding',
    description: 'Expert brick repointing, crown restoration, and structural masonry rebuilds.',
    icon: Flame,
  },
  {
    id: 'chimney-cleaning',
    title: 'Chimney Cleaning & Inspection',
    description: 'Thorough flue sweeps, creosote removal, and camera-verified safety checks.',
    icon: Sparkles,
  },
  {
    id: 'gutters-leak-protection',
    title: 'Gutters & Leak Protection',
    description: 'Seamless gutter systems, leaf guards, and advanced waterproof flashing barriers.',
    icon: ShieldCheck,
  },
];

const TRUST_POINTS = [
  {
    title: 'Fully Licensed & Insured in New Jersey',
    desc: 'Full general liability and worker’s compensation coverage for total homeowner protection.',
  },
  {
    title: 'Local NJ Experience & Climate Expertise',
    desc: 'Roofing and masonry engineered specifically to withstand heavy Nor’easters, winter ice dams, and humid summers.',
  },
  {
    title: '100% Free On-Site Estimates',
    desc: 'Honest, transparent evaluations with itemized upfront proposals and zero hidden surprises.',
  },
  {
    title: 'Premium Grade Architectural Materials',
    desc: 'High-performance fiberglass asphalt shingles, heavy-gauge flashing, and weather-resistant masonry mortar.',
  },
  {
    title: 'Guaranteed Workmanship & Clean Worksites',
    desc: 'Every project includes rigorous magnetic nail sweep cleanup and dedicated labor warranties.',
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Roof Repair');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Roof Repair',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (formError) setFormError('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setFormError('Please fill in your name, phone number, and email.');
      return;
    }
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormError('Please enter a valid email address.');
      return;
    }

    setFormSubmitted(true);
    setFormError('');
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const selectServiceAndScroll = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setFormData((prev) => ({ ...prev, service: serviceTitle }));
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-[#111111] bg-white selection:bg-[#0B5CAB]/20 selection:text-[#0A2A4F]">
      {/* 1. STICKY HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Logo Area */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="flex items-center gap-3 group shrink-0 focus-visible:outline-2 focus-visible:outline-[#0B5CAB] rounded-md p-1"
            aria-label="Garden State Roofing & Chimney Home"
          >
            <div className="text-[#0B5CAB] flex items-center justify-center transition-transform group-hover:scale-105">
              <NewJerseySilhouette className="w-8 h-12" />
            </div>
            <div className="flex flex-col justify-center leading-none">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#0B5CAB] uppercase">
                Garden State
              </span>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[#111111] font-heading uppercase">
                ROOFING
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-slate-500 uppercase -mt-0.5">
                &amp; Chimney
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
              className="hover:text-[#0B5CAB] transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#0B5CAB] rounded-md py-1"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className="hover:text-[#0B5CAB] transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#0B5CAB] rounded-md py-1"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="hover:text-[#0B5CAB] transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#0B5CAB] rounded-md py-1"
            >
              Contact
            </a>
          </nav>

          {/* Right Header Controls */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            {/* Desktop Call Button */}
            <a
              href="tel:+19085216060"
              className="inline-flex items-center gap-2 bg-[#0B5CAB] hover:bg-[#08437D] text-white font-semibold text-xs sm:text-sm px-3.5 sm:px-5 py-2.5 rounded-lg shadow-sm transition-all focus-visible:outline-2 focus-visible:outline-[#0B5CAB] whitespace-nowrap active:scale-[0.98]"
            >
              <Phone className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">Call Now:</span>
              <span className="font-bold">+1 (908) 521-6060</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-[#0B5CAB]"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top duration-200 shadow-xl">
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
              className="block px-3 py-2 text-base font-semibold text-slate-800 hover:text-[#0B5CAB] hover:bg-slate-50 rounded-md"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className="block px-3 py-2 text-base font-semibold text-slate-800 hover:text-[#0B5CAB] hover:bg-slate-50 rounded-md"
            >
              About Us &amp; Why Choose Us
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="block px-3 py-2 text-base font-semibold text-slate-800 hover:text-[#0B5CAB] hover:bg-slate-50 rounded-md"
            >
              Free Estimate &amp; Contact
            </a>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="tel:+19085216060"
                className="w-full flex items-center justify-center gap-2 bg-[#0B5CAB] text-white py-3 px-4 rounded-lg font-bold text-center"
              >
                <Phone className="w-4 h-4" />
                Call +1 (908) 521-6060
              </a>
              <p className="text-center text-xs text-slate-500 pt-1">
                92 E Maple St, Teaneck, NJ 07666
              </p>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section
        id="hero"
        className="relative bg-[#0A2A4F] text-white min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden"
      >
        {/* Background Image with Fallback and Dark Navy Scrim Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Beautiful home with newly installed shingle roof and chimney in New Jersey"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* Gradients ensuring WCAG contrast and rich navy brand aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2A4F]/95 via-[#0A2A4F]/85 to-[#0B5CAB]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A2A4F] via-transparent to-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
          <div className="max-w-3xl">
            {/* Subtle Star Rating Highlight */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/15 text-xs sm:text-sm font-medium mb-6">
              <div className="flex items-center text-[#E8A33D]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#E8A33D]" />
                ))}
              </div>
              <span className="font-semibold text-white">4.9 / 5.0</span>
              <span className="text-white/60">·</span>
              <span className="text-slate-200">Teaneck &amp; Bergen County's Trusted Specialists</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white leading-[1.15] text-balance mb-5">
              Reliable Roofing &amp; Chimney Services in Teaneck, NJ
            </h1>

            {/* Subheadline: Short sentence about quality workmanship & honest pricing */}
            <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed mb-8 max-w-2xl">
              Delivering durable roof replacements, precision chimney rebuilds, and honest upfront pricing for homeowners throughout Teaneck and surrounding New Jersey communities.
            </p>

            {/* CTAs: "Get a Free Estimate" (solid blue) and "Call +1 (908) 521-6060" (outlined white) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="inline-flex items-center justify-center gap-2 bg-[#0B5CAB] hover:bg-[#08437D] text-white font-bold text-base px-7 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all focus-visible:outline-2 focus-visible:outline-white text-center active:scale-[0.98]"
              >
                Get a Free Estimate
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+19085216060"
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white hover:text-[#0A2A4F] text-white border-2 border-white font-bold text-base px-6 py-3.5 rounded-lg transition-all focus-visible:outline-2 focus-visible:outline-white text-center active:scale-[0.98]"
              >
                <Phone className="w-4 h-4" />
                Call +1 (908) 521-6060
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0B5CAB] bg-white rounded-full shrink-0" />
                <span>Licensed &amp; Fully Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0B5CAB] bg-white rounded-full shrink-0" />
                <span>Zero-Obligation Estimates</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#0B5CAB] bg-white rounded-full shrink-0" />
                <span>24/7 Emergency Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section id="services" className="py-20 bg-[#F4F6F8] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B5CAB] block mb-2">
              What We Do
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#111111] tracking-tight">
              Our Professional Services
            </h2>
            <p className="mt-3 text-slate-600 text-base">
              Dedicated exterior solutions designed to protect your home against New Jersey weather year-round.
            </p>
          </div>

          {/* Grid of 6 Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white p-7 rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-[#0B5CAB]/40 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-[#0B5CAB]/10 text-[#0B5CAB] flex items-center justify-center mb-5 group-hover:bg-[#0B5CAB] group-hover:text-white transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-[#111111] mb-2 group-hover:text-[#0B5CAB] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => selectServiceAndScroll(service.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B5CAB] hover:text-[#08437D] transition-colors group-hover:translate-x-0.5 duration-150 cursor-pointer"
                    >
                      Request estimate for this service
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Consultation Banner */}
          <div className="mt-12 bg-white rounded-lg p-6 sm:p-8 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div>
              <h4 className="text-lg font-heading font-bold text-[#111111]">
                Need immediate inspection or storm damage evaluation?
              </h4>
              <p className="text-sm text-slate-600 mt-1">
                Our technicians are stationed in Teaneck for prompt evaluations and emergency assistance.
              </p>
            </div>
            <a
              href="tel:+19085216060"
              className="shrink-0 inline-flex items-center gap-2 bg-[#0B5CAB] hover:bg-[#08437D] text-white font-bold text-sm px-5 py-3 rounded-lg transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              Call (908) 521-6060
            </a>
          </div>
        </div>
      </section>

      {/* 4. ABOUT / WHY CHOOSE US SECTION */}
      <section id="about" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Short Paragraph about the Company */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B5CAB] block mb-2">
                  About Our Company
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#111111] tracking-tight leading-tight">
                  Teaneck's Trusted Roofing &amp; Chimney Specialists
                </h2>
              </div>

              <p className="text-slate-600 text-base leading-relaxed">
                Garden State Roofing &amp; Chimney is a fully licensed and insured contractor rooted in Teaneck, New Jersey. With extensive regional experience across Bergen County and surrounding North Jersey communities, we specialize in high-durability roof repairs, full replacements, chimney rebuilds, and leak protection.
              </p>

              <p className="text-slate-600 text-base leading-relaxed">
                We believe that every homeowner deserves upfront transparency, honest diagnostics, and master craftsmanship. From your free on-site estimate to the final magnetic nail sweep, our crew uses only premium, warrantied materials to ensure your home remains safe and protected for decades.
              </p>

              {/* Local Service Details Box */}
              <div className="bg-[#F4F6F8] p-5 rounded-lg border border-slate-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0B5CAB] shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-bold text-[#111111]">Local Teaneck Headquarters</p>
                    <p className="text-slate-600 mt-0.5">
                      92 E Maple St, Teaneck, NJ 07666. Serving Teaneck, Hackensack, Englewood, Paramus, and neighboring towns.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Checklist of 5 Trust Points with Check Icons */}
            <div className="lg:col-span-7 bg-[#F4F6F8] p-6 sm:p-8 rounded-lg border border-slate-200">
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#111111] mb-6">
                Why North Jersey Homeowners Choose Us
              </h3>

              <div className="space-y-5">
                {TRUST_POINTS.map((point, index) => (
                  <div key={index} className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#0B5CAB] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#111111] text-base">
                        {point.title}
                      </h4>
                      <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Banner */}
              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-[#0B5CAB]" />
                  <span>Licensed &amp; Insured NJ General Contractor</span>
                </div>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  className="text-xs font-bold text-[#0B5CAB] hover:underline flex items-center gap-1"
                >
                  Schedule Free On-Site Inspection
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONTACT + FOOTER (Split Section) */}
      <section id="contact" className="py-20 bg-[#F4F6F8] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B5CAB] block mb-2">
              Free Consultation
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#111111] tracking-tight">
              Request Your Free Estimate
            </h2>
            <p className="mt-3 text-slate-600 text-base">
              Fill out the form below or give us a call. We will review your project and get back to you promptly with an honest, zero-obligation quote.
            </p>
          </div>

          {/* Split Section: Left Form | Right Contact Info & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Side: Contact Form */}
            <div className="lg:col-span-6 bg-white p-7 sm:p-9 rounded-lg border border-slate-200 shadow-sm">
              <h3 className="text-xl font-heading font-bold text-[#111111] mb-2">
                Send Us a Message
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Receive an upfront quote with no sales pressure or hidden costs.
              </p>

              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 text-center space-y-3 animate-in fade-in duration-300">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900 font-heading">
                    Estimate Request Received!
                  </h4>
                  <p className="text-sm text-emerald-800 leading-relaxed">
                    Thank you, <span className="font-bold">{formData.name}</span>. A specialist from Garden State Roofing &amp; Chimney will contact you at <span className="font-semibold">{formData.phone}</span> shortly to schedule your inspection.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        service: 'Roof Repair',
                        message: '',
                      });
                    }}
                    className="mt-3 inline-flex items-center text-xs font-bold text-[#0B5CAB] hover:underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4" noValidate>
                  {formError && (
                    <div className="bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3 rounded-lg text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. John Miller"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-[#0B5CAB] focus:ring-1 focus:ring-[#0B5CAB] outline-none transition-colors"
                    />
                  </div>

                  {/* Phone & Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="(201) 555-0199"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-[#0B5CAB] focus:ring-1 focus:ring-[#0B5CAB] outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-[#0B5CAB] focus:ring-1 focus:ring-[#0B5CAB] outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Dropdown */}
                  <div>
                    <label htmlFor="service" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-[#0B5CAB] focus:ring-1 focus:ring-[#0B5CAB] outline-none bg-white transition-colors"
                    >
                      <option value="Roof Repair">Roof Repair</option>
                      <option value="Roof Replacement">Roof Replacement</option>
                      <option value="New Roof Installation">New Roof Installation</option>
                      <option value="Chimney Repair & Rebuilding">Chimney Repair &amp; Rebuilding</option>
                      <option value="Chimney Cleaning & Inspection">Chimney Cleaning &amp; Inspection</option>
                      <option value="Gutters & Leak Protection">Gutters &amp; Leak Protection</option>
                      <option value="Other / General Inquiry">Other / General Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Project Details or Questions
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Briefly describe your roof condition, leak issues, or chimney concerns..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-[#0B5CAB] focus:ring-1 focus:ring-[#0B5CAB] outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-lg bg-[#0B5CAB] hover:bg-[#08437D] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all focus-visible:outline-2 focus-visible:outline-[#0B5CAB] cursor-pointer active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    Request Free Estimate
                  </button>

                  <p className="text-center text-[11px] text-slate-500 pt-1">
                    Your information is kept strictly private. No spam, ever.
                  </p>
                </form>
              )}
            </div>

            {/* Right Side: Address, Phone, & Embedded Google Map */}
            <div className="lg:col-span-6 space-y-6">
              {/* Contact Information Cards */}
              <div className="bg-white p-6 sm:p-7 rounded-lg border border-slate-200 shadow-sm space-y-5">
                <h3 className="text-xl font-heading font-bold text-[#111111]">
                  Direct Contact &amp; Location
                </h3>

                {/* Clickable Phone Number */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#0B5CAB]/10 text-[#0B5CAB] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone</p>
                    <a
                      href="tel:+19085216060"
                      className="text-lg font-bold text-[#0B5CAB] hover:underline"
                    >
                      +1 (908) 521-6060
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">Available for emergency leak and storm service</p>
                  </div>
                </div>

                {/* Address linking to Google Maps */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#0B5CAB]/10 text-[#0B5CAB] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Address</p>
                    <a
                      href="https://maps.google.com/?q=92+E+Maple+St,+Teaneck,+NJ+07666"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-slate-800 hover:text-[#0B5CAB] hover:underline block"
                    >
                      92 E Maple St, Teaneck, NJ 07666, United States
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">Serving Teaneck and surrounding New Jersey communities</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#0B5CAB]/10 text-[#0B5CAB] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Business Hours</p>
                    <p className="text-sm font-semibold text-slate-800">
                      Monday – Saturday: 7:00 AM – 7:00 PM
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">Sunday: By appointment &amp; emergency dispatch</p>
                  </div>
                </div>
              </div>

              {/* Embedded Google Map iframe */}
              <div className="bg-white p-2 rounded-lg border border-slate-200 shadow-sm overflow-hidden">
                <div className="w-full h-64 sm:h-72 rounded-md overflow-hidden relative">
                  <iframe
                    title="Garden State Roofing & Chimney Location Map"
                    src="https://maps.google.com/maps?q=92+E+Maple+St,+Teaneck,+NJ+07666&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
                <div className="p-3 text-center">
                  <a
                    href="https://maps.google.com/?q=92+E+Maple+St,+Teaneck,+NJ+07666"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#0B5CAB] hover:underline inline-flex items-center gap-1"
                  >
                    Open 92 E Maple St in Google Maps
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER: Slim dark-navy footer (#0A2A4F) */}
      <footer className="bg-[#0A2A4F] text-slate-300 border-t border-slate-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-white/10">
            {/* Brand in Footer */}
            <div className="flex items-center gap-3">
              <div className="text-[#0B5CAB] bg-white/10 p-1.5 rounded-lg flex items-center justify-center">
                <NewJerseySilhouette className="w-6 h-9" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#0B5CAB] uppercase">
                  Garden State
                </span>
                <span className="text-xl font-black tracking-tight text-white font-heading uppercase">
                  ROOFING
                </span>
                <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase -mt-0.5">
                  &amp; Chimney
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex items-center gap-6 text-xs font-semibold text-slate-300">
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('services');
                }}
                className="hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
                className="hover:text-white transition-colors"
              >
                About Us
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="hover:text-white transition-colors"
              >
                Contact &amp; Estimate
              </a>
              <a
                href="tel:+19085216060"
                className="hover:text-white text-[#0B5CAB] transition-colors"
              >
                +1 (908) 521-6060
              </a>
            </div>
          </div>

          {/* Bottom Bar Details */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
            <div>
              <p>
                <span className="text-slate-200 font-semibold">Garden State Roofing &amp; Chimney</span> · 92 E Maple St, Teaneck, NJ 07666 ·{' '}
                <a href="tel:+19085216060" className="text-slate-200 hover:underline">
                  +1 (908) 521-6060
                </a>
              </p>
              <p className="mt-1 text-[11px] text-slate-500">
                Service area: Teaneck, Bergen County, and surrounding New Jersey communities.
              </p>
            </div>
            <p className="text-[11px] text-slate-500 whitespace-nowrap">
              &copy; {new Date().getFullYear()} Garden State Roofing &amp; Chimney. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* FLOATING "CALL" BUTTON ON MOBILE */}
      <aside aria-label="Quick Phone Call" className="fixed bottom-5 right-4 z-40 md:hidden">
        <a
          href="tel:+19085216060"
          className="flex items-center gap-2 bg-[#0B5CAB] hover:bg-[#08437D] text-white px-4 py-3 rounded-lg shadow-xl font-bold text-sm active:scale-95 transition-all border border-white/20"
          aria-label="Call Garden State Roofing & Chimney at +1 (908) 521-6060"
        >
          <Phone className="w-4 h-4 animate-bounce" />
          <span>Call Now</span>
        </a>
      </aside>
    </div>
  );
}
