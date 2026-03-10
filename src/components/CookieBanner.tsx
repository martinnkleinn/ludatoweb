'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if the user has already made a choice
        const consent = localStorage.getItem('ludato_cookie_consent');
        if (!consent) {
            // Small delay before showing so it doesn't jarringly pop up on load instantly
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('ludato_cookie_consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('ludato_cookie_consent', 'declined');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 150, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 150, opacity: 0 }}
                    transition={{ duration: 0.6, type: 'spring', bounce: 0.3 }}
                    className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6 pointer-events-none"
                >
                    <div className="max-w-7xl mx-auto pointer-events-auto">
                        <div className="bg-[#1D1D1B] border border-white/10 shadow-2xl p-6 sm:p-8 rounded-sm relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-12 backdrop-blur-md">

                            {/* Decorative side accent */}
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#E31C25]" />

                            {/* Text content */}
                            <div className="flex-1">
                                <h3
                                    className="text-white font-bold text-lg mb-2 flex items-center gap-2"
                                    style={{ fontFamily: 'var(--font-montserrat)' }}
                                >
                                    <span className="text-[#E31C25]">//</span> Súbory cookies
                                </h3>
                                <p
                                    className="text-white/60 text-sm leading-relaxed"
                                    style={{ fontFamily: 'var(--font-inter)' }}
                                >
                                    Tato stránka používa súbory cookies pre zabezpečenie základných funkcií
                                    (ako je napríklad Google Mapa) a analýzu návštevnosti. Rešpektujeme
                                    vaše súkromie — môžete nastavenia prijať alebo odmietnuť.
                                </p>
                            </div>

                            {/* Action buttons */}
                            <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3 shrink-0">
                                <button
                                    onClick={handleDecline}
                                    className="px-6 py-3 border border-white/10 hover:bg-white/5 text-white/70 hover:text-white text-xs font-bold tracking-widest uppercase transition-colors rounded-sm text-center"
                                    style={{ fontFamily: 'var(--font-montserrat)' }}
                                >
                                    Odmietnuť
                                </button>
                                <button
                                    onClick={handleAccept}
                                    className="px-6 py-3 bg-[#E31C25] hover:bg-[#c0151d] text-white text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:shadow-lg hover:shadow-[#E31C25]/40 rounded-sm text-center relative overflow-hidden group"
                                    style={{ fontFamily: 'var(--font-montserrat)' }}
                                >
                                    <span className="relative z-10">Súhlasím</span>
                                    <span className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-300 skew-x-12" />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
