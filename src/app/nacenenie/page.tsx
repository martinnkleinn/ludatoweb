'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const servicesOptions = [
    'Diagnostika vozidla',
    'Kontrola pred STK + EK',
    'Sprostredkovanie STK + EK',
    'Olejový servis (výmena oleja + filtre)',
    'Výmena bŕzd + odvzdušnenie',
    'Geometria',
    'Kompletné prezutie kolies',
    'Preváženie a prehodenie kolies na disku',
    'Oprava podvozku',
    'Výmena náplne prevodovky',
    'Ozónová dezinfekcia interiéru',
    'Tepovanie',
    'Čistenie interiéru + vysávanie',
    'Výmena batérie',
    'Pickup / odťah vozidla',
    'Iné (špecifikujte v správe)',
];

export default function QuotePage() {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    const [formState, setFormState] = useState({
        services: [] as string[],
        bringOwnMaterial: 'Nie',
        otherDetails: '',
        name: '',
        email: '',
        phone: '',
    });

    const toggleService = (service: string) => {
        setFormState((prev) => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter((s) => s !== service)
                : [...prev.services, service],
        }));
    };

    const handleNext = () => setStep(2);
    const handleBack = () => setStep(1);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        const selectedServices = formState.services.join(', ');
        const fullMessage = `
Vybrané služby: ${selectedServices || 'Žiadne'}
Vlastný materiál: ${formState.bringOwnMaterial}
Doplňujúce info: ${formState.otherDetails || 'Žiadne'}
        `.trim();

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    subject: `Nová žiadosť o cenovú ponuku od ${formState.name} — LUDATO Cars Services`,
                    name: formState.name,
                    email: formState.email,
                    phone: formState.phone,
                    message: fullMessage,
                }),
            });
            const result = await response.json();
            if (result.success) {
                setIsSuccess(true);
            } else {
                setError('Nastala chyba. Skúste to prosím znova.');
            }
        } catch {
            setError('Nastala chyba. Skúste to prosím znova.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClass =
        'w-full bg-white/5 border border-white/10 hover:border-[#E31C25]/40 focus:border-[#E31C25] focus:outline-none text-white placeholder-white/30 px-4 py-3 rounded-sm text-sm transition-colors duration-300';
    const labelClass = 'block text-white/60 text-xs tracking-widest uppercase mb-2';

    return (
        <div className="min-h-screen bg-[#111111] pt-20 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex flex-col items-center justify-center">
            <Navbar />

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#E31C25]/5 to-transparent mix-blend-screen pointer-events-none" />
            <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#E31C25]/5 rounded-full blur-3xl pointer-events-none" />

            {/* Back link */}
            <div className="w-full max-w-3xl mb-8 relative z-10">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-white/40 hover:text-[#E31C25] text-xs tracking-widest uppercase transition-colors"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                    Späť na hlavnú stránku
                </Link>
            </div>

            <div className="bg-[#1D1D1B] border border-white/10 p-8 sm:p-12 w-full max-w-3xl relative z-10 rounded-sm shadow-2xl">

                {/* Header */}
                <div className="mb-10 text-center">
                    <p
                        className="text-[#E31C25] text-xs tracking-[0.4em] uppercase mb-4 font-semibold"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        <span className="font-black">//</span> Nezáväzná kalkulácia a rezervácia
                    </p>
                    <h1
                        className="text-3xl sm:text-4xl font-black text-white"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        OBJEDNAŤ <span className="text-[#E31C25]">SA</span>
                    </h1>
                </div>

                {/* Progress bar */}
                {!isSuccess && (
                    <div className="mb-10 flex gap-2 max-w-xs mx-auto">
                        <div className={`h-1 flex-1 rounded-full transition-colors duration-500 ${step >= 1 ? 'bg-[#E31C25]' : 'bg-white/10'}`} />
                        <div className={`h-1 flex-1 rounded-full transition-colors duration-500 ${step >= 2 ? 'bg-[#E31C25]' : 'bg-white/10'}`} />
                    </div>
                )}

                <AnimatePresence mode="wait">
                    {isSuccess ? (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-10"
                        >
                            <div className="w-20 h-20 rounded-full bg-[#E31C25] flex items-center justify-center mb-6 shadow-lg shadow-[#E31C25]/40 mx-auto">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3
                                className="text-3xl font-black text-white mb-3"
                                style={{ fontFamily: 'var(--font-montserrat)' }}
                            >
                                Ďakujeme!
                            </h3>
                            <p
                                className="text-white/60 text-base mb-6"
                                style={{ fontFamily: 'var(--font-inter)' }}
                            >
                                Vaša žiadosť o objednávku bola prijatá. Čoskoro sa vám ozveme na potvrdenie a nacenenie.
                            </p>
                            <Link
                                href="/"
                                className="inline-block border border-white/20 hover:border-[#E31C25] text-white hover:text-[#E31C25] font-semibold px-8 py-4 text-sm tracking-widest uppercase rounded-sm transition-all duration-300"
                                style={{ fontFamily: 'var(--font-montserrat)' }}
                            >
                                Návrat na domovskú stránku
                            </Link>
                        </motion.div>
                    ) : (
                        <motion.form
                            key={step}
                            initial={{ opacity: 0, x: step === 1 ? -20 : 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: step === 1 ? 20 : -20 }}
                            transition={{ duration: 0.3 }}
                            onSubmit={step === 2 ? handleSubmit : (e) => e.preventDefault()}
                        >
                            {step === 1 && (
                                <div className="space-y-6">
                                    <h2 className="text-xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-montserrat)' }}>Krok 1: O aké služby máte záujem?</h2>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ fontFamily: 'var(--font-inter)' }}>
                                        {servicesOptions.map((service) => {
                                            const isSelected = formState.services.includes(service);
                                            return (
                                                <button
                                                    type="button"
                                                    key={service}
                                                    onClick={() => toggleService(service)}
                                                    className={`text-left p-4 rounded-sm border transition-all duration-200 flex items-start gap-4 ${isSelected
                                                        ? 'border-[#E31C25] bg-[#E31C25]/10'
                                                        : 'border-white/10 bg-white/5 hover:border-white/30'
                                                        }`}
                                                >
                                                    <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-sm border flex items-center justify-center transition-colors ${isSelected ? 'border-[#E31C25] bg-[#E31C25]' : 'border-white/30'
                                                        }`}>
                                                        {isSelected && (
                                                            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                        )}
                                                    </div>
                                                    <span className={`text-sm ${isSelected ? 'text-white' : 'text-white/70'}`}>
                                                        {service}
                                                    </span>
                                                </button>
                                            );
                                        })}
                                    </div>

                                    <div className="pt-2">
                                        <label className={labelClass} style={{ fontFamily: 'var(--font-montserrat)' }}>
                                            Prinesiete si vlastný materiál? (náhradné diely, olej a pod.) *
                                        </label>
                                        <div className="flex gap-4">
                                            <button
                                                type="button"
                                                onClick={() => setFormState(prev => ({ ...prev, bringOwnMaterial: 'Áno' }))}
                                                className={`flex-1 py-3 px-4 rounded-sm border transition-all duration-200 text-sm ${formState.bringOwnMaterial === 'Áno'
                                                        ? 'border-[#E31C25] bg-[#E31C25]/10 text-white font-medium'
                                                        : 'border-white/10 bg-white/5 hover:border-white/30 text-white/70'
                                                    }`}
                                                style={{ fontFamily: 'var(--font-inter)' }}
                                            >
                                                Áno, prinesiem
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setFormState(prev => ({ ...prev, bringOwnMaterial: 'Nie' }))}
                                                className={`flex-1 py-3 px-4 rounded-sm border transition-all duration-200 text-sm ${formState.bringOwnMaterial === 'Nie'
                                                        ? 'border-[#E31C25] bg-[#E31C25]/10 text-white font-medium'
                                                        : 'border-white/10 bg-white/5 hover:border-white/30 text-white/70'
                                                    }`}
                                                style={{ fontFamily: 'var(--font-inter)' }}
                                            >
                                                Nie, chcem od vás
                                            </button>
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <label className={labelClass} style={{ fontFamily: 'var(--font-montserrat)' }}>
                                            Viac informácií k Vášmu problému (voliteľné)
                                        </label>
                                        <textarea
                                            value={formState.otherDetails}
                                            onChange={(e) => setFormState(prev => ({ ...prev, otherDetails: e.target.value }))}
                                            placeholder="Popíšte bližšie závadu alebo špeciálnu požiadavku..."
                                            rows={3}
                                            className={`${inputClass} resize-none`}
                                            style={{ fontFamily: 'var(--font-inter)' }}
                                        />
                                    </div>

                                    <div className="pt-6 flex justify-end">
                                        <button
                                            type="button"
                                            onClick={handleNext}
                                            disabled={formState.services.length === 0 && !formState.otherDetails.trim()}
                                            className="bg-[#E31C25] hover:bg-[#c0151d] disabled:opacity-50 disabled:hover:bg-[#E31C25] text-white font-bold px-8 py-4 text-sm tracking-widest uppercase rounded-sm transition-all duration-300 shadow-lg shadow-[#E31C25]/20 group overflow-hidden relative"
                                            style={{ fontFamily: 'var(--font-montserrat)' }}
                                        >
                                            <span className="relative z-10 flex items-center gap-2">
                                                Ďalej k údajom
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </span>
                                            <span className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-300 skew-x-12" />
                                        </button>
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-6">
                                    <h2 className="text-xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-montserrat)' }}>Krok 2: Vaše kontaktné údaje</h2>

                                    <div>
                                        <label className={labelClass} style={{ fontFamily: 'var(--font-montserrat)' }}>
                                            Meno a Priezvisko / Názov spoločnosti a IČO *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formState.name}
                                            onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                                            placeholder="Ján Novák alebo Firma s.r.o. + IČO"
                                            className={inputClass}
                                            style={{ fontFamily: 'var(--font-inter)' }}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className={labelClass} style={{ fontFamily: 'var(--font-montserrat)' }}>
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                value={formState.email}
                                                onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                                                placeholder="vas@email.sk"
                                                className={inputClass}
                                                style={{ fontFamily: 'var(--font-inter)' }}
                                            />
                                        </div>
                                        <div>
                                            <label className={labelClass} style={{ fontFamily: 'var(--font-montserrat)' }}>
                                                Telefónne číslo *
                                            </label>
                                            <input
                                                type="tel"
                                                required
                                                value={formState.phone}
                                                onChange={(e) => setFormState(prev => ({ ...prev, phone: e.target.value }))}
                                                placeholder="+421 9XX XXX XXX"
                                                className={inputClass}
                                                style={{ fontFamily: 'var(--font-inter)' }}
                                            />
                                        </div>
                                    </div>

                                    {error && <p className="text-[#E31C25] text-sm text-center pt-2" style={{ fontFamily: 'var(--font-inter)' }}>{error}</p>}

                                    <div className="pt-6 flex justify-between items-center">
                                        <button
                                            type="button"
                                            onClick={handleBack}
                                            className="text-white/60 hover:text-white text-sm font-semibold tracking-widest uppercase transition-colors"
                                            style={{ fontFamily: 'var(--font-montserrat)' }}
                                        >
                                            Naspäť
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="bg-[#E31C25] hover:bg-[#c0151d] disabled:opacity-60 text-white font-bold px-8 py-4 text-sm tracking-widest uppercase rounded-sm transition-all duration-300 shadow-lg shadow-[#E31C25]/20 group overflow-hidden relative"
                                            style={{ fontFamily: 'var(--font-montserrat)' }}
                                        >
                                            <span className="relative z-10 flex items-center gap-2">
                                                {isSubmitting ? 'Odosiela sa...' : 'Objednať sa'}
                                                {!isSubmitting && (
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                )}
                                            </span>
                                            <span className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-300 skew-x-12" />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </motion.form>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
