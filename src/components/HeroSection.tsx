'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';

const SlashDecor = () => (
    <span className="text-[#E31C25] font-black mr-2 select-none">{'// '}</span>
);

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    const containerVariants: Variants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
    };
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } },
    };

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            id="hero"
        >
            {/* Background */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 bg-gradient-to-br from-[#1D1D1B] via-[#111111] to-[#0a0a0a]"
            >
                {/* Subtle radial glow accent */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Radial glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#E31C25]/5 blur-3xl" />
                </div>
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ opacity }}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 pt-24 lg:pt-0 text-center"
            >
                {/* Small label */}
                <motion.div variants={itemVariants} className="mb-6">
                    <span
                        className="inline-flex items-center gap-2 text-[#E31C25] text-xs tracking-[0.4em] uppercase border border-[#E31C25]/40 px-4 py-2 rounded-sm bg-black/20 backdrop-blur-sm"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        <span className="w-4 h-px bg-[#E31C25]" />
                        Rodinný autoservis
                        <span className="w-4 h-px bg-[#E31C25]" />
                    </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    variants={itemVariants}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 tracking-tight"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                    RODINNÉ HODNOTY.{' '}
                    <span className="block text-[#E31C25]">PRÉMIOVÁ</span>
                    PRECÍZNOSŤ.
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    variants={itemVariants}
                    className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
                    style={{ fontFamily: 'var(--font-inter)' }}
                >
                    Poctivá starostlivosť o vozidlá všetkých značiek a modelov.
                    Zažite rozdiel v dôveryhodnom rodinnom servise.
                </motion.p>

                {/* CTAs */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/nacenenie"
                        className="group relative inline-flex items-center justify-center gap-3 bg-[#E31C25] hover:bg-[#c0151d] text-white font-bold px-8 py-4 text-sm tracking-widest uppercase rounded-sm transition-all duration-300 hover:shadow-xl hover:shadow-[#E31C25]/40 hover:-translate-y-1 overflow-hidden"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        <span className="relative z-10">OBJEDNAŤ SA</span>
                        <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        <span className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-300 skew-x-12" />
                    </Link>
                    <Link
                        href="#sluzby"
                        className="inline-flex items-center justify-center gap-3 border border-white/30 hover:border-[#E31C25] text-white hover:text-[#E31C25] font-semibold px-8 py-4 text-sm tracking-widest uppercase rounded-sm transition-all duration-300"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        <SlashDecor />
                        NAŠE SLUŽBY
                    </Link>
                </motion.div>

                {/* Stats row */}
                <motion.div
                    variants={itemVariants}
                    className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
                >
                    {[
                        { value: '10+', label: 'rokov skúseností' },
                        { value: '5.0 ★', label: 'Google hodnotenie' },
                        { value: '100%', label: 'férové ceny vopred' },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center bg-white/5 border border-white/10 rounded-sm p-4 backdrop-blur-sm">
                            <div
                                className="text-xl sm:text-2xl font-black text-[#E31C25]"
                                style={{ fontFamily: 'var(--font-montserrat)' }}
                            >
                                {stat.value}
                            </div>
                            <div
                                className="text-xs text-white/70 mt-1 tracking-wide uppercase"
                                style={{ fontFamily: 'var(--font-inter)' }}
                            >
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-white/40 text-xs tracking-widest uppercase" style={{ fontFamily: 'var(--font-inter)' }}>
                    Scrollujte
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                    className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
                />
            </motion.div>
        </section>
    );
}
