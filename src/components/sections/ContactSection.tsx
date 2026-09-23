import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Loader2, MessageSquare, MapPin } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { profileData } from '../../data/profile';
import { contactService } from '../../services/contactService';
import type { ContactFormState } from '../../types';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState<ContactFormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    if (statusMessage) setStatusMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    try {
      const response = await contactService.sendMessage(formState);
      if (response.success) {
        setStatusMessage({ type: 'success', text: response.message });
        setFormState({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatusMessage({ type: 'error', text: response.message });
      }
    } catch (error) {
      setStatusMessage({ type: 'error', text: "An unexpected error occurred. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Get In Touch"
          title="Contact Me"
          subtitle="Interested in enterprise network infrastructure, full-stack software development, or research collaborations? Let's connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Channels & Info */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-8 border-slate-200 dark:border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                Contact Information
              </h3>

              <div className="space-y-4">
                {/* Email Channel */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <div className="p-2.5 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold block">Email Address</span>
                    <a href={profileData.socialLinks.email} className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-brand-600 transition-colors">
                      atakltihanis14@gmail.com
                    </a>
                  </div>
                </div>

                {/* LinkedIn Channel */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold block">LinkedIn Profile</span>
                    <a href={profileData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-600 transition-colors">
                      linkedin.com/in/ataklti-hanis-a85163347
                    </a>
                  </div>
                </div>

                {/* GitHub Channel */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <div className="p-2.5 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold block">GitHub Repositories</span>
                    <a href={profileData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-brand-600 transition-colors">
                      github.com/Ataklti-Hanis
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold block">Current Location</span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {profileData.location}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <Card className="p-8 border-slate-200 dark:border-slate-800">
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Send a Direct Message
                </h3>

                {statusMessage && (
                  <div className={`p-4 rounded-xl flex items-start gap-3 text-sm ${statusMessage.type === 'success'
                      ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400'
                      : 'bg-rose-500/10 border border-rose-500/20 text-rose-700 dark:text-rose-400'
                    }`}>
                    {statusMessage.type === 'success' ? (
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    )}
                    <span>{statusMessage.text}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono font-semibold uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Johnson"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:outline-none text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono font-semibold uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="name@organization.com"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:outline-none text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono font-semibold uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="e.g. Enterprise Network Inquiry / Full-Stack Project"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:outline-none text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono font-semibold uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Describe your inquiry, project scope, or opportunity..."
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:outline-none text-sm leading-relaxed"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={loading}
                  className="w-full"
                  icon={loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                >
                  {loading ? "Transmitting Message..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
