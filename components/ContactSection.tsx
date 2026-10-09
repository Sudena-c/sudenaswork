import React, { useState } from 'react';

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
            <span className="w-2 h-2 rounded-full bg-sky-300"></span>
            <span>04 / 04 — CONTACT ME</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Let's Start a <br />
                <span className="italic font-normal font-serif text-[#7dd3fc] dark:text-[#7dd3fc] bg-gradient-to-r from-sky-300 via-sky-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_2px_14px_rgba(125,211,252,0.4)]">
                  Conversation
                </span>
              </h2>
            </div>
            <div className="lg:col-span-4 text-sm font-light text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Available for full-time opportunities, design internships, brand collaborations, and discussions on editorial systems or aerial arts.
            </div>
          </div>
        </div>

        {/* Clean Email & Socials Grid (Only Email ID and Socials) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Email ID Card */}
          <div className="bg-white dark:bg-zinc-900 p-8 sm:p-10 rounded-sm border border-stone-200 dark:border-stone-800 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                  Email ID
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 font-semibold">
                  Primary Contact
                </span>
              </div>
              <div className="pt-2">
                <span className="font-mono text-lg sm:text-xl font-medium text-zinc-900 dark:text-zinc-100 block break-all">
                  sudenachandnani@gmail.com
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-stone-100 dark:border-stone-800">
              <span className="text-xs font-mono text-zinc-400">
                Ahmedabad, India · IST
              </span>
              <button
                onClick={handleCopyEmail}
                className="px-4 py-2 rounded bg-stone-100 dark:bg-stone-800 text-xs font-mono tracking-wider hover:bg-stone-200 dark:hover:bg-stone-700 text-zinc-800 dark:text-zinc-200 transition-colors shadow-sm"
              >
                {copied ? '✓ Copied' : 'Copy Email'}
              </button>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="flex flex-col justify-between space-y-3">
            
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
              <span className="text-base font-mono text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
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
