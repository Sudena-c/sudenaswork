import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    inquiryType: 'Project Collaboration',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sudenachandnani@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', inquiryType: 'Project Collaboration', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-28 px-6 md:px-12 lg:px-20 bg-stone-100 dark:bg-stone-900/60 border-t border-stone-200 dark:border-stone-800 transition-colors duration-500">
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="border-b border-stone-200 dark:border-stone-800 pb-8 mb-16">
          <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.3em] font-medium text-zinc-500 dark:text-zinc-400 mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>04 / 04 — CONTACT ME</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Let's Start a <br />
                <span className="italic font-normal font-serif text-zinc-600 dark:text-zinc-400">Conversation</span>
              </h2>
            </div>
            <div className="lg:col-span-4 text-sm font-light text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Available for full-time opportunities, creative internships, brand collaborations, and discussions on design systems or aerial arts.
            </div>
          </div>
        </div>

        {/* Content Grid: Contact Details & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Direct Inquiries & Socials */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 block">
                Direct Electronic Mail
              </span>
              <div className="p-4 bg-white dark:bg-zinc-900 rounded-sm border border-stone-200 dark:border-stone-800 shadow-sm flex items-center justify-between gap-4">
                <div>
                  <a 
                    href="mailto:sudenachandnani@gmail.com"
                    className="font-mono text-sm sm:text-base font-medium text-zinc-900 dark:text-zinc-100 hover:underline"
                  >
                    sudenachandnani@gmail.com
                  </a>
                  <span className="block text-[10px] font-mono text-zinc-400 mt-0.5">
                    Typical response: within 24 hours
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded bg-stone-100 dark:bg-stone-800 text-xs font-mono tracking-wider hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
                >
                  {copied ? '✓ Copied' : 'Copy'}
                </button>
              </div>
            </div>

            {/* Social Footprints */}
            <div className="space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 block">
                Channels & Profiles
              </span>
              <div className="grid grid-cols-1 gap-2.5">
                <a
                  href="https://www.linkedin.com/in/sudena-chandnani?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3.5 bg-white dark:bg-zinc-900 rounded-sm border border-stone-200 dark:border-stone-800 flex items-center justify-between hover:border-zinc-900 dark:hover:border-zinc-100 transition-all"
                >
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    <span className="font-medium text-sm text-zinc-900 dark:text-zinc-100">LinkedIn</span>
                    <span className="text-xs text-zinc-400 font-light">/in/sudena-chandnani</span>
                  </div>
                  <span className="text-xs font-mono group-hover:translate-x-1 transition-transform">↗</span>
                </a>

                <a
                  href="https://www.instagram.com/_sudena_?igsh=MTNvNWFpZ2o5a2VyZQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3.5 bg-white dark:bg-zinc-900 rounded-sm border border-stone-200 dark:border-stone-800 flex items-center justify-between hover:border-zinc-900 dark:hover:border-zinc-100 transition-all"
                >
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                    <span className="font-medium text-sm text-zinc-900 dark:text-zinc-100">Instagram</span>
                    <span className="text-xs text-zinc-400 font-light">@_sudena_</span>
                  </div>
                  <span className="text-xs font-mono group-hover:translate-x-1 transition-transform">↗</span>
                </a>

                <a
                  href="https://www.behance.net/sudenaswork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3.5 bg-white dark:bg-zinc-900 rounded-sm border border-stone-200 dark:border-stone-800 flex items-center justify-between hover:border-zinc-900 dark:hover:border-zinc-100 transition-all"
                >
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                    <span className="font-medium text-sm text-zinc-900 dark:text-zinc-100">Behance</span>
                    <span className="text-xs text-zinc-400 font-light">behance.net/sudenaswork</span>
                  </div>
                  <span className="text-xs font-mono group-hover:translate-x-1 transition-transform">↗</span>
                </a>
              </div>
            </div>

            {/* Location & Time */}
            <div className="p-4 rounded-sm bg-stone-200/50 dark:bg-stone-800/40 text-xs font-mono text-zinc-600 dark:text-zinc-400 space-y-1">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span className="uppercase tracking-wider">Based in Ahmedabad, Gujarat, India</span>
              </div>
              <p className="text-[11px] opacity-75 font-sans font-light">
                Standard Time (IST · UTC+5:30) · Available worldwide for remote projects.
              </p>
            </div>
          </div>

          {/* Right Column: Tactile Inquiry Form */}
          <div className="lg:col-span-7 bg-white dark:bg-zinc-900 p-8 sm:p-10 rounded-sm border border-stone-200 dark:border-stone-800 shadow-sm">
            <div className="mb-8">
              <h3 className="text-2xl font-serif font-bold text-zinc-900 dark:text-zinc-100">
                Send a Dispatch
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-light mt-1">
                Fill in the details below and I’ll get back to you promptly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Maya Lin"
                    className="w-full px-4 py-3 bg-stone-50 dark:bg-zinc-800/80 border border-stone-200 dark:border-stone-700 rounded-sm text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-100 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="maya@studio.com"
                    className="w-full px-4 py-3 bg-stone-50 dark:bg-zinc-800/80 border border-stone-200 dark:border-stone-700 rounded-sm text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-100 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block">
                  Inquiry Topic
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {['Internship Offer', 'Project Inquiry', 'Saying Hi'].map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setForm({ ...form, inquiryType: type })}
                      className={`py-2 px-3 text-xs font-mono rounded-sm border transition-all text-center ${
                        form.inquiryType === type
                          ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 font-medium'
                          : 'border-stone-200 dark:border-stone-700 text-zinc-600 dark:text-zinc-400 hover:border-zinc-400'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block">
                  Message or Brief *
                </label>
                <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Share a bit about what you're working on or what you'd like to discuss..."
                  className="w-full px-4 py-3 bg-stone-50 dark:bg-zinc-800/80 border border-stone-200 dark:border-stone-700 rounded-sm text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-100 transition-colors resize-none"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  disabled={status !== 'idle'}
                  className="px-8 py-3.5 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-medium text-xs font-mono uppercase tracking-widest rounded-sm hover:scale-105 active:scale-95 transition-all shadow disabled:opacity-50"
                >
                  {status === 'idle' && 'Transmit Message →'}
                  {status === 'sending' && 'Sending Dispatch...'}
                  {status === 'success' && '✓ Message Received!'}
                </button>

                {status === 'success' && (
                  <span className="text-xs font-serif italic text-emerald-600 dark:text-emerald-400">
                    Thank you! I will reply shortly.
                  </span>
                )}
              </div>
            </form>
          </div>

        </div>

        {/* Global Footer Signature */}
        <div className="mt-24 pt-8 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div>
            © 2026 SUDENA CHANDNANI · COMMUNICATION DESIGN
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors flex items-center space-x-1 uppercase tracking-widest"
          >
            <span>Back to top</span>
            <span>↑</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
