import React, { useState } from 'react';
import { Mail, MapPin, Phone, ShieldCheck, Send, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';
import { SectionHeading } from '../shared/SectionHeading';
import { PrimaryButton } from '../shared/PrimaryButton';

interface FormData {
  fullName: string;
  email: string;
  organization: string;
  subject: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  organization?: string;
  subject?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    data?: FormData;
  } | null>(null);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter a valid full name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid corporate or institutional email.';
    }

    if (!formData.organization.trim()) {
      errs.organization = 'Company or Organization name is required.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please select or enter an inquiry subject.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Inquiry message cannot be empty.';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Please provide at least 15 characters describing your inquiry.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real network submission with realistic latency
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionResult({
        success: true,
        data: { ...formData },
      });
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      organization: '',
      subject: '',
      message: '',
    });
    setErrors({});
    setSubmissionResult(null);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-[#121715]">
      {/* Background divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="GET IN TOUCH"
          title="LET'S START A CONVERSATION"
          accentWord="CONVERSATION"
          description="Direct communications with the International Defence Analysis editorial desk, commercial partnerships bureau, and exhibition coverage coordinators."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch text-left">
          {/* Left Column: Contact info & bureaus (span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Bureau List */}
            <div className="grid gap-4 lg:flex-1 lg:auto-rows-fr">
              <div className="p-4 rounded-xl bg-[#191E1B] border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#FFAF00]" />
                </div>
                <div className="space-y-0.5">
                  <span className="font-['Barlow_Condensed'] font-bold text-white text-base block uppercase">
                    Editorial & Press Submissions
                  </span>
                  <a
                    href="mailto:editor@defenceida.com"
                    className="font-['Inter'] text-xs sm:text-sm text-[#FFAF00] hover:underline"
                  >
                    editor@defenceida.com
                  </a>
                  <span className="text-[11px] text-[#A7ADA9] block">Response within 24 operational hours</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#191E1B] border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#FFAF00]" />
                </div>
                <div className="space-y-0.5">
                  <span className="font-['Barlow_Condensed'] font-bold text-white text-base block uppercase">
                    Commercial & Advertising Bureau
                  </span>
                  <a
                    href="mailto:partnerships@defenceida.com"
                    className="font-['Inter'] text-xs sm:text-sm text-[#FFAF00] hover:underline"
                  >
                    partnerships@defenceida.com
                  </a>
                  <span className="text-[11px] text-[#A7ADA9] block">Media kit requests & show-daily bookings</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#191E1B] border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#FFAF00]" />
                </div>
                <div className="space-y-0.5">
                  <span className="font-['Barlow_Condensed'] font-bold text-white text-base block uppercase">
                    Accredited Exhibition Bureaus
                  </span>
                  <p className="font-['Inter'] text-xs text-[#A7ADA9]">
                    Istanbul · Kuala Lumpur · Cairo · Doha · Islamabad
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#1F4941]/20 border border-[#1F4941]/40 text-xs text-[#A7ADA9]">
              <span className="font-bold text-[#FFAF00] block mb-1 uppercase tracking-wide">
                Secure Source Disclosure Policy
              </span>
              We respect Chatham House rules and journalistic source confidentiality for intelligence attachés and defence engineers.
            </div>
          </div>

          {/* Right Column: Interactive Form (span 7) */}
          <div className="lg:col-span-7">
            <div className="h-full p-6 sm:p-8 rounded-2xl bg-[#191E1B] border border-white/10 shadow-2xl">
              {submissionResult?.success ? (
                /* Honest Demonstration Submission State */
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#FFAF00]/20 border border-[#FFAF00] flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-[#FFAF00]" />
                  </div>
                  <h3 className="font-['Barlow_Condensed'] font-extrabold uppercase text-2xl text-white">
                    Inquiry Transmitted Successfully
                  </h3>
                  <p className="font-['Inter'] text-sm text-[#D0D6D2] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{submissionResult.data?.fullName}</strong>. Your inquiry regarding <strong className="text-[#FFAF00]">"{submissionResult.data?.subject}"</strong> has been recorded in our editorial dispatch queue.
                  </p>

                  <div className="p-4 rounded-xl bg-[#222824] border border-white/10 max-w-md mx-auto text-left text-xs space-y-1.5 text-[#A7ADA9]">
                    <div><strong className="text-white">Organization:</strong> {submissionResult.data?.organization}</div>
                    <div><strong className="text-white">Email:</strong> {submissionResult.data?.email}</div>
                    <div><strong className="text-white">Status:</strong> Demonstration mode verified (Ready for WordPress WPForms API hook).</div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Send Another Inquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Active Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-white uppercase tracking-wider block">
                        Full Name <span className="text-[#FFAF00]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Commander Marcus Vance"
                        className={`w-full px-4 py-3 rounded-xl bg-[#121715] border text-white text-sm placeholder-[#A7ADA9]/50 focus:outline-none transition-colors ${
                          errors.fullName
                            ? 'border-red-500/80 focus:border-red-500'
                            : 'border-white/10 focus:border-[#FFAF00]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-400 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-white uppercase tracking-wider block">
                        Institutional Email <span className="text-[#FFAF00]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="marcus@defence-command.org"
                        className={`w-full px-4 py-3 rounded-xl bg-[#121715] border text-white text-sm placeholder-[#A7ADA9]/50 focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-red-500/80 focus:border-red-500'
                            : 'border-white/10 focus:border-[#FFAF00]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Company / Organization */}
                    <div className="space-y-1.5">
                      <label className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-white uppercase tracking-wider block">
                        Organization / Navy / Force <span className="text-[#FFAF00]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Navantia / Ministry of Defence"
                        className={`w-full px-4 py-3 rounded-xl bg-[#121715] border text-white text-sm placeholder-[#A7ADA9]/50 focus:outline-none transition-colors ${
                          errors.organization
                            ? 'border-red-500/80 focus:border-red-500'
                            : 'border-white/10 focus:border-[#FFAF00]'
                        }`}
                      />
                      {errors.organization && (
                        <p className="text-xs text-red-400 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" /> {errors.organization}
                        </p>
                      )}
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5">
                      <label className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-white uppercase tracking-wider block">
                        Subject / Inquiry Type <span className="text-[#FFAF00]">*</span>
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-[#121715] border text-white text-sm focus:outline-none transition-colors ${
                          errors.subject
                            ? 'border-red-500/80 focus:border-red-500'
                            : 'border-white/10 focus:border-[#FFAF00]'
                        }`}
                      >
                        <option value="">Select subject matter</option>
                        <option value="Advertising & Media Kit 2026">Advertising & Media Kit 2026</option>
                        <option value="Exhibition Show Daily Coverage">Exhibition Show Daily Coverage</option>
                        <option value="Editorial Interview Pitch">Editorial Interview Pitch</option>
                        <option value="Press Release Syndication">Press Release Syndication</option>
                        <option value="General Defence Inquiry">General Defence Inquiry</option>
                      </select>
                      {errors.subject && (
                        <p className="text-xs text-red-400 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" /> {errors.subject}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-white uppercase tracking-wider block">
                      Inquiry Details <span className="text-[#FFAF00]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please outline your exhibition schedule, campaign goals, or editorial submission details..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#121715] border text-white text-sm placeholder-[#A7ADA9]/50 focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? 'border-red-500/80 focus:border-red-500'
                          : 'border-white/10 focus:border-[#FFAF00]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <PrimaryButton
                      type="submit"
                      variant="primary"
                      size="lg"
                      icon="right"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto"
                    >
                      {isSubmitting ? 'DISPATCHING INQUIRY...' : 'SEND INQUIRY'}
                    </PrimaryButton>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
