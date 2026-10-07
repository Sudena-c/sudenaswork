import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sudenachandnani@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-28 px-6 md:px-12 lg:px-20 bg-stone-100 dark:bg-stone-900/60 border-t border-stone-200 dark:border-stone-800 transition-colors duration-500">
      
      <div className="max-w-5xl mx-auto relative z-10">
        
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
              Available for full-time opportunities, design internships, brand collaborations, and discussions on editorial systems or aerial arts.
            </div>
          </div>
        </div>

        {/* Clean Socials & Direct Email Grid (No dispatch form) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-stretch">
          
          {/* Main Direct Email Card */}
          <div className="md:col-span-7 bg-white dark:bg-zinc-900 p-8 sm:p-12 rounded-sm border border-stone-200 dark:border-stone-800 shadow-sm flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                  Direct Electronic Mail
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 font-medium">
                  ● Inbox Active
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 dark:text-zinc-100 leading-snug">
                Drop me a note directly anytime.
              </h3>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                Whether you have an upcoming project, an inquiry about my pitch and internship work, or just want to connect — feel free to email me.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-stone-100 dark:border-stone-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
                <a 
                  href="mailto:sudenachandnani@gmail.com"
                  className="font-mono text-base sm:text-lg font-medium text-zinc-900 dark:text-zinc-100 hover:underline truncate"
                >
                  sudenachandnani@gmail.com
                </a>

                <div className="flex items-center space-x-2 shrink-0">
                  <button
                    onClick={handleCopyEmail}
                    className="px-4 py-2 rounded bg-white dark:bg-zinc-900 border border-stone-200 dark:border-stone-700 text-xs font-mono tracking-wider hover:bg-stone-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 transition-colors shadow-sm"
                  >
                    {copied ? '✓ Copied' : 'Copy'}
                  </button>

                  <a
                    href="mailto:sudenachandnani@gmail.com"
                    className="px-4 py-2 rounded bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs font-mono uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-sm"
                  >
                    Send Email ↗
                  </a>
                </div>
              </div>
              <span className="block text-[11px] font-mono text-zinc-400">
                Based in Ahmedabad, India (IST) · Open worldwide
              </span>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 block px-1">
              Socials & Portfolios
            </span>

            <a
              href="https://www.linkedin.com/in/sudena-chandnani?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 bg-white dark:bg-zinc-900 rounded-sm border border-stone-200 dark:border-stone-800 flex items-center justify-between hover:border-zinc-900 dark:hover:border-zinc-100 hover:shadow-md transition-all"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-sm">
                  in
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-zinc-900 dark:text-zinc-100 group-hover:underline">
                    LinkedIn
                  </h4>
                  <p className="text-xs font-mono text-zinc-400">/in/sudena-chandnani</p>
                </div>
              </div>
              <span className="text-base font-mono text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                ↗
              </span>
            </a>

            <a
              href="https://www.instagram.com/_sudena_?igsh=MTNvNWFpZ2o5a2VyZQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 bg-white dark:bg-zinc-900 rounded-sm border border-stone-200 dark:border-stone-800 flex items-center justify-between hover:border-zinc-900 dark:hover:border-zinc-100 hover:shadow-md transition-all"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800/60 flex items-center justify-center text-rose-600 dark:text-rose-400 font-bold text-sm">
                  ig
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-zinc-900 dark:text-zinc-100 group-hover:underline">
                    Instagram
                  </h4>
                  <p className="text-xs font-mono text-zinc-400">@_sudena_</p>
                </div>
              </div>
              <span className="text-base font-mono text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                ↗
              </span>
            </a>

            <a
              href="https://www.behance.net/sudenaswork"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 bg-white dark:bg-zinc-900 rounded-sm border border-stone-200 dark:border-stone-800 flex items-center justify-between hover:border-zinc-900 dark:hover:border-zinc-100 hover:shadow-md transition-all"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-sm">
                  Bē
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-zinc-900 dark:text-zinc-100 group-hover:underline">
                    Behance
                  </h4>
                  <p className="text-xs font-mono text-zinc-400">behance.net/sudenaswork</p>
                </div>
              </div>
              <span className="text-base font-mono text-zinc-400 group-hover:text-zinc-900 dark:hover:text-zinc-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                ↗
              </span>
            </a>
          </div>

        </div>

        {/* Global Footer Signature */}
        <div className="mt-20 pt-8 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
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
