'use client';

import { useState } from 'react';
import { ChevronRight, Hash } from 'lucide-react';
import SiteShell from '../SiteShell';
import SignupStep2, { type SignupData } from '../SignupStep2';
import { Stepper, Confirmation } from '../SignupParts';
import { inputIconClass, labelClass, primaryButtonClass } from '../formStyles';

type Step = 1 | 2 | 3;

const PHONE_ERROR = 'Enter a valid mobile number to receive texts.';

export default function SignupPage() {
  const [step, setStep] = useState<Step>(1);
  const [companyIdError, setCompanyIdError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [formData, setFormData] = useState<SignupData>({
    companyId: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    department: '',
    smsTransactional: false,
    smsPromotional: false,
    termsAccepted: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setFormData({ ...formData, [e.target.name]: value });
    if (phoneError) setPhoneError('');
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 3) as Step);
  const prevStep = () => setStep((s) => Math.max(s - 1, 1) as Step);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const wantsTexts = formData.smsTransactional || formData.smsPromotional;
    const digits = formData.phone.replace(/\D/g, '');
    if (wantsTexts && digits.length !== 10) {
      setPhoneError(PHONE_ERROR);
      return;
    }
    setPhoneError('');
    nextStep();
  };

  return (
    <SiteShell>
      {/* Hero */}
      <section className="bg-card border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-foreground mb-3">Employee Sign Up for Boost Hub Club</h1>
          <p className="text-xl text-text-body max-w-2xl mx-auto">
            Join your team and get more from your benefits, with recognition for your wins along the way.
          </p>
        </div>
      </section>

      {step < 3 && <Stepper step={step} />}

      {/* Form Area */}
      <section className="max-w-2xl mx-auto px-4 py-10 pb-20">
        <div className="bg-card rounded-2xl shadow-xl border border-border p-8 md:p-12">

          {/* STEP 1: Company ID */}
          {step === 1 && (
            <form onSubmit={(e) => {
              e.preventDefault();
              const VALID_IDS = ['1234'];
              if (!VALID_IDS.includes(formData.companyId.trim())) {
                setCompanyIdError('Company ID not found. Please check with your employer or HR team.');
                return;
              }
              setCompanyIdError('');
              nextStep();
            }} className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-1">Enter your Company ID</h2>
                <p className="text-text-body text-sm">Step 1 of 2 — Your employer provides this ID to get you started</p>
              </div>

              <div>
                <label htmlFor="companyId" className={labelClass}>Company ID *</label>
                <div className="relative">
                  <Hash className="absolute left-3 top-3.5 h-5 w-5 text-text-muted" />
                  <input
                    id="companyId"
                    type="text"
                    name="companyId"
                    required
                    value={formData.companyId}
                    onChange={(e) => {
                      handleChange(e);
                      setCompanyIdError('');
                    }}
                    className={`${inputIconClass} text-lg ${companyIdError ? 'border-red-400' : ''}`}
                    placeholder="e.g. 1234"
                  />
                </div>
                {companyIdError && (
                  <p role="alert" className="text-red-400 text-sm mt-2 font-medium">{companyIdError}</p>
                )}
                <p className="text-xs text-text-muted mt-2">
                  Your Company ID was provided by your employer or HR team. Contact your manager if you don&apos;t have one.
                </p>
              </div>

              <button type="submit" className={`w-full py-4 text-lg flex items-center justify-center gap-2 ${primaryButtonClass}`}>
                Continue <ChevronRight className="w-5 h-5" />
              </button>
            </form>
          )}

          {/* STEP 2: Details + Consent */}
          {step === 2 && (
            <SignupStep2
              formData={formData}
              phoneError={phoneError}
              onChange={handleChange}
              onSubmit={handleSubmit}
              onBack={prevStep}
            />
          )}

          {/* STEP 3: Confirmation */}
          {step === 3 && (
            <Confirmation firstName={formData.firstName} companyId={formData.companyId} email={formData.email} />
          )}

        </div>
      </section>
    </SiteShell>
  );
}
