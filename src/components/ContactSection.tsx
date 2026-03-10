'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    access_key: '292d33ad-231c-4144-8e3b-82777081352a',
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                    subject: `Nová správa od ${formData.name} — LUDATO Cars Services`,
                }),
            });
            const result = await response.json();
            if (result.success) {
                setIsSuccess(true);
                setFormData({ name: '', email: '', phone: '', message: '' });
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

    return (
        <section id="kontakt" className="bg-[#111111] py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, x: -60 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <p
                        className="text-[#E31C25] text-xs tracking-[0.4em] uppercase mb-4 font-semibold"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        <span className="font-black">//</span> Sme tu pre vás
                    </p>
                    <h2
                        className="text-4xl md:text-5xl font-black text-white mb-4"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        KONTAKTUJTE <span className="text-[#E31C25]">NÁS</span>
                    </h2>
                    <p
                        className="text-white/50 max-w-lg mx-auto"
                        style={{ fontFamily: 'var(--font-inter)' }}
                    >
                        Napíšte nám správu alebo si dohodte termín. Ozveme sa vám do 24 hodín.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <AnimatePresence mode="wait">
                            {isSuccess ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5, type: 'spring', bounce: 0.35 }}
                                    className="flex flex-col items-center justify-center h-full min-h-[400px] text-center"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.2, type: 'spring', bounce: 0.5 }}
                                        className="w-20 h-20 rounded-full bg-[#E31C25] flex items-center justify-center mb-6 shadow-lg shadow-[#E31C25]/40"
                                    >
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <motion.path
                                                initial={{ pathLength: 0 }}
                                                animate={{ pathLength: 1 }}
                                                transition={{ delay: 0.4, duration: 0.6 }}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2.5}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </motion.div>
                                    <motion.h3
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="text-3xl font-black text-white mb-3"
                                        style={{ fontFamily: 'var(--font-montserrat)' }}
                                    >
                                        Ďakujeme!
                                    </motion.h3>
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 }}
                                        className="text-white/60 text-base mb-2"
                                        style={{ fontFamily: 'var(--font-inter)' }}
                                    >
                                        Vaša správa bola odoslaná.
                                    </motion.p>
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.8 }}
                                        className="text-xl text-[#E31C25]"
                                        style={{ fontFamily: 'var(--font-dancing)' }}
                                    >
                                        Ozveme sa vám čoskoro!
                                    </motion.p>
                                    <motion.button
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1 }}
                                        onClick={() => setIsSuccess(false)}
                                        className="mt-8 text-white/40 hover:text-white text-sm underline transition-colors"
                                        style={{ fontFamily: 'var(--font-inter)' }}
                                    >
                                        Odoslať ďalšiu správu
                                    </motion.button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    onSubmit={handleSubmit}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="space-y-4"
                                    style={{ fontFamily: 'var(--font-inter)' }}
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-white/60 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>
                                                Meno *
                                            </label>
                                            <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Vaše meno" className={inputClass} />
                                        </div>
                                        <div>
                                            <label className="block text-white/60 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>
                                                Telefón
                                            </label>
                                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+421 9XX XXX XXX" className={inputClass} />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-white/60 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>
                                            Email *
                                        </label>
                                        <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="vas@email.sk" className={inputClass} />
                                    </div>
                                    <div>
                                        <label className="block text-white/60 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>
                                            Správa *
                                        </label>
                                        <textarea name="message" required rows={5} value={formData.message} onChange={handleChange} placeholder="Opíšte váš problém alebo otázku..." className={`${inputClass} resize-none`} />
                                    </div>
                                    {error && <p className="text-[#E31C25] text-sm">{error}</p>}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-[#E31C25] hover:bg-[#c0151d] disabled:opacity-60 text-white font-black py-4 rounded-sm tracking-widest uppercase text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#E31C25]/40 hover:-translate-y-0.5 group relative overflow-hidden"
                                        style={{ fontFamily: 'var(--font-montserrat)' }}
                                    >
                                        <span className="relative z-10">{isSubmitting ? 'Odosiela sa...' : 'ODOSLAŤ SPRÁVU'}</span>
                                        <span className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-300 skew-x-12" />
                                    </button>
                                    <p className="text-white/30 text-xs text-center" style={{ fontFamily: 'var(--font-inter)' }}>
                                        * Povinné polia. Vaše údaje sú v bezpečí.
                                    </p>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Map & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="space-y-6"
                    >
                        {/* Contact info pills */}
                        <div className="grid grid-cols-1 gap-3">
                            {[
                                {
                                    icon: (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    ),
                                    label: 'Adresa servisu',
                                    value: 'Kadnárova 3, 831 54 Bratislava – Rača',
                                },
                                {
                                    icon: (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    ),
                                    label: 'Telefón',
                                    value: '+421 944 236 257',
                                    href: 'tel:+421944236257',
                                },
                                {
                                    icon: (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    ),
                                    label: 'Otváracie hodiny',
                                    value: 'Po–Štvrtok 9:00–16:00 | Piatok 7:00–14:00 | Obedová prestávka 12:00–13:00',
                                },
                            ].map((item) => (
                                <div key={item.label} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-sm p-4">
                                    <div className="text-[#E31C25] flex-shrink-0 mt-0.5">{item.icon}</div>
                                    <div>
                                        <div className="text-white/40 text-xs uppercase tracking-widest mb-0.5" style={{ fontFamily: 'var(--font-montserrat)' }}>{item.label}</div>
                                        {item.href ? (
                                            <a href={item.href} className="text-white text-sm hover:text-[#E31C25] transition-colors" style={{ fontFamily: 'var(--font-inter)' }}>{item.value}</a>
                                        ) : (
                                            <div className="text-white text-sm" style={{ fontFamily: 'var(--font-inter)' }}>{item.value}</div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Google Map embed — correct location, no fake overlay pin */}
                        <div className="rounded-sm overflow-hidden border border-white/10 h-64">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.763315303278!2d17.1387896!3d48.1958468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8faf19a09f43%3A0xf675723b16b8c3cd!2sLudato%20Family%20Autoservis!5e1!3m2!1sen!2ssk!4v1773136423319!5m2!1sen!2ssk"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(60%) contrast(110%)' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="LUDATO FAMILY Cars Services — Karpatské námestie 10/A, Bratislava"
                            />
                        </div>

                        {/* Direct link */}
                        <a
                            href="https://maps.app.goo.gl/8g5EwkLD8tvobwV39"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[#E31C25] hover:text-white text-sm font-semibold tracking-wide transition-colors duration-300"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Otvoriť v Google Mapách
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
