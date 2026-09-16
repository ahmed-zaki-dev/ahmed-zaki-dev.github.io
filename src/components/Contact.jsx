import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ state: 'idle', message: '' });
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ahmed3mohamed6adm@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'loading', message: 'Sending message...' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '7e04d693-7f85-42a4-ab3c-76ecfde7a7c4',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Message from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          state: 'success',
          message: 'Thank you! Your message has been sent successfully.',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({
          state: 'error',
          message: result.message || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      setStatus({
        state: 'error',
        message: 'Network error. Please try again or reach out via direct email.',
      });
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-margin py-20 pb-32 scroll-mt-24" id="contact">
      <div className="p-6 sm:p-10 rounded-2xl bg-surface-container shadow-2xl border border-outline-variant/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
          
          {/* Direct Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
                <span className="font-code text-xs uppercase text-secondary tracking-widest font-semibold">
                  Channel Open
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface mb-2">
                Get In Touch
              </h2>
              <p className="text-base text-on-surface-variant mb-space-lg">
                Feel free to reach out for collaborations, project inquiries, or full-time opportunities.
              </p>

              <div className="space-y-space-md">
                {/* Email Box */}
                <div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low border border-outline-variant/10 transition-all duration-200 hover:border-secondary/40 hover:bg-surface-container">
                  <a
                    href="mailto:ahmed3mohamed6adm@gmail.com"
                    className="flex items-center gap-2 text-on-surface hover:text-secondary transition-colors truncate"
                  >
                    <span className="material-symbols-outlined text-secondary text-[22px] shrink-0">mail</span>
                    <span className="font-code text-xs truncate">ahmed3mohamed6adm@gmail.com</span>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface active:scale-90 transition-all shrink-0 cursor-pointer"
                    title="Copy Email"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      {copied ? 'check' : 'content_copy'}
                    </span>
                  </button>
                </div>

                {/* Phone Box */}
                <div className="flex items-center p-space-sm rounded-lg bg-surface-container-low border border-outline-variant/10 transition-all duration-200 hover:border-primary/40 hover:bg-surface-container">
                  <a
                    href="tel:+201207670652"
                    className="flex items-center gap-2 text-on-surface hover:text-secondary transition-colors"
                  >
                    <span className="material-symbols-outlined text-primary text-[22px]">call</span>
                    <span className="font-code text-xs">+20 1207670652</span>
                  </a>
                </div>

                {/* Location Box */}
                <div className="flex items-center p-space-sm rounded-lg bg-surface-container-low border border-outline-variant/10 transition-all duration-200 hover:border-tertiary/40 hover:bg-surface-container">
                  <div className="flex items-center gap-2 text-on-surface">
                    <span className="material-symbols-outlined text-tertiary text-[22px]">location_on</span>
                    <span className="font-code text-xs">Mansoura, Egypt</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-space-lg flex flex-col gap-2 mt-6">
              <span className="font-code text-xs text-outline">Network Connections:</span>
              <div className="flex flex-wrap gap-space-sm font-code text-xs">
                <a
                  href="https://linkedin.com/in/ahmed-zaki-dev01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded bg-surface-container-high text-on-surface hover:text-secondary hover:bg-surface-bright active:scale-95 transition-all flex items-center gap-1.5 border border-outline-variant/20 hover:border-secondary/30"
                >
                  <span className="material-symbols-outlined text-[16px]">public</span>
                  linkedin.com/in/ahmed-zaki-dev01
                </a>
                <a
                  href="https://github.com/ahmed-zaki-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded bg-surface-container-high text-on-surface hover:text-secondary hover:bg-surface-bright active:scale-95 transition-all flex items-center gap-1.5 border border-outline-variant/20 hover:border-secondary/30"
                >
                  <span className="material-symbols-outlined text-[16px]">code</span>
                  github.com/ahmed-zaki-dev
                </a>
              </div>
            </div>
          </div>

          {/* Submission Form */}
          <div className="lg:col-span-7 bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
            <form className="flex flex-col gap-space-md" onSubmit={handleSubmit}>
              <div>
                <label className="block font-code text-xs text-on-surface-variant mb-1.5" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-code text-xs placeholder:text-outline focus:outline-none focus:bg-surface-container-high transition-all border border-transparent focus:border-primary/50 focus:shadow-[0_0_12px_rgba(192,193,255,0.15)]"
                />
              </div>

              <div>
                <label className="block font-code text-xs text-on-surface-variant mb-1.5" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@domain.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-code text-xs placeholder:text-outline focus:outline-none focus:bg-surface-container-high transition-all border border-transparent focus:border-primary/50 focus:shadow-[0_0_12px_rgba(192,193,255,0.15)]"
                />
              </div>

              <div>
                <label className="block font-code text-xs text-on-surface-variant mb-1.5" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Project requirements, inquiry or potential collaboration..."
                  className="w-full px-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-code text-xs placeholder:text-outline focus:outline-none focus:bg-surface-container-high transition-all resize-none border border-transparent focus:border-primary/50 focus:shadow-[0_0_12px_rgba(192,193,255,0.15)]"
                />
              </div>

              {/* Status Message */}
              {status.message && (
                <div
                  className={`p-3 rounded-lg font-code text-xs ${
                    status.state === 'success'
                      ? 'bg-secondary/10 border border-secondary/30 text-secondary'
                      : status.state === 'error'
                      ? 'bg-red-500/10 border border-red-500/30 text-red-400'
                      : 'bg-surface-container-high text-on-surface-variant'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={status.state === 'loading'}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-primary-container text-on-primary font-code text-sm font-semibold hover:bg-primary shadow-md shadow-primary-container/30 hover:shadow-lg hover:shadow-primary-container/50 active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">
                  {status.state === 'loading' ? 'sync' : 'send'}
                </span>
                {status.state === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}