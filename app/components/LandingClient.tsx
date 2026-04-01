"use client";

import { useState, useRef } from "react";

const BLOG_URL =
  "https://photonhealth.com/blog/introducing-ai-powered-peptide-prescriptions-on-photon";

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function isValidPhone(value: string): boolean {
  return value.replace(/\D/g, "").length >= 10;
}

export default function LandingClient() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [revealed, setRevealed] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
    if (error) setError("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValidPhone(phone)) {
      setError("Please enter a valid US phone number.");
      return;
    }
    setRevealed(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function scrollToCta() {
    ctaRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  if (revealed) {
    return <RevealScreen />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b1426]/95 backdrop-blur-sm border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-[#3b6bff]"
            >
              <path
                d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6l-8-4z"
                fill="currentColor"
                opacity="0.2"
              />
              <path
                d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6l-8-4z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M9 12l2 2 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-white font-semibold text-lg tracking-tight">
              SelfRx
            </span>
          </div>
          <button
            onClick={scrollToCta}
            className="hidden sm:block text-sm font-medium text-white/70 hover:text-white transition-colors px-4 py-2 rounded-full border border-white/20 hover:border-white/40"
          >
            Get started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[#0b1426] pt-16 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#3b6bff]/10 border border-[#3b6bff]/20 rounded-full px-4 py-1.5 text-[#7a9cff] text-sm font-medium mb-8">
              <span className="w-1.5 h-1.5 bg-[#3b6bff] rounded-full animate-pulse" />
              Now in beta — limited access
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6">
              Prescribe peptides and other substances to yourself.
            </h1>
            <p className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-2xl mb-10">
              SelfRx uses AI to generate personalized peptide treatment plans.
              No doctor required. No appointment. Just text us your symptoms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToCta}
                className="inline-flex items-center justify-center gap-2 bg-[#3b6bff] hover:bg-[#2a58f0] text-white font-semibold text-lg px-8 py-4 rounded-xl transition-colors"
              >
                Get my AI prescription
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="mt-px"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center text-white/60 hover:text-white font-medium text-lg px-8 py-4 rounded-xl transition-colors border border-white/10 hover:border-white/20"
              >
                See how it works
              </a>
            </div>
          </div>

          {/* Trust bar */}
          <div className="mt-20 pt-8 border-t border-white/[0.08] flex flex-wrap gap-8 text-white/40 text-sm">
            <span className="flex items-center gap-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="currentColor"
              >
                <path d="M7 1L8.854 4.758L13 5.365L10 8.292L10.708 12.42L7 10.472L3.292 12.42L4 8.292L1 5.365L5.146 4.758L7 1Z" />
              </svg>
              4.9/5 from 2,400+ users
            </span>
            <span className="flex items-center gap-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M7 1l1.5 3.5L12 5l-2.5 2.5.6 3.5L7 9.5 3.9 11 4.5 7.5 2 5l3.5-.5L7 1z"
                  strokeLinejoin="round"
                />
              </svg>
              HIPAA compliant
            </span>
            <span className="flex items-center gap-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="2" y="5" width="10" height="8" rx="1.5" />
                <path d="M4.5 5V3.5a2.5 2.5 0 015 0V5" strokeLinecap="round" />
              </svg>
              256-bit encrypted
            </span>
            <span className="flex items-center gap-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="7" cy="7" r="5.5" />
                <path d="M5 7l1.5 1.5L9 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              FDA-adjacent
            </span>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 md:py-32 bg-[#f8f9fc]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b1426] tracking-tight mb-4">
              How it works
            </h2>
            <p className="text-lg text-[#6b7280] max-w-xl mx-auto">
              Get personalized peptide protocols delivered to your phone in
              under 60 seconds.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Step
              number="01"
              icon={
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M14 3C8 3 3 8 3 14s5 11 11 11 11-5 11-11S20 3 14 3z"
                    strokeLinejoin="round"
                  />
                  <path d="M14 9v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
              title="Describe your symptoms"
              description="Tell us what's going on — fatigue, brain fog, slow recovery, sleep issues. No judgment, no waiting room."
            />
            <Step
              number="02"
              icon={
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="3" y="5" width="22" height="18" rx="3" />
                  <path d="M9 13h10M9 17h6" strokeLinecap="round" />
                  <circle cx="21" cy="7" r="4" fill="#3b6bff" stroke="none" />
                  <path d="M19.5 7l1 1 2-2" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
              title="Get your AI prescription"
              description="Our model cross-references 40,000+ studies to generate a protocol tailored to your biomarkers, goals, and lifestyle."
            />
            <Step
              number="03"
              icon={
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M5 8h18M5 14h18M5 20h10"
                    strokeLinecap="round"
                  />
                  <circle cx="22" cy="20" r="4" fill="#3b6bff" stroke="none" />
                  <path d="M20 20l1.5 1.5 2.5-2.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
              title="Compare suppliers & checkout"
              description="We surface verified compounding pharmacies and peptide suppliers ranked by price, purity certificates, and shipping speed."
            />
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-16 bg-white border-y border-[#e5e7eb]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <Stat value="47,000+" label="prescriptions generated" />
            <Stat value="94%" label="symptom improvement reported" />
            <Stat value="$0" label="doctor consultation fees" />
          </div>
        </div>
      </section>

      {/* Phone input CTA */}
      <section
        ref={ctaRef}
        className="py-24 md:py-32 bg-[#0b1426]"
        id="get-rx"
      >
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Ready to prescribe yourself?
          </h2>
          <p className="text-xl text-white/60 mb-10">
            Enter your number to receive your first AI prescription via text.
            It&apos;s free, instant, and completely unregulated.
          </p>

          <form onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1">
                <label htmlFor="phone" className="sr-only">
                  Phone number
                </label>
                <input
                  id="phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  placeholder="(555) 000-0000"
                  value={phone}
                  onChange={handlePhoneChange}
                  className="w-full bg-white/[0.07] border border-white/20 text-white placeholder-white/30 rounded-xl px-5 py-4 text-lg font-medium focus:outline-none focus:border-[#3b6bff] focus:bg-white/10 transition-all"
                />
              </div>
              <button
                type="submit"
                className="bg-[#3b6bff] hover:bg-[#2a58f0] text-white font-semibold text-lg px-7 py-4 rounded-xl transition-colors whitespace-nowrap"
              >
                Get My Rx
              </button>
            </div>
            {error && (
              <p className="mt-3 text-red-400 text-sm text-center">{error}</p>
            )}
          </form>

          <p className="mt-6 text-white/30 text-sm">
            By submitting, you agree to receive a single AI-generated peptide
            protocol via SMS. Message &amp; data rates may apply. No actual
            prescriptions are issued.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#080e1c] py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-white/40">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              className="text-[#3b6bff]"
            >
              <path
                d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6l-8-4z"
                fill="currentColor"
                opacity="0.3"
              />
              <path
                d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6l-8-4z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M9 12l2 2 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm">SelfRx © 2025</span>
          </div>
          <p className="text-white/20 text-xs text-center">
            Not a real medical service. For entertainment purposes only. Please
            consult a licensed physician.
          </p>
        </div>
      </footer>
    </div>
  );
}

function Step({
  number,
  icon,
  title,
  description,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-[#e5e7eb] hover:border-[#3b6bff]/30 hover:shadow-lg transition-all">
      <div className="flex items-center justify-between mb-6">
        <div className="w-12 h-12 bg-[#3b6bff]/10 rounded-xl flex items-center justify-center text-[#3b6bff]">
          {icon}
        </div>
        <span className="text-4xl font-bold text-[#e5e7eb]">{number}</span>
      </div>
      <h3 className="text-xl font-semibold text-[#0b1426] mb-3">{title}</h3>
      <p className="text-[#6b7280] leading-relaxed">{description}</p>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center py-4">
      <div className="text-4xl md:text-5xl font-bold text-[#0b1426] tracking-tight mb-1">
        {value}
      </div>
      <div className="text-[#6b7280] text-base">{label}</div>
    </div>
  );
}

function RevealScreen() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0b1426] px-6 py-20">
      <div className="max-w-2xl w-full text-center">
        {/* Photon logo / wordmark */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            className="text-[#3b6bff]"
          >
            <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
            <circle cx="16" cy="16" r="9" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
            <circle cx="16" cy="16" r="4" fill="currentColor" />
          </svg>
          <span className="text-white/50 text-sm font-medium tracking-widest uppercase">
            Photon Health
          </span>
        </div>

        <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/10 rounded-full px-4 py-1.5 text-white/50 text-sm font-medium mb-8">
          April 1, 2025
        </div>

        <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
          Happy April Fools.
        </h1>

        <p className="text-xl md:text-2xl text-white/60 leading-relaxed mb-4">
          SelfRx isn&apos;t real.
        </p>
        <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-lg mx-auto">
          But the problems it satirizes — unregulated AI prescribing,
          compounding pharmacy chaos, and the erosion of clinical oversight —
          very much are.
        </p>

        <a
          href={BLOG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-[#0b1426] font-semibold text-lg px-8 py-4 rounded-xl hover:bg-white/90 transition-colors"
        >
          Read the full post
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              d="M3 9h12M11 5l4 4-4 4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        <div className="mt-16 pt-8 border-t border-white/[0.08]">
          <p className="text-white/30 text-sm mb-4">
            SelfRx was built by the team at
          </p>
          <a
            href="https://photonhealth.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3b6bff] hover:text-[#7a9cff] font-semibold text-lg transition-colors"
          >
            Photon Health →
          </a>
          <p className="text-white/20 text-sm mt-6">
            Photon is the e-prescribing platform built for the modern healthcare
            era. We believe AI has a place in medicine — just not{" "}
            <em>this</em> place.
          </p>
        </div>
      </div>
    </div>
  );
}
