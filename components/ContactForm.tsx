
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-4xl md:text-6xl font-serif font-bold">Get In Touch</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">Name</label>
          <input 
            type="text" 
            required
            className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-3 focus:border-dark dark:focus:border-light outline-none transition-colors"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">Email Address</label>
          <input 
            type="email" 
            required
            className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-3 focus:border-dark dark:focus:border-light outline-none transition-colors"
            placeholder="john@example.com"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">Message</label>
          <textarea 
            rows={4} 
            required
            className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-3 focus:border-dark dark:focus:border-light outline-none transition-colors resize-none"
            placeholder="Tell me about your project..."
          />
        </div>
        <button 
          type="submit"
          disabled={status !== 'idle'}
          className="group relative inline-flex items-center justify-center px-12 py-4 font-bold text-white transition-all duration-300 bg-dark dark:bg-light dark:text-dark overflow-hidden uppercase tracking-widest text-xs"
        >
          <span className="relative z-10">
            {status === 'idle' ? 'Send Message' : status === 'sending' ? 'Sending...' : 'Sent Successfully'}
          </span>
          <div className="absolute inset-0 bg-zinc-800 dark:bg-zinc-200 translate-y-full group-hover:translate-y-0 transition-transform"></div>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
