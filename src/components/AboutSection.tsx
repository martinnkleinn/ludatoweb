'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const values = [
    {
        icon: '🛡️',
        title: 'Dôvera rodiny',
        desc: 'Každé vozidlo ošetrujeme s rovnakou starostlivosťou, ako by to bol náš vlastný automobil.',
    },
    {
        icon: '🔧',
        title: 'Odbornosť',
        desc: 'Certifikovaní technici s desaťročiami praxe na vozidlách všetkých európskych aj ázijských značiek.',
    },
    {
        icon: '💬',
        title: 'Transparentnosť',
        desc: 'Pred každou opravou vás informujeme o nákladoch. Žiadne skryté poplatky — iba úprimná komunikácia.',
    },
];

export default function AboutSection() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="o-nas" className="bg-white py-24 lg:py-32 overflow-hidden">
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
                                korporátnych fráz a "najmodernejších technológií" tu nájdete
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
                                    <div className="text-2xl mb-2">{v.icon}</div>
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

                    {/* Right: Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.9, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Main shield graphic */}
                        <div className="relative flex items-center justify-center">
                            {/* Outer ring decorations */}
                            <div className="absolute w-80 h-80 rounded-full border-2 border-[#E31C25]/20 animate-[spin_30s_linear_infinite]">
                                <div className="absolute top-0 left-1/2 w-2 h-2 bg-[#E31C25] rounded-full -translate-x-1/2 -translate-y-1" />
                                <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-[#E31C25] rounded-full -translate-x-1/2 translate-y-1" />
                            </div>
                            <div className="absolute w-64 h-64 rounded-full border border-[#E31C25]/10 animate-[spin_20s_linear_infinite_reverse]" />

                            {/* Shield shape */}
                            <div className="relative w-56 h-64 flex flex-col items-center justify-center">
                                {/* Shield SVG */}
                                <svg viewBox="0 0 200 240" className="w-full h-full" fill="none">
                                    <path
                                        d="M100 5 L195 35 L195 130 Q195 200 100 235 Q5 200 5 130 L5 35 Z"
                                        fill="#1D1D1B"
                                        stroke="#E31C25"
                                        strokeWidth="3"
                                    />
                                    <path
                                        d="M100 20 L180 45 L180 130 Q180 190 100 220 Q20 190 20 130 L20 45 Z"
                                        fill="none"
                                        stroke="#E31C25"
                                        strokeWidth="1.5"
                                        strokeDasharray="4 4"
                                        opacity="0.5"
                                    />
                                    {/* Double slash inside */}
                                    <text
                                        x="100"
                                        y="130"
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                        fill="#E31C25"
                                        fontSize="56"
                                        fontWeight="900"
                                        fontFamily="Montserrat, sans-serif"
                                    >
                    //
                                    </text>
                                    {/* Tagline */}
                                    <text
                                        x="100"
                                        y="175"
                                        textAnchor="middle"
                                        fill="rgba(255,255,255,0.4)"
                                        fontSize="10"
                                        fontFamily="Montserrat, sans-serif"
                                        letterSpacing="2"
                                    >
                                        PREMIUM
                                    </text>
                                </svg>
                            </div>
                        </div>

                        {/* Floating stat cards */}
                        <motion.div
                            animate={{ y: [-6, 6, -6] }}
                            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                            className="absolute -top-4 -right-4 bg-[#E31C25] text-white px-4 py-3 rounded-sm shadow-xl"
                        >
                            <div className="text-xl font-black" style={{ fontFamily: 'var(--font-montserrat)' }}>100%</div>
                            <div className="text-xs opacity-80" style={{ fontFamily: 'var(--font-inter)' }}>Transparentnosť</div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [6, -6, 6] }}
                            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                            className="absolute -bottom-4 -left-4 bg-[#1D1D1B] border border-[#E31C25]/30 text-white px-4 py-3 rounded-sm shadow-xl"
                        >
                            <div className="text-xl font-black text-[#E31C25]" style={{ fontFamily: 'var(--font-montserrat)' }}>Poctivá</div>
                            <div className="text-xs opacity-60" style={{ fontFamily: 'var(--font-inter)' }}>Práca</div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
