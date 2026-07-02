'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Dancing_Script } from 'next/font/google';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-dancing',
  display: 'swap',
});

const ShieldIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
);

const WrenchIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.049.58.025 1.194-.14 1.743" />
    </svg>
);

const ChatIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
    </svg>
);

const values = [
    {
        icon: <ShieldIcon />,
        title: 'Dôvera rodiny',
        desc: 'Každé vozidlo ošetrujeme s rovnakou starostlivosťou, ako by to bol náš vlastný automobil.',
    },
    {
        icon: <WrenchIcon />,
        title: 'Odbornosť',
        desc: 'Certifikovaní technici s desaťročiami praxe na vozidlách všetkých európskych aj ázijských značiek.',
    },
    {
        icon: <ChatIcon />,
        title: 'Transparentnosť',
        desc: 'Pred každou opravou vás informujeme o nákladoch. Žiadne skryté poplatky — iba úprimná komunikácia.',
    },
];

const nameBreakdown = [
    { syllable: 'Lu', name: 'cia', color: '#E31C25' },
    { syllable: 'Da', name: 'mian', color: '#E31C25' },
    { syllable: 'To', name: 'máš', color: '#E31C25' },
];

export default function AboutSection() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="o-nas" className={`${dancingScript.variable} bg-white py-24 lg:py-32 overflow-hidden`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Text content */}
                    <div ref={ref}>
                        {/* Section label */}
                        <motion.p
                            initial={{ opacity: 0, x: -40 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6 }}
                            className="text-[#E31C25] text-xs tracking-[0.4em] uppercase mb-4 font-semibold"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            <span className="font-black">//</span> Náš príbeh
                        </motion.p>

                        {/* Heading */}
                        <motion.h2
                            initial={{ opacity: 0, x: -60 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="text-4xl md:text-5xl font-black text-[#1D1D1B] mb-6 leading-tight"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            <span className="text-[#E31C25]">//</span> NAŠA HISTÓRIA,{' '}
                            <span className="block">VAŠA DÔVERA.</span>
                        </motion.h2>

                        {/* Body */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="space-y-4 text-[#1D1D1B]/70 text-base leading-relaxed"
                            style={{ fontFamily: 'var(--font-inter)' }}
                        >
                            <p>
                                LUDATO FAMILY Cars Services je splneným snom jedného mechanika
                                s vášňou pre autá. Názov servisu nesie v sebe to najdôležitejšie
                                — prvé slabiky mien mojej rodiny: <strong>Lu</strong>cia, <strong>Da</strong>mian
                                a <strong>To</strong>máš.
                            </p>
                            <p>
                                Autám rozumiem a prácu na nich beriem osobne. Namiesto veľkých
                                korporátnych fráz a &quot;najmodernejších technológií&quot; tu nájdete
                                úprimnosť, poctivú údržbu a férové ceny. Vždy viete, s kým
                                jednáte a čo presne sa s vaším autom deje.
                            </p>
                            <p>
                                Zakladám si na tom, aby bola oprava spravená poriadne hneď
                                na prvýkrát. Preto ku každému vozidlu pristupujem, akoby bolo moje vlastné.
                            </p>
                        </motion.div>

                        {/* Script accent */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-2xl text-[#E31C25] mt-6"
                            style={{ fontFamily: 'var(--font-dancing)' }}
                        >
                            — Lucia, Damian, Tomáš
                        </motion.p>

                        {/* Values */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4"
                        >
                            {values.map((v) => (
                                <div
                                    key={v.title}
                                    className="border border-[#E31C25]/20 rounded-sm p-4 hover:border-[#E31C25] hover:bg-[#E31C25]/5 transition-all duration-300"
                                >
                                    <div className="text-[#E31C25] mb-2">{v.icon}</div>
                                    <div
                                        className="text-sm font-bold text-[#1D1D1B] mb-1"
                                        style={{ fontFamily: 'var(--font-montserrat)' }}
                                    >
                                        {v.title}
                                    </div>
                                    <div
                                        className="text-xs text-[#1D1D1B]/60 leading-relaxed"
                                        style={{ fontFamily: 'var(--font-inter)' }}
                                    >
                                        {v.desc}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: LUDATO name origin typographic card */}
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.9, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="bg-[#1D1D1B] rounded-sm p-10 lg:p-14 relative overflow-hidden">
                            {/* Subtle corner accent */}
                            <div className="absolute top-0 right-0 w-24 h-24">
                                <div className="absolute top-4 right-4 w-px h-12 bg-[#E31C25]/30" />
                                <div className="absolute top-4 right-4 w-12 h-px bg-[#E31C25]/30" />
                            </div>
                            <div className="absolute bottom-0 left-0 w-24 h-24">
                                <div className="absolute bottom-4 left-4 w-px h-12 bg-[#E31C25]/30" />
                                <div className="absolute bottom-4 left-4 w-12 h-px bg-[#E31C25]/30" />
                            </div>

                            {/* Label */}
                            <p
                                className="text-[#E31C25] text-xs tracking-[0.4em] uppercase mb-10 font-semibold"
                                style={{ fontFamily: 'var(--font-montserrat)' }}
                            >
                                <span className="font-black">//</span> Prečo LUDATO
                            </p>

                            {/* Name breakdown */}
                            <div className="space-y-8">
                                {nameBreakdown.map((item, i) => (
                                    <motion.div
                                        key={item.syllable}
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                                        className="flex items-baseline gap-3"
                                    >
                                        <span
                                            className="text-5xl lg:text-6xl font-black text-[#E31C25] leading-none"
                                            style={{ fontFamily: 'var(--font-montserrat)' }}
                                        >
                                            {item.syllable}
                                        </span>
                                        <span
                                            className="text-2xl lg:text-3xl font-light text-white/40 leading-none"
                                            style={{ fontFamily: 'var(--font-inter)' }}
                                        >
                                            {item.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Divider */}
                            <div className="mt-10 mb-8 h-px bg-gradient-to-r from-[#E31C25]/40 via-[#E31C25]/20 to-transparent" />

                            {/* Resulting word */}
                            <div className="flex items-center gap-4">
                                <span
                                    className="text-3xl lg:text-4xl font-black text-white tracking-wider"
                                    style={{ fontFamily: 'var(--font-montserrat)' }}
                                >
                                    LUDATO
                                </span>
                                <span
                                    className="text-sm text-white/40 leading-snug"
                                    style={{ fontFamily: 'var(--font-inter)' }}
                                >
                                    Family Cars Services
                                </span>
                            </div>

                            {/* Subtle quote */}
                            <p
                                className="mt-8 text-white/30 text-sm leading-relaxed italic"
                                style={{ fontFamily: 'var(--font-inter)' }}
                            >
                                &ldquo;Rodina je to, čo nás ženie vpred — a preto nesie aj náš servis ich mená.&rdquo;
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
