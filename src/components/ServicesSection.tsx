'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
            </svg>
        ),
        title: 'DIAGNOSTIKA A OPRAVY',
        description:
            'Spoľahlivá počítačová diagnostika všetkých systémov vozidla. Presná identifikácia závad a poctivý prístup pri hľadaní riešenia bez zbytočných výmien.',
        detail: 'OBD II • ESP • ABS • Airbag',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            </svg>
        ),
        title: 'SERVISNÉ PREHLIADKY',
        description:
            'Kompletné STK-prípravné prehliadky a pravidelný servis podľa servisných intervalov výrobcu. Váš voz vždy v perfektnom stave.',
        detail: 'Olej • Filter • Brzdová kvapalina',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                <circle cx="12" cy="12" r="10" strokeLinecap="round" />
                <circle cx="12" cy="12" r="3" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v3M12 19v3M2 12h3M19 12h3" />
            </svg>
        ),
        title: 'OPRAVA BŔZD A PODVOZKOV',
        description:
            'Výmena brzdových platničiek, kotúčov a hydrauliky. Geometria, tlmiče, ramená — kompletná starostlivosť o podvozok vašeho vozidla.',
        detail: 'Geometria • Tlmiče • Ramená',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75V21m0 0l3-3m-3 3l-3-3M15 3.75v3m0 3v3" />
            </svg>
        ),
        title: 'SERVIS KLIMATIZÁCIE',
        description:
            'Dopĺňanie chladiva, čistenie a dezinfekcia systémov klimatizácie. Certifikovaný servis pre príjemné cestovanie počas celého roka.',
        detail: 'R134a • R1234yf • Dezinfekcia',
    },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
            whileHover={{
                y: -8,
                boxShadow: '0 20px 60px rgba(227, 28, 37, 0.35)',
                borderColor: 'rgba(227, 28, 37, 0.7)',
            }}
            className="group relative bg-[#1D1D1B] border border-white/10 rounded-sm p-8 cursor-default transition-colors duration-300 hover:bg-[#242422] overflow-hidden"
        >
            {/* Top left slash accent */}
            <div className="absolute top-0 left-0 w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-3 left-3 w-px h-6 bg-[#E31C25] rotate-[20deg]" />
                <div className="absolute top-3 left-5 w-px h-6 bg-[#E31C25] rotate-[20deg]" />
            </div>

            {/* Background number */}
            <div
                className="absolute -top-4 -right-2 text-8xl font-black text-white/4 select-none pointer-events-none"
                style={{ fontFamily: 'var(--font-montserrat)' }}
            >
                0{index + 1}
            </div>

            {/* Icon */}
            <div className="text-[#E31C25] mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
            </div>

            {/* Title */}
            <h3
                className="font-black text-white text-lg mb-3 tracking-wider group-hover:text-[#E31C25] transition-colors duration-300"
                style={{ fontFamily: 'var(--font-montserrat)' }}
            >
                <span className="text-[#E31C25] mr-1">//</span>
                {service.title}
            </h3>

            {/* Description */}
            <p
                className="text-white/60 text-sm leading-relaxed mb-4"
                style={{ fontFamily: 'var(--font-inter)' }}
            >
                {service.description}
            </p>

            {/* Tags */}
            <div
                className="text-[#E31C25]/70 text-xs tracking-widest uppercase font-medium border-t border-white/10 pt-4"
                style={{ fontFamily: 'var(--font-montserrat)' }}
            >
                {service.detail}
            </div>

            {/* Bottom red glow line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E31C25] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
    );
}

function SectionHeader({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    );
}

export { SectionHeader };

export default function ServicesSection() {
    return (
        <section id="sluzby" className="bg-[#111111] py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <SectionHeader>
                    <div className="text-center mb-16">
                        <p
                            className="text-[#E31C25] text-xs tracking-[0.4em] uppercase mb-4"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            <span className="text-[#E31C25] font-black">//</span> Čo robíme najlepšie
                        </p>
                        <h2
                            className="text-4xl md:text-5xl font-black text-white mb-4"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            NAŠE <span className="text-[#E31C25]">SLUŽBY</span>
                        </h2>
                        <p
                            className="text-white/50 max-w-xl mx-auto text-base"
                            style={{ fontFamily: 'var(--font-inter)' }}
                        >
                            Od rýchlej diagnostiky po komplexné opravy — poskytujeme plnú
                            paletu autoservisných služieb pod jednou strechou.
                        </p>
                    </div>
                </SectionHeader>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, i) => (
                        <ServiceCard key={service.title} service={service} index={i} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center mt-14"
                >
                    <a
                        href="#kontakt"
                        className="inline-flex items-center gap-3 text-white/70 hover:text-[#E31C25] text-sm font-semibold tracking-widest uppercase transition-colors duration-300 group"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        <span className="w-8 h-px bg-current group-hover:w-12 transition-all duration-300" />
                        Objednajte sa na servis
                        <span className="w-8 h-px bg-current group-hover:w-12 transition-all duration-300" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
