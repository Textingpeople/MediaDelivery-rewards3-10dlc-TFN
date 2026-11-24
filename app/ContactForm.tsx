'use client';

import { useState } from 'react';
import { inputClass, labelClass } from './formStyles';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitStatus === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-3">Message Sent!</h2>
        <p className="text-text-body mb-6">Thanks for reaching out. We&apos;ll get back to you within 24 hours.</p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary-hover transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className={labelClass}>Full Name *</label>
          <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
            className={inputClass} placeholder="John Doe" />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>Email Address *</label>
          <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
            className={inputClass} placeholder="john@company.com" />
        </div>

        <div>
          <label htmlFor="subject" className={labelClass}>Subject *</label>
          <select id="subject" name="subject" required value={formData.subject} onChange={handleChange}
            className={inputClass}>
            <option value="">Select a subject...</option>
            <option value="general">General Inquiry</option>
            <option value="employee">Employee Question</option>
            <option value="employer">Employer Question</option>
            <option value="support">Technical Support</option>
            <option value="privacy">Privacy or Text Messages</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>Message *</label>
          <textarea id="message" name="message" rows={5} required value={formData.message} onChange={handleChange}
            className={inputClass} placeholder="How can we help you?" />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 px-6 rounded-lg text-lg font-semibold transition-all ${
            isSubmitting
              ? 'bg-border text-text-muted cursor-not-allowed'
              : 'bg-primary hover:bg-primary-hover text-background shadow-lg hover:shadow-xl'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-text-muted" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </>
  );
}
